import "./Gallery.css"
import {
    templateMadrid, showMadrid, switchNameColorMad,
    overNameColorMad, leaveNameColorMad
} from "./Madrid/Madrid";
import {
    templateBarcelona, showBarcelona, showBcn1, showBcn2, switchNameColorBcn,
    overNameColorBcn, leaveNameColorBcn, switchDotBarcelona1, switchDotBarcelona2,
    overDotBarcelona1, overDotBarcelona2, leaveDotBarcelona1, leaveDotBarcelona2
} from "./Barcelona/Barcelona";
import {
    templateValencia, showValencia, showVlc1, showVlc2, showVlc3, switchNameColorVlc,
    overNameColorVlc, leaveNameColorVlc, switchDotValencia1, switchDotValencia2,
    switchDotValencia3, overDotValencia1, overDotValencia2, overDotValencia3,
    leaveDotValencia1, leaveDotValencia2, leaveDotValencia3
} from "./Valencia/Valencia";
import {
    templateGranada, showGranada, showGrd1, showGrd2, showGrd3, showGrd4, showGrd5,
    switchNameColorGrd, overNameColorGrd, leaveNameColorGrd, switchDotGranada1, switchDotGranada2,
    switchDotGranada3, switchDotGranada4, switchDotGranada5, overDotGranada1, overDotGranada2,
    overDotGranada3, overDotGranada4, overDotGranada5, leaveDotGranada1, leaveDotGranada2,
    leaveDotGranada3, leaveDotGranada4, leaveDotGranada5
} from "./Granada/Granada";


// const overlay = () => {
//     return `
//     <div class="overlay_mad">
//         <div class="slideshow_mad">
//             <span class="btn_close_mad">&times;</span>
//             <div class="btn left_mad"> <i class="arrows icon-arrow-left2"></i></div>
//             <div class="btn right_mad"> <i class="arrows icon-arrow-right2"></i></div>
//             <img src="" alt="" id="img_slideshow">
//         </div>
//     </div>
//     <div class="overlay_bcn">
//         <div class="slideshow_bcn">
//             <span class="btn_close_bcn">&times;</span>
//             <div class="btn left_bcn"> <i class="arrows icon-arrow-left2"></i></div>
//             <div class="btn right_bcn"> <i class="arrows icon-arrow-right2"></i></div>
//             <img src="" alt="" id="img_slideshow">
//         </div>
//     </div>
//     <div class="overlay_vlc">
//         <div class="slideshow_vlc">
//             <span class="btn_close_vlc">&times;</span>
//             <div class="btn left_vlc"> <i class="arrows icon-arrow-left2"></i></div>
//             <div class="btn right_vlc"> <i class="arrows icon-arrow-right2"></i></div>
//             <img src="" alt="" id="img_slideshow">
//         </div>
//     </div>
//     <div class="overlay_grd">
//         <div class="slideshow_grd">
//             <span class="btn_close_grd">&times;</span>
//             <div class="btn left_grd"> <i class="arrows icon-arrow-left2"></i></div>
//             <div class="btn right_grd"> <i class="arrows icon-arrow-right2"></i></div>
//             <img src="" alt="" id="img_slideshow">
//         </div>
//     </div>
//     `;
// }

const template = () => {
    return `
    <div class="overlay_mad">
        <div class="slideshow_mad">
            <span class="btn_close_mad">&times;</span>
            <div class="btn left_mad"> <i class="arrows icon-arrow-left2"></i></div>
            <div class="btn right_mad"> <i class="arrows icon-arrow-right2"></i></div>
            <img src="" alt="" id="img_slideshow">
        </div>
    </div>
    <div class="overlay_bcn">
        <div class="slideshow_bcn">
            <span class="btn_close_bcn">&times;</span>
            <div class="btn left_bcn"> <i class="arrows icon-arrow-left2"></i></div>
            <div class="btn right_bcn"> <i class="arrows icon-arrow-right2"></i></div>
            <img src="" alt="" id="img_slideshow">
        </div>
    </div>
    <div class="overlay_vlc">
        <div class="slideshow_vlc">
            <span class="btn_close_vlc">&times;</span>
            <div class="btn left_vlc"> <i class="arrows icon-arrow-left2"></i></div>
            <div class="btn right_vlc"> <i class="arrows icon-arrow-right2"></i></div>
            <img src="" alt="" id="img_slideshow">
        </div>
    </div>
    <div class="overlay_grd">
        <div class="slideshow_grd">
            <span class="btn_close_grd">&times;</span>
            <div class="btn left_grd"> <i class="arrows icon-arrow-left2"></i></div>
            <div class="btn right_grd"> <i class="arrows icon-arrow-right2"></i></div>
            <img src="" alt="" id="img_slideshow">
        </div>
    </div>
    <section>
        <div class="galeria">
                <div id="espana">
                    <h1>ESPAÑA</h1>
                    <a href="#switch-madrid" onclick="showMadrid();"><h2 id="mad" class="rojo">Madrid</h2></a>
                    <a href="#switch-valencia" onclick="showValencia();"><h2 id="vlc" class="blanco">Valencia</h2></a>
                    <a href="#switch-barcelona" onclick="showBarcelona();"><h2 id="bcn" class="blanco">Barcelona</h2></a>
                    <a href="#switch-granada" onclick="showGranada();"><h2 id="grd" class="blanco">Granada</h2></a>
                </div>
                <div id="switches">
                    <div id="switch-madrid" class="madrid">
                        <div class="marco">
                            <ul>
                            </ul>
                            <div class="city" id="cityMadrid">
                                ${templateMadrid()}
                            </div>
                        </div>
                    </div>
                    <div id="switch-valencia" class="valencia">
                        <div class="marco">
                            <ul>
                                <a href="#vlc1"><li id="valencia1" class="rojo"></li></a>
                                <a href="#vlc2"><li id="valencia2" class="blanco"></li></a>
                                <a href="#vlc3"><li id="valencia3" class="blanco"></li></a>
                            </ul>
                            <div class="city" id="cityValencia">
                                ${templateValencia()}
                            </div>
                        </div>
                    </div>
                    <div id="switch-barcelona" class="barcelona">
                        <div class="marco">
                            <ul>
                                <a href="#bcn1"><li id="barcelona1" class="rojo"></li></a>
                                <a href="#bcn2"><li id="barcelona2" class="blanco"></li></a>
                            </ul>
                            <div class="city" id="cityBarcelona">
                                ${templateBarcelona()}
                            </div>
                        </div>
                    </div>
                    <div id="switch-granada" class="granada">
                        <div class="marco">
                            <ul>
                                <a href="#grd1"><li id="granada1" class="rojo"></li></a>
                                <a href="#grd2"><li id="granada2" class="blanco"></li></a>
                                <a href="#grd3"><li id="granada3" class="blanco"></li></a>
                                <a href="#grd4"><li id="granada4" class="blanco"></li></a>
                                <a href="#grd5"><li id="granada5" class="blanco"></li></a>
                            </ul>
                            <div class="city" id="cityGranada">
                                ${templateGranada()}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    `
}


const Gallery = () => {
    document.querySelector("main").innerHTML = template();

    /*Switch City*/
    const madrid = document.querySelector("#mad");
    madrid.addEventListener('click', showMadrid);

    // const mad1 = document.querySelector("#madrid1");
    // mad1.addEventListener('click', showMad1);
    // const mad2 = document.querySelector("#madrid2");
    // mad2.addEventListener('click', showMad2);

    const barcelona = document.querySelector("#bcn");
    barcelona.addEventListener('click', showBarcelona);

    const bcn1 = document.querySelector("#barcelona1");
    bcn1.addEventListener('click', showBcn1);
    const bcn2 = document.querySelector("#barcelona2");
    bcn2.addEventListener('click', showBcn2);


    const valencia = document.querySelector("#vlc");
    valencia.addEventListener('click', showValencia);

    const vlc1 = document.querySelector("#valencia1");
    vlc1.addEventListener('click', showVlc1);
    const vlc2 = document.querySelector("#valencia2");
    vlc2.addEventListener('click', showVlc2);
    const vlc3 = document.querySelector("#valencia3");
    vlc3.addEventListener('click', showVlc3);


    const granada = document.querySelector("#grd");
    granada.addEventListener('click', showGranada);

    const grd1 = document.querySelector("#granada1");
    grd1.addEventListener('click', showGrd1);
    const grd2 = document.querySelector("#granada2");
    grd2.addEventListener('click', showGrd2);
    const grd3 = document.querySelector("#granada3");
    grd3.addEventListener('click', showGrd3);
    const grd4 = document.querySelector("#granada4");
    grd4.addEventListener('click', showGrd4);
    const grd5 = document.querySelector("#granada5");
    grd5.addEventListener('click', showGrd5);



    /*Switch City Name Color*/
    var mad = document.getElementById('mad')
    mad.addEventListener('click', switchNameColorMad, true);
    var mad = document.getElementById('mad')
    mad.addEventListener('mouseover', overNameColorMad, true)
    var mad = document.getElementById('mad')
    mad.addEventListener('mouseleave', leaveNameColorMad, true)

    var bcn = document.getElementById('bcn')
    bcn.addEventListener('click', switchNameColorBcn, true);
    var bcn = document.getElementById('bcn')
    bcn.addEventListener('mouseover', overNameColorBcn, true)
    var bcn = document.getElementById('bcn')
    bcn.addEventListener('mouseleave', leaveNameColorBcn, true)

    var vlc = document.getElementById('vlc')
    vlc.addEventListener('click', switchNameColorVlc, true);
    var vlc = document.getElementById('vlc')
    vlc.addEventListener('mouseover', overNameColorVlc, true)
    var vlc = document.getElementById('vlc')
    vlc.addEventListener('mouseleave', leaveNameColorVlc, true)

    var grd = document.getElementById('grd')
    grd.addEventListener('click', switchNameColorGrd, true);
    var grd = document.getElementById('grd')
    grd.addEventListener('mouseover', overNameColorGrd, true)
    var grd = document.getElementById('grd')
    grd.addEventListener('mouseleave', leaveNameColorGrd, true)


    /*Switch Dots*/
    // var madrid1 = document.getElementById('madrid1'),
    // madrid2 = document.getElementById('madrid2');
    // madrid1.addEventListener('click', switchDotMadrid1, true),
    // madrid2.addEventListener('click', switchDotMadrid2, true);

    var barcelona1 = document.getElementById('barcelona1'),
    barcelona2 = document.getElementById('barcelona2');
    barcelona1.addEventListener('click', switchDotBarcelona1, true),
    barcelona2.addEventListener('click', switchDotBarcelona2, true);

    var valencia1 = document.getElementById('valencia1'),
    valencia2 = document.getElementById('valencia2'),
    valencia3 = document.getElementById('valencia3');
    valencia1.addEventListener('click', switchDotValencia1, true),
    valencia2.addEventListener('click', switchDotValencia2, true),
    valencia3.addEventListener('click', switchDotValencia3, true);

    var granada1 = document.getElementById('granada1'),
    granada2 = document.getElementById('granada2'),
    granada3 = document.getElementById('granada3'),
    granada4 = document.getElementById('granada4'),
    granada5 = document.getElementById('granada5');
    granada1.addEventListener('click', switchDotGranada1, true),
    granada2.addEventListener('click', switchDotGranada2, true),
    granada3.addEventListener('click', switchDotGranada3, true),
    granada4.addEventListener('click', switchDotGranada4, true),
    granada5.addEventListener('click', switchDotGranada5, true);


    /*Hover & Leave Dots*/
    // madrid1.addEventListener('mouseover', overDotMadrid1, true),
    // madrid2.addEventListener('mouseover', overDotMadrid2, true);
    // madrid1.addEventListener('mouseleave', leaveDotMadrid1, true),
    // madrid2.addEventListener('mouseleave', leaveDotMadrid2, true);
  
    barcelona1.addEventListener('mouseover', overDotBarcelona1, true),
    barcelona2.addEventListener('mouseover', overDotBarcelona2, true);  
    barcelona1.addEventListener('mouseleave', leaveDotBarcelona1, true),
    barcelona2.addEventListener('mouseleave', leaveDotBarcelona2, true);

    valencia1.addEventListener('mouseover', overDotValencia1, true),
    valencia2.addEventListener('mouseover', overDotValencia2, true),
    valencia3.addEventListener('mouseover', overDotValencia3, true);
    valencia1.addEventListener('mouseleave', leaveDotValencia1, true),
    valencia2.addEventListener('mouseleave', leaveDotValencia2, true),
    valencia3.addEventListener('mouseleave', leaveDotValencia3, true);


    granada1.addEventListener('mouseover', overDotGranada1, true),
    granada2.addEventListener('mouseover', overDotGranada2, true),
    granada3.addEventListener('mouseover', overDotGranada3, true),
    granada4.addEventListener('mouseover', overDotGranada4, true),
    granada5.addEventListener('mouseover', overDotGranada5, true);
    granada1.addEventListener('mouseleave', leaveDotGranada1, true),
    granada2.addEventListener('mouseleave', leaveDotGranada2, true),
    granada3.addEventListener('mouseleave', leaveDotGranada3, true),
    granada4.addEventListener('mouseleave', leaveDotGranada4, true);
    granada5.addEventListener('mouseleave', leaveDotGranada5, true);
    
}

export default Gallery();

 
document.addEventListener('DOMContentLoaded', function () {
    let images_mad = [
        { img: './public/assets/images/galeria/tuborojo.jpg' },
        { img: './public/assets/images/galeria/djmon.jpg' },
        { img: './public/assets/images/galeria/tubomain.jpg' },
        { img: './public/assets/images/galeria/borrosa.jpg' },
        { img: './public/assets/images/galeria/tubo2.jpg' }
    ]
    let contador_mad = 0
    const contenedor = document.querySelector('.slideshow_mad')
    const overlay = document.querySelector('.overlay_mad')
    const galeria_mad = document.querySelectorAll('.madridcont .photo img')
    const img_slideshow = document.querySelector('.slideshow_mad img')



    contenedor.addEventListener('click', function (event) {
        let left = contenedor.querySelector('.left_mad'),
            right = contenedor.querySelector('.right_mad'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == left) {
            if (contador_mad > 0) {
                img.src = images_mad[contador_mad - 1].img
                contador_mad--
            } else {
                img.src = images_mad[images_mad.length - 1].img
                contador_mad = images_mad.length - 1
            }
        } else if (tgt == right) {
            if (contador_mad < images_mad.length - 1) {
                img.src = images_mad[contador_mad + 1].img
                contador_mad++
            } else {
                img.src = images_mad[0].img
                contador_mad = 0
            }
        }
    })

    document.addEventListener('keydown', e => {
        let img = contenedor.querySelector('img')
        if (e.keyCode == '37') {
            if (contador_mad > 0) {
                img.src = images_mad[contador_mad - 1].img
                contador_mad--
            } else {
                img.src = images_mad[images_mad.length - 1].img
                contador_mad = images_mad.length - 1
            }
        } else if (e.keyCode == '39') {
            if (contador_mad < images_mad.length - 1) {
                img.src = images_mad[contador_mad + 1].img
                contador_mad++
            } else {
                img.src = images_mad[0].img
                contador_mad = 0
            }
        }
    })

    Array.from(galeria_mad).forEach(img => {
        img.addEventListener('click', event => {
            const image_selected = +event.target.dataset.imgShow
            img_slideshow.src = images_mad[image_selected].img
            contador_mad = image_selected
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_close_mad').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

})

document.addEventListener('DOMContentLoaded', function () {
    let images_bcn = [
        { img: './public/assets/images/galeria/barcelonafoto1.jpg' },
        { img: './public/assets/images/galeria/barcelonafoto2.jpg' },
        { img: './public/assets/images/galeria/barcelonafoto3.jpg' },
        { img: './public/assets/images/galeria/barcelonafoto4.jpg' },
        { img: './public/assets/images/galeria/barcelonafoto5.jpg' },
        { img: './public/assets/images/galeria/barcelonafoto6.jpg' },
        { img: './public/assets/images/galeria/barcelonafoto7.jpg' },
        { img: './public/assets/images/galeria/barcelonafoto8.jpg' }
    ]
    let contador_bcn = 0
    const contenedor = document.querySelector('.slideshow_bcn')
    const overlay = document.querySelector('.overlay_bcn')
    const galeria_bcn = document.querySelectorAll('.barcelonacont .photo img')
    const img_slideshow = document.querySelector('.slideshow_bcn img')


    contenedor.addEventListener('click', function (event) {
        let left = contenedor.querySelector('.left_bcn'),
            right = contenedor.querySelector('.right_bcn'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == left) {
            if (contador_bcn > 0) {
                img.src = images_bcn[contador_bcn - 1].img
                contador_bcn--
            } else {
                img.src = images_bcn[images_bcn.length - 1].img
                contador_bcn = images_bcn.length - 1
            }
        } else if (tgt == right) {
            if (contador_bcn < images_bcn.length - 1) {
                img.src = images_bcn[contador_bcn + 1].img
                contador_bcn++
            } else {
                img.src = images_bcn[0].img
                contador_bcn = 0
            }
        }
    })

    document.addEventListener('keydown', e => {
        let img = contenedor.querySelector('img')
        if (e.keyCode == '37') {
            if (contador_bcn > 0) {
                img.src = images_bcn[contador_bcn - 1].img
                contador_bcn--
            } else {
                img.src = images_bcn[images_bcn.length - 1].img
                contador_bcn = images_bcn.length - 1
            }
        } else if (e.keyCode == '39') {
            if (contador_bcn < images_bcn.length - 1) {
                img.src = images_bcn[contador_bcn + 1].img
                contador_bcn++
            } else {
                img.src = images_bcn[0].img
                contador_bcn = 0
            }
        }
    })


    Array.from(galeria_bcn).forEach(img => {
        img.addEventListener('click', event => {
            const image_selected = +event.target.dataset.imgShow
            img_slideshow.src = images_bcn[image_selected].img
            contador_bcn = image_selected
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_close_bcn').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

})

document.addEventListener('DOMContentLoaded', function () {
    let images_vlc = [
        { img: './public/assets/images/galeria/valenciafoto1.jpg' },
        { img: './public/assets/images/galeria/valenciafoto2.jpg' },
        { img: './public/assets/images/galeria/valenciafoto3.jpg' },
        { img: './public/assets/images/galeria/valenciafoto4.jpg' },
        { img: './public/assets/images/galeria/valenciafoto5.jpg' },
        { img: './public/assets/images/galeria/valenciafoto6.jpg' },
        { img: './public/assets/images/galeria/valenciafoto7.jpg' },
        { img: './public/assets/images/galeria/valenciafoto8.jpg' },
        { img: './public/assets/images/galeria/valenciafoto9.jpg' }
    ]
    let contador_vlc = 0
    const contenedor = document.querySelector('.slideshow_vlc')
    const overlay = document.querySelector('.overlay_vlc')
    const galeria_vlc = document.querySelectorAll('.valenciacont .photo img')
    const img_slideshow = document.querySelector('.slideshow_vlc img')


    contenedor.addEventListener('click', function (event) {
        let left = contenedor.querySelector('.left_vlc'),
            right = contenedor.querySelector('.right_vlc'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == left) {
            if (contador_vlc > 0) {
                img.src = images_vlc[contador_vlc - 1].img
                contador_vlc--
            } else {
                img.src = images_vlc[images_vlc.length - 1].img
                contador_vlc = images_vlc.length - 1
            }
        } else if (tgt == right) {
            if (contador_vlc < images_vlc.length - 1) {
                img.src = images_vlc[contador_vlc + 1].img
                contador_vlc++
            } else {
                img.src = images_vlc[0].img
                contador_vlc = 0
            }
        }
    })

    document.addEventListener('keydown', e => {
        let img = contenedor.querySelector('img')
        if (e.keyCode == '37') {
            if (contador_vlc > 0) {
                img.src = images_vlc[contador_vlc - 1].img
                contador_vlc--
            } else {
                img.src = images_vlc[images_vlc.length - 1].img
                contador_vlc = images_vlc.length - 1
            }
        } else if (e.keyCode == '39') {
            if (contador_vlc < images_vlc.length - 1) {
                img.src = images_vlc[contador_vlc + 1].img
                contador_vlc++
            } else {
                img.src = images_vlc[0].img
                contador_vlc = 0
            }
        }
    })


    Array.from(galeria_vlc).forEach(img => {
        img.addEventListener('click', event => {
            const image_selected = +event.target.dataset.imgShow
            img_slideshow.src = images_vlc[image_selected].img
            contador_vlc = image_selected
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_close_vlc').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

})

document.addEventListener('DOMContentLoaded', function () {
    let images_grd = [
        { img: './public/assets/images/galeria/granadafoto1.jpg' },
        { img: './public/assets/images/galeria/granadafoto2.jpg' },
        { img: './public/assets/images/galeria/granadafoto3.jpg' },
        { img: './public/assets/images/galeria/granadafoto4.jpg' },
        { img: './public/assets/images/galeria/granadafoto5.jpg' },
        { img: './public/assets/images/galeria/granadafoto6.jpg' },
        { img: './public/assets/images/galeria/granadafoto7.jpg' },
        { img: './public/assets/images/galeria/granadafoto8.jpg' },
        { img: './public/assets/images/galeria/granadafoto9.jpg' },
        { img: './public/assets/images/galeria/granadafoto10.jpg' },
        { img: './public/assets/images/galeria/granadafoto11.jpg' },
        { img: './public/assets/images/galeria/granadafoto12.jpg' },
        { img: './public/assets/images/galeria/granadafoto13.jpg' },
        { img: './public/assets/images/galeria/granadafoto14.jpg' },
        { img: './public/assets/images/galeria/granadafoto15.jpg' }
    ]
    let contador_grd = 0
    const contenedor = document.querySelector('.slideshow_grd')
    const overlay = document.querySelector('.overlay_grd')
    const galeria_grd = document.querySelectorAll('.granadacont .photo img')
    const img_slideshow = document.querySelector('.slideshow_grd img')


    contenedor.addEventListener('click', function (event) {
        let left = contenedor.querySelector('.left_grd'),
            right = contenedor.querySelector('.right_grd'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == left) {
            if (contador_grd > 0) {
                img.src = images_grd[contador_grd - 1].img
                contador_grd--
            } else {
                img.src = images_grd[images_grd.length - 1].img
                contador_grd = images_grd.length - 1
            }
        } else if (tgt == right) {
            if (contador_grd < images_grd.length - 1) {
                img.src = images_grd[contador_grd + 1].img
                contador_grd++
            } else {
                img.src = images_grd[0].img
                contador_grd = 0
            }
        }
    })

    document.addEventListener('keydown', e => {
        let img = contenedor.querySelector('img')
        if (e.keyCode == '37') {
            if (contador_grd > 0) {
                img.src = images_grd[contador_grd - 1].img
                contador_grd--
            } else {
                img.src = images_grd[images_grd.length - 1].img
                contador_grd = images_grd.length - 1
            }
        } else if (e.keyCode == '39') {
            if (contador_grd < images_grd.length - 1) {
                img.src = images_grd[contador_grd + 1].img
                contador_grd++
            } else {
                img.src = images_grd[0].img
                contador_grd = 0
            }
        }
    })


    Array.from(galeria_grd).forEach(img => {
        img.addEventListener('click', event => {
            const image_selected = +event.target.dataset.imgShow
            img_slideshow.src = images_grd[image_selected].img
            contador_grd = image_selected
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_close_grd').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })
})