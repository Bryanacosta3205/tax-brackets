export const getTaxesBands = (tax_brackets: any, salary: number) => {
  return tax_brackets
    .filter(
      (bracket:any) =>
        (bracket.min >= 0 && bracket.min < salary) ||
        (bracket.max >= 0 && bracket.max <= salary)
    )
    .map((band:any) => {
      return {
        ...band,
        amount: Number(
          ((band.max ? band.max - band.min : band.min) * band.rate).toFixed(3)
        ),
      };
    });
};

