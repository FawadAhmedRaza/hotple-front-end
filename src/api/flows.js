import { axiosInstance } from "@/utils/axios";
import { HOST_API_KEY } from "../../config";

export const getFlows = async () =>{
    const response = await axiosInstance.get(`${HOST_API_KEY}/flows/`)
    return response?.data;  
} 