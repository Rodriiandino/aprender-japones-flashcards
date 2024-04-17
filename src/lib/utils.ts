import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max)
}

export const generateRandomNumberExcluded = (
  max: number,
  excludedNumbers: number[]
): number => {
  let randomNumber: number

  do {
    randomNumber = generateRandomNumber(max)
  } while (excludedNumbers.includes(randomNumber))

  return randomNumber
}
