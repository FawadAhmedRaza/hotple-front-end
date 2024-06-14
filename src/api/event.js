import { axiosInstance, axiosInstanceForFormData } from "@/utils/axios"
import { EVENTS } from "./constanse";

export const createEvent =async (data) => {
    const request = await axiosInstanceForFormData.post(EVENTS,data);
    return request;
}

export const getAllEvents = async () => {
    const request = await axiosInstance.get(EVENTS);
    return request?.data;
}

export const getEventById = async (id) => {
    const request = await axiosInstance.get(`${EVENTS}/${id}`);
    console.log("request",request.data)
    return request?.data;
}
