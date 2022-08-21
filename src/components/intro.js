 import { useRef, useEffect } from 'react';
 import * as React from "react"
 import {gsap} from "gsap";
//  import { SplitText } from 'gsap/SplitText'
//  gsap.registerPlugin(SplitText)
// gsap.registerPlugin(MotionPathPlugin);


 
 const Intro = () => {
    const boxRef = useRef(null);

    // wait until DOM has been rendered
    useEffect(() => {

    //   gsap.from(boxRef.current, { duration:1, autoAlpha:0, ease:'power1', delay:1 });
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
//     const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//     const tl2 = gsap.timeline({ defaults: { ease: "power4.inOut" } });

//     tl.fromTo(
//         ".first-line",
//         {
//           x:"-200%",
//         },
//         {
//             x: "0%",
//             duration:1,
//             stagger:0.5

//         }
//       );

//     tl.fromTo(
//         ".second-line",
//         {
//             x: "300%",
//         },
//         {
//             x:"0%",
//             duration:1,

//         }
//     );

// tl.to(".lightCyan-slider", {
//   x: "-30%",
//   duration: 1,
// });

// tl.to(
//   ".persianGreen-slider",
//   {
//     x: "-60%",
//     duration: 1.5,
//   }
// );

// tl.to(
//   ".white-slider",
//   {
//     x: "-30%",
//     duration: 1.5,
//   },
//   "-=1"
// );


// tl.to(".preloader", {
//   x: "200%",
//   duration: 1,
// });

// tl.fromTo(
//   ".info-holder",
//   {
//     opacity: 0,
//   },
//   {
//     opacity: 1,
//     duration: 1,
//   },
//   "-=2"
// );


  
// tl.fromTo(
//     ".plus-symbol",
//     {
//       x:"-100%",
//     },
//     {
//         x: "0%",
//         duration:5,
//         rotate:360
//     }
//   );
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".lightCyan-slider", {
  x: "-10%",
  duration: 1,
});

tl.to(
  ".persianGreen-slider",
  {
    x: "-20%",
    duration: 0.75,
  },
  "-=1"
);

tl.to(
  ".white-slider",
  {
    x: "-30%",
    duration: 0.75,
  },
  "-=1"
);

tl.to(".hide", {
  x: "0%",
  duration: 1,
  opacity: 1,
});

tl.to(".preloader", {
  x: "200%",
  duration: .75,
});


    });

   return (
     <div className="intro">
        {/* <div className="preloader">
            <div className="lightCyan-slider"></div>
            <div className="persianGreen-slider"></div>
            <div className="white-slider"></div>
        </div> */}
          <div className="preloader d-only">
            <div className="lightCyan-slider"></div>
            <div className="persianGreen-slider"></div>
            <div className="white-slider"></div>
          </div>
        <div className="info-holder">
            <div className="info">
                <span className="d-only">01/</span>
                <span className="d-only">Currently Feelance Web Consultant</span>
                <span>Based in Europe</span>
                <span><a href="mailto:george.gkolev@gmail.com">Contact</a></span>
            </div>
        </div>
        <div className="center">
        <h1 ref={boxRef} className="font full">
            <span className="first-line title"> George Kolev</span>
            <br></br>
            <span className=" first-line title"> Creative Web Dev</span>
            <br></br>
        </h1>
        <h2 className='full'>
            <span className=" second-line title font"> Portfolio 2022</span>
            <span className="plus-symbol">+</span>
        </h2>
        
        </div>
       
        <div className="info-holder intro-bottom-holder">
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