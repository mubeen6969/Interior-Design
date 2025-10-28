  const mobilenav = document.querySelector("header .nav-btn");
  const list = document.querySelector("header");
  
  const togglenav = ()=>{
    list.classList.toggle("active");
};









  mobilenav.addEventListener("click",  ()=>  togglenav());






































function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

loco()


var tl = gsap.timeline()


function nav(){
    gsap.from('.main .logo',{
    x:-100,
    duration:2,
    opacity:0
})

gsap.from('header nav a',{
    y:-50,
    duration:1,
    opacity:0,
    stagger:0.2
})
gsap.from('header button',{
    x:50,
    duration:1,
    opacity:0
})
}
nav()

const herosection =()=>{
    tl.from(['.container-1 .left h1','.container-1 .left button'],{
        x:-200,
        opacity:0,
        duration:2
    })
    gsap.from('.container-1 .right img',{
        opacity:0,
        duration:2,
        y:10
    })
}
herosection()


const container_3 =()=>{
    gsap.from('.container-3 .image-wrapper',{
        x:-100,
        opacity:0,
        duration:2,
        scrollTrigger: {
      trigger: ".container-3",
      scroller: ".main",
      start: "top 50%"
      // end: "top -11%",
    //   scrub: 3,
    //   markers:true
      }
    })
    gsap.from([ '.container-3 .content h2','.container-3 .content button'],{
        x:100,
        opacity:0,
        duration:2,
        scrollTrigger: {
      trigger: ".container-3",
      scroller: ".main",
      start: "top 50%"
      // end: "top -11%",
    //   scrub: 3,
    //   markers:true
      }
    })
}

container_3()
const container_4 =()=>{
    gsap.from('.container-4 .left h2',{
        x:-100,
        opacity:0,
        duration:2,
        scrollTrigger: {
      trigger: ".container-4",
      scroller: ".main",
      start: "top 60%"
      // end: "top -11%",
    //   scrub: 3,
    //   markers:true
      }
    })
 
}

container_4()