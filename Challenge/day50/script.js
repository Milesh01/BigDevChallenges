    const viewData = [
    {
        icon : '<i class="bi bi-grid-1x2-fill"></i>',
        iconName : 'Dashboard'
    },
    {
        icon : '<i class="bi bi-tag-fill"></i>',
        iconName : 'Tag List'
    },
    {
        icon : '<i class="bi bi-table"></i>',
        iconName : 'Deline Subject'
    },
    {
        icon : '<i class="bi bi-person-fill"></i>',
        iconName : 'Members'
    },    {
        icon : '<i class="bi bi-tags-fill"></i>',
        iconName : 'Tag Assignment'
    },
    {
        icon : '<i class="bi bi-collection-fill"></i>',
        iconName : 'Library'
    },
    {
        icon : '<i class="bi bi-envelope-fill"></i>',
        iconName : 'Emails'
    },
]

var renderData = ''
const listView = document.querySelector('#listView');
viewData.forEach((val)=>{
    renderData += `
    <div class="hover:bg-red-400 cursor-pointer rounded p-2">
    <span class="mr-2">${val.icon}</span>
    <span class="sm-none font-bold">${val.iconName}</span>
</div>`;
listView.innerHTML = renderData
});

const icon = document.getElementById('icon')
icon.addEventListener('click',()=>{
    var smNone = document.querySelectorAll('.sm-none, .main-box');
    smNone.forEach((elem)=>{
        elem.classList.toggle('active');
    });
});