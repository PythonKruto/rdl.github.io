window.onload = function(){
    
    
    /*Button to Top-----------------------*/
    
    var scrolled,
        btn_to_top = document.getElementById('btn_to_Top'),
        header = document.getElementById('header');
    
    window.onscroll = function(){
        scrolled = window.pageYOffset
        console.log(scrolled);
        if (scrolled >= 350){
            header.style.position = 'fixed';
            btn_to_top.style.visibility = 'visible';
        }else if (scrolled < 350){
            header.style.position = 'absolute';
            btn_to_top.style.visibility = 'hidden';
        }
    }
    window.onresize = function(){
        scrolled = window.pageYOffset
        console.log(scrolled);
        if (scrolled >= 350){
            header.style.position = 'fixed';
            btn_to_top.style.visibility = 'visible';
        }else if (scrolled < 350){
            header.style.position = 'absolute';
            btn_to_top.style.visibility = 'hidden';
        }
    }
    window.onload = function(){
        scrolled = window.pageYOffset
        
        if (scrolled >= 350){
            header.style.position = 'fixed';
            btn_to_top.style.visibility = 'visible';
        }else if (scrolled < 350){
            header.style.position = 'absolute';
            btn_to_top.style.visibility = 'hidden';
        }
    }
    
    var speed_totop= 20,
        timer_scrollTop;
    
    btn_to_top.onclick = function(event){
        event.preventDefault()
        
        timer_scrollTop = setTimeout(scrollToTop,2)
    }
    function scrollToTop(){
        scrolled = window.pageYOffset;
        
        window.scrollTo(0,scrolled-speed_totop)
        
        timer_scrollTop = setTimeout(scrollToTop,2)
        if (scrolled-speed_totop <= 0){
            clearTimeout(timer_scrollTop)
        }
    }
    
    
    
    //BURGER (NAV - hidden / visible)-----------------------------

    var burger = document.getElementById('burger'),
        nav = document.getElementById('nav');

    burger.onclick = function (event) {
        event.preventDefault()

        nav.classList.toggle('nav_show');
    }
    
}