import { axiosInstance } from "@/utils/axios";
import { HOST_API_KEY } from "../../config";

export const getUsers = async () => {
  const request = await axiosInstance.get(`${HOST_API_KEY}/users`);
  return request?.data;
};
