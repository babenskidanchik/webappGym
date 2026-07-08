import http from "./https";

export const register = (data) =>
  http("/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const login = (data) =>
  http("/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const getMe = () =>
  http("/me", {
    method: "GET",
  });

export const buyMembership = (plan) =>
  http("/membership/buy", {
    method: "POST",
    body: JSON.stringify({plan}),
  });

export const logout = () =>
  http("/logout", {
    method: "POST",
  });

