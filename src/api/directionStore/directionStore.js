import axios from "axios";
import i18next from "i18next";
import { create } from "zustand";

const API = process.env.REACT_APP_URL;

const useKyrgyzstanTours = create((set) => ({
  tours: [],
  error: null,
  fetchTours: async (countryCode) => {
    try {
      const language = i18next.language;
      const res = await axios(
        `${API}/api/tours?languageCode=${language}&countries=${countryCode}`
      );
      set({ tours: res.data, error: null });
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      set({ error: error.message });
    }
  },
}));

const useTourById = create((set) => ({
  tour: [],
  err: null,
  getTourById: async (id) => {
    try {
      const language = i18next.language;
      const res = await axios(
        `${API}/api/tours/${id}?languageCode=${language}`
      );
      set({ tour: res.data, err: null });
    } catch (err) {
      console.log("Ошибка корояче", err);
      set({ err: err.message });
    }
  },
}));

export { useKyrgyzstanTours, useTourById };
