import http from "./common-http";

export const getAll = (): Promise<any> => {
  return http.get("/activities");
};

export const get = (id: number): Promise<any> => {
  return http.get(`/activities/${id}`);
};

export const create = (data: any): Promise<any> => {
  return http.post(`/activities/create`, data);
};

export const update = (data: any, id: number): Promise<any> => {
  return http.put(`/activities/${id}`, data);
};
