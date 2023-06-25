window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const promises = [
  createPromise(1, 5),
  createPromise(1, 5),
  createPromise(1, 5),
  createPromise(1, 5),
  createPromise(1, 5)
];
 function getRandomTime(min, max) {
       const randomTime = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime);
  }); // Convert to milliseconds
    }

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `First promise resolved with result: ${result}`;
  })
  .catch((error) => {
    console.log('Error:', error);
  });

