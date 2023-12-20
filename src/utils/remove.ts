import { LocalStorage } from "quasar";
import router from "../router";
import { notify } from "@utils/notify";

const removeTokenNotFound = () => {
  LocalStorage.remove("jwt_access");
  notify("error", "Token de acceso invalido");
  router.push({ name: "SignInPage" });
};

export { removeTokenNotFound };
