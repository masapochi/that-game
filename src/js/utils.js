export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isNull = (value) => value === null || value === undefined ? true : false;

export const promiseTimeout = (func, ms = 2000) => new Promise(resolve => setTimeout(() => resolve(func()), ms));
