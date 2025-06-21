'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

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


     <div  id="page1" className="h-[100vh] flex items-center justify-center  w-full bg-amber-600">
      <div className="size-40 bg-cyan-600"></div>
     </div>
     <div id="page2" className="h-[100vh]  flex items-center justify-center w-full bg-amber-800">
      <div className="size-40 bg-cyan-600"></div>
     </div>
     <div id="page3" className="h-[100vh]  flex items-center justify-center w-full bg-amber-950">
      <div className="size-40 bg-cyan-600"></div>
     </div>
    </>
  );
}
