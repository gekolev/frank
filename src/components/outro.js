
 import * as React from "react";
 import gsap from "gsap";
 import { ScrollTrigger } from "gsap/all";
//  import {useRef, useEffect} from "react";
// import locomotiveScroll from "locomotive-scroll";
 //  import { useStaticQuery, graphql } from "gatsby"
//   import { StaticImage } from "gatsby-plugin-image"
gsap.registerPlugin(ScrollTrigger);

  const Outro = () => {
    // locomotiveScroll.on("scroll", ScrollTrigger.update);
    

    // const about = useRef(null);
    // const spin = useRef(null);

    // useEffect(()=>{
    //   const el2= about.current;
    //   const el = spin.current;
    // }, [])
    return (
      <div className="outro">
        <div className="holder">
            <div className="half">
                 <h3 data-scroll data-scroll-class="scroll-class" className="font animate">About me</h3>
            </div>
            <div className="half about-text">
                
                  <h4 data-scroll data-scroll-class="scroll-class" className="animate">Experience</h4>  
                  <ul>
                    <li>
                        <div data-scroll data-scroll-class="scroll-class" className="animate item">
                          <span> Front-end Developer </span>
                          <span className="link"> <a href="https://edesign.bg/"> <span className="arrow">&#8594;</span> Edesign </a> </span>
                        </div>
                    </li>
                    <li>
                        <div data-scroll data-scroll-class="scroll-class" className="animate item">
                          <span> UI &amp; UX intern </span>
                          <span className="link"> <a href="https://ny.se/"> <span className="arrow">&#8594;</span> Ny </a> </span>
                        </div>
                    </li>
                    <li>
                        <div data-scroll data-scroll-class="scroll-class" className="animate item">
                          <span> Digital Designer </span>
                          <span className="link"> <a href="https://www.facebook.com/ssa.jonkoping/"> <span className="arrow">&#8594;</span> SSA </a> </span>
                        </div>
                    </li>
                    <li>
                        <div data-scroll data-scroll-class="scroll-class" className="animate item">
                          <span> Teaching assistant </span>
                          <span className="link"> <a href="https://ju.se/en.html"> <span className="arrow">&#8594;</span> Ju </a> </span>
                        </div>
                    </li>
                  </ul>
                  <h4 data-scroll data-scroll-class="scroll-class" className="animate">Education</h4>  
                  <ul>
                    <li>
                        <div  data-scroll data-scroll-class="scroll-class" className="animate item">
                          <span> MSc in User Experience </span>
                          <span className="link"> <a href="https://ju.se/en.html"> <span className="arrow">&#8594;</span> Ju </a> </span>
                        </div>
                    </li>
                    <li>
                        <div data-scroll data-scroll-class="scroll-class" className="animate item">
                          <span> BSc in Informatics and media </span>
                          <span className="link"> <a href="https://ju.se/en.html"> <span className="arrow">&#8594;</span> Ju </a> </span>
                        </div>
                    </li>
                    <li>
                        <div data-scroll data-scroll-class="scroll-class" className="animate item">
                          <span> American College</span>
                          <span className="link"> <a href="https://ac-arcus.com/en"> <span className="arrow">&#8594;</span> Arcus </a> </span>
                        </div>
                    </li>
                    
                  </ul>               
            </div>
        </div>
      </div>
    )
  }
  
  export default Outro
  