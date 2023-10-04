let tl =gsap.timeline()

tl.from(".logo",{
    delay:.2,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
});

tl.from(".search",{
    delay:.2,
    opacity:0,
    y:20,
    ease:Expo.easeInOut
})

tl.from(".img",{
    delay:.7,
    opacity:0,
    stagger:.5,
    y:70,
    ease:Expo.easeInOut
})

tl.from(".bottom-bar",{
    delay:.9,
    opacity:0,
    x:-40,
    ease:Expo.easeInOut
})

tl.from(".icn",{
    delay:1,
    opacity:0,
    y:40,
    ease:Expo.easeInOut
})

tl.from(".titl.e span",{
    delay:1.2,
    opacity:0,
    x:-100,
    ease:Expo.easeInOut
})

tl.from(".media ul li",{
    delay:1.5,
    opacity:0,
    y:50,
    ease:Expo.easeInOut
})



