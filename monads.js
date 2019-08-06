function first(f, [x, y]) {
  return [f(x), y];
}

function second(g, [x, y]) {
  return [x, f(y)];
}

function bimap(f, g, [x, y]) {
  return second(g, first(f, [x, y]));
}

class Functor {
  
}

class Identity extends Functor {
  constructor(x) {
    this.runIdentity = x;
  }
  
  fmap(f) {
    return new Identity(f(this.runIdentity));
  }
}
