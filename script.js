const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const btnConv = document.querySelector(".conv");
const btnReset = document.querySelector(".reset");
const btnChange = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let fahrenheit;
let celsius;

const change = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
  }
};

const celToFahr = () => {
  fahrenheit = converter.value * 1.8 + 32;
  result.textContent = `${converter.value}°C is ${fahrenheit.toFixed(1)}°F`;
  converter.value = "";
};

const fahrToCel = () => {
  celsius = (converter.value - 32) / 1.8;
  result.textContent = `${converter.value}°F is ${celsius.toFixed(1)}°C`;
  converter.value = "";
};

const conversion = () => {
  if (converter.value !== "") {
    if (one.textContent === "°C") {
      fahrToCel();
    } else {
      celToFahr();
    }
  } else {
    result.textContent = "You need to enter a value!";
  }
};

const reset = () => {
  converter.value = "";
  result.textContent = "";
};

btnReset.addEventListener("click", reset);
btnConv.addEventListener("click", conversion);
btnChange.addEventListener("click", change);
