
 import * as React from "react";
 import gsap from "gsap";
 import { ScrollTrigger } from "gsap/all";
 import {useRef, useEffect} from "react";
import locomotiveScroll from "locomotive-scroll";
 //  import { useStaticQuery, graphql } from "gatsby"
//   import { StaticImage } from "gatsby-plugin-image"
gsap.registerPlugin(ScrollTrigger);

  const Outro = () => {
    locomotiveScroll.on("scroll", ScrollTrigger.update);
    

    const about = useRef(null);
    const spin = useRef(null);

    useEffect(()=>{
      const el2= about.current;
      const el = spin.current;  
      gsap.to(
        el2,{
        scrollTrigger:{
        trigger:el2,
        start: "bottom bottom",
        // end: "top top",
        end: "+=300",
        scrub: 1,
        toggleActions: "restart none none none",
        pin: el2, 
        markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "24px",
        }
      }})
    }, [])
    return (
      <div className="outro">
        <div ref={spin} className="holder">
            <div className="half">
                 <h3 ref={about} className="font">About me</h3>
            </div>
            <div className="half about-text">
                <ul>
                    <li>
                        <h4>Experience</h4>
                        <span> Front-end Developer </span>
                        <span> <a href="https://edesign.bg/"> Edesign </a> </span>
                    </li>
                </ul>
                <div>lorem ipsum dolor sit amed lorem ipsum dolor sit amet lorem ipsum dolor yada lorem ipsum amet.</div>
                <div>lorem ipsum dolor sit amed lorem ipsum dolor sit amet lorem ipsum dolor yada lorem ipsum amet.</div>
                <div>lorem ipsum dolor sit amed lorem ipsum dolor sit amet lorem ipsum dolor yada lorem ipsum amet.</div>
                <div>lorem ipsum dolor sit amed lorem ipsum dolor sit amet lorem ipsum dolor yada lorem ipsum amet.</div>
                <div>lorem ipsum dolor sit amed lorem ipsum dolor sit amet lorem ipsum dolor yada lorem ipsum amet.</div>
                <div>lorem ipsum dolor sit amed lorem ipsum dolor sit amet lorem ipsum dolor yada lorem ipsum amet.</div>

            </div>
        </div>
        <div className="helper"></div>
      </div>
    )
  }
  
  export default Outro
  