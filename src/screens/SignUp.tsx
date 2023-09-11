import styled from "styled-components";
import AuthLayout from "./components/auth/AuthLayout";
import Button from "./components/shared/Button";
import PageTitle from "./components/shared/PageTitle";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { AuthForm } from "./components/auth/AuthForm";
import { FormError, FormInput } from "./components/shared/sharedStyles";
import { gql } from "../__generated__";
import { CreateAccountMutation } from "../__generated__/graphql";
import AuthBottomBox from "./components/auth/AuthBottomBox";
import routes from "../routes";
import { useNavigate } from "react-router-dom";

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

interface ICreateAccountForm {
  username: string;
  email: string;
  name: string;
  location: string;
  password: string;
  githubUsername: string;
  signUpError?: string;
}

const CREATE_ACCOUNT_MUTATION = gql(`
mutation createAccount($username: String!, $email: String!, $name: String!, $location: String!, $password: String!, $githubUsername: String){
    createAccount(username: $username, email: $email, name: $name, location: $location, password: $password, githubUsername: $githubUsername) {
      ok
      error
    }
  }
`);

export default function SignUp() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<ICreateAccountForm>({
    mode: "onSubmit",
  });

  const onCompleted = ({
    createAccount: { ok, error },
  }: CreateAccountMutation) => {
    if (!ok && error) {
      return setError("signUpError", {
        message: error,
      });
    }
    const { username, password } = getValues();
    navigate(routes.login, {
      state: { message: "Account created. Please log in.", username, password },
    });
  };

  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted,
    }
  );

  const onValid = () => {
    if (loading) {
      return;
    }
    const { username, email, name, location, password, githubUsername } =
      getValues();
    createAccountMutation({
      variables: {
        username,
        email,
        name,
        location,
        password,
        githubUsername,
      },
    });
  };

  const clearsignUpError = () => {
    clearErrors("signUpError");
  };

  return (
    <AuthLayout>
      <PageTitle title={"Create Account"} />
      <Title>Welcome to Nomad Coffee</Title>
      {errors.signUpError?.message && (
        <MutationError>{errors.signUpError.message} </MutationError>
      )}
      <Form onSubmit={handleSubmit(onValid)} onChange={clearsignUpError}>
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
          {...register("email", {
            required: "This input is required.",
            minLength: {
              value: 2,
              message: "Must be longer than 2 letteres.",
            },
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email?.message && <FormError>{errors.email.message}</FormError>}
        <FormInput
          {...register("name", {
            required: "This input is required.",
            minLength: {
              value: 2,
              message: "Must be longer than 2 letteres.",
            },
          })}
          type="text"
          placeholder="Full Name"
        />
        {errors.name?.message && <FormError>{errors.name.message}</FormError>}
        <FormInput
          {...register("location", {
            required: "This input is required.",
            minLength: {
              value: 2,
              message: "Must be longer than 2 letteres.",
            },
          })}
          type="text"
          placeholder="Location"
        />
        {errors.location?.message && (
          <FormError>{errors.location.message}</FormError>
        )}
        <FormInput
          {...register("githubUsername", {
            minLength: {
              value: 2,
              message: "Must be longer than 2 letteres.",
            },
          })}
          type="text"
          placeholder="Github Username (Optional)"
        />
        {errors.githubUsername?.message && (
          <FormError>{errors.githubUsername.message}</FormError>
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
          <Button>{loading ? "Loading..." : "Create Account"}</Button>
        </ButtonContainer>
      </Form>
      <AuthBottomBox
        cta="Already have an account?"
        route={routes.home}
        linkMessage="Login"
      />
    </AuthLayout>
  );
}
