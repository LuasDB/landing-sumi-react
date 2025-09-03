import { useEffect, useState } from 'react'
import AccreditationCard from '@/components/AccreditationCard'
import axios from 'axios'


export default function Accreditations(){
  const [acreditaciones,setAcreditaciones] = useState([])
   const getAcreditaciones = async ()=>{
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/sumi`)
      if(data.success){
        console.log(data)
        setAcreditaciones(data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getAcreditaciones();
  }, []);
    

    return(
        <section className="pt-[80px] py-12 " id="acreditaciones">
            <div className="mb-20 " >
            <h3 className="text-3xl font-bold text-green-900 text-center mb-12">
            Acreditaciones y Certificaciones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {acreditaciones.map((acreditacion) => (
                <AccreditationCard 
                    key={acreditacion._id} 
                    acreditacion={acreditacion} 
                    className="hover:shadow-lg transition cursor-pointer transform hover:scale-120"
                />
                ))
            }
        </div>
        </div>
        </section>
    )
}