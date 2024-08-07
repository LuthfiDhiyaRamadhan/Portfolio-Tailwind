//navbar fixed
window.onscroll=function(){
    const header=document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop=document.querySelector('#to-Top');

    if(window.pageYOffset>fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//klik dimana aja
window.addEventListener('click',function(e){
    if(e.target != hamburger && e.target!=navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

//darkmode
const darkToggle=document.querySelector('#dark-toggle');
const html =document.querySelector('html');
darkToggle.addEventListener('click',function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme='dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme='light'
    }
});

//pindah toggle mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked=true;
  } else {
    darkToggle.checked=false;
  }

 
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.tab-button');
        const contents = document.querySelectorAll('.tab-content');
        const indicator = document.getElementById('indicator');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                buttons.forEach(btn => btn.classList.remove('active'));

                // Hide all tab contents
                contents.forEach(content => content.classList.add('hidden'));

                // Show the target content
                const targetId = this.getAttribute('data-target');
                document.getElementById(targetId).classList.remove('hidden');

                // Add active class to clicked button
                this.classList.add('active');

                // Move the indicator
                const index = Array.from(buttons).indexOf(this);
                const tabWidth = this.offsetWidth;
                indicator.style.transform = `translateX(${tabWidth * index}px)`;
            });
        });

        // Optionally set initial active tab
        buttons[0].click();
    });
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.portfolio-slide');
        let currentIndex = 0;
    
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('hidden', i !== index);
            });
        }
    
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
    
        showSlide(currentIndex);
        setInterval(nextSlide, 6000); // Change slide every 5 seconds
    });
    
    

