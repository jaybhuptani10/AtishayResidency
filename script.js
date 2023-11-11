var w = window.innerWidth;
if(w>=660){
  Shery.imageEffect(".bimg", {
    style: 4 /*OR 5 for different variant */,
    // debug: true,
    gooey:true
  });
  Shery.imageMasker(".picimg" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Atishay",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".motive" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.textAnimate(".heading h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


  Shery.imageEffect(".back",{
    style: 4,
    config:{"uColor":{"value":false},"uSpeed":{"value":0.31,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":11.41},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1182965299684544},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.5,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.03,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.53,"range":[0,10]},"metaball":{"value":0.14,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.56,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
   


  })
  // Shery.imageEffect(".back", {
  //   style: 3,
  //   /*optional parameters
  //   these parameter dose not applies to custom scroll trigger callback */
  //   scrollSnapping: true,
  //   scrollSpeed: 6,
  //   touchSpeed: 6,
  //   damping: 7,
  // });

var h1s= document.querySelectorAll(".elem h1");
var index = 0;
document.querySelector(".full-screen")
.addEventListener("click",function(){
    gsap.to(h1s[index],{
      top: '-=100%',
      ease:Expo.easeInOut,
      duration: 1,
      onComplete:function(){
        gsap.set(this._targets[0],{top:"100%"});
      },
    })
    index === h1s.length-1 ? (index = 0) : index++;
    
    gsap.to(h1s[index],{
      top: '-=100%',
      ease:Expo.easeInOut,
      duration: 1
    })
})
    
}

