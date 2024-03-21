
// ======================allContent=================
  const allContent = document.getElementById('allContent');
  allContent.innerHTML = `
  <div class="row h-100 d-flex justify-content-center align-items-center">
  <div class="col-md-3">
    <div class="card pt-2 bg-black overflow-hidden" style="border-radius: 5%;">
      <div class="row mt-2">
        <div class="col-md-1">
          <i class="bi bi-arrow-left-short  text-white font-bold fs-2 hover:text-green-200"></i>
        </div>
        <div class="col-md-10 font-bold text-white d-flex justify-content-center align-items-center">
          Scan QR Code
        </div>
        <div class="col-md-12 text-center mt-3 font-bold text-white px-4">
          <p>Position the QR code within the frame for fast scanning. Minimize shanking to expedite result.</p>
        </div>
        <div class="col-md-12 p-2 bg-white d-flex justify-content-center align-items-center flex-column pt-5 mt-5" style="border-top-left-radius: 15%; border-top-right-radius: 15%;">
          <img src="https://thejsdevelope-bds-challenges.vercel.app/_next/image?url=%2Fassets%2FQR.png&w=256&q=75" class="object-cover" loading="lazy">
          <div class="col-md-12 my-4   text-center">
            <button class="p-2 w-75 bg-success rounded mt-2 font-bold hover:text-white">Scan QR Code</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;

