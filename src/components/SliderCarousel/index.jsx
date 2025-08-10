import { useEffect, useMemo, useRef, useState } from "react"
import SlideItem from "../SlideItemImage";

const chunk = (arr = [], size = 3) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
}

export default function SliderCarousel({
    items=[],
    autoPlay = true,
    interval = 2000,
    showArrows = true,
    showDots = true,
    pauseHover = true,
    SlideItem = SlideItem,
}
) {

  console.log('render')
  const getItemsPerSlide = ()=>{
    if(typeof window === 'undefined') return 3

    const w = window.innerWidth 
    if(w < 640) return 1
    if(w < 1024) return 2

    return 3
  }

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide())
  const [currentIndex,setCurrentIndex] = useState(0)
  const [isPaused,setIsPaused] = useState(false)
  const containerRef = useRef(null)
  const autoRef = useRef(null)
  
  useEffect(()=>{
    const handleResize = ()=>{
      const n = getItemsPerSlide()
      setItemsPerSlide((prev)=>(prev !== n ? n : prev))
    }
    window.addEventListener('resize',handleResize)

    return ()=> window.removeEventListener('resize',handleResize)
  },[])

  const slides = useMemo(() => chunk(items, itemsPerSlide), [items, itemsPerSlide])


  useEffect(()=>{
    if(currentIndex >= slides.length) setCurrentIndex(0)
  },[slides.length])

  useEffect(()=>{
    if(!autoPlay || isPaused) return undefined
    if(slides.length <= 1) return undefined

    autoRef.current= setInterval(()=>{
      setCurrentIndex((prev)=>(prev+1) % slides.length)
    },interval)

    return ()=>clearInterval(autoRef.current)
  },[autoPlay,interval,isPaused,slides.length])

  const goTo = (index)=>{
    const clamped = ((index % slides.length) + slides.length) % slides.length
    setCurrentIndex(clamped)
  }
  const prev = () => goTo(currentIndex - 1)
  const next = () => goTo(currentIndex + 1)

  const handleKeyDown = (e)=>{
    if(e.key === 'ArrowLeft') prev()
    if(e.key === 'ArrowRight') next()
    
  }

  if(!items || items.length === 0) return null


  return (
    <section
      ref={containerRef}
      className='relative w-full'
      onMouseEnter={()=>pauseHover && setIsPaused(true)}
      onMouseLeave={()=>pauseHover && setIsPaused(false)}
      onFocus={()=>pauseHover && setIsPaused(true)}
      onBlur={()=>pauseHover && setIsPaused(false)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-roledescription="carousel"
      >
        <div className="overflow-hidden cursor-pointer">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / slides.length)}%)`
            }}
          >
            {slides.map((slideItem, sIndex) => (
              <div
                key={sIndex}
                style={{ width: `${100 / slides.length}%` }}
              className="flex-shrink-0 p-4"
            >
              <SlideItem slideItem={slideItem} itemsPerSlide={itemsPerSlide} />
            </div>
          ))}
        </div>
</div>
        {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute py-auto text-2xl lg:text-4xl left-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg hover:shadow-md focus:outline-none"
          >
            {/* Puedes reemplazar por icono */}
            ‹
          </button>

          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute py-auto text-2xl lg:text-4xl right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow hover:shadow-md focus:outline-none"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`w-3 h-3 rounded-full focus:outline-none ${i === currentIndex ? "bg-gray-800" : "bg-gray-300"}`}
            />
          ))}
        </div>
      )}

    </section>
  );
}  