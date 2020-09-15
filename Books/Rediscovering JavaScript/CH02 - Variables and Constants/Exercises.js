/*
    Dont Use var - Use const or let if you need the value to change (mutable)
    var doesnt have block scope, const and let does

    const only enables primitives to be immutable, not objects

    const x =1; x =2; errors
    const x = {y:1, z:2} x.y = 2; // Can change

    const x = Object.freeze({y:1, z:2}) x.y = 2; // not allowed to change

    Object.freeze is only a shallow freeze, not deep.
    So Only top level properties of an object

 */
