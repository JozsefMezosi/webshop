import { useStore } from "@nanostores/react";
import { $user } from "../store/user.store";

export const useUserData = () => useStore($user)?.userData;
