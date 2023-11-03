import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';
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
          .then(res => {console.log(res)
          if(res.data.bookMarked){
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
                      title: 'Added to Bookmark'
                    })
          }else{
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
                      icon: 'error',
                      title: 'Already added'
                    })
          }
          });
            
            // if(state.bookMarks.find(item => item.id == payload.id)){
            //   console.log(payload)
            //     
            // }else{
            //     state.bookMarks.push(payload)
            // }
            
        },
        removeBookMarks : (state, {payload})=>{

            console.log(payload._id)
            axios.delete(`http://localhost:5000/remove/${payload._id}`)
            .then(res => {
              
              console.log(res)
            })
            // state.bookMarks = state.bookMarks.filter(item => item.id !== payload.id)
            // const Toast = Swal.mixin({
            //     toast: true,
            //     position: 'top-end',
            //     showConfirmButton: false,
            //     timer: 2000,
            //     timerProgressBar: true,
            //     didOpen: (toast) => {
            //       toast.addEventListener('mouseenter', Swal.stopTimer)
            //       toast.addEventListener('mouseleave', Swal.resumeTimer)
            //     }
            //   })
              
            //   Toast.fire({
            //     icon: 'success',
            //     title: 'Removed from Bookmark',
            //   })
        
        }
    }
});

export const { addBookMarks, removeBookMarks} = bookMarkSlice.actions;
export default bookMarkSlice.reducer