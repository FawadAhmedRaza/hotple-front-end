import { axiosInstance } from "@/utils/axios";
import {REGISTER,LOGIN} from './constanse'
 const registerNewUser = async (body) => {
const responce = await axiosInstance.post(REGISTER, body);
    return responce;
}
 const LoginUser = async (body) => {
const responce = await axiosInstance.post(LOGIN, body);
    return responce;
}

export {registerNewUser,LoginUser}