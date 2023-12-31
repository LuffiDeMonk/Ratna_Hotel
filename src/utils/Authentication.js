import axios from "axios";
import { useQuery, useMutation } from "react-query";

const signUp = async (user) => {
  let { data } = await axios.post(
    `${import.meta.env.VITE_HOST}/api/user/register`,
    user
  );
  return data;
};

const logIn = async (user) => {
  let { data } = await axios.post(
    `${import.meta.env.VITE_HOST}/api/user/login`,
    user
  );
  return data;
};

export const useSignUp = () => {
  const { data, error, mutate, isLoading } = useMutation(
    ["signup"],
    (data) => {
      return signUp(data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, error, mutate, isLoading };
};

export const useLogin = () => {
  const { data, error, mutate, isLoading } = useMutation(
    ["login"],
    (data) => {
      return logIn(data);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  return { data, error, mutate, isLoading };
};
