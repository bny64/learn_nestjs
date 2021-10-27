interface Person {
  name: string;
  age: number;
}

interface Car {
  wheel: string;
}

function isPerson(arg: any): arg is Person {
  return arg.name !== undefined;
}
