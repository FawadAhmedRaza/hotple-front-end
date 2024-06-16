import { axiosInstance } from "@/utils/axios";
import { HOST_API_KEY } from "../../config";

export const postFlowLikes =  async (id,data) => {
    const request = await axiosInstance.post(`${HOST_API_KEY}/flows/${id}/like`,data)
    return request
}