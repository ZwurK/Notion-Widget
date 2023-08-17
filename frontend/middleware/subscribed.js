export default defineNuxtRouteMiddleware((to, _from) => {
  const user = useStrapiUser();
  if (user.value.role.id === 3) {
    return navigateTo("/");
  }
});
