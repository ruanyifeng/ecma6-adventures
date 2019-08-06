function first(f, [x, y]) {
  return [f(x), y];
}

function second(g, [x, y]) {
  return [x, f(y)]
}
