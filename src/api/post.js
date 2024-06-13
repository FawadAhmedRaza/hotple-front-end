import { axiosInstance, axiosInstanceForFormData } from "@/utils/axios";
import {CREATEPOST, UPLOADMEDIA,} from './constanse'
 const createNewPost = async (body) => {
const responce = await axiosInstance.post(CREATEPOST, body);
    return responce;
}
 const uploadMedia = async (body) => {
const responce = await axiosInstanceForFormData.post(UPLOADMEDIA, body);
    return responce;
}


export {createNewPost,uploadMedia}