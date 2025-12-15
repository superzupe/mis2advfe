import { useEffect, useState } from "react";
import {
  getCourses,
  getAllCourses,
  createCourse,
  patchCourse,
  removeCourse,
} from "../services/course.service";

export const useCourses = ({ mode = "public" } = {}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //AUTO FETCH setiap mount
  useEffect(() => {
    fetchCourses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  //READ
  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError("");

      const data =
        mode === "admin" ? await getCourses() : await getAllCourses();
      setCourses(data);
    } catch (err) {
      console.error(err);
      setError("Gagal mengambil data courses, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  //CREATE
  const addCourse = async (form) => {
    if (mode !== "admin") return;

    try {
      setLoading(true);
      await createCourse(form);
      await fetchCourses();
    } catch (err) {
      console.error(err);
      setError("Gagal menambah course, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  //UPDATE
  const updateCourse = async (form) => {
    if (mode !== "admin") return;

    try {
      setLoading(true);
      await patchCourse(form);
      await fetchCourses();
    } catch (err) {
      console.error(err);
      setError("Gagal mengubah data course, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  //DELETE
  const deleteCourse = async (id) => {
    if (mode !== "admin") return;

    try {
      setLoading(true);
      await removeCourse(id);
      await fetchCourses();
    } catch (err) {
      console.error(err);
      setError("Gagal menghapus course, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return {
    courses,
    loading,
    apiError: error,
    refetch: fetchCourses,

    //admin action only
    addCourse,
    updateCourse,
    deleteCourse,
  };
};
