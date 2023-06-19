import { useState } from "react";
const usePercentageClampHandler = (
  value: string,
  max: number,
  min: number,
  decimalPlaces: number
): string => {
  const [floatValue, setFloatValue] = useState<string>("0.0%");
  const parsedFloatValue = Number.parseFloat(value);

  if (Number.isNaN(parsedFloatValue)) {
    setFloatValue("");
    return floatValue;
  }

  const clampedValue = Math.min(Math.max(parsedFloatValue, min), max);
  const roundedValue = Math.round((clampedValue + Number.EPSILON) * 100) / 100;
  const decimalPlaceFix = roundedValue.toFixed(decimalPlaces).toString();
  setFloatValue(decimalPlaceFix);
  // eslint-disable-next-line no-undef
  console.log(floatValue);
  return floatValue;
};

export { usePercentageClampHandler };
