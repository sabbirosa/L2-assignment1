function formatString(input: string, toUpper?: boolean): string {
  return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const resultArr: T[] = [];

  arrays.forEach((subArray) => {
    subArray.forEach((element) => {
      resultArr[resultArr.length] = element;
    });
  });

  return resultArr;
}

class Vehicle {
  private _make: string;
  private _year: number;

  constructor(_make: string, _year: number) {
    this._make = _make;
    this._year = _year;
  }

  getInfo(): string {
    return `Make: ${this._make}, Year: ${this._year}`;
  }
}

class Car extends Vehicle {
  private _model: string;

  constructor(_make: string, _year: number, _model: string) {
    super(_make, _year);
    this._model = _model;
  }

  getModel(): string {
    return `Model: ${this._model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  let mostExpensive = products[0];

  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensive.price) {
      mostExpensive = products[i];
    }
  }

  return mostExpensive;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) throw new Error("Negative number not allowed");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
