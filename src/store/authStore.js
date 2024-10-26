import { create } from "zustand";

const useAuthStore = create((set) => ({
  user:  JSON.parse(localStorage.getItem("user-info")),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));

export default useAuthStore;

// import { create } from "zustand";

// const initialUser = localStorage.getItem("user-info");
// const initialUserState = initialUser ? JSON.parse(initialUser) : null;

// const useAuthStore = create((set) => ({
//   user: initialUserState,
//   login: (user) => set({ user }),
//   logout: () => set({ user: null }),
//   setUser: (user) => set({ user }),
// }));

// export default useAuthStore;
