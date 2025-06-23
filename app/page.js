'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  // const navbox = useRef(null)
//   const boxRef1 = useRef(null)
//   const boxRef2 = useRef(null)
//   const boxRef3 = useRef(null)
//   const [animate, setAnimate] = useState(false)

//   const toggleAniamtion = ()=>{
//     setAnimate(!animate)
//     console.log("state changed")
//   }


// // useEffect(()=>{

// //   gsap.to('#box1',{
// //     x:animate ? 1000 :0,
// //     duration : 2,
// //     // rotateZ : 360,
// //     // rotateX : 360,
// //     // backgroundColor : 'purple',
  
   
// //     // repeat : -1,
// //     // yoyo : 'true'


    
// //   })

// // },[animate])


// // useEffect(()=>{
// // gsap.from('h1',{
// //   opacity : 0,
// //   duration:0.5,
// //   y:40,
// //   stagger :0.3
// // })
// // },[animate])


// let timeLine = gsap.timeline()



//   timeLine.to(boxRef1.current,{
//     x: 1000,
//     duration : 1,
    
//   })

  
//   timeLine.to(boxRef2.current,{
//     x: 1000,
//     duration : 1,
    
//   })
  
//   timeLine.to(boxRef3.current,{
//     x: 1000,
//     duration : 1,
    
// //   })
// let tl = gsap.timeline()
// useEffect(()=>{

  
//   tl.from("h1",{
//     opacity : 0,
//     y :-30
//   })

  
// },[])


// useEffect(() => {
//   tl.from('h2',{
//     opacity : 0,
//     x: -40,
//     stagger : 0.2
//   })

//   tl.from('h3',{
// opacity :0,
// y : 50,
// scale : 0.3
// })

 
// }, [])


// useEffect(()=>{

// },[])

// let initalPath = "M 10 80 Q 500 80 1000 80";
// let finalpath = "M 10 80 Q 500 80 1000 80"

const divRef = useRef(null)

useEffect(()=>{

  gsap.from('#page1 #box1',{
    rotate : 360,
    duration : 3
  })
  gsap.from('#page2 #box2',{
    rotate : 360,
    duration : 3,
    scrollTrigger : { 
     trigger :  "#page2 #box2",
     start : "top 80%",
     end : 'top 50%',
     scrub : 2,
    //  markers : 'true'
    }
  })


  gsap.from('#page3 #box3',{
    x : 1000,
    rotateY : 360,
    yoyo : 'true',
    duration : 2,
    
    scrollTrigger : {
      trigger : '#page3 #box3',
      start : 'top 80%',
      end : 'bottom 40%',
      // markers : 'true'
    }
  })


gsap.to('#vScroll h1',{
  transform : 'translateX(-80%)',
  scrollTrigger : {
    trigger : '#vScroll',
    // markers : 'true',
    start : 'top 0%',
    end : 'top -100%',
    scrub : 5,
    pin : true
  }
})

},[])



const mouseEnter = (e)=>{
  const boundingBox = e.currentTarget.getBoundingClientRect();
const relativeY = e.clientY - boundingBox.top;

   let path = `M 10 200 Q ${e.clientX} ${relativeY} 1600 200`
  console.log(path);
  
gsap.to('svg path',{
  attr : {
    d : path
  },
  ease : 'elastic.out(1,0.2)',
})
  
}

const mouseLeave = (details)=>{
  console.log(details)
  let path = `M 10 200 Q 800 200 1600 200`
  gsap.to('svg path',{
    attr : {
      d : path
    }
  })
}

useEffect(()=>{
},[])




  return (
    <>
 {/* <div  className="bg-gray-950 h-20 flex justify-between px-10  items-center">

  <h1 className="font-semibold text-2xl tracking-widest">Hasan</h1>

  <div className="flex gap-4 mr-20">
    <h2>Home</h2>
    <h2>Skills</h2>
    <h2>About</h2>
    <h2>More</h2>
  </div>

 </div>
    <h3 className="text-9xl font-semibold mt-[30vh] ml-32">Hi, i'm Shaharia Hasan</h3>
     */}


     <div  id="page1" className="h-[100vh] flex items-center justify-center  w-full bg-red-950">
      <div id="box1" className="size-40 bg-cyan-600"></div>
     </div>
     <div id="page2" className="h-[100vh]  flex items-center justify-center w-full bg-amber-800">
      <div id="box2" className="size-40 bg-cyan-600"></div>
     </div>
     <div id="page3" className="h-[100vh] overflow-hidden flex items-center justify-center w-full bg-amber-950">
      <div id="box3" className="size-40 bg-cyan-600"></div>
     </div>


     <div id="vScroll" className="h-[100vh] w-full bg-gray-950 flex items-center px-10 " >
          <h1  className="text-[50vh] text-gray-300 whitespace-nowrap font-bold uppercase">Hello World, i'm Shaharia Hasan</h1>
     </div>










     <div ref={divRef} className="h-[40vh] w-full  "
     onMouseMove={mouseEnter}
     onMouseLeave={mouseLeave}>
      <svg width="1600" height="500" >
  <path
  
    d="M 10 200 Q 800 200 1600 200"
    stroke="white"
    fill="transparent"/>
</svg>
     </div>




     {/* <div className="bg-red-950 w-full h-[100vh]"></div> */}
    </>
  );
}
