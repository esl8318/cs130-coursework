/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const makeDefault = () => {
   console.log('Change theme to default');
   document.querySelector('body').className = "default";
}

const makeDesert = () => {
   console.log('Change theme to desert');
   document.querySelector('body').className = "desert";

}

const makeOcean = () => {
   console.log('Change theme to ocean');
   document.querySelector('body').className = "ocean";

}

const makeContrast = () => {
   console.log('Change theme to high-contrast');
   document.querySelector('body').className = "high-contrast";

}

document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#high-contrast").addEventListener('click', makeContrast);

// const changeTheme = () => {
//    document.querySelector("#default").style.nav = `${fontSize + 0.5}em`;
//    document.querySelector("#desert").style.fontSize = `${fontSize}em`;
//    document.querySelector("#ocean").style.fontSize = `${fontSize}em`;
//    document.querySelector("#high-contrast").style.fontSize = `${fontSize}em`;
// }