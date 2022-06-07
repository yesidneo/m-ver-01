import axios from 'axios'
import { useEffect, useState } from 'react'

const GetApi = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState (null)
    const [loading, setLoading] = useState(false)

   const getData = async()=>{
       try{
           const res = await API.get('https://rickandmortyapi.com/api');
            console.log(res);
       }catch(err){
           console.log(err);
       }
   }
   /* const getData = async()=>{
       try{
           const res = await axios.get('https://rickandmortyapi.com/api');
            console.log(res);
       }catch(err){
           console.log(err);
       }
   } */

   useEffect(()=>{
     getData();
   },[])
  return [data, error, loading]
}

export default GetApi

/*const GetApi = async () => { = useState
   
        try{
            const res = await fetch('https://rickandmortyapi.com/api');
            console.log(res)

            const dat = await res.json();
            console.log(dat)
        }catch(err){
           console.log(err)
        
    }
  
}

export default GetApi */