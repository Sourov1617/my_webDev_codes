function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(" Wheather API called");
      resolve("sucess");
    }, 4000);
  });
}
async function getWeatherData() {
  await api();
  await api();
}
