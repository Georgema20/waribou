//Importing what we need for context
import { createContext, useState} from 'react';
import { ReactNode } from 'react';
//Exporting the context // info
//Creating it for first time to be used in provider

export const SignUpContext = createContext(
  //default state
  {
   name: '', 
   birthday: new Date(), 
   username: '', 
   email: '', 
   password: '',
   setName: (value:string) => {}, 
   setBirthday: (value:Date)=>{},
   setUsername:(value:string)=>{},
   setEmail:(value:string)=>{},
   setPassword:(value:string)=>{}, 
   clearAll:()=>{}
  }
);

//Place to manage the state and create a wrapper where auth can be accessed

const SignUpContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  //Setting up states
  const [name, setName] = useState<string>('');
  const [birthday, setBirthday] = useState<Date>(new Date());
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const clearAll = () => {
    setName('');
    setEmail('');
    setPassword('');
    setUsername('');
    setBirthday(new Date());
  };

  //Thing that is passed down to everything in provider
  const value = {
    name: name,
    birthday: birthday,
    username: username,
    email: email,
    password: password,
    setName: setName,
    setBirthday: setBirthday,
    setUsername: setUsername,
    setEmail: setEmail,
    setPassword: setPassword,
    clearAll: clearAll,
  };

  return (
    <SignUpContext.Provider value={value}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpContextProvider;
