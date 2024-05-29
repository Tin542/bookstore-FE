import { LoginFieldType, SignUpFieldType } from "../../constants/types/auth.type";
import { apiBase } from "../apiBase";
import { signin, signup } from "./auth.query";

export const signUp = (data?: SignUpFieldType) => apiBase(signup(data));
export const signIn = (data?: LoginFieldType) => apiBase(signin(data));
