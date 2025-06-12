import { create } from "zustand";
import axios from "axios";

const API = "https://www.norussatours.com";

const useAdminStore = create((set) => ({
  stuff: [],
  initialStaff: [],
  accessToken: null,
  kgTours: [],
  centralAsiaTours: [],
  tour: {},
  polaroids: [],
  gallery: [],
  video: "",

  signIn: async (credentials) => {
    try {
      const response = await axios.post(`${API}/api/auth/sign-in`, credentials);
      const token = response.data.access_token;
      localStorage.setItem("token", token);
      set({ accessToken: token });
      return token;
    } catch (error) {
      console.error("Failed to sign in:", error);
    }
  },
  signOut: () => {
    set({ accessToken: null });
    localStorage.removeItem("token");
  },

  addTour: async (data) => {
    try {
      await axios.post(`${API}/api/edit/tours`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error("Error creating tour", error);
    }
  },

  getKyrgyzstanTours: async () => {
    try {
      const response = await axios.get(`${API}/api/edit/tours?countries=KG`);
      set({ kgTours: response.data });
    } catch (error) {
      console.log(error);
    }
  },

  editTour: async (id, data) => {
    try {
      await axios.put(`${API}/api/edit/tours/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error("Error creating tour", error);
    }
  },

  getCentralAsiaTours: async () => {
    try {
      const response = await axios.get(
        `${API}/api/edit/tours?countries=TJK,KZ,UZ,TM`
      );
      set({ centralAsiaTours: response.data });
    } catch (error) {
      return error;
    }
  },

  getTour: async (id) => {
    try {
      const response = await axios.get(`${API}/api/edit/tours/${id}`);
      set({ tour: response.data });
      return response.data;
    } catch (error) {
      return error;
    }
  },

  deleteTour: async (id) => {
    await axios.delete(`${API}/api/edit/tours/${id}`);
  },

  postStuff: async (data) => {
    try {
      await axios.post(`${API}/api/stuff`, data);
    } catch (error) {
      return error;
    }
  },

  getStuff: async () => {
    try {
      const response = await axios(`${API}/api/stuff`);
      set({ stuff: response.data });
    } catch (error) {}
  },

  deleteStaff: async (id) => {
    try {
      const response = await axios.delete(`${API}/api/stuff/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
  },

  getOneStaff: async (id) => {
    try {
      const res = await axios(`${API}/api/stuff/${id}`);
      set({ initialStaff: res.data });
    } catch (error) {
      return error;
    }
  },

  editStaff: async (id, data) => {
    try {
      await axios.put(`${API}/api/stuff/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  },

  getPolaroids: async () => {
    const response = await axios(`${API}/api/polaroid`);
    set({ polaroids: response.data });
  },

  deletePolaroid: async (id) => {
    try {
      await axios.delete(`${API}/api/polaroid/${id}`);
    } catch (error) {}
  },

  uploadPolaroid: async (data) => {
    try {
      await axios.post(`${API}/api/polaroid`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error("Error creating tour", error);
    }
  },

  postGalleryImage: async (data) => {
    await axios.post(`${API}/api/gallery`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  getGalleryImages: async () => {
    const response = await axios(`${API}/api/gallery`);
    set({ gallery: response.data });
  },

  deleteGalleryImage: async (id) => {
    try {
      await axios.delete(`${API}/api/gallery/${id}`);
    } catch (error) {
      return error;
    }
  },

  postVideo: async (data) => {
    await axios.post(`${API}/api/video`, data);
  },

  isAdmin: (path, navigate) => {
    if (!localStorage.getItem("token")) {
      navigate(path);
    }
  },

  getVideo: async () => {
    const response = await axios(`${API}/api/video`);
    set({ video: response.data });
  },
}));

export default useAdminStore;
