import { User } from "./models/User";

interface UserProps {
  name?: string;
  age?: number;
}

const me = new User({})

me.set({name:"Zubair Bashir"})
me.set({age:23})
me.set({id:1})

me.save();

