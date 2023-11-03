import { useDispatch} from "react-redux"
import {ContactList,ElemList,DeletButton } from "./contacts.styled"
import { remove } from "redux/addContact"


export const Contacts = ({contactFilter}) =>{
    console.log(contactFilter);
    const disPatch = useDispatch()
    return(
        <div>
            <ContactList> 
               {contactFilter.map(elem => <ElemList key={elem.id}>
                <p>
                    {elem.name}: {elem.number}
                </p>
                <DeletButton
                    id={elem.id}

                onClick={()=>{
                    disPatch(remove(elem.id))
                }}
                >
                    Delete</DeletButton>
               </ElemList>
                )}
            </ContactList>
        </div>
    )
}