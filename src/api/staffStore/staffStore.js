import axios from "axios";
import i18next from "i18next";
import { create } from "zustand";

const API = process.env.REACT_APP_URL;

const useStaffProfile = create((set) => ({
  staffs: [],
  err: null,
  fetchStaffs: async () => {
    try {
      const language = i18next.language;
      const res = await axios(`${API}/api/stuff?language=${language}`);
      set({ staffs: res.data, err: null });
    } catch (err) {
      console.log("Короче ошибена", err);
      set({ err: err.message });
    }
  },
}));

export default useStaffProfile;
