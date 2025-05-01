const inputContainer = document.getElementById("inputContainer");
const convertBtn = document.getElementById("convertBtn");
const reverseBtn = document.getElementById("reverseBtn");
const resetBtn = document.getElementById("resetBtn");
const formulaText = document.getElementById("formulaText");

let isCelsiusToFahrenheit = true;

function createInput(label, id, placeholder, disabled = false) {
  const div = document.createElement("div");
  div.className = "form-group";
  div.innerHTML = `
    <label for="${id}">${label}</label>
    <input type="number" id="${id}" placeholder="${placeholder}" ${disabled ? "disabled" : ""} />
  `;
  return div;
}

function renderInputs() {
  inputContainer.innerHTML = "";
  const topInput = isCelsiusToFahrenheit
    ? createInput("Celsius (°C)", "celsius", "Enter °C")
    : createInput("Fahrenheit (°F)", "fahrenheit", "Enter °F");
  const bottomInput = isCelsiusToFahrenheit
    ? createInput("Fahrenheit (°F)", "fahrenheit", "Converted °F", true)
    : createInput("Celsius (°C)", "celsius", "Converted °C", true);

  inputContainer.appendChild(topInput);
  inputContainer.appendChild(bottomInput);
}

function convertTemperature() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  if (isCelsiusToFahrenheit) {
    const c = parseFloat(celsiusInput.value);
    if (!isNaN(c)) {
      fahrenheitInput.value = ((c * 9) / 5 + 32).toFixed(2);
      formulaText.innerText = `S(°F) = (${c} * 9/5) + 32`;
    } else {
      alert("Please enter a valid Celsius value.");
    }
  } else {
    const f = parseFloat(fahrenheitInput.value);
    if (!isNaN(f)) {
      celsiusInput.value = (((f - 32) * 5) / 9).toFixed(2);
      formulaText.innerText = `S(°C) = (${f} - 32) * 5/9`;
    } else {
      alert("Please enter a valid Fahrenheit value.");
    }
  }
}

function reverseInputs() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
  renderInputs();
  formulaText.innerText = isCelsiusToFahrenheit
    ? "S(°F) = (S(°C) * 9/5) + 32"
    : "S(°C) = (S(°F) - 32) * 5/9";
}

function resetAll() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  celsiusInput.value = "";
  fahrenheitInput.value = "";

  formulaText.innerText = isCelsiusToFahrenheit
    ? "S(°F) = (S(°C) * 9/5) + 32"
    : "S(°C) = (S(°F) - 32) * 5/9";
}


convertBtn.addEventListener("click", convertTemperature);
reverseBtn.addEventListener("click", reverseInputs);
resetBtn.addEventListener("click", resetAll);

// Initial load
renderInputs();
