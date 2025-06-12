import { create } from "zustand";
import axios from "axios";

const API = "https://www.norussatours.com";

const useAdminStore = create((set) => ({
  courses: [],
  course: {},

  // Авторизация
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

  // Добавление курса
  addCourse: async (data) => {
    try {
      await axios.post(`${API}/api/courses`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error("Error creating course:", error);
    }
  },

  // Получение всех курсов
  getCourses: async () => {
    try {
      const response = await axios.get(`${API}/api/courses`);
      set({ courses: response.data });
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  },

  // Получение одного курса
  getCourse: async (id) => {
    try {
      const response = await axios.get(`${API}/api/courses/${id}`);
      set({ course: response.data });
      return response.data;
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  },

  // Редактирование курса
  editCourse: async (id, data) => {
    try {
      await axios.put(`${API}/api/courses/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error("Error editing course:", error);
    }
  },

  // Удаление курса
  deleteCourse: async (id) => {
    try {
      await axios.delete(`${API}/api/courses/${id}`);
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  },

  // Проверка авторизации
  isAdmin: (path, navigate) => {
    if (!localStorage.getItem("token")) {
      navigate(path);
    }
  },
}));

export default useAdminStore;
