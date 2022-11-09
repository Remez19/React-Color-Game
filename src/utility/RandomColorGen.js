function randomColorGen() {
  const optionalValues = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += optionalValues[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default randomColorGen;
