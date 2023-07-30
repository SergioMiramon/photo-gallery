import "./Granada.css"

export const templateGranada = () => {
    return `
    <div id="grd1" class="granadacont">
        <div class="photo">
        <div class="granadafoto1">
            <img src="/assets/images/gallery/granadafoto1.jpg" alt="catedral de granada" data-img-show="0">
            <p>CATEDRAL DE GRANADA</p>
        </div>
        <div class="granadafoto2">
            <img src="/assets/images/gallery/granadafoto2.jpg" alt="catedral de granada" data-img-show="1">
            <p>CATEDRAL DE GRANADA</p>
        </div>
        <div class="granadafoto3">
            <img src="/assets/images/gallery/granadafoto3.jpg" alt="catedral de granada" data-img-show="2">
            <p>CATEDRAL DE GRANADA</p>
        </div>                       
        </div>
    </div>
    <div id="grd2" class="granadacont">
        <div class="photo">
        <div class="granadafoto4">
            <img src="/assets/images/gallery/granadafoto4.jpg" alt="palacio de carlos v" data-img-show="3">
            <p>PALACIO DE CARLOS V</p>
        </div>
        <div class="granadafoto5">
            <img src="/assets/images/gallery/granadafoto5.jpg" alt="palacio de carlos v" data-img-show="4">
            <p>PALACIO DE CARLOS V</p>
        </div>
        <div class="granadafoto6">
            <img src="/assets/images/gallery/granadafoto6.jpg" alt="palacio de carlos v" data-img-show="5">
            <p>PALACIO DE CARLOS V</p>
        </div>
        </div>
    </div>
    <div id="grd3" class="granadacont">
        <div class="photo">
        <div class="granadafoto7">
            <img src="/assets/images/gallery/granadafoto7.jpg" alt="patio de comares" data-img-show="6">
            <p>PATIO DE COMARES</p>
        </div>
        <div class="granadafoto8">
            <img src="/assets/images/gallery/granadafoto8.jpg" alt="patio de comares" data-img-show="7">
            <p>PATIO DE COMARES</p>
        </div>
        <div class="granadafoto9">
            <img src="/assets/images/gallery/granadafoto9.jpg" alt="patio de comares" data-img-show="8">
            <p>PATIO DE COMARES</p>
        </div>
        </div>
    </div>
    <div id="grd4" class="granadacont">
        <div class="photo">
        <div class="granadafoto10">
            <img src="/assets/images/gallery/granadafoto10.jeg" alt="patio de comares" data-img-show="9">
            <p>PATIO DE COMARES</p>
        </div>
        <div class="granadafoto11">
            <img src="/assets/images/gallery/granadafoto11.jeg" alt="generalife" data-img-show="10">
            <p>GENERALIFE</p>
        </div>
        <div class="granadafoto12">
            <img src="/assets/images/gallery/granadafoto12.jeg" alt="iglesia de san nicolás" data-img-show="11">
            <p>IGLESIA DE SAN NICOLÁS</p>
        </div>
        </div>
    </div>
    <div id="grd5" class="granadacont">
        <div class="photo">
        <div class="granadafoto13">
            <img src="/assets/images/gallery/granadafoto13.jeg" alt="iglesia de san nicolás" data-img-show="12">
            <p>ALHAMBRA</p>
        </div>
        <div class="granadafoto14">
            <img src="/assets/images/gallery/granadafoto14.jeg" alt="alhambra" data-img-show="13">
            <p>IGLESIA DE SAN NICOLÁS</p>
        </div>
        <div class="granadafoto15">
            <img src="/assets/images/gallery/granadafoto15.jeg" alt="alhambra" data-img-show="14">
            <p>ALHAMBRA</p>
        </div>
        </div>
    </div>
    `
};

export const showGranada =() =>{
    granada1.classList.replace('blanco', 'rojo');
    granada2.classList.replace('rojo', 'blanco');
    granada3.classList.replace('rojo', 'blanco');
    granada4.classList.replace('rojo', 'blanco');
    granada5.classList.replace('rojo', 'blanco');
    document.querySelector('#switch-madrid').style.display = "none";
    document.querySelector('#switch-barcelona').style.display = "none";
    document.querySelector('#switch-valencia').style.display = "none";
    document.querySelector('#switch-granada').style.display = "block";
    document.querySelector('#grd1').style.display = "block";
    document.querySelector('#grd2').style.display = "none";
    document.querySelector('#grd3').style.display = "none";
    document.querySelector('#grd4').style.display = "none";
    document.querySelector('#grd5').style.display = "none";
};

export const showGrd1 = () => {
    document.getElementById('grd1').style.display = "block";
    document.getElementById('grd2').style.display = "none";
    document.getElementById('grd3').style.display = "none";
    document.getElementById('grd4').style.display = "none";
    document.getElementById('grd5').style.display = "none";
}
export const showGrd2 = () => {
    document.getElementById('grd1').style.display = "none";
    document.getElementById('grd2').style.display = "block";
    document.getElementById('grd3').style.display = "none";
    document.getElementById('grd4').style.display = "none";
    document.getElementById('grd5').style.display = "none";
}
export const showGrd3 = () => {
    document.getElementById('grd1').style.display = "none";
    document.getElementById('grd2').style.display = "none";
    document.getElementById('grd3').style.display = "block";
    document.getElementById('grd4').style.display = "none";
    document.getElementById('grd5').style.display = "none";
}
export const showGrd4 = () => {
    document.getElementById('grd1').style.display = "none";
    document.getElementById('grd2').style.display = "none";
    document.getElementById('grd3').style.display = "none";
    document.getElementById('grd4').style.display = "block";
    document.getElementById('grd5').style.display = "none";
}
export const showGrd5 = () => {
    document.getElementById('grd1').style.display = "none";
    document.getElementById('grd2').style.display = "none";
    document.getElementById('grd3').style.display = "none";
    document.getElementById('grd4').style.display = "none";
    document.getElementById('grd5').style.display = "block";
}

export const switchNameColorGrd = () => {
    mad.classList.replace('rojo', 'blanco');
    bcn.classList.replace('rojo', 'blanco');
    vlc.classList.replace('rojo', 'blanco');
    grd.classList.replace('rosa', 'rojo');
}
export const overNameColorGrd = () => {
    grd.classList.replace('blanco', 'rosa');
}
export const leaveNameColorGrd =() =>{
    grd.classList.replace('rosa', 'blanco');
}

export const switchDotGranada1 = () => {
    granada1.classList.replace('rosa', 'rojo');
    granada2.classList.replace('rojo', 'blanco');
    granada3.classList.replace('rojo', 'blanco');
    granada4.classList.replace('rojo', 'blanco');
    granada5.classList.replace('rojo', 'blanco');
}
export const switchDotGranada2 = () => {
    granada1.classList.replace('rojo', 'blanco');
    granada2.classList.replace('rosa', 'rojo');
    granada3.classList.replace('rojo', 'blanco');
    granada4.classList.replace('rojo', 'blanco');
    granada5.classList.replace('rojo', 'blanco');
}
export const switchDotGranada3 = () => {
    granada1.classList.replace('rojo', 'blanco');
    granada2.classList.replace('rojo', 'blanco');
    granada3.classList.replace('rosa', 'rojo');
    granada4.classList.replace('rojo', 'blanco');
    granada5.classList.replace('rojo', 'blanco');
}
export const switchDotGranada4 = () => {
    granada1.classList.replace('rojo', 'blanco');
    granada2.classList.replace('rojo', 'blanco');
    granada3.classList.replace('rojo', 'blanco');
    granada4.classList.replace('rosa', 'rojo');
    granada5.classList.replace('rojo', 'blanco');
}
export const switchDotGranada5 = () => {
    granada1.classList.replace('rojo', 'blanco');
    granada2.classList.replace('rojo', 'blanco');
    granada3.classList.replace('rojo', 'blanco');
    granada4.classList.replace('rojo', 'blanco');
    granada5.classList.replace('rosa', 'rojo');
}

export const overDotGranada1 = () => {
    granada1.classList.replace('blanco', 'rosa');
}
export const overDotGranada2 = () => {
    granada2.classList.replace('blanco', 'rosa');
}
export const overDotGranada3 = () => {
    granada3.classList.replace('blanco', 'rosa');
}
export const overDotGranada4 = () => {
    granada4.classList.replace('blanco', 'rosa');
}
export const overDotGranada5 = () => {
    granada5.classList.replace('blanco', 'rosa');
}

export const leaveDotGranada1 = () => {
    granada1.classList.replace('rosa', 'blanco');
}
export const leaveDotGranada2 = () => {
    granada2.classList.replace('rosa', 'blanco');
}
export const leaveDotGranada3 = () => {
    granada3.classList.replace('rosa', 'blanco');
}
export const leaveDotGranada4 = () => {
    granada4.classList.replace('rosa', 'blanco');
}
export const leaveDotGranada5 = () => {
    granada5.classList.replace('rosa', 'blanco');
}