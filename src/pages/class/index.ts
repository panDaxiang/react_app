export class Animal{
  public readonly name: string;
  protected age: number;
  private money: number
  constructor( name: string, age?: number, money?: number){
    this.name = name
    this.age = age
    this.money = money
  }

  sayHi(){
    return `hello, my name is ${this.name}`
  }
}


export class Dog extends Animal{
  constructor(public readonly name: string, age?: number, money?: number){
    super(name, age, money)
  }
  desc(){
    console.log(`${this.name} ${this.age} ${this.money}`)
  }

  changeName(name: string){
    this.name = name
  }
}

const dog = new Dog('xiha dog', 13)

dog.name = 'change dog'

console.log(dog.name)