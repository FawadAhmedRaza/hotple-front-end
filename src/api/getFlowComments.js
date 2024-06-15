import { axiosInstance } from "@/utils/axios";
import { HOST_API_KEY } from "../../config";

export const getFlowComments = async (id) => {
  const request = await axiosInstance.get(`${HOST_API_KEY}/flows/${id}/comments `);
  return request?.data; 
};



