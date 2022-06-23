import { $fetch } from "ohmyfetch";
import Cookies from "js-cookie";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  nuxtApp.provide(
    "apiFetch",
    $fetch.create({
      baseURL: config.public.BASE_URL,
      credentials: "include",
      headers: {
        Accept: "application/json",
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
      },
    })
  );
});
