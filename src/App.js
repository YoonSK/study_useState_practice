import { useState } from "react"

export  function Counter(){
  const [count, setCount] = useState(0);

  function handelClick(){
     setCount(count + 1);
  }

  return (
    <button onClick={handelClick}>
      You pressed me {count} times
    </button>
  )
}

export function MyInput(){
  const [text, setText] = useState('hello');
  function handelChange(e){
      setText(e.target.value);
    
  }

  return (
    <>
      <input type='text' value = {text} onChange={handelChange} />
      <p>You typed : {text}</p>
      <button onClick={()=> setText('hello')}>
        Reset
      </button>
    </>
  )
}

export  function MyCheckbox(){
  const [liked, setLiked]= useState(true)
  function handleCheck(e){
    setLiked(e.target.checked);
  }
  return(
    <>
      <label>
        <input 
          type="checkbox"
          checked={liked}
          onChange={handleCheck}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
    </>
  )
}

export  function MyForm(){
  const [text, setText] = useState('Taylor');
  const [age, setAge] = useState(42);

  function handelChangeName(e){
    setText(e.target.value);
  }

  function handelClickAge(){
    setAge(age + 1);
  }

  return(
    <>
      <input 
        type='text'
        value={text}
        onChange={handelChangeName}
      />
      <br />
      <button onClick={handelClickAge}>Increment age</button>
      <p>Hello, {text}. You are {age}.</p>
    </>
  )
}

export function MyApp(){
  const [name, setName] = useState('Tylor');
  const [age, setAge] = useState(42);
  return(
    <>
      <input type='text' value = {name} onChange= {(e)=> setName(e.target.value)} />
      <button onClick={()=> setAge(age + 1)}>Increment age</button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  )
}

export  function MyIncrementApp(){
  const [age, setAge] = useState(42);
  function incrementAge(){
    setAge(age => age + 1);
  }
  return(
    <>
      <h1>Your age : {age}</h1>
      <button onClick={ () =>{
        incrementAge();
        incrementAge();
        incrementAge();
      }}>+3</button>
      <button onClick={() => {
        incrementAge();
      }}>+1</button>
    </>
  )
}

export  function FormApp11(){
 /* const [firstName, setFirstName] = useState('Barbara');
  const [lastName, setLastName] = useState('Hepworth');
  const [email, setEmail] = useState('bhepworth@sculpture.com');
*/
  const [form, setForm] = useState({
    firstName : 'Barbara',
    lastName : 'Hepworth',
    email : 'bhepworth@sculpture.com',
  });

  return(
    <>
      <label>
        First name : 
        <input 
          value={form.firstName}
          onChange={e=> {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
        Last name : 
        <input 
          value = {form.lastName} 
          onChange = {e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
        Email : 
        <input 
          value = {form.email} 
          onChange = {e=>{
            setForm({
              ...form,
              email: e.target.value
            });
          }} 
        />
        <p>{form.firstName}' ' {form.lastName} ({form.email})</p>
      </label>
    </>
  )
}

export default function App(){
const[person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    iamge: 'https://i.imgur.com/Sd1AgUOm/jpg', 
  }
});

function handleNameChange(e){
  setPerson({
    ...person,
    name: e.target.value
  });
}

function handleTitleChange(e){
  setPerson({
    ...person,
    artwork: {
      ...person.artwork,
      title: e.target.value
    }
  })
}

function handleCityChange(e){
  setPerson({
    ...person,
    artwork:{
      ...person.artwork,
      city:e.target.value
    }
  })
}
  return(
    <>
      <label>
        Name :
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
    </>
  )
}