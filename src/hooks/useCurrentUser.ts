import type { TCurrentLoginUser } from "@/types";
import { jwtDecode } from "jwt-decode";

export default function useCurrentUser(): TCurrentLoginUser | null {
  try {
    const storedData = localStorage.getItem("persist:userInfo");

    if (!storedData) return null;

    const parsedData = JSON.parse(storedData)?.token;

    if (!parsedData || typeof parsedData !== "string") return null;

    return jwtDecode<TCurrentLoginUser>(parsedData);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
}
