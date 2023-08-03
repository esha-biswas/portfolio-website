

document.addEventListener('DOMContentLoaded', function () {
  var about = document.getElementById('about');
  var aboutme = document.getElementById('aboutme');
  var a = document.getElementById('a');


  var experi = document.getElementById('experi');
  var experience = document.getElementById('experience');
  var e = document.getElementById('e');
var span1=document.querySelector(".three .span1")
var span2=document.querySelector(".three .span2")
var spa1=document.querySelector(".two .span1")
var spa2=document.querySelector(".two .span2")
  


  var cont = document.getElementById('cont');
  var contact = document.getElementById('contact');
  var c = document.getElementById('c');


  var Hi = document.getElementById('Hi');
  var logo = document.getElementById('logo');
  var h = document.getElementById('h');


  about.addEventListener('click', function () {
    aboutme.classList.toggle('highlighted');
    spa1.classList.toggle("spango1");
    spa2.classList.toggle("spango2");

  });

  experi.addEventListener('click', function () {
    experience.classList.toggle('highlighted');
    span1.classList.toggle("spango1");
    span2.classList.toggle("spango2")

  });

  cont.addEventListener('click', function () {
    contact.classList.toggle('highlighted');
  });
  logo.addEventListener('click', function () {
    Hi.classList.toggle('highlighted');
  });
  a.addEventListener('click', function () {
    aboutme.classList.toggle('highlighted');
    spa1.classList.toggle("spango1");
    spa2.classList.toggle("spango2");
  });

  e.addEventListener('click', function () {
    experience.classList.toggle('highlighted');
    span1.classList.toggle("spango1")
    span2.classList.toggle("spango2")
    

  });

  c.addEventListener('click', function () {
    contact.classList.toggle('highlighted');
  });
  h.addEventListener('click', function () {
    Hi.classList.toggle('highlighted');
  });



});






// var logo=document.querySelector(".logo")
const header = document.querySelector('.header');
const h = document.querySelector('.h');
const a = document.querySelector('.a');
const e = document.querySelector('.e');
const c = document.querySelector('.c');
const icon = document.querySelector('.icon');

const sec_one = document.querySelector(".one");
const obs = new IntersectionObserver((enteries) => {
  const ent = enteries[0];
  // alert("hi")
  console.log(ent);
  ent.isIntersecting == false
    ? header.classList.add("scroll")
    : header.classList.remove("scroll");

  ent.isIntersecting == true
    ? h.classList.add("scrolled")
    : h.classList.remove("scrolled");
  ent.isIntersecting == true
    ? a.classList.add("scrolled")
    : a.classList.remove("scrolled");
  ent.isIntersecting == true
    ? e.classList.add("scrolled")
    : e.classList.remove("scrolled");
  ent.isIntersecting == true
    ? c.classList.add("scrolled")
    : c.classList.remove("scrolled");


  // if(ent.isIntersecting ===false){
  //   const media=()=>{
  //     let q= matchMedia("(max-width:700px)");
  //     if(q.matches){
  //       // document.querySelector("header")
  //       header.style.flexDirection="column";
  //     }
  //     else{

  //       header.style.flexDirection="row";
  //     }
  //     }

  //   onload=media;
  //   onresize=media;
  // }

},
  {
    root: null,
    rootMargin: " ",
    threshold: 0,
  }
);

obs.observe(sec_one);

const burger = document.querySelector(".burger")
const list = document.querySelector(".list")
const head = document.querySelector(".header")
const home = document.querySelector(".h")
const about = document.querySelector('.a');
const experience = document.querySelector('.e');
const contact = document.querySelector('.c');
const email = document.querySelector('.email');
const github = document.querySelector('.github');
const linkedin = document.querySelector('.linkedin');






home.addEventListener("click", () => {
  list.classList.toggle("v-class");
  head.classList.toggle("headr");
});

about.addEventListener("click", () => {
  list.classList.toggle("v-class");
  head.classList.toggle("headr");
});

experience.addEventListener("click", () => {
  list.classList.toggle("v-class");
  head.classList.toggle("headr");
});

contact.addEventListener("click", () => {
  list.classList.toggle("v-class");
  head.classList.toggle("headr");
});

email.addEventListener("click", () => {
  list.classList.toggle("v-class");
  head.classList.toggle("headr");
});

github.addEventListener("click", () => {
  list.classList.toggle("v-class");
  head.classList.toggle("headr");
});

linkedin.addEventListener("click", () => {
  list.classList.toggle("v-class");
  head.classList.toggle("headr");
});


burger.addEventListener("click", () => {
  list.classList.toggle("v-class");
  head.classList.toggle("headr");
});

// window.addEventListener('load', () => {
//   startQueries()
// })

// const startQueries = () => {
//   const MediaQueryNew = matchMedia('(max-width:700px)')



//   const ifMatchesChange = e => {
//     if (e.matches) {
//       console.log("hii")
//       const obs = new IntersectionObserver((enteries) => {
//         const ent = enteries[0];
//         if (ent.isIntersecting === true) {
//           burger.classList.add("disappear")
//           list.classList.remove("v-class")
//           header.style.flexDirection="row"
//           ul.style.flexDirection="row"


//         }
//         else {
//           burger.classList.remove("disappear")
//           list.classList.add("v-class")
//           header.style.flexDirection="column"
//           ul.style.flexDirection="column"


//         }

// },
//   {
//     root: null,
//     rootMargin: " ",
//     threshold: 0,
//   }
//       );

// obs.observe(sec_one);
//     }
//   }


// MediaQueryNew.addListener(ifMatchesChange)
// ifMatchesChange(MediaQueryNew)
// }



const media = () => {
  let q = matchMedia("(max-width:700px)");
  const header = document.querySelector('.header');
  const sec_one = document.querySelector(".one");
  const burger = document.querySelector(".burger")
  const list = document.querySelector(".list")
  // const ul = document.querySelector(".ul")
  const ul = document.querySelector(".header .list .ul")
  const email = document.querySelector('.email');
const github = document.querySelector('.github');
const linkedin = document.querySelector('.linkedin');


  if (q.matches) {
    const obs = new IntersectionObserver((enteries) => {
      const ent = enteries[0];
      if (ent.isIntersecting === true) {
        burger.classList.add("disappear")
        list.classList.remove("v-class")
        header.classList.remove("headr")
        header.style.flexDirection = "row"
        ul.style.flexDirection = "row"
        github.addEventListener("click", () => {
          list.classList.remove("v-class");
          header.classList.remove("headr");
        });
        linkedin.addEventListener("click", () => {
          list.classList.remove("v-class");
          head.classList.remove("headr");
        });
        email.addEventListener("click", () => {
          list.classList.remove("v-class");
          head.classList.remove("headr");
        });


      }
      else {
        burger.classList.remove("disappear")
        list.classList.add("v-class")
        // header.classList.("headr")
        header.style.flexDirection = "column"
        ul.style.flexDirection = "column"


      }

    },
      {
        root: null,
        rootMargin: " ",
        threshold: 0,
      }
    );

    obs.observe(sec_one);
  }
  else{
    const obs = new IntersectionObserver((enteries) => {
      const ent = enteries[0];
      if (ent.isIntersecting === false) {
        // burger.classList.add("disappear")
        // list.classList.remove("v-class")
        header.classList.remove("headr")
        header.style.flexDirection = "row"
        ul.style.flexDirection = "row"


      }
      // else {
      //   burger.classList.remove("disappear")
      //   list.classList.add("v-class")
      //   // header.classList.("headr")
      //   header.style.flexDirection = "column"
      //   ul.style.flexDirection = "column"


      // }

    },
      {
        root: null,
        rootMargin: " ",
        threshold: 0,
      }
    );

    obs.observe(sec_one);
  }

}
onload = media;
onresize = media;


// const exp =document.querySelector(".three  .span1");
// const exp1=document.querySelector(".e");

// exp1.addEventListener("click",()=>{
//   exp.classList.add(".spango1");
// })


