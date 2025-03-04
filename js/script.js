const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const btnEle = document.querySelector('#hamBtn')
const navEle = document.querySelector('#priNav')

btnEle.addEventListener('click', () => {
    btnEle.classList.toggle('open')
    navEle.classList.toggle('open')
    

})