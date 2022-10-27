import axios from "axios";
import { useQuery } from "react-query";
import dev from "../../config/configer";

export const url = () => {
  return axios({
    method: "get",
    url: `${dev.backendUrl}/api/v1/post/getall`,
    headers: { authorization: localStorage.getItem("authorization") },
  });
};

export const useGetMedicines = () => useQuery('medicines',url);
