{
    const getProperty = <T, K extends keyof T> (obj:T, key:K) : T[K] =>  {
    return obj[key];
}

const person : {
name : string, 
age:number
} = {
    name:"Alice",
    age:30 
};
}