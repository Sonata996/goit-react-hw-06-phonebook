import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import { InputName } from "./InputName/InputName";
import { Contacts } from "./Contacts/Contacts";
import { InputFilter } from "./InputFilter/InputFilter";


const savedLocalStorage = localStorage.getItem('list-contacts')
function getLocalStorage() {
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
  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState(getLocalStorage)

    
useEffect(()=>{
  localStorage.setItem('list-contacts', JSON.stringify(contacts))
},[contacts])




  const addName = ({name,number}) =>{
         const similarityContact = contacts.filter(elem =>  elem.name.toLowerCase() === name.toLowerCase())
         const newContact = {name,number, id: nanoid()}
          if (similarityContact.length === 0) {
            setContacts(prevState =>  [...prevState, newContact]) 
          } else{
            alert(`${name} is already in contacts`) 
        
          }
        };


       const addFilter = (value) =>{
          setFilter(value)
        }

  const searchContacts = () => {
      return contacts.filter(elem => {
      const filters = filter.toLowerCase()
      return  elem.name.toLowerCase().includes(filters)
      }
  )
}

const deletContact =(idContact) =>{
      contacts.filter(elem => {
         return setContacts(prevState => prevState.filter(elem => elem.id !== idContact))
  })
}



const visibleItems = searchContacts()
      return (
            <div>
              <h1>Phonebook</h1>
        
              <InputName 
              onCangeName={addName}
              />
        
              <h2>Contacts</h2>
        
              <InputFilter 
              tilteInput="Find contacts by name"
              onAddFilter={addFilter}
              /> 
        
              <Contacts 
              onClickDelet={deletContact}
              contact={visibleItems}
              
              />
            </div>
          );

}





// export class App extends Component{
// state ={
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: ''
// }

// addName = ({name,number}) =>{
//  const similarityContact = this.state.contacts.filter(elem =>  elem.name.toLowerCase() === name.toLowerCase())
 
//   if (similarityContact.length === 0) {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, {name,number, id: nanoid()}]
//     })
//     ) 
//   } else{
//     alert(`${name} is already in contacts`) 

//   }
// };

// addFilter = (value) =>{
// this.setState({
//   filter:value
// })
// // console.log(this.searchContacts());
// }

// searchContacts = () => {
//  return this.state.contacts.filter(elem => {
//     const filters = this.state.filter.toLowerCase()
//     return  elem.name.toLowerCase().includes(filters)
//       }
//   )
// }

// deletContact =(idContact) =>{
//   this.state.contacts.filter(elem => {
//    return this.setState(prevState =>({
//       contacts: prevState.contacts.filter(elem => elem.id !== idContact)
//     }))
//   })
// }



//   render(){
//     const visibleItems = this.searchContacts();
//   return (
//     <div>
//       <h1>Phonebook</h1>

//       <InputName 
//       onCangeName={this.addName}
//       />

//       <h2>Contacts</h2>

//       <InputFilter 
//       tilteInput="Find contacts by name"
//       onAddFilter={this.addFilter}
//       /> 

//       <Contacts 
//       onClickDelet={this.deletContact}
//       contact={visibleItems}
      
//       />
//     </div>
//   );
//   }
// };
