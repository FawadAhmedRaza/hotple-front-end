import { axiosInstance } from "@/utils/axios"
import { PLACES } from "./constanse";

export const createPlace =async (data) => {
    const request = await axiosInstance.post(PLACES,data);
    return request?.data;
}

export const getAllPlaces = async () => {
    const request = await axiosInstance.get(PLACES);
    console.log("request",request.data)
    return request?.data;
}
export const getplaceById = async (id) => {
    const request = await axiosInstance.get(`${PLACES}/${id}`);
    console.log("request",request.data)
    return request?.data;
}
