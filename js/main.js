let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountains3');
let mountain4 = document.getElementById('mountains4');
let rivers = document.getElementById('river');
let boat6 = document.getElementById('boat');
let main_7oda = document.querySelector('.main-7oda');

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountain4.style.top = value * 1.5 + 'px';
    rivers.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    main_7oda.style.fontSize = value + 'px';
    if (scrollY >= 67) {
        main_7oda.style.fontSize = 67 + 'px';
        main_7oda.style.position = 'fixed';
        if (scrollY >= 478) {
            main_7oda.style.display = 'none';
        }
        else {
            main_7oda.style.display = 'block';
        }
        if (scrollY >= 127) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)';
        }
    }
};