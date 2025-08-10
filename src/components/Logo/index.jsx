import logo from '@/assets/images/logo.png'

export default function Logo({alt, onError, className}) {
    onError = (e) => {
        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Crect width='80' height='40' fill='%23e5e7eb'/%3E%3Ctext x='40' y='25' font-family='Arial' font-size='10' fill='%236b7280' text-anchor='middle'%3E${alt || 'Logo'}%3C/text%3E%3C/svg%3E`;
    };    
    return(
        <>
            <img 
                src={logo}
                alt={alt}
                className={` ${className ? className : 'h-16 lg:h-20 w-auto'}`}
                onError={onError}
            />
        </>
    )
}