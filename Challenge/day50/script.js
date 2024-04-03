    const viewData = [
    {
        avatar : 'https://avatars.githubusercontent.com/u/152176996?v=4 ',
        Name : 'Mk Kwd',
        mFriends : '3 mutual friends',
        decline : '<i class="bi bi-x-lg"></i> Decline',
        Accept : '<i class="bi bi-check-lg"></i> Confirm'
    },
    {
        avatar : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fyoung-adult-boy-portrait%2F291346142&psig=AOvVaw1n5QoI07cMeWUCcXEW3G6-&ust=1712256826410000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjioPHbpoUDFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fyoung-adult-boy-portrait%2F291346142&psig=AOvVaw1n5QoI07cMeWUCcXEW3G6-&ust=1712256826410000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjioPHbpoUDFQAAAAAdAAAAABAEhttps://as2.ftcdn.net/v2/jpg/02/91/34/61/1000_F_291346142_LPJ1Qy1wBNg1zYxEzXUkphPi9j3pryn2.jpg',
        Name : 'Vijay kumar',
        mFriends : '1 mutual friends',
        decline : '<i class="bi bi-x-lg"></i> Decline',
        Accept : '<i class="bi bi-check-lg"></i> Confirm'
    },
    {
        avatar : 'https://img.freepik.com/free-photo/model-cute-adult-portrait-urban_1139-817.jpg',
        Name : 'Sudha Sahu',
        mFriends : '7 mutual friends',
        decline : '<i class="bi bi-x-lg"></i> Decline',
        Accept : '<i class="bi bi-check-lg"></i> Confirm'
    },
    {
        avatar : 'https://c4.wallpaperflare.com/wallpaper/156/212/901/cute-girl-1920x1200-wallpaper-preview.jpg',
        Name : 'Priya',
        mFriends : '3 mutual friends',
        decline : '<i class="bi bi-x-lg"></i> Decline',
        Accept : '<i class="bi bi-check-lg"></i> Confirm'
    }
]

const userIdElement = document.getElementById('userid');
userIdElement.textContent = viewData.length + ' friends user request';

var renderData = ''
const listView = document.querySelector('#listView');
viewData.forEach((val)=>{
    renderData += `
    <div class="d-flex align-items-center justify-content-between border-1 border-dark rounded p-2 mt-2">
                        <div class="d-flex align-items-center justify-content-center">
                        <img src="${val.avatar}" class="w-14 h-14 rounded-full">
                        <div class="ms-2">
                            <h6>${val.Name}</h6>
                            ${val.mFriends}
                        </div>
                    </div>
                        <div class="">
                            <button type="button" class=" decline-btn hover:bg-red-500 p-2 rounded transition-all"><i class="bi bi-x-lg"></i> Decline</button>
                            <button type="button" class="confirm-btn rounded p-2 bg-emerald-400 text-black hover:bg-emerald-500 transition-all"><i class="bi bi-check-lg"></i> Confirm</button>
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
        button.parentNode.parentNode.remove(); // Remove the parent div
    });
});
