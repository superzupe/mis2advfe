import { API } from "./api";

import { courses } from "../data/coursesData";
import { DEFAULT_THUMBNAIL, DEFAULT_AVATAR } from "../data/defaultImages"; 

const getDefaultThumbnail = () => {
  const index = Math.floor(Math.random() * DEFAULT_THUMBNAIL.length);
  return DEFAULT_THUMBNAIL[index];
};

const getDefaultAvatar = () => {
  const index = Math.floor(Math.random() * DEFAULT_AVATAR.length);
  return DEFAULT_AVATAR[index];
};

//GET course yg barus ditambahkan
export const getCourses = async () => {
  const res = await API.get("/courses");
  return res.data;
};

//GET all courses
export const getAllCourses = async () => {
  const res = await API.get("/courses");
  const apiCourses = res.data;
  return [...courses, ...apiCourses];
};

//GET details byID
const getCourseById = async (id) => {
  const res = await API.get(`/courses/${id}`);
  return res.data;
};

//default yang dikirim ke API dari form
const mapFormToCourse = (prev, form) => {
  return {
    ...prev,
    title: form.title,
    description: form.description,
    category: form.category,
    price: Number(form.price),
    priceLabel: `${Math.floor(Number(form.price) / 1000)}K`,
    durationMinutes: form.durationMinutes,
    instructorName: form.instructorName,
    instructorRole: form.instructorRole,
    instructorCompany: form.instructorCompany,
    tags: form.title.toLowerCase().split(" ").filter(Boolean),
  };
};

//POST
export const createCourse = async (form) => {
  const base = {
    thumbnail: getDefaultThumbnail(),
    instructorAvatar: getDefaultAvatar(),
    ratingValue: 0,
    ratingReviews: 0,
  };

  const body = mapFormToCourse(base, form);

  const res = await API.post("/courses", body); //post ke cors, apa yang di post, yaitu body
  return res.data;
};

//PATCH
export const patchCourse = async (form) => {
  const existing = await getCourseById(form.id);

  if (!existing) return false;

  const body = mapFormToCourse(existing, form);

  const res = await API.put(`/courses/${form.id}`, body);
  return res.data;
};

//DELETE
export const removeCourse = async (id) => {
   await API.delete(`/courses/${id}`);
   return true
};
