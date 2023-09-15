import { useEffect } from "react";
import styled from "styled-components";
import Button from "./components/shared/Button";
import { AuthForm } from "./components/auth/AuthForm";
import { FormError, FormInput } from "./components/shared/sharedStyles";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { gql } from "../__generated__";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { EditCoffeeShopMutation } from "../__generated__/graphql";
import { SEE_COFFEE_SHOP } from "./Shop";
import useUser from "../hook/useUser";

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

interface IEditForm {
  name: string;
  longitude: string;
  latitude: string;
  categories: string;
  editError?: string;
}

const EDIT_COFFEE_SHOP = gql(`
mutation editCoffeeShop($id: Int!, $name: String, $longitude: String, $latitude: String, $categories: String){
    editCoffeeShop(id: $id, name: $name, longitude: $longitude, latitude: $latitude, categories: $categories) {
      ok
      error
    }
  }
  
`);

export default function ShopEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { data: meData } = useUser();

  useEffect(() => {
    if (location?.state?.userId !== meData?.me.profile?.id) {
      navigate("/");
    }
  }, [location?.state?.userId, meData?.me.profile?.id, navigate]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IEditForm>({
    mode: "onSubmit",
    defaultValues: {
      name: location?.state?.name || "",
      longitude: location?.state?.longitude || "",
      latitude: location?.state?.latitude || "",
      categories: location?.state?.categories || "",
    },
  });

  const onCompleted = ({
    editCoffeeShop: { ok, error },
  }: EditCoffeeShopMutation) => {
    if (!ok) {
      return alert(error);
    } else {
      navigate(`/shop/${id}`);
    }
  };

  const [editShopMutation, { loading }] = useMutation(EDIT_COFFEE_SHOP, {
    onCompleted,
    refetchQueries: [SEE_COFFEE_SHOP],
  });

  const onSubmitValid = () => {
    if (!loading) {
      const { name, longitude, latitude, categories } = getValues();

      editShopMutation({
        variables: {
          id: parseInt(id!),
          name,
          longitude,
          latitude,
          categories,
        },
      });
    }
  };

  return (
    <Container>
      <Title>Edit Shop</Title>
      <MutationError>{errors.editError?.message} </MutationError>
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
          <FormInput {...register("categories")} placeholder="Categories" />
          <ButtonContainer>
            <Button>Submit</Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </Container>
  );
}
