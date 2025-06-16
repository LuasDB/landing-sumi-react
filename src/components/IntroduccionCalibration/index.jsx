import { useInView } from 'react-intersection-observer';




export default function IntroduccionCalibration(){
    const { ref , inView } = useInView({
        threshold:0.8,
        triggerOnce:false
    })

    return (
     <section id="No" className="min-h-screen flex items-center justify-center bg-white">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out transform text-center${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl font-bold text-gray-800">¡Bienvenido!</h1>
        <div className=''>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-700 mb-4">
              ¿Necesitas calibrar tu equipo?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Descubre si podemos ayudarte en 30 segundos
            </p>
            <a href="#contacto" className="px-8 py-4 text-lg font-semibold border-2 border-[rgb(46,204,13)]  rounded-2xl text-blue-800 cursor-pointer hover:bg-[rgb(46,204,13,0.4)]">
              Verificar si calibramos tu equipo
            </a>
        </div>
        
      </div>
    </section>
    )
}