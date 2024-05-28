import { SignUpFieldType } from "../../constants/types/auth.type";
import { apiBase } from "../apiBase";
import { signup } from "./auth.query";


export const signUp = (data?: SignUpFieldType) => apiBase(signup(data));
