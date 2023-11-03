import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';
import useBookMarkList from '../../Hooks/useBookMarkList';
import { useComputed } from '@preact/signals';
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/AuthProvider';
import axios from 'axios';



const initialState = {
  
    bookMarks: [],
}

const bookMarkSlice = createSlice({
    name: 'bookMarkSlice',
    initialState,
    reducers : {
        addBookMarks : (state, {payload})=> {
          axios.post('http://localhost:5000/addBookMark', payload)
          .then(res => console.log(res));
            
            // if(state.bookMarks.find(item => item.id == payload.id)){
            //   console.log(payload)
            //     const Toast = Swal.mixin({
            //         toast: true,
            //         position: 'top-end',
            //         showConfirmButton: false,
            //         timer: 2000,
            //         timerProgressBar: true,
            //         didOpen: (toast) => {
            //           toast.addEventListener('mouseenter', Swal.stopTimer)
            //           toast.addEventListener('mouseleave', Swal.resumeTimer)
            //         }
            //       })
                  
            //       Toast.fire({
            //         icon: 'error',
            //         title: 'Already added'
            //       })
            // }else{
            //     state.bookMarks.push(payload)
            //     const Toast = Swal.mixin({
            //         toast: true,
            //         position: 'top-end',
            //         showConfirmButton: false,
            //         timer: 2000,
            //         timerProgressBar: true,
            //         didOpen: (toast) => {
            //           toast.addEventListener('mouseenter', Swal.stopTimer)
            //           toast.addEventListener('mouseleave', Swal.resumeTimer)
            //         }
            //       })
                  
            //       Toast.fire({
            //         icon: 'success',
            //         title: 'Added to Bookmark'
            //       })
            // }
            
        },
        removeBookMarks : (state, {payload})=>{
            state.bookMarks = state.bookMarks.filter(item => item.id !== payload.id)
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Removed from Bookmark',
              })
        
        }
    }
});

export const { addBookMarks, removeBookMarks} = bookMarkSlice.actions;
export default bookMarkSlice.reducer