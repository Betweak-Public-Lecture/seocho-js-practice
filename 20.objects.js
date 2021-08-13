const KEY = "SAMPLE_KEY";
const johnProfile = {
  name: "John", //속성
  sayHi: function () {
    console.log(this.name, ": 친구야 반갑다.");
  },
  [KEY]: "sampleValue",
};
johnProfile.additionalKey = 10;
johnProfile[1] = "a";
johnProfile[2] = "b";
johnProfile[0] = "c";
console.log(johnProfile);
