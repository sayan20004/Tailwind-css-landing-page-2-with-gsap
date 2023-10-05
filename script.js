var tl = gsap.timeline()
tl.from("#navbar img,#nav-part2 h2,#nav-part3 h3,#nav-part3 button",{
    y:-200,
    duration:1,
    stagger:0.3,
    opacity:0.5,
    delay:0.5
});
// tl.from("#navbar  ",{
//     y:-200,
//     duration:1,
//     stagger:0.2
// });
// tl.from("#navbar ",{
//     y:-200,
//     duration:1,
//     stagger:0.2
// });
tl.from("#ceneter-text h1,span",{
    y:100,
    opacity:0,
    stagger:0.3
});
tl.from("#center #img1 ,#img2,#main #img3",{
    scale:0,
    duration:1,
    opacity:0,
    stagger:0.3
});


