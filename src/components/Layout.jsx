import React ,{useLayoutEffect, useRef,useEffect,useState} from "react";
import { Outlet } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import Footer from './Footer'
export default function Layout() {
	  

	  useEffect(()=>{
		  const handleScroll2=event=>{
		const navbar=document.querySelector('#navbar');
		
		  if(window.scrollY > 215){
navbar.classList.remove('py-4');
navbar.classList.add('py-2');

		  }else{
			  navbar.classList.remove('py-2');
				navbar.classList.add('py-4');
		  }
		  
		  }
	window.addEventListener('scroll', handleScroll2);
	return ()=>{
		window.removeEventListener('scroll',handleScroll2)
	}
},[]);

 
	  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
//create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
	  entries.forEach((entry)=>{
		 if( entry.isVisible == false){
			 setActiveSection(null);
		 }
	  });
//Update state with the visible section ID
      if (visibleSection) {
		
        setActiveSection(visibleSection.id);
      }
    });
	
	//Get custom attribute data-section from all sections
    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      observer.current.observe(section);
	  
    });
	
//Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);


  return (
    <div style={{position:'relative'}}  >

    <Navbar activeSection={activeSection} />  
	
    <Home></Home>
     <Portfolio></Portfolio> 
    <About></About>
     <Contact/> 
    <Footer/>
    </div>
  )
}
