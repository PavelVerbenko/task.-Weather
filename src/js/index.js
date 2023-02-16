/**
 * @param {string} weatherApiResponse
 */
const willItRain = weatherApiResponse => {
	// your code
  return JSON.parse(weatherApiResponse).now.rainExpected
}


// Sample usage - do not modify
console.log(willItRain('{"now":{"temperature":18,"humidity":"30%","rainExpected":true}}')); // true
console.log(willItRain('{"now":{"temperature":25,"humidity":"90%","rainExpected":false}}')); // false