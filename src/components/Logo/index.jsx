import logo from '@/assets/images/logo.png'

export default function Logo({alt, onError}){
    return(
        <>
            <img 
                src={logo}
                alt={alt}
                className="h-10 lg:h-14 w-auto"
                onError={onError}
            />
        </>
    )
}