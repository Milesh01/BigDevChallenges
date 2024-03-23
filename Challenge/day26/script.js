const inputBox = document.getElementById('inputBox');
let MyData = document.getElementById("mydata");
const btn = document.getElementById('btn').addEventListener('click', () =>{
    if(inputBox.value == ''){
        alert('mk')
    }
    else{
        let list = document.createElement("li");
        let spandd = document.createElement("span");
        list.innerHTML = `${inputBox.value}` ;
        MyData.appendChild(list);
        let cs = list.appendChild(spandd);
        cs =
        inputBox.value="";
    }
});

