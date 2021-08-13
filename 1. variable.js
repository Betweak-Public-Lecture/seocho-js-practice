function sample1() {
  console.log(name1);
  if (true) {
    let name1 = "신윤수";
  }
  console.log(name1);
}

function sample2() {
  if (true) {
    let name1 = "신윤수";
  }
  console.log(name1);
}

function sample3() {
  var name1;
  console.log(name1);
  if (true) {
    var name1 = "신윤수";
  }
  console.log(name1);
}

// sample1();
// sample2();
sample3();
