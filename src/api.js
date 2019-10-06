import axios from 'axios';

const roomRequest = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6/',
  headers: {
    Authorization: 'Bearer IgFPqVrgQLEc0eyA4qqxgYXjg667Dz1C9gwsC7SowmQRfFTuJEBgFrrjs9rG',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const apiGetAllRooms = () => roomRequest.get('/rooms');
export const apiGetSingleRoom = id => roomRequest.get(`/room/${id}`);
export const apiPostBookingData = (id, data) => roomRequest.post(`/room/${id}`, data);
