import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from 'components/App'
import { nanoid } from 'nanoid'


export const contactSlice = createSlice({
    name:'contact',
    initialState:   getLocalStorage,
    reducers:{
        add:{
            reducer(state,action){
                const similarityContact = state.filter(elem =>  elem.name.toLowerCase() === action.payload.name.toLowerCase())
                if (similarityContact.length === 0) {
                    state.push({id:nanoid(), name:action.payload.name, number:action.payload.number})
                } else{
                    alert(`${action.payload.name} is already in contacts`)
                }
            }
        },
        remove(state,action){
             return state.filter(elem => elem.id !== action.payload)
        }
        
    }
})

export const contacReducer = contactSlice.reducer;
export const {add, remove} = contactSlice.actions;