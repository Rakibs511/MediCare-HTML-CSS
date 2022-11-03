import axios from "axios";
import { useQuery } from "react-query";
import jwt_decode from "jwt-decode";
import dev from "../../../config/config";

export const url = async () => {
  const jwtToken =
    (await localStorage.getItem("authorization")) != null &&
    (await localStorage.getItem("authorization").split(" "));
  const token =
    (await localStorage.getItem("authorization")) != null &&
    jwt_decode(jwtToken[1]);
  return await axios({
    method: "get",
    url: `${dev.backendUrl}/api/v1/user/${token.id}`,
    headers: { authorization: localStorage.getItem("authorization") },
  });
};

export const useProfileData = () =>
  useQuery("profileData", url, {
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // refetchIntervalInBackground: true,
  });
