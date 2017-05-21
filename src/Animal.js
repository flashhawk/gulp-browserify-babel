export default class  Animal
{
    constructor(name)
    {
        this.type="animal";
        this.name=name;
    }

    sayHello()
    {
        console.log("Hello,my name is "+this.name);
    }
}