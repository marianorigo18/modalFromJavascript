const boxContent = document.querySelector('.box-container');
const main = document.querySelector('main');

function obtenerModalCalculator(){
    const containerModalCalculator = document.querySelector('.container-modal-calculator');
    containerModalCalculator.addEventListener('click', (e) => {
        const btnCloseModal = e.target.classList.contains('btn-close-calculator');
        const btnCloseModalTwo = e.target.classList.contains('btn-close-two-calculator');
        const fueraDelModalTwo = e.target.classList.contains('container-modal-calculator');
        if(btnCloseModalTwo || btnCloseModal || fueraDelModalTwo){
            containerModalCalculator.remove()
        }
    })
}

function renderModalCalculator(){
    const cModalCalculator = document.createElement('div');
    cModalCalculator.classList = 'container-modal-calculator open-modal-calculator';
    cModalCalculator.innerHTML = `
    <div class="modal-content-calculator">
    <span class="btn-close-calculator">X</span>
    <div class="modal-content-img-calculator">
        <img src="https://img.ecologiahoy.com/2017/06/paisajes-naturales-26.jpeg" alt="">
    </div>
    <div class="modal-body-calculator">
        <button class="btn-close-two-calculator">close</button>
    </div>
    </div>
    `
    main.appendChild(cModalCalculator)
    obtenerModalCalculator();
}

function obtenerModal(){
    const containerModal = document.querySelector('.container-modal');
    containerModal.addEventListener('click', (e) => {
        const btnClose = e.target.classList.contains('btn-close');        
        const fueraDelModal = e.target.classList.contains('container-modal');
        const btnCloseTwo = e.target.classList.contains('btn-close-two');
        /*other modal*/
        const btnOpenOthelModal = e.target.classList.contains('btn-open-other-modal');
        if(btnClose || fueraDelModal || btnCloseTwo){
            return containerModal.remove()
        }
        if(btnOpenOthelModal){
           renderModalCalculator()
        }
    })

}

function rederModal(){
    const cModal = document.createElement('div');
    cModal.classList = 'container-modal open-modal';
    cModal.innerHTML = `
    <div class="modal-content">
    <span class="btn-close">X</span>
    <div class="modal-content-img">
        <img src="https://www.blogdelfotografo.com/wp-content/uploads/2014/08/61.jpg" alt="">
    </div>
    <div class="modal-body">
        <button class="btn-close-two">close</button>
        <button class="btn-open-other-modal">open other modal</button>
    </div>
    </div>
    `
    main.appendChild(cModal)
    obtenerModal()
}

boxContent.addEventListener('click', (e)=> {
    const cuadrado = e.target.classList.contains('cuadrado');
    if(cuadrado){
        rederModal()
    }
});
