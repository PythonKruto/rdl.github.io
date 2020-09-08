$(function () {

    // SCROLL TO TOP HEADER FIXED------------------------------

    var intro = document.getElementById('intro'),
        btn_to_Top = document.getElementById('btn_to_Top'),
        introH = document.getElementById('intro').offsetHeight,
        scrolled,
        timer_toTop,
        header = document.getElementById('header');

    window.onload = function (event) {

        scrolled = window.pageYOffset;
        if (scrolled >= introH - 100) {
            btn_to_Top.style.visibility = 'visible';
            header.classList.add('h_fixed')
        } else {
            btn_to_Top.style.visibility = 'hidden';
            header.classList.remove('h_fixed')
        }

    }
    window.onscroll = function (event) {

        scrolled = window.pageYOffset;
        if (scrolled >= introH - 100) {
            btn_to_Top.style.visibility = 'visible';
            header.classList.add('h_fixed')
        } else {
            btn_to_Top.style.visibility = 'hidden';
            header.classList.remove('h_fixed')
        }

    }
    window.onresize = function (event) {

        scrolled = window.pageYOffset;
        if (scrolled >= introH - 100) {
            btn_to_Top.style.visibility = 'visible';
            header.classList.add('h_fixed')
        } else {
            btn_to_Top.style.visibility = 'hidden';
            header.classList.remove('h_fixed')
        }

    }

    btn_to_Top.onclick = function (event) {
        event.preventDefault()
        scrolled = window.pageYOffset;
        toTop()
    }

    function toTop() {
        scrolled -= 20;
        window.scrollTo(0, scrolled);
        timer_toTop = setTimeout(toTop, 2)
        if (scrolled < 0) {
            scrolled = 0
            clearTimeout(timer_toTop)
            console.log('123')
        }


    }

    // AUTO ANNOUNCER------------------------------------

    var slide = document.getElementById('slide'),
        i = 1,
        edge = slide.offsetWidth,
        two = document.getElementById('two'),
        x = parseInt(edge / 2);

    move()

    function move() {
        edge = slide.offsetWidth
        if (x >= edge - 5) {
            i = -1
            two.style.boxShadow = '5px 0 0 blue';

        } else if (x <= 5) {
            i = 1
            two.style.boxShadow = '5px 0 0 red';
        }
        x += i
        two.style.width = x + 'px'
        setTimeout(move, 1)
    }


    //ADS SLIDER------------------------------------

    var position = 0;
    var timer,
        slider = document.querySelector('.slider'),
        x_change = slider.offsetWidth;

    autochange()

    function autochange() {
        timer = setTimeout(change, 5000)
    }

    function change() {
        var slider_row = document.getElementById('slider_row'),
            x_change = slider.offsetWidth;

        position += x_change
        if (position > x_change) {
            position = 0;
        }
        slider_row.style.left = -position + 'px';
        autochange()
    }

    //CHANGE VIDEOFON AND COLOR INTRO------------------------------------

    var video = document.getElementById('video'),
        horde = document.getElementById('horde'),
        horde_color = document.getElementById('horde_color'),
        alliance = document.getElementById('alliance'),
        alliance_color = document.getElementById('alliance_color'),
        check = '',
        intro_title = document.getElementById('intro_title'),
        header_logo = document.getElementById('header_logo'),
        header_icon = document.getElementById('header_icon'),
        nav_link = document.getElementsByClassName('nav_link');

    horde.onclick = function () {
        alliance_color.style.background = 'transparent'
        horde_color.style.background = '#fff' //'#380000'

        if (check == 'horde') {
            for (var i = 0; i < nav_link.length; i++) {
                nav_link[i].style.textShadow = 'none';
            }
            header_icon.style.fill = '#fff'
            header_logo.style.textShadow = '2px 3px 5px #fff';
            header.style.borderBottom = 'none'
            intro_title.style.textShadow = '2px 3px 5px #fff';
            slide.style.boxShadow = '0 1px 1px #6e63f2';
            horde_color.style.background = 'transparent'
            video.src = 'video/stormheim4.mp4'
            check = 'main'
        } else {
            for (var i = 0; i < nav_link.length; i++) {
                nav_link[i].style.textShadow = '2px 3px 5px red';
            }
            header_icon.style.fill = 'red'
            header_logo.style.textShadow = '2px 3px 5px red';
            header.style.borderBottom = '1px solid red'
            intro_title.style.textShadow = '2px 3px 5px red';
            slide.style.boxShadow = '2px 3px 5px red';
            video.src = 'video/horde.mp4';
            check = 'horde'


        }

    }
    alliance.onclick = function () {
        horde_color.style.background = 'transparent'
        alliance_color.style.background = '#fff' //'#0c053c'

        if (check == 'alliance') {
            for (var i = 0; i < nav_link.length; i++) {
                nav_link[i].style.textShadow = 'none';
            }
            header_icon.style.fill = '#fff'
            header_logo.style.textShadow = '2px 3px 5px #fff';
            header.style.borderBottom = 'none'
            intro_title.style.textShadow = '2px 3px 5px #fff';
            slide.style.boxShadow = '0 1px 1px #6e63f2';
            alliance_color.style.background = 'transparent'
            video.src = 'video/stormheim4.mp4'
            check = 'main'
        } else {
            for (var i = 0; i < nav_link.length; i++) {
                nav_link[i].style.textShadow = '2px 3px 5px blue';
            }
            header_icon.style.fill = 'blue'
            header_logo.style.textShadow = '2px 3px 5px blue';
            header.style.borderBottom = '1px solid blue'
            intro_title.style.textShadow = '2px 3px 5px blue';
            slide.style.boxShadow = '2px 3px 5px blue';
            video.src = 'video/stormwind.mp4'
            check = 'alliance'
        }

    }







    //BURGER (NAV - hidden / visible)-----------------------------

    var burger = document.getElementById('burger'),
        nav = document.getElementById('nav');

    burger.onclick = function (event) {
        event.preventDefault()

        nav.classList.toggle('nav_show');
    }

    //SCROLL TO SECTION  JQUERY----------------------------

    $("[data-scroll]").on('click', function (event) {
        event.preventDefault();

        var elementId = $(this).data('scroll'),
            elementIdH = $(elementId).offset().top;

        $('html, body').animate({
            scrollTop: elementIdH
        }, 400)

    })

    
    
    //TIMER UNTIL TOURNAMENT-------------------------------------
    var out_time = document.getElementById('out_time'),
        date_tourn = document.getElementById('date_tourn').textContent,
        date_refactored = date_tourn.slice(3, 5) + '.' + date_tourn.slice(0, 2) + date_tourn.slice(5),
        date_js = new Date(date_refactored),
        timer_tourn;

    timer_obr()

    function timer_obr() {
        var now = new Date(),
            dif = date_js.getTime() - now.getTime(),
            day = Math.floor(dif / 24 / 60 / 60 / 1000 % 31),
            hour = Math.floor(dif / 60 / 60 / 1000 % 24),
            min = Math.floor(dif / 60 / 1000 % 60),
            sec = Math.floor(dif / 1000 % 60);


        out_time.innerHTML = day + 'дн:' + hour + 'ч:' + min + 'м:' + sec + 'с';



        if (dif <= 0) {
            out_time.innerHTML = 'Время истекло';
            clearTimeout(timer_tourn)
        } else if (dif > 0) {
            timer_tourn = setTimeout(timer_obr, 1000)
        }
    }


})
