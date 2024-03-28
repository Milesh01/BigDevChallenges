// =========================create table dynamic======
const customerData = [{
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    companyName: 'Hartmann Group',
    phoneNumber: '+68 574 01 68',
    status: 'Active',
    createdDate: '16 Oct 2024',
    avatar: 'https://i.pravatar.cc/32?img=1'
},
{
    name: 'vibha Doe',
    email: 'vibha.ple@gmail.com',
    companyName: 'Gulalpur Group',
    phoneNumber: '+98 674 81 28',
    status: 'Active',
    createdDate: '16 Oct 2024',
    avatar: 'https://i.pravatar.cc/32?img=2'
},
{
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    companyName: 'Smith Enterprises',
    phoneNumber: '+91 845 9789',
    status: 'Inactive',
    createdDate: '28 Mar 2022',
    avatar: 'https://i.pravatar.cc/32?img=3'
},
{
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    companyName: 'Johnson Corp',
    phoneNumber: '+99 876 5432',
    status: 'Active',
    createdDate: '10 Feb 2023',
    avatar: 'https://i.pravatar.cc/32?img=4'
},
{
    name: 'mk Doe',
    email: 'mk.doe@gmail.com',
    companyName: 'Hartmann Group',
    phoneNumber: '+68 574 01 68',
    status: 'Active',
    createdDate: '16 Oct 2024',
    avatar: 'https://i.pravatar.cc/32?img=1'
},
{
    name: 'Jone Doe',
    email: 'Jone.doe@gmail.com',
    companyName: 'Hartmann Group',
    phoneNumber: '+68 574 01 68',
    status: 'Active',
    createdDate: '16 Oct 2023',
    avatar: 'https://i.pravatar.cc/32?img=2'
},
{
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    companyName: 'Brown Co.',
    phoneNumber: '+1 987 6543',
    status: 'Inactive',
    createdDate: '20 Nov 2022',
    avatar: 'https://i.pravatar.cc/32?img=6'
},
{
    name: 'Sophia Martinez',
    email: 'sophia.martinez@example.com',
    companyName: 'Martinez Enterprises',
    phoneNumber: '+7 654 3210989',
    status: 'Active',
    createdDate: '12 Apr 2023',
    avatar: 'https://i.pravatar.cc/32?img=7'
},
];

const customerList = document.querySelector('tbody');
function renderCustomers() {
    customerList.innerHTML = '';
    customerData.forEach((customer) => {
        const row = document.createElement('tr');
        row.classList.add('hover:bg-purple-300', 'rounded-xl',);
        row.innerHTML = `
              <td class="px-4 py-2">
                  <div class="flex items-center">
                      <input type="checkbox" class="form-checkbox mr-2  cursor-pointer">
                      <img src="${customer.avatar}" class="h-8 w-8 rounded-full mr-2">
                      <div class="flex flex-col">
                          <span>${customer.name}</span>
                          <span class="text-gray-500">${customer.email}</span>
                      </div>
                  </div>
              </td>
              <td class="px-4 py-2">${customer.companyName}</td>
              <td class="px-4 py-2">${customer.phoneNumber}</td>
              <td class="px-4 py-2">
                  <span class="px-2 py-1 rounded-full ${customer.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}">${customer.status}</span>
              </td>
              <td class="px-4 py-2">${customer.createdDate}</td>
              <td class="px-4 py-2">
                  <i class="bi bi-three-dots cursor-pointer"></i>
              </td>
          `;
        customerList.appendChild(row);
    });
}

renderCustomers();


// ============mainCheckbox===================
const mainCheckbox = document.getElementById('checkedAll');

mainCheckbox.addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.form-checkbox:not(#checkedAll)');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = mainCheckbox.checked;
    });
});

// ========================
const menuItems = document.querySelectorAll('.col-md-4 .card');

// Har ek list item par loop lagao
menuItems.forEach(item => {
  // Click event listener lagao
  item.addEventListener('click', function() {
    // Sabhi list items se 'active' class hatao
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    // Clicked list item par 'active' class lagao
    this.classList.add('active');
  });
});
