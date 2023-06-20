

//https://api.adviceslip.com/advice api for advanced advice


const resDiv = document.querySelector('#results');
const resIDs = document.querySelector('#idss');
const resBtn = document.querySelector('#getData');
resBtn.addEventListener('click', () => {
  getAdvice();
});
window.onload = () => {
  getAdvice();
};

function getAdvice() {

  fetch('	https://api.adviceslip.com/advice').then(response => {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    resDiv.innerHTML = `<p>"${Adviceobj.advice}"</p>`;
    resIDs.innerHTML = `<span>${Adviceobj.id}</span>`;
  }).catch(error => {
    console.log(error);
  });

}