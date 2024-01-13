let inputBox =  document.getElementById("input-box");
let MyData = document.getElementById("mydata");
document.getElementById("submitBtn").addEventListener("click", ()=>{
    if(inputBox.value ==""){
        alert("Enter Your Task");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = `${inputBox.value} <span>&#x2715</span>` ;
        MyData.appendChild(list);
        inputBox.value="";
        list.querySelector('span').addEventListener("click", remove);

            function remove(){
                alert("Are U Sure delete");
                list.remove()
            }   
        list.addEventListener("click",()=>{
            if(list.classList.contains("underline")){
                list.classList.remove("underline");
            }
           else{
            list.classList.add("underline");
           }
        
        })
     
    }

})


// ===========Night Mode On======================
document.addEventListener('DOMContentLoaded', function () {
    const nightModeToggle = document.getElementById('nightModeToggle');

    nightModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('night-mode', nightModeToggle.checked);
    });
});
