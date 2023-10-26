"use client";
import events from "./events";

function InfiniteScroll(){
    return(
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className=" animate-infinite-scroll flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
        {events.map((entry, index) => {
            return (
                <li key={entry.slug}>
                   <img src={entry.images[1]} alt="Disney" className='rounded-lg h-auto w-96 md:max-h-96  object-cover border-4 border-sky-100 shadow-md'/> 
                </li>  
            );
        })}
    </ul>  
    <ul className=" animate-infinite-scroll flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
        {events.map((entry, index) => {
            return (
                <li key={entry.slug}>
                   <img src={entry.images[1]} alt="Disney" className='rounded-lg h-auto w-96 md:max-h-96  object-cover border-4 border-sky-100 shadow-md'/> 
                </li>  
            );
        })}
    </ul>              
</div>
    )
}

export default InfiniteScroll;