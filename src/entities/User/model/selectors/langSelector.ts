import { StateSchema } from "@/app/providers/StoreProvider";

export const getLang = (state: StateSchema) => state.user.lang;
