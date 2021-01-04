export default function SwDev() {
  if ("serviceWorker" in navigator) {
    let swDev = `${process.env.PUBLIC_URL}/service-worker.js`;
    navigator.serviceWorker
      .register(swDev)
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log("Error registering service worker! Error is:", error);
      });
  }
  return null;
}
