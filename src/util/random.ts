export function randomInt(between: number, and: number) {
  return Math.floor(Math.random() * (and - between) + between);
}
