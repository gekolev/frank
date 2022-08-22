import { useEffect } from "react"

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"

const scroll = {
    // Locomotive Scroll
    // https://github.com/locomotivemtl/locomotive-scroll#instance-options
    container: "#___gatsby",
    options: {
      smooth: true,
      smoothMobile: true,
      getDirection: true,
      touchMultiplier: 2.5,
      lerp: 0.5,
    },
  }

const Scroll = callbacks => {
    
  useEffect(() => {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    })
    locomotiveScroll.update()
    
    var time = 1;

    var interval = setInterval(function() { 
    if (time <= 2) { 
        locomotiveScroll.update()
        console.log("tick");
        time++;
    }
    else { 
        clearInterval(interval);
    }
    }, 1000);


    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on("scroll", func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction)
    })
    console.log("function works;");

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll