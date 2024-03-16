document.getElementById('close').addEventListener('click',() =>{
    const dNone = document.querySelector('.card-2');
    dNone.style.transition = 'all .3s';
    dNone.style.scale = '0'
    dNone.style.opacity = '0'
})
document.getElementById('open').addEventListener('click', () =>{
    const dBlock = document.querySelector('.card-2');
    dBlock.style.transition = 'all .3s';
    dBlock.style.scale = '1'
    dBlock.style.opacity = '1'
})