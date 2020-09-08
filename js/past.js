window.onload = function() {
    
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
    
    

    
    
    // SWORDS MOVING AND FLASHING-------------------------------------

    var timer_move_sword,
        timer_flashing,
        angle = 1,
        cnt = 0,
        current = document.getElementById('current');

    var price = document.getElementById('price'),
        date = document.getElementById('date'),
        dateTextContent = document.getElementById('date').textContent,
        date_refactored = dateTextContent.slice(3, 5) + '.' + dateTextContent.slice(0, 2) + dateTextContent.slice(5),
        date_js = new Date(date_refactored),
        now = new Date();

    if (dateTextContent == 'Сбор средств') {
        price.innerHTML = ''
    } else {
        price.innerHTML += 'р'
        if (date_js.getTime() > now.getTime()) {
            flashing()
            moving_swords()
        } else if (date_js.getTime() <= now.getTime()) {
            //pass
        }
    } // если дата турнира больше сегодняшней даты moving, flashing

    function moving_swords() {
        var swords = document.getElementById('swords')
        swords.style.transform = 'rotate(' + angle + 'deg)'
        angle += 1
        if (angle >= 360) {
            angle = 0
        }
        timer_move_sword = setTimeout(moving_swords, 10)
    }

    function flashing() {
        cnt += 1
        current.classList.toggle('current')
        timer_flashing = setTimeout(flashing, 1000)
        if (cnt >= 10) {
            clearTimeout(timer_flashing)
        }
    }


    //COINS TO TOURN >= 40000rubs-----------------------------------

    var price = document.getElementsByClassName('price'),
        coins = document.getElementsByClassName('coins'),
        price_fond = document.getElementsByClassName('price_fond');

    for (var i = 0; i < price.length; i++) {
        var num = price[i].textContent;
        if (num >= 40000) {
            for (var j = 0; j < coins.length; j++) {
                if (i == j) {
                    coins[j].style.visibility = 'visible';
                    price_fond[j].style.color = 'gold'
                }
            }
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
