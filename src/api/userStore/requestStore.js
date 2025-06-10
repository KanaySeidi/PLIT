import axios from "axios";
import { create } from "zustand";

const API = process.env.REACT_APP_URL;
const reqStore = create((set) => ({
  leaveReq: async (data) => {
    try {
      const res = await axios.post(`${API}/api/mail/connectwithus`, data);
      set({ response: res.data });
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      set({ error: error.message });
    }
  },
  tourReq: async (id, data) => {
    try {
      const res = await axios.post(`${API}/api/mail/tour/${id}`, data);
      set({ response: res.data });
    } catch (err) {
      console.log("Ошибка", err);
      set({ err: err.message });
    }
  },
}));

export default reqStore;
