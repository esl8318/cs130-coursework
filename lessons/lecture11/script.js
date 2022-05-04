console.log('hello world!')
const name = "Jane"; 
const pic = "http://website.com/avatar.png"; 
const score = 300;
// const html = `
//    <div class="card">
//        <img src="${pic}">
//        <p>
//   ${name}'s high score is:      
//   ${score}
//         </p>
//    </div>`;


const someHTML = `
    <section>
        <h1>Hello ${name}!</h1>
        <img src="${pic}" />
        <p>Score: ${score}</p>
    </section>
`;

document.querySelector('main').innerHTML = someHTML;