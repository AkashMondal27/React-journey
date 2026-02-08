import React from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {

    const {
          register,
          handleSubmit,
          formState: { errors , isSubmitting },
        } = useForm();

         async function onSubmit (data){  //Use OF async awaig for submit time 
          await new Promise ((resolve) => setTimeout(resolve,5000));
           console.log("From is subit", data);
        }

  return (
    <>
    <form  onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label> First Name :</label>
            <input 
            className= { errors.firstName ? "inout-erroe" :""}
             {...register('firstName' , 
               { 
                required: true,
                minLength:{value :2, message:"Please provide the valid data "},
                 maxLength: { value:10 , message :" nax length should be 10"}
                 
                  })}/>  
                  {/*  error message show */}
                  {errors.firstName && <p className='error-msg'> { errors.firstName?.message}</p>} 
        </div>
        <br/>
        <div>
            <label> Middle Name :</label>
            <input {...register('middletName')}/> 
        </div>
        <br/>
        <div>
            <label> Last Name :</label>
            <input
            className= { errors.lastName ? "inout-erroe2" :""} 
              {...register('lastName' ,
              { pattern: {
                  value : /^[A-Za-z]+$/i ,
                  message : " Fill the correct Last name"
                  }  
                    })}/> 
        </div>
         {errors.lastName &&  <p className='error-msg'>{errors.lastName.message}</p>}
        <br/>
        
        <input type='submit'  
        disabled={isSubmitting} 
         value={isSubmitting ? "submiting": " submit" }/>
    </form>
    </>
  )
}

export default App
