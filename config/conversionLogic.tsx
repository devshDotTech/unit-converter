import {
  lengthConversionFactors,
  weigthConversionFactors,
} from "./conversions";

const convertWeight = (
  value: number,
  fromUnit: string,
  toUnit: string,
): number => {
  const valueInMilligram =
    value *
    weigthConversionFactors[fromUnit as keyof typeof weigthConversionFactors];
  const convertedValue =
    valueInMilligram /
    weigthConversionFactors[toUnit as keyof typeof weigthConversionFactors];
  return convertedValue;
};

const convertTemperature = (
  value: number,
  fromUnit: string,
  toUnit: string,
): number => {
  // Convert the input temperature to Celsius first
  let valueInCelsius: number;

  switch (fromUnit.toLowerCase()) {
    case "celsius":
      valueInCelsius = value;
      break;
    case "fahrenheit":
      valueInCelsius = (value - 32) * (5 / 9);
      break;
    case "kelvin":
      valueInCelsius = value - 273.15;
      break;
    default:
      throw new Error("Invalid fromUnit");
  }

  // Convert the value in Celsius to the desired target unit
  let convertedValue: number;
  switch (toUnit.toLowerCase()) {
    case "celsius":
      convertedValue = valueInCelsius;
      break;
    case "fahrenheit":
      convertedValue = valueInCelsius * (9 / 5) + 32;
      break;
    case "kelvin":
      convertedValue = valueInCelsius + 273.15;
      break;
    default:
      throw new Error("Invalid toUnit");
  }

  return convertedValue;
};
const convertLength = (
  value: number,
  fromUnit: string,
  toUnit: string,
): number => {
  const valueInMeters =
    value *
    lengthConversionFactors[fromUnit as keyof typeof lengthConversionFactors];
  const convertedValue =
    valueInMeters /
    lengthConversionFactors[toUnit as keyof typeof lengthConversionFactors];
  return convertedValue;
};

export { convertTemperature, convertWeight, convertLength };
