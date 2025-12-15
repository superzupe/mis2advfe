import { API } from "./api"; 

//bikin akun aja, belum redirect ke home nya
export const registerUser = async (payload) => {
  const body = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    password: payload.password,
  };

  const res = await API.post("/users", body);
  return res.data;
};

//user bisa masuk ke home hanya jika udah login
export const loginUser = async (email, password) => {
  const res = await API.get("/users");
  const users = res.data;

  const user = users.find((u) => u.email === email.trim() && u.password === password.trim())
  
  if (!user) {
    return { success: false, message: "Email atau password salah." };
  }

  const token = btoa(`${email}-${Date.now()}`);
  localStorage.setItem("authToken", token);
  localStorage.setItem("authUser", JSON.stringify(user));

  return { success: true, user };
};

export const logoutUser = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authUser");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};
