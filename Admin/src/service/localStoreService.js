export let localServ = {
  setAdmin: (admin) => {
    let dataJson = JSON.stringify(admin);
    localStorage.setItem("ADMIN_LOGIN", dataJson);
  },
  getAdmin: () => {
    let dataJson = localStorage.getItem("ADMIN_LOGIN");
    return JSON.parse(dataJson);
  },
  removeAdmin: () => {
    localStorage.removeItem("ADMIN_LOGIN");
  },

  setAccessToken: (accessToken) => {
    let dataJson = JSON.stringify(accessToken);
    localStorage.setItem("ACCESS_TOKEN", dataJson);
  },

  getAccessToken: () => {
    let dataJson = localStorage.getItem("ACCESS_TOKEN");
    return JSON.parse(dataJson);
  },

  removeAcessToken: () => {
    localStorage.removeItem("ACCESS_TOKEN");
  },
};
