import { InputName } from "./InputName/InputName";
import { Contacts } from "./Contacts/Contacts";
import { InputFilter } from "./InputFilter/InputFilter";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const savedLocalStorage = localStorage.getItem('list-contacts')
export function getLocalStorage() {
  if (savedLocalStorage !== null) {
  return JSON.parse(savedLocalStorage)
}
return [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
}



export const App = () =>{
const contacts =useSelector(state =>state.contacts)
const filter = useSelector(state => state.filter);

useEffect(() =>{
  localStorage.setItem('list-contacts', JSON.stringify(contacts))
},[contacts])

const contactFilter =() =>{
return contacts.filter(elem => elem.name.toLowerCase().includes(filter))
}
      return (
            <div>
              <h1>Phonebook</h1>
        
              <InputName 
              />
        
              <h2>Contacts</h2>
        
              <InputFilter 
              tilteInput="Find contacts by name"
              /> 
        
              <Contacts 
                contactFilter={contactFilter()}
              />
            </div>
          );

}
