import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';

const Info = () => {
    const history=useHistory();
    const [userData,setUserData]=useState({});

 const callAbout=async()=>{
    
     try{
         const resdata=await fetch("/info",{
             method:"GET",
             headers:{
                 Accept:"application/json",
                 "Content-Type":"application/json",
             },
            credentials: "include",
         });

         const data= await resdata.json();
         console.log(data);
         setUserData(data);
         if(!resdata.status===200){
             const error=new Error (resdata.error);
             throw error;
         }

     }catch(err){
        console.log(err);
        history.push("/login");
     }
    }

useEffect(()=>{
    callAbout();
},[]);

    return (
        <div className='container text-center'>
       
         <h1>This is Your Data</h1>
         <hr className="w-25 mx-auto" />
      <h2>{`your name is ${userData.name}`}</h2>
      <h2>{`your work with ${userData.work}`}</h2>
      <h2>{`your mobile number ${userData.phone}`}</h2>
        </div>
    )
}

export default Info;
