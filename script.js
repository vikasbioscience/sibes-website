const menuToggle=document.querySelector('.toggle');
const siteNav=document.getElementById('nav');
menuToggle?.addEventListener('click',function(){
  const open=siteNav.classList.toggle('open');
  this.setAttribute('aria-expanded',String(open));
});
siteNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  siteNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded','false');
}));
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&siteNav?.classList.contains('open')){
    siteNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded','false');
    menuToggle?.focus();
  }
});
