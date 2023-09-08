export default class ExchangeService {
  static async getExchangeRate(base, target, amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${target}/${amount}`);
      const jsonifiedResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}: ${jsonifiedResponse["error-type"]}.`;
        throw new Error(errorMessage);
      }
      return jsonifiedResponse;
    } catch (error) {
      if (error.message.includes("unsupported-code")) {
        const unsupCurrency = error.message.concat(` We do not support at least one of the supplied currencies. The supplied codes were: ${base}, ${target}.`);
        return unsupCurrency;
      } else {
        return error;
      }
    }
  }
}