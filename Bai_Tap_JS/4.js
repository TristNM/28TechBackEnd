// console.log(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// const infoUser = {
//     name : "Nguyễn Minh Triết",
//     renderName : () =>{
//         console.log("OK");
//     } 
// };

// console.log(infoUser.name);
// console.log(infoUser.renderName());
var tabWindow;

const openTab = () => {
    tabWindow = window.open("https://simplemind.eu/faq/preferences/", "_blank", "width = 1200, height = 600, left = 100, top = 50");
};

const closeTab = () => {
    tabWindow.close();
}

const Reload = () => {
    location.reload();
}
// console.log(screen.height);
// console.log(screen.width);
console.log(navigator.platform); 
console.log(navigator.appName);
