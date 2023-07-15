import "./Valencia.css"

export const templateValencia = () => {
    return `
    <div id="vlc1" class="valenciacont">
        <div class="photo">
            <div class="valenciafoto1">
                <img src="./public/assets/images/galeria/valenciafoto1.jpg" alt="ciutat de les arts i les ciènces" data-img-show="0">
                <p>CIUTAT DE LES ARTS I LES CIÈNCIES</p>
            </div>
            <div class="valenciafoto2">
                <img src="./public/assets/images/galeria/valenciafoto2.jpg" alt="peñiscola" data-img-show="1">
                <p>PEÑISCOLA</p>
            </div>
            <div class="valenciafoto3">
                <img src="./public/assets/images/galeria/valenciafoto3.jpg" alt="parque nacional de la albufera" data-img-show="2">
                <p>PARQUE NACIONAL DE LA ALBUFERA</p>
            </div>
        </div>
    </div>
    <div id="vlc2" class="valenciacont">
        <div class="photo">
            <div class="valenciafoto4">
                <img src="./public/assets/images/galeria/valenciafoto4.jpg" alt="peñiscola" data-img-show="3">
                <p>PEÑISCOLA</p>
            </div>
            <div class="valenciafoto5">
                <img src="./public/assets/images/galeria/valenciafoto5.jpg" alt="peñiscola" data-img-show="4">
                <p>PEÑISCOLA</p>
            </div>
            <div class="valenciafoto6">
                <img src="./public/assets/images/galeria/valenciafoto6.jpg" alt="parque nacional de la albufera" data-img-show="5">
                <p>PARQUE NACIONAL DE LA ALBUFERA</p>
            </div>
        </div>
    </div>
    <div id="vlc3" class="valenciacont">
        <div class="photo">
            <div class="valenciafoto7">
                <img src="./public/assets/images/galeria/valenciafoto7.jpg" alt="valencia" data-img-show="6">
                <p>VALENCIA</p>
            </div>
            <div class="valenciafoto8">
                <img src="./public/assets/images/galeria/valenciafoto8.jpg" alt="peñiscola" data-img-show="7">
                <p>PEÑISCOLA</p>
            </div>
            <div class="valenciafoto9">
                <img src="./public/assets/images/galeria/valenciafoto9.jpg" alt="peñiscola" data-img-show="8">
                <p>PEÑISCOLA</p>
            </div>
        </div>
    </div>
    `
}

export const showValencia =() =>{
    valencia1.classList.replace('blanco', 'rojo');
    valencia2.classList.replace('rojo', 'blanco');
    valencia3.classList.replace('rojo', 'blanco');
    document.querySelector('#switch-madrid').style.display = "none";
    document.querySelector('#switch-barcelona').style.display = "none";
    document.querySelector('#switch-valencia').style.display = "block";
    document.querySelector('#vlc1').style.display = "block";
    document.querySelector('#switch-granada').style.display = "none";
}

export const showVlc1 = () => {
    document.getElementById('vlc1').style.display = "block";
    document.getElementById('vlc2').style.display = "none";
    document.getElementById('vlc3').style.display = "none";
}
export const showVlc2 = () => {
    document.getElementById('vlc1').style.display = "none";
    document.getElementById('vlc2').style.display = "block";
    document.getElementById('vlc3').style.display = "none";
}
export const showVlc3 = () => {
    document.getElementById('vlc1').style.display = "none";
    document.getElementById('vlc2').style.display = "none";
    document.getElementById('vlc3').style.display = "block";
}

export const switchNameColorVlc = () => {
    mad.classList.replace('rojo', 'blanco');
    bcn.classList.replace('rojo', 'blanco');
    vlc.classList.replace('rosa', 'rojo');
    grd.classList.replace('rojo', 'blanco');
}
export const overNameColorVlc = () => {
    vlc.classList.replace('blanco', 'rosa');
}
export const leaveNameColorVlc = () => {
    vlc.classList.replace('rosa', 'blanco');
}

export const switchDotValencia1 = () => {
    valencia1.classList.replace('rosa', 'rojo');
    valencia2.classList.replace('rojo', 'blanco');
    valencia3.classList.replace('rojo', 'blanco');
}
export const switchDotValencia2 = () => {
    valencia1.classList.replace('rojo', 'blanco');
    valencia2.classList.replace('rosa', 'rojo');
    valencia3.classList.replace('rojo', 'blanco');
}
export const switchDotValencia3 = () => {
    valencia1.classList.replace('rojo', 'blanco');
    valencia2.classList.replace('rojo', 'blanco');
    valencia3.classList.replace('rosa', 'rojo');
}

export const overDotValencia1 = () => {
    valencia1.classList.replace('blanco', 'rosa');
}
export const overDotValencia2 = () => {
    valencia2.classList.replace('blanco', 'rosa');
}
export const overDotValencia3 = () => {
    valencia3.classList.replace('blanco', 'rosa');
}

export const leaveDotValencia1 = () => {
    valencia1.classList.replace('rosa', 'blanco');
}
export const leaveDotValencia2 = () => {
    valencia2.classList.replace('rosa', 'blanco');
}
export const leaveDotValencia3 = () => {
    valencia3.classList.replace('rosa', 'blanco');
}