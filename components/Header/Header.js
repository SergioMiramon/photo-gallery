import "./Header.css";

const template = () => {
    return `
    <!-- <a href="./index.html"><img src="/assets/images/all/logo.png" class="logo" alt="logo"></a> -->
        <nav>
            <ul class="enlaces">
                <li><a id="github" href="https://github.com/SergioMiramon/photo-gallery" target="blank"><img src="/assets/images/all/githubblack.png"  alt="github"></a></li>
            </ul>
        </nav>
    `;
}

export const Header = () => {
    document.querySelector("header").innerHTML = template();
}