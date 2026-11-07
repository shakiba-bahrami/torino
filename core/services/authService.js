import { getCookie } from "../utils/cookies";
import axios from "axios";
import { api } from "@/core/config/api";

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
      { refreshToken },
    );
    return { response };
  } catch (error) {
    return { error };
  }
};

const getUserData = async () => {
  const userData = await api.get("/user/profile");
  return userData;
};

export { getNewTokens, getUserData };
