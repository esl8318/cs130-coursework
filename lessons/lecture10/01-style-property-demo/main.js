const resetButtonBackground = () => {
    document.querySelector('#btn1').style.backgroundColor = 'rgb (133, 133, 133)';
    document.querySelector('#btn2').style.backgroundColor = 'rgb (133, 133, 133)';
    document.querySelector('#btn3').style.backgroundColor = 'rgb (133, 133, 133)';
    document.querySelector('#btn4').style.backgroundColor = 'rgb (133, 133, 133)';
};



const makeRed = () => {
    // your code here...
    resetButtonBackground ();
    console.log('Change background to red');
    document.querySelector('body').style.backgroundColor = 'red'; 
    document.querySelector('#btn1').style.backgroundColor = '#EC6565';
};

const makeBlue = () => {
    // your code here...
    resetButtonBackground ();
    console.log('Change background to blue');
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('#btn2').style.backgroundColor = '#5EBEEC';

};

const makePink = () => {
    // your code here...
    resetButtonBackground ();
    console.log('Change background to pink');
    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('#btn3').style.backgroundColor = '#F288E1';

};

const makeOrange = () => {
    // your code here...
    resetButtonBackground ();
    console.log('Change background to orange');
    document.querySelector('body').style.backgroundColor = 'orange';
    document.querySelector('#btn4').style.backgroundColor = '#F7A441';
};

