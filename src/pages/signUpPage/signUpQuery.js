import { useQuery } from "react-query";
import axios from "axios";

const userQuery = () => {
  return axios.get("https://mocki.io/v1/f7e69975-6d6c-4846-affc-457066d91d2a");
};
export const useSignUpQuery = () =>
  useQuery("test", userQuery, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
  });