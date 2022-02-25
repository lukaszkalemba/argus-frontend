interface IParams {
  [key: string]: string | number;
}

export const createUrl = (urlPattern: string, urlParams?: IParams) => {
  if (urlParams) {
    const keys = Object.keys(urlParams);
    const values = Object.values(urlParams);

    return keys.reduce((acc, value, i) => acc.replace(`:${value}`, `${values[i]}`), urlPattern);
  }

  return urlPattern;
};
