import axios from "axios";
import { useQuery } from "react-query";
import jwt_decode from "jwt-decode";
import dev from "../../../config/configer";

const jwtToken =
  localStorage.getItem("authorization") != null &&
  localStorage.getItem("authorization").split(" ");
const token =
  localStorage.getItem("authorization") != null && jwt_decode(jwtToken[1]);

export const url = () => {
  return axios({
    method: "get",
    url: `${dev.backendUrl}/api/v1/user/${token.id}`,
    headers: { authorization: localStorage.getItem("authorization") },
  });
};

export const useProfileData = () =>
  useQuery("profileData", url, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
  });
