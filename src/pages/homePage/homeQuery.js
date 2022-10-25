import axios from "axios";
import { useQuery } from "react-query";

export const url = () => {
  return axios({
    method: "get",
    url: `http://localhost:4000/api/v1/post/getall`,
    headers: { authorization: localStorage.getItem("authorization") },
  });
};

export const useGetMedicines = () => useQuery('medicines',url);
