

document.addEventListener('DOMContentLoaded', function () {
    var about = document.getElementById('about');
    var aboutme = document.getElementById('aboutme');
    var a = document.getElementById('a');


    var experi = document.getElementById('experi');
    var experience = document.getElementById('experience');
    var e = document.getElementById('e');


    var cont = document.getElementById('cont');
    var contact = document.getElementById('contact');
    var c = document.getElementById('c');


    var Hi = document.getElementById('Hi');
    var logo = document.getElementById('logo');
    var h = document.getElementById('h');


    about.addEventListener('click', function () {
        aboutme.classList.toggle('highlighted');
    });

    experi.addEventListener('click', function () {
        experience.classList.toggle('highlighted');
    });

    cont.addEventListener('click', function () {
        contact.classList.toggle('highlighted');
    });
    logo.addEventListener('click', function () {
      Hi.classList.toggle('highlighted');
  });
  a.addEventListener('click', function () {
    aboutme.classList.toggle('highlighted');
});

e.addEventListener('click', function () {
    experience.classList.toggle('highlighted');
});

c.addEventListener('click', function () {
    contact.classList.toggle('highlighted');
});
h.addEventListener('click', function () {
  Hi.classList.toggle('highlighted');
});
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 200) { /* Adjust this value to set the scroll position at which the header will be modified */
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});


window.addEventListener('scroll', function() {
  var header = document.getElementById('yourHeaderId'); // Replace 'yourHeaderId' with the ID of your fixed header
  
  var triggerHeight = 200; // Set the height at which you want the background color effect to start
  
  if (window.pageYOffset > triggerHeight) {
    header.classList.add('scroll'); // Add a CSS class to apply the background color effect
  } else {
    header.classList.remove('scroll'); // Remove the CSS class to revert the background color
  }
});


  // var logo=document.querySelector(".logo")
  const header= document.querySelector('.header');
  const sec_one=document.querySelector(".one");
  const obs=new IntersectionObserver( (enteries)=>{
    const ent=enteries[0];
    // alert("hi")
    console.log(ent);
    ent.isIntersecting == false 
    ? header.classList.add("scroll")
    : header.classList.remove("scroll");
  },
  {
    root: null,
    rootMargin:" ",
    threshold:0,
  }
  );

  obs.observe(sec_one);

  