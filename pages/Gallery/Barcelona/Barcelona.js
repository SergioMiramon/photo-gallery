import "./Barcelona.css"

export const templateBarcelona = () => {
    return `
    <div id="bcn1" class="barcelonacont">
        <div class="photo">
            <div class="barcelonafoto1">
                <img src="/assets/images/gallery/barcelonafoto1.jpg" alt="mirador de l'alcalde" data-img-show="0">
                <p>MIRADOR DE L'ALCALDE</p>
            </div>
            <div class="barcelonafoto2">
                <img src="/assets/images/gallery/barcelonafoto2.jpg" alt="bunkers del carmel" data-img-show="1">
                <p>BUNKERS DEL CARMEL</p>
            </div>
            <div class="barcelonafoto3">
                <img src="/assets/images/gallery/barcelonafoto3.jpg" alt="mirador de l'alcalde" data-img-show="2">
                <p>MIRADOR DE L'ALCALDE</p>
            </div>
            <div class="barcelonafoto4">
                <img src="/assets/images/gallery/barcelonafoto4.jpg" alt="mirador de l'alcalde" data-img-show="3">
                <p>MIRADOR DE L'ALCALDE</p>
            </div>
        </div>
    </div>
    <div id="bcn2" class="barcelonacont">
        <div class="photo">
            <div class="barcelonafoto5">
                <img src="/assets/images/gallery/barcelonafoto5.jpg" alt="mirador de l'alcalde" data-img-show="4">
                <p>MIRADOR DE L'ALCALDE</p>
            </div>
            <div class="barcelonafoto6">
                <img src="/assets/images/gallery/barcelonafoto6.jpg" alt="mirador de l'alcalde" data-img-show="5">
                <p>MIRADOR DE L'ALCALDE</p>
            </div>
            <div class="barcelonafoto7">
                <img src="/assets/images/gallery/barcelonafoto7.jpg" alt="mirador de l'alcalde" data-img-show="6">
                <p>MIRADOR DE L'ALCALDE</p>
            </div>
            <div class="barcelonafoto8">
                <img src="/assets/images/gallery/barcelonafoto8.jpg" alt="mirador de l'alcalde" data-img-show="7">
                <p>MIRADOR DE L'ALCALDE</p>
            </div>
        </div>
    </div>
    `
};

export const showBarcelona =() =>{
    barcelona1.classList.replace('blanco', 'rojo');
    barcelona2.classList.replace('rojo', 'blanco');
    document.querySelector('#switch-madrid').style.display = "none";
    document.querySelector('#switch-barcelona').style.display = "block";
    document.querySelector('#bcn1').style.display = "block";
    document.querySelector('#bcn2').style.display = "none";
    document.querySelector('#switch-valencia').style.display = "none";
    document.querySelector('#switch-granada').style.display = "none";
  };

export const showBcn1 =() =>{
    document.getElementById('bcn1').style.display = "block";
    document.getElementById('bcn2').style.display = "none";
  }
export const showBcn2 =() =>{
    document.getElementById('bcn1').style.display = "none";
    document.getElementById('bcn2').style.display = "block";
  }

export const switchNameColorBcn = () => {
    mad.classList.replace('rojo', 'blanco');
    bcn.classList.replace('rosa', 'rojo');
    vlc.classList.replace('rojo', 'blanco');
    grd.classList.replace('rojo', 'blanco');
}

export const overNameColorBcn = () => {
    bcn.classList.replace('blanco', 'rosa');
}

export const leaveNameColorBcn = () => {
    bcn.classList.replace('rosa', 'blanco');
}

export const switchDotBarcelona1 = () => {
    barcelona1.classList.replace('rosa', 'rojo');
    barcelona2.classList.replace('rojo', 'blanco');
}
export const switchDotBarcelona2 = () => {
    barcelona1.classList.replace('rojo', 'blanco');
    barcelona2.classList.replace('rosa', 'rojo');
}

export const overDotBarcelona1 = () => {
    barcelona1.classList.replace('blanco', 'rosa');
}
export const overDotBarcelona2 = () => {
    barcelona2.classList.replace('blanco', 'rosa');
}

export const leaveDotBarcelona1 = () => {
    barcelona1.classList.replace('rosa', 'blanco');
}
export const leaveDotBarcelona2 = () => {
    barcelona2.classList.replace('rosa', 'blanco');
}