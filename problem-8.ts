{
    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
  }
  
  
  const person : {
        name: string,
        age: number,
        email: string
      }  = {
        name: "Alice",
        age: 30,
        email: "alice@example.com"
      };
    }