function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

// | union
export const format = (title: string, params: string | number): string =>
  `${title} ${params}`;

//function that doesnt return anything
export const printFormat = (title: string, params: string | number): void => {
  console.log(format(title, params));
};

//function that returns a promise
// tsconfig "target": "esnext" for promise
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

//Rest params
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

//Misconceptions #1: checking on compilation
// ? checking if user is defined, if not defined will out ?? ''
// compiling ts files to js = npx tsc ts-file.ts
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
