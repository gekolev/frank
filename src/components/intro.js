 import { useRef, useEffect } from 'react';
 import * as React from "react"
 import {gsap} from "gsap";
//  import { SplitText } from 'gsap/SplitText'
//  gsap.registerPlugin(SplitText)


 
 const Intro = () => {
    const boxRef = useRef(null);

    // wait until DOM has been rendered
    useEffect(() => {

      gsap.from(boxRef.current, { duration:1, autoAlpha:0, ease:'power1', delay:1 });
    //   const split = new SplitText(boxRef.current,{
    //     type: "lines",
    //     linesClass: "line"
    //   })
    //   gsap.to(split.lines,{
    //     duration:1,
    //     y:0,
    //     opacity:1,
    //     stagger:0.2,
    //     ease: "power2"
    //   })
    });

   return (
     <div  className="intro">
        <div className="info-holder">
            <div className="info">
                <span>01/</span>
                <span>Currently Feelance Web Consultant</span>
                <span>Based on planet Earth</span>
                <span>Contact</span>
            </div>
        </div>
        <h1 ref={boxRef} className="font">
            <span className="title"> George Kolev</span>
            <br></br>
            <span className="title"> Creative Web Dev</span>
            <br></br>
        </h1>
        <h2>
            <span className="title font"> Portfolio 2022</span>
        </h2>
        <span className="plus-symbol">+</span>
        <div className="intro-bottom-holder">
            <div className="intro-bottom">
                <span className="font2">Looking to join an agency!</span>
            </div>
        </div>
     </div>
   )
 }
 
 export default Intro
 





 

//  import { useStaticQuery, graphql } from "gatsby"
//  import { StaticImage } from "gatsby-plugin-image"