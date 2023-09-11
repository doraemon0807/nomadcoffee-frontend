import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { logInUser } from "../apollo";
import AuthLayout from "./components/auth/AuthLayout";
import Button from "./components/shared/Button";
import PageTitle from "./components/shared/PageTitle";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { AuthForm } from "./components/auth/AuthForm";
import { FormError, FormInput } from "./components/shared/sharedStyles";
import { gql } from "../__generated__";
import { LoginMutation } from "../__generated__/graphql";
import AuthBottomBox from "./components/auth/AuthBottomBox";
import routes from "../routes";
import { useLocation } from "react-router-dom";

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
`;

const Form = styled(AuthForm)``;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const MutationError = styled(FormError)`
  text-align: center;
`;

interface ILoginForm {
  username: string;
  password: string;
  loginError?: string;
}

const LOGIN_MUTATION = gql(`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ok
    error
    token
  }
}
`);

export default function Login() {
  const location = useLocation();

  const [stateMessage, setStateMessage] = useState("");

  useEffect(() => {
    if (location?.state?.message) {
      setStateMessage(location.state.message);
    }
  }, []);

  const {
    handleSubmit,
    register,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: "onSubmit",
    defaultValues: {
      username: location?.state?.username || "",
      password: location?.state?.password || "",
    },
  });

  const onCompleted = ({ login: { ok, error, token } }: LoginMutation) => {
    if (!ok && error) {
      return setError("loginError", {
        message: error,
      });
    }
    if (token) {
      logInUser(token);
    }
  };

  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });

  const onValid = () => {
    setStateMessage("");
    if (loading) {
      return;
    }
    const { username, password } = getValues();
    loginMutation({
      variables: {
        username,
        password,
      },
    });
  };

  const clearLoginMessage = () => {
    clearErrors("loginError");
  };

  return (
    <AuthLayout>
      <PageTitle title={"Login"} />
      <Title>Welcome to Nomad Coffee</Title>

      <MutationError>{stateMessage}</MutationError>
      <MutationError>{errors.loginError?.message} </MutationError>

      <Form onSubmit={handleSubmit(onValid)} onChange={clearLoginMessage}>
        <FormInput
          {...register("username", {
            required: "This input is required.",
            minLength: {
              value: 2,
              message: "Must be longer than 2 letteres.",
            },
          })}
          type="text"
          placeholder="Username"
        />
        {errors.username?.message && (
          <FormError>{errors.username.message}</FormError>
        )}
        <FormInput
          {...register("password", {
            required: "This input is required.",
            minLength: {
              value: 2,
              message: "Must be longer than 2 letteres.",
            },
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password?.message && (
          <FormError>{errors.password.message}</FormError>
        )}
        <ButtonContainer>
          <Button>{loading ? "Loading..." : "Login"}</Button>
        </ButtonContainer>
      </Form>
      <AuthBottomBox
        cta={"Don't have an account?"}
        route={routes.signUp}
        linkMessage={"Sign Up"}
      />
    </AuthLayout>
  );
}
