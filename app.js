const boxContent = document.querySelector('.box-container');
const containerModal = document.querySelector('.container-modal');
const containerModalCalculator = document.querySelector('.container-modal-calculator');

boxContent.addEventListener('click', (e)=> {
    const cuadrado = e.target.classList.contains('cuadrado');
    if(cuadrado){
        containerModal.classList.add('open-modal')
    }
});

containerModal.addEventListener('click', (e) => {
    const btnClose = e.target.classList.contains('btn-close');
    const fueraDelModal = e.target.classList.contains('container-modal');
    const btnCloseTwo = e.target.classList.contains('btn-close-two');
    /*other modal*/
    const btnOpenOthelModal = e.target.classList.contains('btn-open-other-modal');
    if(btnClose || fueraDelModal || btnCloseTwo){
        return containerModal.classList.remove('open-modal')
    }
    if(btnOpenOthelModal){
        containerModalCalculator.classList.add('open-modal-calculator')
    }
})

containerModalCalculator.addEventListener('click', (e) => {
    const btnCloseModal = e.target.classList.contains('btn-close-calculator');
    const btnCloseModalTwo = e.target.classList.contains('btn-close-two-calculator');
    const fueraDelModalTwo = e.target.classList.contains('container-modal-calculator');
    if(btnCloseModalTwo || btnCloseModal || fueraDelModalTwo){
        containerModalCalculator.classList.remove('open-modal-calculator')
    }
})