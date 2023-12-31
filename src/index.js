import './css/styles.css';
import getExchangeRate from "./js/get-exchange-rate.js";

export function printElements(response, base, target, amount) {
  document.getElementById("show-response").innerText = `${base} ${amount} = ${target} ${response.conversion_result}. The conversion rate is ${base} 1 = ${target} ${response.conversion_rate}.`;
  document.getElementById("show-response").removeAttribute("class");
}

export function printError(error) {
  document.getElementById("show-response").innerText = `${error}`;
  document.getElementById("show-response").removeAttribute("class");
}

function resetPage() {
  document.getElementById("show-response").innerText = null;
  document.getElementById("show-response").setAttribute("class", "hidden");
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amountToConvert = document.getElementById("amount").value;
  const baseCurrency = document.getElementById("base-select").value;
  const targetCurrency = document.getElementById("target-select").value;
  document.getElementById("amount").value;
  getExchangeRate(baseCurrency, targetCurrency, amountToConvert);
}

function submit() {
  document.getElementById("currency-exchanger").addEventListener("submit", handleFormSubmission);
}

window.addEventListener("load", submit);
window.addEventListener("reset", resetPage);
