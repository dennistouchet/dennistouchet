'use strict'

    console.log("here");
    function setBlurImage() {
        let blurBox = document.getElementById('blurBox');
        let heroH = document.getElementById('hero').offsetHeight;
        let heroW = document.getElementById('hero').offsetWidth;

        console.log(heroH);
        console.log(heroW);

        let rect = blurBox.getBoundingClientRect();
        let top = -1 * (rect.top + document.body.scrollTop);
        let left = -1 * (rect.left + document.body.scrollLeft);

        let blurImg = document.getElementById('blurImg');
        blurImg.style.top = top + 'px';
        blurImg.style.left = left + 'px';
        blurImg.style.height = heroH + 'px';
        blurImg.style.width = heroW + 'px';

    };
    setBlurImage();

    window.onresize = function () {
        console.log("resize");
        setBlurImage();
    }



