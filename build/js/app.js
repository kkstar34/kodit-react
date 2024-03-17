$(document).ready(function () {

    $(".menu--enter").on("click",()=>{
    
        $(".menu").css({
            right:"0%"
        })
    })

    $("a").on("click",()=>{
    
        $(".menu").css({
            right:"-100%"
        })
    })
    
    $(".menu--exit").on("click",()=>{
        
        $(".menu").css({
            right:"-100%"
        })
    })


    let subMenu = document.querySelector('.sub-menu');
    let se = document.querySelector('.se')

    se.addEventListener('click',()=>{
        console.log('menu')
        subMenu.classList.toggle('active');
        if(subMenu.classList.contains('active')){
            se.innerHTML = "Services <i class='fas fa-chevron-up'></i>"
        }else{
            se.innerHTML = "Services <i class='fas fa-chevron-down'></i>"
        }
       
    })
    let sp = document.querySelector('.sp-lang');
    let lg = document.querySelector('.lang')

    const burgerMenu = document.getElementById('menu--enter');
    const menuList = document.getElementById('menu');

    const li = document.querySelector('.li-lang')


    window.addEventListener('click' , (event)=> {
        const isClickInside = burgerMenu.contains(event.target) || menuList.contains(event.target) ||  event.target.classList.contains('fa-chevron-down') || event.target.classList.contains('fa-chevron-up') ;
        console.log( li.contains(event.target))
        if (!isClickInside) {
            console.log("ahi")
            $(".menu").css({
                right:"-100%"
            })

            lg.classList.remove('active');
            subMenu.classList.remove('active');
        }
        
    })

 
    sp.addEventListener('click',()=>{
        console.log('menu')
        lg.classList.toggle('active');
        if(lg.classList.contains('active')){
            sp.innerHTML = "FR  <i class='fas fa-chevron-up'></i>"
        }else{
            sp.innerHTML = "FR  <i class='fas fa-chevron-down'></i>"
        }
    })
    
});

