import { axiosInstance } from "@/utils/axios"
import { HOST_API_KEY } from "../../config"

export const createPlace =async (data) => {
    const request = await axiosInstance.post(`${HOST_API_KEY}/places`,data);
    return request?.data;
}

export const getAllPlaces = async () => {
    const request = await axiosInstance.get(`${HOST_API_KEY}/places`);
    return request?.data;
}
