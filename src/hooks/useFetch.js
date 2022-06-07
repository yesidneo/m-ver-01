import { useEffect, useState, useCallback } from "react";
import { API } from "../api/API";
const useFetch = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [data,setData] = useState(null)
  const [error, setError] = useState(null);
  /*  useEffect(() => {
     axios
     .get(endpoint)
     .then((response) => {
       setData(response.data);
       console.log(data)
      })
      .catch((err) => {
        setError(err);
        
      })
      .finally(() => {
        setLoading(false);
      });
  },[data,endpoint]);  */
  
 const getData = useCallback(async()=>{
  try{
    const {data} = await API.get(`${endpoint}`);
    setData(data);
    setLoading(false);
  }
  catch (err){
    console.log(err);
    setError(true);
  }
},[endpoint]);

useEffect(()=>{
   getData();
},[endpoint,getData]);

  return [ data, loading, error ];
};
export default useFetch;
