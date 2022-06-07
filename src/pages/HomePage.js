import { useState } from 'react'
import GetApi from '../api/GetApi'

import Loading from '../components/commons/Loading'


const HomePage = () => {

  return (
     <div>
        <Loading/>
        <GetApi/>
  
     </div>
  )
}

export default HomePage