export const getRandomEnum = (enumeration: any) => {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
}

export const getRandomNumber = (max: number, min: number = 0): number => {
  return Math.floor(Math.random() * max + min);
}

export const stripAccents = (stringWithAccents: string): string => {
  const stringWithoutAccents = stringWithAccents.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

  return stringWithoutAccents;
}

export const getPropertyValue = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
}