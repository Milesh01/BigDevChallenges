const colmd6 = document.querySelector('.col-md-6');
const imgId = document.getElementById('imgId');
document.getElementById('startBtn').addEventListener('click',()=>{
  colmd6.style.opacity = '0';
  imgId.style.opacity = '0';
  window.location.href = "chat.html";
})

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener('click', ()=>{
  window.location.href = 'chatBox.html';
})


// ==============inputfield===============

