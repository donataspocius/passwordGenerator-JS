document.addEventListener("submit", function (e) {
  e.preventDefault();
  let generatedPasw;
  let { basicPass: pass, serviceName: name } = Object.fromEntries(
    new FormData(e.target)
  );
  document.querySelector("#input-data").reset();
  passGenerator(pass, name);
  render(generatedPasw);
});

function render() {
  if (document.querySelector("p")) {
    document.querySelector("p").remove();
  }
  let outputPar = document.createElement("p");
  outputPar.textContent = generatedPasw;
  document.body.append(outputPar);
}

function passGenerator(password, name) {
  let lastNameChar = name.charAt(name.length - 1);
  let nameVowelCount = name.match(/[aeiou]/gi);
  let charAtVowelCount = name.charAt(
    name.match(/[aeiou]/gi) ? nameVowelCount.length - 1 : 0
  );
  let nameNonVowelCount = name.match(/[^aeiou]/gi);
  let firstNameChar = name.charAt(0);
  generatedPasw =
    lastNameChar +
    charAtVowelCount +
    password +
    nameNonVowelCount.length +
    firstNameChar;

  // console.log("lastNameChar: ", lastNameChar);
  // console.log("name vowel count: ", nameVowelCount);
  // console.log("char at name vowel count: ", charAtVowelCount);
  // console.log("name NON vowel count: ", nameNonVowelCount.length);
  // console.log("first name char at 0: ", firstNameChar);
  // console.log("generated password: ", generatedPasw);

  return generatedPasw;
}
