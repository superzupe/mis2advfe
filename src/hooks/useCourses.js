import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourses,
  setLoading,
  setError,
  clearError,
} from "../../store/courses/courseSlice";

import {
  getCourses,
  getAllCourses,
  createCourse,
  patchCourse,
  removeCourse,
} from "../services/course.service";

export const useCourses = ({ mode = "public" } = {}) => {
  const dispatch = useDispatch();

  //AMBIL STATE DARI REDUX
  const {
    list: courses,
    loading,
    error,
  } = useSelector((state) => state.courses);

  //AUTO FETCH setiap mount
  useEffect(() => {
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  //READ
  const fetchCourses = async () => {
    try {
      dispatch(setLoading(true));
      dispatch(clearError());

      const data =
        mode === "admin" ? await getCourses() : await getAllCourses();

      dispatch(setCourses(data));
    } catch (err) {
      console.error(err);
      dispatch(setError("Gagal mengambil data courses, coba lagi."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  //CREATE
  const addCourse = async (form) => {
    if (mode !== "admin") return;

    try {
      dispatch(setLoading(true));

      await createCourse(form);
      await fetchCourses();
    } catch (err) {
      console.error(err);
      dispatch(setError("Gagal menambah course, coba lagi."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  //UPDATE
  const updateCourse = async (form) => {
    if (mode !== "admin") return;

    try {
      dispatch(setLoading(true));

      await patchCourse(form);
      await fetchCourses();
    } catch (err) {
      console.error(err);
      dispatch(setError("Gagal mengubah data course, coba lagi."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  //DELETE
  const deleteCourse = async (id) => {
    if (mode !== "admin") return;

    try {
      dispatch(setLoading(true));

      await removeCourse(id);
      await fetchCourses();
    } catch (err) {
      console.error(err);
      dispatch(setError("Gagal menghapus course, coba lagi."));
    } finally {
      dispatch(setLoading(false));
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
