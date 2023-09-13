import styled from "styled-components";
import Button from "./components/shared/Button";
import { AuthForm } from "./components/auth/AuthForm";
import { FormError, FormInput } from "./components/shared/sharedStyles";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { gql } from "../__generated__";

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const MutationError = styled(FormError)`
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled(AuthForm)``;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

interface IAddForm {
  name: string;
  photo: string;
  longitude: string;
  latitude: string;
  addError?: string;
}

const ADD_SHOP = gql(`
mutation createCoffeeShop($name: String!, $files: [Upload!]!){
    createCoffeeShop(name: $name, files: $files) {
      ok
      error
      id
    }
  }
`);

export default function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddForm>();

  const [addShopMutation, { loading }] = useMutation(ADD_SHOP);

  const onSubmitValid = () => {};

  return (
    <Container>
      <Title>Add Shop</Title>
      <MutationError>{errors.addError?.message} </MutationError>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmitValid)}>
          <FormInput
            {...register("name", {
              required: true,
            })}
            placeholder="Shop Name"
          />
          <FormInput {...register("longitude")} placeholder="Longitude" />
          <FormInput {...register("latitude")} placeholder="Latitude" />
          <ButtonContainer>
            <Button>Submit</Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </Container>
  );
}
