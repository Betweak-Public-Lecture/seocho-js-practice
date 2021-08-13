for (let i = 0; i < 10; i++) {
  console.log("A");
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
