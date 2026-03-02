import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items:[]
};
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addTocart:(state,action)=>{
            const exist=state.items.find((item)=>item.id===action.payload.id)
            if(exist){
                exist.quantity+=1;

            }else{
                state.items.push({...action.payload,quantity:1})
            }
        },
        decreaseQt:(state,action)=>{
            const item=state.items.find(i=>i.id===action.payload)
            if(item.quantity>1){
                item.quantity-=1
            }else{
                state.items=state.items.filter(i=>i.id!==action.payload)
            }

        },
        remove_from_cart:(state,action)=>{
            state.items=state.items.filter((i)=>i.id!==action.payload)

        }
    }
})
export const {addTocart, decreaseQt,remove_from_cart}=cartSlice.actions
export default cartSlice.reducer