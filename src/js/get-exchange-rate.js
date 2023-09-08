import ExchangeService from "../services/exchange-service.js";
import {printElements, printUnsupportedError, printError} from "../index.js";

export default async function getExchangeRate(base, target, amount) {
  const response = await ExchangeService.getExchangeRate(base, target, amount);
  if (response.result === "success") {
    printElements(response, base, target, amount);
  } else if (response.error-type === "unsupported-code") {
    const unsupCurrency = "We do not support the supplied currency.";
    printUnsupportedError();
  } else {
    printError(response, base, target, amount);
  }
}