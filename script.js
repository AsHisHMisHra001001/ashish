gsap.from(".name .first-letter",{
    duration:2,
    opacity:0,
    y:25,
})

gsap.from(".name .dot",{
    opacity:0,

})

tl = gsap.timeline();
tl.from("nav a",{
    delay:1,
    y:30,
    x:20,
    opacity:0,
    stagger:0.5,
})

tl.from(".one",{
    y:30,
    opacity:0,
    
})
tl.from(".two",{
    y:30,
    opacity:0,
    
})

gsap.from(".profile",{
    delay:3,
    duration:2,
    opacity:0,
})
