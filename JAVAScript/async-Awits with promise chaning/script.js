function asyncfunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async function executed");
      resolve("Async function completed");
    }, 2000);
  });
}
function asyncfunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async function executed");
      resolve("Async function completed");
    }, 2000);
  });
}
console.log("Fetching async function1");
let promise1 = asyncfunc1();
promise1
  .then((result) => {
    console.log("Fetching async function1");
    let promise2 = asyncfunc2();
    promise2.then((result) => {});
  })
  .catch((error) => {
    console.error("Error:", error);
  });
