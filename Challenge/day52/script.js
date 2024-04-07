const table =document.getElementById('table');
table.innerHTML = `
<table class="table table-hover mt-2">
<thead class="table-active">
    <tr>
        <th scope="col">DATE</th>
        <th scope="col">DETAILS</th>
        <th scope="col">AMOUNT</th>
        <th scope="col">OPERATION</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">04/04/2024</th>
        <td class="font-bold">Standard Plan</td>
        <td class="font-bold"><span class="text-purple-600">$29.00</span></td>
        <td><i class="bi bi-eye-fill p-1 px-2 border-1 border-dark rounded"></i>
            <i class="bi bi-arrow-down p-1 px-2 border-1 border-dark rounded"></i>
            <i class="bi bi-envelope-fill p-1 px-2 border-1 border-dark rounded"></i>
        </td>
    </tr>  
    <tr>
        <th scope="row">05/04/2024</th>
        <td class="font-bold">Standard Plan</td>
        <td class="font-bold"><span class="text-purple-600">$35.00</span></td>
        <td><i class="bi bi-eye-fill p-1 px-2 border-1 border-dark rounded"></i>
            <i class="bi bi-arrow-down p-1 px-2 border-1 border-dark rounded"></i>
            <i class="bi bi-envelope-fill p-1 px-2 border-1 border-dark rounded"></i>
        </td>
    </tr>  
    <tr>
        <th scope="row">06/04/2024</th>
        <td class="font-bold">Standard Plan</td>
        <td class="font-bold"><span class="text-purple-600">$79.00</span></td>
        <td><i class="bi bi-eye-fill p-1 px-2 border-1 border-dark rounded"></i>
            <i class="bi bi-arrow-down p-1 px-2 border-1 border-dark rounded"></i>
            <i class="bi bi-envelope-fill p-1 px-2 border-1 border-dark rounded"></i>
        </td>
    </tr> 
    <tr>
        <th scope="row">08/04/2024</th>
        <td class="font-bold">Standard Plan</td>
        <td class="font-bold text-purple-600"><span class="text-purple-600">$88.00</span></td>
        <td><i class="bi bi-eye-fill p-1 px-2 border-1 border-dark rounded"></i>
            <i class="bi bi-arrow-down p-1 px-2 border-1 border-dark rounded"></i>
            <i class="bi bi-envelope-fill p-1 px-2 border-1 border-dark rounded"></i>
        </td>
    </tr>   
</tbody>
</table> 
`;

const method = document.getElementById('method');
method.innerHTML = `
<div class="row">
<div class="col-md-4 mt-3">
    <div class="card h-100 p-3 bg-gray-100 ">
        <div class="d-flex justify-content-center align-items-center" style="height: 90px;">
            <span class="font-bold">**** **** **** 2362</span>
        </div>
    </div>
</div>
<div class="col-md-4 mt-3">
    <div class="card p-3 border-1">
        <div class="d-flex justify-content-center align-items-center" style="height: 90px;">
            <i class="bi bi-plus-circle-fill text-gray-400 fs-3 cursor-pointer"></i>
        </div>
    </div>
</div>
</div>
`;
const plan = document.getElementById('plan');
const plan01 = document.getElementById('plan01');
var num = 0;
plan.addEventListener('click',()=>{
    if(num == 0){
        plan01.style.display = 'none';
        num = 1;
    }
    else{
        plan01.style.display = 'block';
        num = 0;
    }
});

document.getElementById('method02').addEventListener('click',()=>{
    alert('Sorry');
})