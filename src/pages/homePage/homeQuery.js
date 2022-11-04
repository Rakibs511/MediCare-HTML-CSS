import axios from "axios";
import { useQuery } from "react-query";
import dev from "../../config/config";

export const url = () => {
  return axios({
    method: "get",
    url: `${dev.backendUrl}/api/v1/post/getall`,
    headers: { authorization: localStorage.getItem("authorization") },
  });
};
export const useGetMedicines = () => useQuery('medicines',url);

export const url_All_Users= async ()=>{
    const auth =await localStorage.getItem("authorization")
    return axios({
        method:'get',
        url: `${dev.backendUrl}/api/v1/allUser`,
        headers: { authorization:  auth},
    })
}


