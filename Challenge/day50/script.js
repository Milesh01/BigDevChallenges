    const viewData = [
    {
        
        avatar : 'https://i.pinimg.com/originals/f4/7a/11/f47a11f6f2fcd5cc64888d90637d45e5.gif ',
        Name : 'Mk Kwd',
        mFriends : '2 mutual friends',
        decline : '<i class="bi bi-x-lg"></i> Decline',
        Accept : '<i class="bi bi-check-lg"></i> Confirm',
        dmBlock: 'Usha sahu <br> Pooja'
    },
    {
        avatar : 'https://avatars.githubusercontent.com/u/152176996?v=4 ',
        Name : 'Vijay kumar',
        mFriends : '1 mutual friends',
        decline : '<i class="bi bi-x-lg"></i> Decline',
        Accept : '<i class="bi bi-check-lg"></i> Confirm',
        dmBlock: 'Kumkum'
    },
    {
        avatar : 'https://img.freepik.com/free-photo/model-cute-adult-portrait-urban_1139-817.jpg',
        Name : 'Sudha Sahu',
        mFriends : '1 mutual friends',
        decline : '<i class="bi bi-x-lg"></i> Decline',
        Accept : '<i class="bi bi-check-lg"></i> Confirm',
        dmBlock: 'Ninayak'
    },
    {
        avatar : 'https://c4.wallpaperflare.com/wallpaper/156/212/901/cute-girl-1920x1200-wallpaper-preview.jpg',
        Name : 'Priya',
        mFriends : '2 mutual friends',
        decline : '<i class="bi bi-x-lg"></i> Decline',
        Accept : '<i class="bi bi-check-lg"></i> Confirm',
        dmBlock: 'Suraj <br> Vikas'
    }
]

const userIdElement = document.getElementById('userid');
userIdElement.textContent = viewData.length + ' friends user request';

var renderData = ''
const listView = document.querySelector('#listView');
viewData.forEach((val)=>{
    renderData += `
    <div class="d-flex align-items-center justify-content-between border-2 rounded p-2 mt-2 hover:bg-slate-200">
                        <div class="d-flex align-items-center justify-content-center">
                        <img src="${val.avatar}" class="w-14 h-14 rounded-full object-cover">
                        <div class="ms-2 mutualF">
                            <h6>${val.Name}</h6>
                            ${val.mFriends}
                            <div class="d-mBlock">
                            ${val.dmBlock}
                            </div>
                        </div>
                    </div>
                        <div class="">
                            <button type="button" class="text-gray-500 font-medium decline-btn hover:bg-red-500 p-2 rounded transition-all hover:text-black">${val.decline}</button>
                            <button type="button" class="confirm-btn font-medium rounded p-2 bg-emerald-400 text-black hover:bg-emerald-500 transition-al ">${val.Accept}</button>
                        </div>
                    </div>`;
listView.innerHTML = renderData
});

const confirmButtons = document.querySelectorAll('.confirm-btn');
const declineButtons = document.querySelectorAll('.decline-btn');

confirmButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.parentNode.remove(); // Remove the parent div
    });
});

declineButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Are U Sure');
        button.parentNode.parentNode.remove(); // Remove the parent div
    });
});
