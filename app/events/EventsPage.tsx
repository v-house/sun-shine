"use client";
import React, { useState, useRef,ReactNode, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { FC } from "react";
import InfiniteScroll from "./infiniteScroll";

interface Event {
  slug: string;
  date: string;
  title: string;
  summary: string;
  images: string[];
}

interface EventsPageProps {
  posts: Event[];
}
  

const EventsPage: FC<EventsPageProps> = ({ posts }) => {
  const router = useRouter();
  const RevealOnScroll = ({ children }: { children: ReactNode }) => { 
    const [isVisible, setIsVisible] = useState(false); 
    const ref = useRef<HTMLDivElement | null>(null);
   
  
    useEffect(() => { 
      const onWindScroll = () => { 
        const element = ref.current; 
        if (element) { 
          const { top } = element.getBoundingClientRect(); 
          const isVisible = top < window.innerHeight; 
          setIsVisible(isVisible); 
        } 
      }; 
  
      window.addEventListener("scroll", onWindScroll); 
      return () => { 
        window.removeEventListener("scroll", onWindScroll); 
      }; 
    }, []); 
  
    const classes = `transition-opacity duration-1000 ease-in-out 
      ${isVisible ? "opacity-100" : "opacity-0"
      }`; 
  
    return ( 
      <div ref={ref} className={classes}> 
        {children} 
      </div> 
    ); 
  };
  const AppearOnHover = ({ children }: { children: ReactNode }) => { 
    const [isHovered, setHovered] = useState(false); 
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    const classes = `transition-opacity duration-1000 ease-in-out ${
      isHovered ? 'opacity-100' : 'opacity-50'
    }`; 
  
    return ( 
      <div className={classes} onMouseEnter={handleMouseEnter}> 
        {children} 
      </div> 
    ); 
  };
  function IsSmallScreen(){
    const [smallScreen,detectChange] = useState(false)
      const detectSize = () =>{
        if(window.innerWidth<768){
          detectChange(true)
        }
        else{
          detectChange(false)
        }
      }
      useEffect(()=>{
          window.addEventListener('resize',detectSize);
          detectSize();
          return () =>{
              window.removeEventListener('resize',detectSize)
          }
      },[smallScreen,detectSize])
      return smallScreen;
  }
  function CheckScreen(){
    if(typeof window!==undefined){
      return IsSmallScreen();
    }
    else{
      return false;
    }
  }
  function DisplayEntry(post:any,index:number){
    const isSmallScreen=CheckScreen();
    console.log(isSmallScreen);
    if(isSmallScreen===true){
        return (
          <RevealOnScroll key={post.slug}>
          <div className="relative container mx-auto px-6 flex flex-col space-y-8 ">
            <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-2 md:mx-auto md:right-0 md:left-0">
            </div>
            <div className={`absolute z-10 h-8 w-8 left-0 object-cover rounded-full shadow-md border-4 bg-blue-400 border-white md:mx-auto md:left-0 md:right-0 `} >
                </div>
            <div className="relative z-0 pb-4">                          
                <div className='flex flex-row flex-wrap items-start'>
                <div className="relative pt-2  md:w-1/2 md:ml-0 md:mr-0 md:pl-0 md:pr-16">                
                <div className='w-full'>
                  <img
                  src={post.images[0]}
                  alt={post.title}
                  className='rounded-lg h-auto w-full md:max-h-96  object-cover border-4 border-sky-100 shadow-md'/> 
                  </div>
                </div>                
                <div className="relative pt-2  md:w-1/2 md:ml-0 md:pl-16">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-xs md:text-md text-indigo-600 tracking-wide" >{post.date}</span>
                        <h1 className="text-lg md:text-2xl font-bold pt-1">
                        {post.title} 
                        </h1>
                        <p className="pt-4 text-sm md:text-md">
                        {post.summary}
                        </p>
                        <div className=" pt-4 flex items-center flex-wrap">
                        <a 
                          className="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300" 
                          onClick={() => router.push(`/events/${post.slug}`)}
                          style={{ cursor: 'pointer' }}>
                          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                          <span className="relative">View Gallery</span>
                          </a>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div> 
        </RevealOnScroll>
        )
    }
    else if(index%2===0){
      return (
        <RevealOnScroll key={post.slug}>
          <AppearOnHover>
        <div className="relative container mx-auto px-6 flex flex-col space-y-8 ">
          <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-2 md:mx-auto md:right-0 md:left-0">
          </div>
          <div className={`absolute z-10 h-8 w-8 left-0 object-cover rounded-full shadow-md border-4 bg-blue-400 border-white md:mx-auto md:left-0 md:right-0 `} >
              </div>
          <div className="relative z-0 pb-4">                          
              <div className='flex flex-row flex-wrap items-start'>
              <div className="relative pt-2  md:w-1/2 md:ml-0 md:mr-0 md:pl-0 md:pr-16">                
              <div className='w-full'>
                <img
                src={post.images[0]}
                alt={post.title}
                className='rounded-lg h-auto w-full md:max-h-96  object-cover border-4 border-sky-100 shadow-md'/> 
                </div>
              </div>                
              <div className="relative pt-2  md:w-1/2 md:ml-0 md:pl-16">
                  <div className="bg-white p-6 rounded-md shadow-md">
                      <span
                          className="font-bold text-xs md:text-md text-indigo-600 tracking-wide" >{post.date}</span>
                      <h1 className="text-lg md:text-2xl font-bold pt-1">
                      {post.title} 
                      </h1>
                      <p className="pt-4 text-sm md:text-md">
                      {post.summary}
                      </p>
                      <div className=" pt-4 flex items-center flex-wrap">
                      <a 
                        className="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300" 
                        onClick={() => router.push(`/events/${post.slug}`)}
                        style={{ cursor: 'pointer' }}>
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">View Gallery</span>
                        </a>
                      </div>
                  </div>
              </div>
             </div>
          </div>
      </div>
      </AppearOnHover> 
      </RevealOnScroll>
      )
  }
    else{
        return (
          <RevealOnScroll key={post.slug}>
            <AppearOnHover>
          <div className="relative container mx-auto px-6 flex flex-col space-y-8" >
            <div className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-2 md:mx-auto md:right-0 md:left-0">
            </div>
            <div className='absolute z-10 h-8 w-8 left-0 object-cover rounded-full shadow-md border-4 bg-blue-400 border-white md:mx-auto md:left-0 md:right-0'>
              </div>
            <div className="relative z-0 pb-4">
                <div className='flex flex-row flex-wrap items-start'>
                  <div className="relative pt-2 md:w-1/2 md:ml-0 md:mr-0 md:pl-0 md:pr-16">                
                    <div className="bg-white p-6 rounded-md shadow-md">
                      <span className="font-bold text-xs md:text-md text-indigo-600 tracking-wide" >{post.date}</span>
                      <h1 className=" text-lg md:text-2xl font-bold pt-1">{post.title} </h1>
                      <p className="pt-4 text-sm md:text-md">{post.summary}</p>
                      <div className=" pt-4 flex items-center flex-wrap">
                        <a 
                          className="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300" 
                          onClick={() => router.push(`/events/${post.slug}`)}
                          style={{ cursor: 'pointer' }}>
                          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                          <span className="relative">View Gallery</span>
                          </a>
                        </div>
                    </div>
                  </div>                
                  <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-0 md:pl-16">
                  <div className='w-full '>
                      <img
                      src={post.images[0]}
                      alt={post.title}
                      className='rounded-lg h-auto w-full md:max-h-96  object-cover border-4 border-gray-100 shadow-md'/> 
                    </div>  
                </div>
               </div>
            </div>
        </div>
        </AppearOnHover>
        </RevealOnScroll>
        )
    }
            
}
  const isSmallScreen=CheckScreen();
  console.log(isSmallScreen);
  if(isSmallScreen===true){
    return (
      <div>
        <p className=" text-md md:text-2xl font-medium text-gray-700 mt-4 text-center pb-8 pt-8 animate-fade-left animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-backwards">
            Scroll down to find the Amazing Events we held!!
          </p>
        <div className="antialiased bg-blue-400 text-gray-800">  
        {posts.map((post, index) => DisplayEntry(post, index))}    
        </div>
      </div>
    );
  }
  else{
    return (
      <div>
        <InfiniteScroll/>
        <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        <p className=" text-md md:text-2xl font-medium text-gray-700 mt-4 text-center pb-8 pt-8 animate-fade-left animate-once animate-delay-[20ms] animate-ease-in animate-normal animate-fill-backwards">
            Scroll down to find the Amazing Events we held!!
          </p>
        <div className="antialiased bg-blue-400 text-gray-800">  
        {posts.map((post, index) => DisplayEntry(post, index))}    
        </div>
      </div>
    );
  }
  
};

export default EventsPage;
