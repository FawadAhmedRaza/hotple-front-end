import { axiosInstance, axiosInstanceForFormData } from "@/utils/axios";
import { PLANS, PLANSECTION, PLANSECTIONITEM, PLANSHARE } from "./constanse";

export const createPlan = async (data) => {
  const request = await axiosInstanceForFormData.post(PLANS, data);
  return request;
};

export const getAllPlans = async () => {
  const request = await axiosInstance.get(PLANS);
  return request;
};
export const getAllSharedPlans = async (userId) => {
  const request = await axiosInstance.get(`${PLANSHARE}/user/${userId}`);
  return request;
};

export const getPlanById = async (id) => {
  const request = await axiosInstance.get(`${PLANS}/${id}`);
  return request;
};

export const createPlanSection = async (data) => {
  const request = await axiosInstance.post(PLANSECTION, data);
  return request;
};

export const updatePlanSection = async (id, data) => {
  const request = await axiosInstance.put(`${PLANSECTION}/${id}`, data);
  return request;
};

export const deletePlanSection = async (id) => {
  const request = await axiosInstance.delete(`${PLANSECTION}/${id}`);
  return request;
};

export const createPlanSectionItem = async (data) => {
  const request = await axiosInstance.post(PLANSECTIONITEM, data);
  return request;
};

export const updatePlanSectionItem = async (id, data) => {
  const request = await axiosInstance.put(`${PLANSECTIONITEM}/${id}`, data);
  return request;
};

export const deletePlanSectionItem = async (id) => {
  const request = await axiosInstance.delete(`${PLANSECTIONITEM}/${id}`);
  return request;
};

export const planShare = async (data) => {
  const request = await axiosInstance.post(PLANSHARE, data);
  return request;
};

export const planUnShare = async (id) => {
  const request = await axiosInstance.delete(`${PLANSHARE}/${id}`);
  return request;
};
