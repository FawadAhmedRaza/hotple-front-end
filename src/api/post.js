import { axiosInstanceForFormData } from "@/utils/axios";
import {CREATEPOST} from './constanse'
 const createNewPost = async (body) => {
const responce = await axiosInstanceForFormData.post(CREATEPOST, body);
    return responce;
}


export {createNewPost}