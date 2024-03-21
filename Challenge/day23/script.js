function selectTab(tabId) {
    const tabs = document.querySelectorAll('ul li');
    tabs.forEach(tab => {
      tab.classList.remove('selected');
    });
    document.getElementById(tabId).classList.add('selected');
  }
  
// ======================leftSideNavBar=================
  const leftSideNavBar = document.getElementById('leftSideNavBar');
  leftSideNavBar.innerHTML = `
  <h2 class="uppercase text-white font-bold">Electrofrestival</h2> &nbsp; &nbsp;
  <span class="border-2 border-green-600 p-1 rounded-full text-green-600 px-2 mx-2 font-bold hover:bg-green-600 hover:text-white transition-all cursor-pointer">3-6 JULY</span>
  <span class="border-2 border-green-600 p-1 rounded-full text-green-600 px-2 mx-2 font-bold hover:bg-green-600 hover:text-white transition-all cursor-pointer">KAWARDHA, CG</span>`;


  // ======================RightsideNavBar=================
  const sideNavBar = document.getElementById('sideNavBar');
  sideNavBar.innerHTML = `
    <ul class="d-flex justify-content-center align-items-center">
      <li onclick="selectTab('Tickets')" class="selected hover:bg-white hover:text-black transition-all text-white font-bold px-3 py-2 mx-3 rounded-full cursor-pointer">Tickets</li>
      <li onclick="selectTab('Lineup')" class="hover:bg-white hover:text-black transition-all text-white font-bold px-3 py-2 mx-3 rounded-full cursor-pointer">Lineup</li>
      <li onclick="selectTab('News')" class="hover:bg-white hover:text-black transition-all text-white font-bold px-3 py-2 mx-3 rounded-full cursor-pointer">News</li>
      <li onclick="selectTab('Artists')" class="hover:bg-white hover:text-black transition-all text-white font-bold px-3 py-2 mx-3 rounded-full cursor-pointer">Artists</li>
      <li onclick="selectTab('Explore')" class="hover:bg-white hover:text-black transition-all text-white font-bold px-3 py-2 mx-3 rounded-full cursor-pointer">Explore</li>
    </ul>`;
  

// ======================sectionContent=================
const sectionContent = document.getElementById('sectionContent');
sectionContent.innerHTML = `
<span style="writing-mode: vertical-lr; top: 70%; left: 8%;" class="rounded-full position-absolute text-white bg-slate-910 font-bold py-3 bg-s w-auto hover:bg-white hover-text-black cursor-pointer">Scroll Down &nbsp; <i class="bi bi-arrow-down"></i></span>
<div class="col-md-3  position-absolute" style="top: 37%; left: 15%;">
  <div class="text-white p-2 bg-inherit border-2 rounded bg-slate-910 position-relative">
    <span class="position-absolute rounded-full cursor-pointer " style="top: 60%; left: 50%; transform: translate(-50%,0%);"><i class="bi bi-play-circle-fill text-5xl text-green-600 hover:text-white transition-all"></i></span>
    <h5 class="font-bold text-white">What is electro music fastival?</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio possimus ducimus nostrum est aspernatur eveniet quasi a. Alias itaque sequi, </p>
    
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_ScMKOfZUMM?si=NL01u5Pq_u-11Wk9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <span class="font-bold text-gray-400">2024 Official Thrilar</span>
  </div>
</div>
<div class="d-flex justify-content-end align-items-center">
<div class="col-md-4 text-end p-5">
  <h1 class="text-white font-f font-bold text-8xl">2024</h1>
  <h1 class="text-white font-f font-bold text-8xl">Electro</h1>
  <h1 class="text-white font-f font-bold text-8xl">Music</h1>
  <h1 class="text-white font-f font-bold text-8xl">Fastival</h1>
  </div>
</div>
`