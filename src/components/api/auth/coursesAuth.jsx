import axios from "axios";

const URL = import.meta.env.VITE_REACT_API_URL;

export const fetchCoursesByType = async (type, token = null) => {
  try {
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    const response = await axios.get(`${URL}/api/course/get-all-by-type`, {
      ...config,
      params: { type: type.toUpperCase() },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const createCourse = async (courseData, token = null) => {
  const formData = new FormData();
  formData.append("courseType", courseData.category.toUpperCase());
  formData.append("titleRu", courseData.title);
  formData.append("descriptionRu", courseData.description);
  formData.append("price", courseData.price);
  if (courseData.image) formData.append("image", courseData.image);

  try {
    const config = token ? { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } } : { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.post(`${URL}/api/course/save`, formData, config);
    return response.data;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

export const deleteCourse = async (id, token = null) => {
  try {
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    const response = await axios.delete(`${URL}/api/course/delete-by-id/${id}`, config);
    return response.data;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};

export const updateCourse = async (courseData, token = null) => {
  const formData = new FormData();
  formData.append("courseType", courseData.category.toUpperCase());
  formData.append("titleRu", courseData.title);
  formData.append("descriptionRu", courseData.description);
  formData.append("price", courseData.price);
  if (courseData.image) formData.append("image", courseData.image);

  try {
    const config = token ? { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } } : { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.post(`${URL}/api/course/save`, formData, config);
    return response.data;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
};