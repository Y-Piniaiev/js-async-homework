console.log("Початок");

setTimeout(() => {
  console.log("Середина");

  setTimeout(() => {
    console.log("Кінець");
  }, 1000);
}, 1000);
