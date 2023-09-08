import ExchangeService from "../services/exchange-service.js";
import { printElements, printError } from "../index.js";

export default async function getExchangeRate(base, target, amount) {
  const response = await ExchangeService.getExchangeRate(base, target, amount);
  if (response.result === "success") {
    printElements(response, base, target, amount);
  } else {
    printError(response);
  }
}
