{
    interface Profile {
    name: string;
    age: number;
    email: string;
  }

type OptionalTodo<Todo> =  {
    [T in keyof Todo]?: Todo[T];
};
  
  // Function to update a profile with optional properties
  function updateProfile(profile: Profile, updates: OptionalTodo<Profile>): Profile {
    return { ...profile, ...updates };
  }
  
  const myProfile: Profile = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
  };
}