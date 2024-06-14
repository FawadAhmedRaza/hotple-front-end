import { axiosInstance } from "@/utils/axios";
import { HOST_API_KEY } from "../../config";

export const postFlowComments = async (id,data) =>{
    const response = await axiosInstance.post(`${HOST_API_KEY}/flows/${id}/comment`,data)
    return response?.data;  
} 