import { axiosInstance } from "@/utils/axios";
import { HOST_API_KEY } from "../../config";

export const postFlowLikes =  async (id) => {
    const request = await axiosInstance.post(`${HOST_API_KEY}/flows/${id}/like`)
    return request?.data
}