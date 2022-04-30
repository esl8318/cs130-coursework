var fontSize = 2.4;

const makeBigger = () => {
   console.log('make bigger!');
   fontSize += 0.3;
   changeFont();
};

const makeSmaller = () => {
   console.log('make smaller!');
   fontSize -= 0.3
   changeFont();
};

const changeFont = () => {
   document.querySelector("h1").style.fontSize = `${fontSize + 0.5}em`;
   document.querySelector(".content").style.fontSize = `${fontSize}em`;
}


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

