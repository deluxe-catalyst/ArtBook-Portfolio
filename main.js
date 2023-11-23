$(function main_slider()
{
    $('.slider').slick(
    {
        variableWidth: true, 
    });
})


window.addEventListener('scroll', function() 
{
  var ch = document.querySelector('.container_head')
  if (this.window.scrollY > 40) {
    ch.style.backdropFilter = 'blur(40px) saturate(5)';
    ch.style.backgroundColor = 'rgba(59, 59, 59, 0.8)';
  }
  else{
    ch.style.backgroundColor = 'transparent';
    ch.style.backdropFilter = 'none';
  }
})


const observer_gallery = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadein')
    }
  });
});

const gallery = document.querySelectorAll('.gallery');
gallery.forEach((el) => observer_gallery.observe(el));

const observer_text = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('blurrix')
    }
  });
});

const text = document.querySelectorAll('.ultrakunst');
text.forEach((el) => observer_text.observe(el));



const observer_draws_info = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('blurrix_2')
    }
  });
}, {threshold: 0.1});


const draws_info = document.querySelectorAll('.draws_info');
draws_info.forEach((el) => observer_draws_info.observe(el));



const observer_green_ellipse = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('ellipse_opacity')
    }
  });
}, {threshold: 0.2});


const green_ellipse = document.querySelectorAll('.ellipse2');
green_ellipse.forEach((el) => observer_green_ellipse.observe(el));



const observer_lines = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('lines_translate')
    }
  });
}, {threshold: 0.7});


const lines = document.querySelectorAll('.lines_up');
lines.forEach((el) => observer_lines.observe(el));



const observer_video = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('video_anim')
    }
  });
}, {threshold: 0.1, rootMargin: '0px 100px 0px 0px'});


const video = document.querySelectorAll('.grey_rec, iframe');
video.forEach((el) => observer_video.observe(el));



const observer_info_p2 = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('info_p2_anim')
    }
  });
}, {threshold: 0.5});


const info_p2 = document.querySelectorAll('.info_p2');
info_p2.forEach((el) => observer_info_p2.observe(el));

const observer_ipad = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('ipad_anim')
    }
  });
}, {threshold: 0.5});


const ipad = document.querySelectorAll('.ipad');
ipad.forEach((el) => observer_ipad.observe(el));




const observer_info_p3 = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('info_p3_anim')
    }
  });
}, {threshold: 0.5});


const info_p3 = document.querySelectorAll('.info_p3');
info_p3.forEach((el) => observer_info_p3.observe(el));

const observer_iphone = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('iphone_anim')
    }
  });
}, {threshold: 0.5});


const iphone = document.querySelectorAll('.iphone');
iphone.forEach((el) => observer_iphone.observe(el));


const observer_line3 = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('line3_anim')
    }
  });
}, {threshold: 1});


const line3 = document.querySelectorAll('.line3');
line3.forEach((el) => observer_line3.observe(el));

const observer_gew = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('gew_anim')
    }
  });
}, {threshold: 0.8});


const gew = document.querySelectorAll('.gpic');
gew.forEach((el) => observer_gew.observe(el));


const observer_footer = new IntersectionObserver((entries) => {
  entries.forEach((entry)=> {
    if (entry.isIntersecting) {
      entry.target.classList.add('foot_anim')
    }
  });
}, {threshold: 0.8});


const footer = document.querySelectorAll('.container-foot');
footer.forEach((el) => observer_footer.observe(el));
