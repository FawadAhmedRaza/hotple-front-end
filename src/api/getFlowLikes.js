import { HOST_API_KEY } from "../../config";
import { axiosInstance } from "@/utils/axios";

export const getFlowLikes = async (id) => {
    const request = await axiosInstance.get(`${HOST_API_KEY}/flows/${id}/likes`);
    return request?.data; 
}