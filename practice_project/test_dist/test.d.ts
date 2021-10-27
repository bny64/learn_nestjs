interface Person {
    name: string;
    age: number;
}
interface Car {
    wheel: string;
}
declare function isPerson(arg: any): arg is Person;
