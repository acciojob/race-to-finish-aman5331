window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
 function getRandomTime(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min) * 1000; // Convert to milliseconds
    }

    // Array of promises with random resolve times
    const promises = [
      new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), getRandomTime(1, 5))),
      new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), getRandomTime(1, 5))),
      new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), getRandomTime(1, 5))),
      new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), getRandomTime(1, 5))),
      new Promise((resolve) => setTimeout(() => resolve('Promise 5 resolved'), getRandomTime(1, 5)))
    ];

    // Print the result of the first resolved promise to the output div
    Promise.any(promises)
      .then((result) => {
        const outputElement = document.getElementById('output');
        outputElement.textContent = result;
      })
      .catch((error) => {
        console.error(error);
      });
