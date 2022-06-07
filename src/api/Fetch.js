import {useState} from 'react'
import Characters from '../components/characters/Characters';
import useFetch from '../hooks/useFetch';
const Fetch = () => {
  const [endpoint, setEndpoint] = useState();
  const [data, loading, error] = useFetch(endpoint);

  return (
    <div> 
      <Characters characters={data.results}/>
    </div>
  )
}
export default Fetch