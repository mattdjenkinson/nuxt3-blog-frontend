export function useAuth() {
  function setUser(name: string) {
    localStorage.setItem("user", JSON.stringify({ name }));
  }

  function getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  function removeUser() {
    localStorage.removeItem("user");
  }

  const isLoggedIn = computed(() => {
    return !!localStorage.getItem("user");
  });

  return {
    isLoggedIn,
    setUser,
    getUser,
    removeUser,
  };
}
