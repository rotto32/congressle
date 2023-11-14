export function getRandomMemberData(congressData) {
  const random = Number(Math.floor(Math.random() * congressData.length));
  return congressData.slice(random, random+1)[0];
}