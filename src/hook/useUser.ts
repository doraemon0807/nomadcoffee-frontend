import { useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gql } from "../__generated__";
import { isLoggedInVar, logOutUser } from "../apollo";

const ME_QUERY = gql(`
  query me {
    me {
      profile {
        ...UserFragment
      }
    }
  }
`);

// function to check if user's token is valid
function useUser() {
  const navigate = useNavigate();

  // check if token exists in local storage
  const hasToken = useReactiveVar(isLoggedInVar);
  // query function to fetch currently logged in user data
  const { data } = useQuery(ME_QUERY, {
    skip: !hasToken, // skip if user doesn't have a token
  });

  useEffect(() => {
    if (data?.me.profile === null) {
      // if the token exist but no user was found because token is faulty
      logOutUser(navigate);
    }
  }, [data, navigate]);
  return { data };
}

export default useUser;
