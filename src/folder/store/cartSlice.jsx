import {  createSlice } from "@reduxjs/toolkit";
 
const initialState=[];
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
           // state.push(action.payload)
            const newItem = action.payload;
            // Check if the item already exists in the cart
            // const isItemExist = state.some(item => item.id === newItem.id);
            // // If the item doesn't exist, add it to the cart
            // if (!isItemExist) {
            //     state.push(newItem);
            //}

            const existingItem = state.find(item => item.id === newItem.id);
            if (existingItem) {
                // If item already exists, increase quantity by 1
                existingItem.quantity += 1;
            } else {
                // If item doesn't exist, add it with quantity 1
                state.push({ ...newItem, quantity: 1 });
            }
            
        },
        remove(state,action){
            return state.filter(item=>item.id !==action.payload)
        },

    
        increaseQuantity(state, action) {
            const itemId = action.payload;
            const item = state.find(item => item.id === itemId);
            if (item) {
                // Increase quantity by 1
                item.quantity += 1;
            }
        },


        decreaseQuantity(state, action) {
            const itemId = action.payload;
            const item = state.find(item => item.id === itemId);
            if (item && item.quantity > 1) {
                // Decrease quantity by 1, but ensure it doesn't go below 1
                item.quantity -= 1;
            }
        },

        removeAll(state) {
            // Clear all items from the cart
            return [];
        }

    }
})
//My slice will be basically return the two things one is actions and reducers
export const {add,remove , increaseQuantity, decreaseQuantity, removeAll}=cartSlice.actions//These are my functions here
export default cartSlice.reducer;//This will send the state