import React, { useEffect, useRef, useState } from "react";
import TodoList from '../Todos/TodoList'
import dcuLogoDark from '../Assets/dcuLogoDark.png';


const SignInSignUp =() => {
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")

   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value===localEmail&&password.current.value===localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        <div>
            {showHome?<TodoList />:
            (show?
                <div class="bg-[rgb(1,103,90)] h-[100vh]" >
                    <h1 class='text-[#fff] text-center text-[20 px] mb-[2%]'>Hello {localName}</h1> 
                  <div class="w-[38%] text-center bg-[#fff] px-[5%] py-[2.5%] mx-[auto] rounded-[6px]">
                   <img src={dcuLogoDark} alt={dcuLogoDark} class='w-[100px] mb-[3%]' />
                   <h3 class='text-[1.5rem] font-[500] text-[#777] mb-[3%]'>Sign in</h3>
                   <hr class='mb-[7%]' />
                   <form class='text-start'>
                       <label class="text-dark-label text-[14px] font-[550]">EMAIL</label>
                       <input class='w-[100%] h-[40px] border-thin border-[1px] border-dark-label mt-[6px] mb-[20px] pl-[3%]' placeholder="Email" type='text' ref={email} />
                       <label class="text-dark-label text-[14px] font-[550]">PASSWORD</label>
                       <input class='w-[100%] h-[40px] border-thin border-[1px] border-dark-label mt-[6px] pl-[3%]' placeholder="Password" type='password' ref={password} />
                       <button class='bg-regal-green border-none mt-[39px] text-[15px] h-[40px] w-[100%]' onClick={handleSignIn}>Sign In</button>
                   </form>
                   <p class="text-[16px] leading-[55px]"><span class='text-regal-green'>Forgot your username</span> or <span class='text-regal-green'>Forgot your password</span></p>
                   <h5 class="text-[0.85rem] text-[#616161] font-[400]">© 2022, Digital Federal Credit Union | v1.77.2</h5>
                  </div>
                </div>
                :
                <div class="bg-[rgb(1,103,90)] h-[100vh]">
                   <div class="w-[38%] text-center bg-[#fff] px-[5%] py-[2.5%] mx-[auto] rounded-[6px]">
                    <img src={dcuLogoDark} alt={dcuLogoDark} class='w-[100px] mb-[3%]' />
                    <h3 class='text-[1.5rem] font-[500] text-[#777] mb-[3%]'>Sign Up</h3>
                    <hr class='mb-[7%]' />
                    <form class='text-start'>
                        <label class="text-dark-label text-[14px] font-[550]">FULL NAME</label>
                            <input class='pl-[3%] border-thin border-[1px] border-dark-label w-[100%] h-[40px] mt-[6px] mb-[15px]' placeholder="Name" type='text' ref={name} />
                        <label class="text-dark-label text-[14px] font-[550]">EMAIL</label>
                            <input class='pl-[3%] border-thin border-[1px] border-dark-label w-[100%] h-[40px] mt-[6px] mb-[15px]' placeholder="Email" type='text' ref={email} />
                        <label class="text-dark-label text-[14px] font-[550]">PASSWORD</label>
                            <input class='pl-[3%] border-thin border-[1px] border-dark-label w-[100%] h-[40px] mt-[6px]' placeholder="Password" type='password' ref={password} />
                        <button class='bg-regal-green border-none mt-[39px] text-[15px] w-[100%] h-[40px]' onClick={handleClick}>Sign Up</button>
                    </form>
                   </div>
                </div>)
            }
        </div>
    );
}
export default SignInSignUp;