const cardId01 = document.getElementById("card-id-01");
cardId01.innerHTML = `  <div class="card p-3">
<h3 class="font-bold font-sens"> Setup Workspace</h3>
<label for="" class="font-bold">Workspace name*</label>
<input type="text" placeholder="My Workspace" class="p-2 border-green-10     rounded outline-none" id="firstInput"><br>
<label for="" class="font-bold">Select Your Industry</label>
<select class="custom-select  p-2 border-green-10 rounded outline-none">
<option>Select Your Industry</option>
<option>Technology</option>
<option>Design</option>
<option>Manufacturing</option>
<option>Education</option>
</select>
<br>
<hr>
<div class="d-flex justify-content-between align-items-center">
<label for="" class="font-bold">Add a Workspace members</label>
<span class="font-bold">1/5</span>
</div>
<label for="" class="font-bold">Member email</label>
<div class="d-flex justify-content-between align-items-center">
<input type="email" placeholder="enter your email" class="p-2 border-green-10 rounded outline-none w-75" id="inputBox">
<button class="bg-green-400 p-2 rounded text-white px-4" id="btn">Invite</button>
</div>
<br>
<div class="d-flex align-items-center">
  <img src="https://avatars.githubusercontent.com/u/152176996?v=4" class="w-[50] rounded-full">
  <div class="ms-2">
    <span class="font-bold">Milesh Kumar</span>
    <span class="text-gray-500">mk.name@gmail.com</span>
  </div>
 <span class="p-2 text-end w-100"><i class="bi bi-arrow-down-circle cursor-pointer fs-3" id="iconSec"></i></span>
</div>
<br>
<button class="bg-green-400 p-2 w-100 rounded font-bold">Setup Workspace</button>
</div>`


const cardId02 = document.getElementById("card-id-02");
cardId02.innerHTML = `
<div class="card p-2">
<label for="" class="font-bold">Select Your Industry</label>
<select class=" p-2 border-green-10 rounded outline-none cursor-pointer">
<option class="">Select Your Industry</option>
<option class="">Technology</option>
<option>Design</option>
<option>Manufacturing</option>
<option>Education</option>
</select>
<br>
</div>
<div class="card mt-5">
<ul id="mydata">

</ul>
</div>`
const firstInput = document.getElementById('firstInput');
const inputBox = document.getElementById('inputBox');
let MyData = document.getElementById("mydata");
const btn = document.getElementById('btn').addEventListener('click', () =>{
    if(inputBox.value == ''){
        alert('Please Enter Your Email');
    }
    else{
        let list = document.createElement("li");
        list.classList.add("d-flex","justify-content-around","align-items-center","font-bold");
        // span1.innerHTML = `${firstInput.value}`
        list.innerHTML = `${firstInput.value} <br> ${inputBox.value}  <span class="p-2 text-end w-100"><i class="bi bi-arrow-down-circle cursor-pointer fs-5" id="iconClick"></i></span>` ;
        MyData.appendChild(list);
        const iconSec = document.getElementById("iconSec").addEventListener("click", () =>{
          alert("Sorry This function Not Work Currently !")
        })
        const iconClick = document.getElementById("iconClick").addEventListener('click',() =>{
          alert("Sorry This function Not Work Currently");
        })
        inputBox.value="";
    }
});

