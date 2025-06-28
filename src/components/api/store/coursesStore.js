import { create } from "zustand";

export const useCoursesStore = create((set, get) => ({
  courses: {
    sports: [],
    language: [],
    professional: [],
  },
  selectedCategory: "sports",
  newCourse: {
    category: "sports",
    title: "",
    description: "",
    price: "",
    image: null,
  },
  editCourse: null,
  showMenu: null,

  setSelectedCategory: (category) =>
    set((state) => ({
      selectedCategory: category,
      newCourse: { ...state.newCourse, category },
    })),

  setNewCourse: (field, value) =>
    set((state) => ({
      newCourse: { ...state.newCourse, [field]: value },
    })),

  setEditCourse: (course) => set({ editCourse: course }),

  setShowMenu: (id) => set({ showMenu: id }),

  setCourses: (category, data) =>
    set((state) => ({
      courses: {
        ...state.courses,
        [category]: Array.isArray(data) ? data : [],
      },
    })),

  resetNewCourse: () =>
    set((state) => ({
      newCourse: {
        category: state.selectedCategory,
        title: "",
        description: "",
        price: "",
        image: null,
      },
    })),

  clearEditCourse: () => set({ editCourse: null }),
}));