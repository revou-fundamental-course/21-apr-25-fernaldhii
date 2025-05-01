const inputContainer = document.getElementById("inputContainer");
const convertBtn = document.getElementById("convertBtn");
const reverseBtn = document.getElementById("reverseBtn");
const resetBtn = document.getElementById("resetBtn");
const formulaText = document.getElementById("formulaText");
const toggleInfoBtn = document.getElementById("toggleInfo");
const conversionInfo = document.getElementById("conversionInfo");
const toggleText = toggleInfoBtn.querySelector("span");


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

  let topInput, bottomInput;

  if (isCelsiusToFahrenheit) {
    topInput = createInput("Celsius (°C)", "celsius", "Masukan °C");
    bottomInput = createInput("Fahrenheit (°F)", "fahrenheit", "Konversi °F", true);
  } else {
    topInput = createInput("Fahrenheit (°F)", "fahrenheit", "Masukan °F");
    bottomInput = createInput("Celsius (°C)", "celsius", "Konversi °C", true);
  }

  inputContainer.appendChild(topInput);
  inputContainer.appendChild(bottomInput);
}


function reverseInputs() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
  renderInputs();
  if (isCelsiusToFahrenheit) {
    formulaText.innerText = "S(°F) = (S(°C) * 9/5) + 32";
  } else {
    formulaText.innerText = "S(°C) = (S(°F) - 32) * 5/9";
  }  
}

function resetAll() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  celsiusInput.value = "";
  fahrenheitInput.value = "";

  if (isCelsiusToFahrenheit) {
    formulaText.innerText = "S(°F) = (S(°C) * 9/5) + 32";
  } else {
    formulaText.innerText = "S(°C) = (S(°F) - 32) * 5/9";
  }  
}

function convertTemperature() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  if (isCelsiusToFahrenheit) {
    const c = parseFloat(celsiusInput.value);
    if (!isNaN(c)) {
      const result = ((c * 9) / 5 + 32).toFixed(2);
      fahrenheitInput.value = result;
      formulaText.innerText = `S(°F) = (${c} × 9/5) + 32 = ${result}`;
    } else {
      alert("Silakan masukkan nilai Celsius yang valid.");
    }
  } else {
    const f = parseFloat(fahrenheitInput.value);
    if (!isNaN(f)) {
      const result = (((f - 32) * 5) / 9).toFixed(2);
      celsiusInput.value = result;
      formulaText.innerText = `S(°C) = (${f} - 32) × 5/9 = ${result}`;
    } else {
      alert("Silakan masukkan nilai Farenheit yang valid.");
    }
  }
}


convertBtn.addEventListener("click", convertTemperature);
reverseBtn.addEventListener("click", reverseInputs);
resetBtn.addEventListener("click", resetAll);

toggleInfoBtn.addEventListener("click", () => {
  conversionInfo.classList.toggle("hidden");

  if (conversionInfo.classList.contains("hidden")) {
    toggleText.textContent = "Lihat Penjelasan";
  } else {
    toggleText.textContent = "Sembunyikan Penjelasan";
  }
});
renderInputs();
