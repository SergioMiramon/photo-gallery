import "./Madrid.css";

export const templateMadrid = () => {
    return `
    <div id="mad1" class="madridcont">
    <div class="photo">
        <div class="madridfoto1">
            <img src="/public/assets/images/galeria/tuborojo.jpg" alt="coslada" data-img-show="0">
            <p>COSLADA</p>
        </div>
        <div class="madridfoto2">
            <img src="/public/assets/images/galeria/djmon.jpg" alt="coslada" data-img-show="1">
            <p>COSLADA</p>
        </div>
        <div class="madridfoto3">
            <img src="/public/assets/images/galeria/tubomain.jpg" alt="coslada" data-img-show="2">
            <p>COSLADA</p>
        </div>
        <div class="madridfoto4">
            <img src="/public/assets/images/galeria/borrosa.jpg" alt="coslada" data-img-show="3">
            <p>COSLADA</p>
        </div>
        <div class="madridfoto5">
            <img src="/public/assets/images/galeria/tubo2.jpg" alt="coslada" data-img-show="4">
            <p>COSLADA</p>
        </div>
    </div>
    </div>
    `
};

export const showMadrid = () => {
    // madrid1.classList.replace('blanco', 'rojo');
    // madrid2.classList.replace('rojo', 'blanco');
    document.querySelector('#switch-madrid').style.display = "block";
    document.querySelector('#mad1').style.display = "block";
    document.querySelector('#switch-barcelona').style.display = "none";
    document.querySelector('#switch-valencia').style.display = "none";
    document.querySelector('#switch-granada').style.display = "none";
}

// export const showMad1 = () => {
//     document.getElementById('mad1').style.display = "block";
//     document.getElementById('mad2').style.display = "none";
// }
// export const showMad2 = () => {
//     document.getElementById('mad1').style.display = "none";
//     document.getElementById('mad2').style.display = "block";
// }

export const switchNameColorMad = () => {
    mad.classList.replace('rosa', 'rojo');
    bcn.classList.replace('rojo', 'blanco');
    vlc.classList.replace('rojo', 'blanco');
    grd.classList.replace('rojo', 'blanco');
}

export const overNameColorMad = () => {
    mad.classList.replace('blanco', 'rosa');
}

export const leaveNameColorMad = () => {
    mad.classList.replace('rosa', 'blanco');
}

// export const switchDotMadrid1 = () => {
//     madrid1.classList.replace('rosa', 'rojo');
//     madrid2.classList.replace('rojo', 'blanco');
// }
// export const switchDotMadrid2 = () => {
//     madrid1.classList.replace('rojo', 'blanco');
//     madrid2.classList.replace('rosa', 'rojo');
// }

// export const overDotMadrid1 = () => {
//     madrid1.classList.replace('blanco', 'rosa');
// }
// export const overDotMadrid2 = () => {
//     madrid2.classList.replace('blanco', 'rosa');
// }
// export const leaveDotMadrid1 = () => {
//     madrid1.classList.replace('rosa', 'blanco');
// }
// export const leaveDotMadrid2 = () => {
//     madrid2.classList.replace('rosa', 'blanco');
// }
