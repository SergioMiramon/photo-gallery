import "./Header.css";

const template = () => {
    return `
    <a href="./index.html"><img src="assets/images/all/logo.png" class="logo" alt="logo"></a>
        <nav>
            <ul class="enlaces">
                <!-- <li><a href=""><i class="arrows icon-arrow-left2"></i></a></li> -->
            </ul>
        </nav>
    `;
}

export const Header = () => {
    document.querySelector("header").innerHTML = template();
}

// export default Header();