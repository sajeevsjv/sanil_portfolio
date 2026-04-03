// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX; my=e.clientY;
  cursor.style.left=mx+'px'; cursor.style.top=my+'px';
});
(function animateRing(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animateRing);
})();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='16px';cursor.style.height='16px';ring.style.width='52px';ring.style.height='52px'});
  el.addEventListener('mouseleave',()=>{cursor.style.width='10px';cursor.style.height='10px';ring.style.width='36px';ring.style.height='36px'});
});

// Scroll progress
const bar=document.getElementById('progressBar');
window.addEventListener('scroll',()=>{
  bar.style.width=(window.scrollY/(document.body.scrollHeight-window.innerHeight)*100)+'%';
});

// Intersection observer
const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting) setTimeout(()=>e.target.classList.add('visible'),i*80);
  });
},{threshold:.15});
document.querySelectorAll('.timeline-item,.edu-item').forEach(el=>obs.observe(el));
