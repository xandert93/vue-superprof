export const wait = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay * 1000))
}
