var t1=gsap.timeline();
t1
   .from("#nav",{
    opacity:0,
    y:-50,
    duration:.6,
   })
   .from("#nav h1",{
    x:-250,
    opacity:0,
    duration:.6,
   })
   .from("#nav h3",{
    opacity:0,
    duration:.5,
   })
   .from("#content",{
    opacity:0,
    // y:500,
    duration:1,
   })
   .from("#overlay-1 h1",{
    opacity:0,
    // x:-800,
    duration:.6,
})
.from("#circle",{
    opacity:0,
    x:800,
    duration:1,
    delay:-.6  })


gsap.to("#overlay-1",{
    scrollTrigger:{
        // markers:true,
        trigger:"#overlay-1",
        start:"top 70%",
        end:"bottom 50%",
        scroller:"body",
        scrub:1,
    },
    opacity:0,
    duration:.3,  
    y:-50,

})    
gsap.from("#overlay-2",{
    scrollTrigger:{
        // markers:true,
        trigger:"#overlay-2",
        start:"top 90%",
        end:"bottom 70%",
        scroller:"body",
        scrub:1,
    },
    opacity:0,
    duration:.3,  
    y:-50,

})    
gsap.from("#elem",{
    scrollTrigger:{
        // markers:true,
        trigger:"#elem",
        start:"top 80%",
        end:"bottom 50%",
        scroller:"body",
        scrub:1,
    },
    opacity:0,
    duration:.3,
    // scale:1.2,  
    y:100,

})    
gsap.from("#A-Z h3,h4",{
    scrollTrigger:{
        // markers:true,
        trigger:"#elem",
        start:"top 90%",
        end:"bottom 70%",
        scroller:"body",
        scrub:true,
    },
    opacity:0,
    // rotate:360,
    // duration:.3, 
    x:800,

})   
gsap.from("#prt1-left img",{
    scrollTrigger:{
        trigger:"#prt1-left",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    x:-1000,
    rotate:90,
    opacity:0,
}) 
gsap.from("#prt1-right img",{
    scrollTrigger:{
        trigger:"#prt1-left",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    x:1000,
    rotate:-90,
    opacity:0,
}) 
gsap.from("#prt1-right-bottom",{
    scrollTrigger:{
        trigger:"#prt1-right-bottom",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    },
    // height:0,
    opacity:0,
    y:100,
    
}) 
gsap.from("#prt-2-bottom-right",{
    scrollTrigger:{
        trigger:"#prt-2-bottom-right",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"bottom 80%",
        scrub:true,
    },
    // height:0,
    // opacity:0,
    x:800,
    
}) 
gsap.from("#prt-2-bottom-left-top",{
    scrollTrigger:{
        trigger:"#prt-2-bottom-left-top",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"bottom 80%",
        scrub:true,
    },
    // height:0,
    // opacity:0,
    x:-800,
    
}) 
gsap.to("#prt-3-center img",{
    scrollTrigger:{
        trigger:"#prt-3-center",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    },
    // height:0,
    // opacity:0,
    scale:1,
    
}) 
gsap.to("#prt-4-box1",{
    scrollTrigger:{
        trigger:"#prt-4-box1",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"bottom 80%",
        scrub:true,
    },
    // y:100,
    // height:0,
    // opacity:0,
    scale:1,
    
}) 
gsap.to("#prt-4-box2",{
    scrollTrigger:{
        trigger:"#prt-4-box2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"bottom 80%",
        scrub:true,
    },
    // y:100,
    // height:0,
    // opacity:0,
    scale:1,
    
}) 
gsap.to("#prt-4-box3",{
    scrollTrigger:{
        trigger:"#prt-4-box3",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"bottom 80%",
        scrub:true,
    },
    // y:100,
    // height:0,
    // opacity:0,
    scale:1,
    
}) 
gsap.to("#prt-4-box4",{
    scrollTrigger:{
        trigger:"#prt-4-box4",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"bottom 80%",
        scrub:true,
    },
    // y:100,
    // height:0,
    // opacity:0,
    scale:1,
    
}) 
gsap.to("#prt-4-box5",{
    scrollTrigger:{
        trigger:"#prt-4-box5",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"bottom 80%",
        scrub:true,
    },
    // y:100,
    // height:0,
    // opacity:0,
    scale:1,
    
}) 
gsap.from("#prt-5-left img",{
    scrollTrigger:{
        trigger:"#prt-5-left img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    x:-600,
    // height:0,
    // opacity:0,
    scale:1.2,
    
}) 
gsap.from("#prt-5-right-top h1",{
    scrollTrigger:{
        trigger:"#prt-5-right-top",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    x:600,
    // height:0,
    opacity:0,
    scale:1.2,
    
}) 
gsap.from("#prt-5-right-top h3",{
    scrollTrigger:{
        trigger:"#prt-5-right-top",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    x:-600,
    // height:0,
    opacity:0,
    scale:1.2,
    
}) 
gsap.from("#prt-5-right-top p",{
    scrollTrigger:{
        trigger:"#prt-5-right-top",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    x:600,
    // height:0,
    opacity:0,
    scale:1.2,
    
}) 
gsap.from("#prt-5-right-bottom-left",{
    scrollTrigger:{
        trigger:"#prt-5-right-bottom",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    x:300,
    // height:0,
    opacity:0,
    scale:1.2,
    
}) 
gsap.from("#prt-5-right-bottom-right",{
    scrollTrigger:{
        trigger:"#prt-5-right-bottom",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    x:-300,
    // height:0,
    opacity:0,
    scale:1.2,
    
})
gsap.to("#prt-6-center img",{
    scrollTrigger:{
        trigger:"#prt-6-center",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    // height:0,
    // opacity:0,
    scale:1,
    
})
gsap.from("#prt7-left img",{
    scrollTrigger:{
        trigger:"#prt7-left",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    x:-1000,
    scale:1.2,
    opacity:0,
}) 
gsap.from("#prt7-right img",{
    scrollTrigger:{
        trigger:"#prt7-left",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 100%",
        scrub:true,
    },
    y:1000,
    // rotate:-90,
    opacity:0,
}) 
gsap.from("#prt7-right-bottom",{
    scrollTrigger:{
        trigger:"#prt7-right-bottom",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    },
    // height:0,
    opacity:0,
    y:100,
    
}) 
gsap.from("#prt-8-1",{
    scrollTrigger:{
        trigger:"#prt-8-2-top",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 50%",
        scrub:true,
    },
    opacity:0,
    x:-100,
})
gsap.from("#prt-8-2-top",{
    scrollTrigger:{
        trigger:"#prt-8-2-top",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 50%",
        scrub:2,
    },
    opacity:0,
    y:-100,
    x:-200,
    scale:1.3,
    
})
gsap.from("#prt-8-3-top",{
    scrollTrigger:{
        trigger:"#prt-8-2-top",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 50%",
        scrub:2,
    },
    opacity:0,
    y:-100,
    x:200,
    scale:1.3,
})
gsap.from("#prt-8-2-bottom",{
    scrollTrigger:{
        trigger:"#prt-8-2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 50%",
        scrub:1,
    },
    opacity:0,
    y:500,
    // x:200,
    // scale:1.3,
})
gsap.from("#prt-8-3-bottom",{
    scrollTrigger:{
        trigger:"#prt-8-2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 50%",
        scrub:1,
    },
    opacity:0,
    y:500,
    // x:200,
    // scale:1.3,
})
gsap.from("#footer",{
    scrollTrigger:{
        trigger:"#footer",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 50%",
        scrub:1,
    },
    opacity:0,
    y:-300,
    // x:200,
    // scale:1.3,
})


 
      
    
