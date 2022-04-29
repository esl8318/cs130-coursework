let currentFont = 1.3

const makeBigger = () => {
   console.log('make bigger!');
   console.log('i hate this');
   currentFont += 0.2
   setFont ();
   // document.getElementsByClassName(".content").style.fontColor = 'red';
};

const makeSmaller = () => {
   alert('make smaller!');
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

