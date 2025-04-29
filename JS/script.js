document.addEventListener("DOMContentLoaded", () => {
    const celsius = document.getElementById("celsius");
    const fahrenheit = document.getElementById("fahrenheit");
    const toFBtn = document.getElementById("toF");
    const toCBtn = document.getElementById("toC");
  
    toFBtn.addEventListener("click", () => {
      const c = parseFloat(celsius.value);
      if (!isNaN(c)) {
        fahrenheit.value = ((c * 9) / 5 + 32).toFixed(2);
      } else {
        alert("Please enter a valid Celsius value.");
      }
    });
  
    toCBtn.addEventListener("click", () => {
      const f = parseFloat(fahrenheit.value);
      if (!isNaN(f)) {
        celsius.value = (((f - 32) * 5) / 9).toFixed(2);
      } else {
        alert("Please enter a valid Fahrenheit value.");
      }
    });
  });
  