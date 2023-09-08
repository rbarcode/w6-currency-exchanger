import ExchangeService from "../services/exchange-service.js";
import { printElements, printUnsupportedError, printError } from "../index.js";

export default async function getExchangeRate(base, target, amount) {
  const response = await ExchangeService.getExchangeRate(base, target, amount);
  if (response.result === "success") {
    printElements(response, base, target, amount);
  } else if (response["error-type"] === "unsupported-code") {
    const unsupCurrency = "We do not support at least one of the supplied currencies.";
    printUnsupportedError(response, unsupCurrency, base, target);
  } else {
    printError(response);
  }
}