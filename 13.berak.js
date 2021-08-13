for (let i = 0; i < 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

let i = 0;
while (true) {
  console.log(i);
  i++;
  if (i === 10 ** 4) {
    break;
  }
}
