import React , {useState,useEffect} from 'react'
import './style/Login.css'
import RingLoader from "react-spinners/RingLoader"

const Login = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 90000)
  }, [])
    return (
       <div className="Applogin">
         {
           loading ? 

          <RingLoader

            color={"#003AFF"} 
            loading={loading} 
            size={150}
          />

           :

         <div>
         </div>
          }
        </div>
    )
  }
export default Login