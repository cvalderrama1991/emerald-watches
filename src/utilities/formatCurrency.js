const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
})

const formatCurrency = (number) => {
  return currencyFormatter.format(number)
}

export default formatCurrency
