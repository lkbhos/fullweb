import { useEffect, useState } from "react"
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get(import.meta.env.VITE_API+'/urs')
    .then(function(res){
      setData(res.data)
    })
  }, [])
  return (
    <>
    {data.map((data)=>(
      <div>{data.id} {data.user}</div>
    ))}
    </>
  )
}
