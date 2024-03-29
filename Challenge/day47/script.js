const imgFormat = document.getElementById('imgFormat');
imgFormat.innerHTML = `
<div class="card p-2 border-2 bg-dark text-white">
<h4>Export File</h4>
<hr>
<div class="">
<h5>Format</h5>
<div class="flex justify-between aligns-end">
    <span class="bg-gray-600 py-1 px-2 rounded">JPG</span>
    <input type="radio" class="cursor-pointer w-4" name="format" value="JPG">
</div>
<div class="flex justify-between aligns-end mt-2">
    <span class="bg-gray-600 py-1 px-2 rounded">PNG</span>
    <input type="radio" class="cursor-pointer w-4" name="format" value="PNG">
</div>
<div class="flex justify-between aligns-end mt-2">
    <span class="bg-gray-600 py-1 px-2 rounded">TIFF</span>
    <input type="radio" class="cursor-pointer w-4" name="format" value="TIFF">
</div>
<div class="flex justify-between aligns-end mt-2">
    <span class="bg-gray-600 py-1 px-2 rounded">GIF</span>
    <input type="radio" class="cursor-pointer w-4 text-gray-400" name="format" value="GIF">
</div>
</div>
<hr>
<div class="">
<h5>Photo Quality</h5>
<input type="range" class="w-100 bg-yellow-500 text-yellow-500 " value="80" id="qualityRange" min="0" max="100" width="100%" style="background-color: yellow !important; color: red">
</div>
<div class="flex justify-between aligns-end my-4 ">
<h5>Size</h5>
<select class="bg-gray-600 py-1 px-2 rounded cursor-pointer" id="sizeSelect">
    <option class="hover:bg-yellow-500" value="1x">1x</option>
    <option class="hover:bg-yellow-500" value="2x">2x</option>
    <option class="hover:bg-yellow-500" value="3x">3x</option>
    <option class="hover:bg-yellow-500" value="4x">4x</option>
</select>
</div>
<div class="">
<input type="button" class="py-2 w-100 bg-yellow-500 rounded text-black fw-bold" value="Export File" onclick="exportFile()">
</div>
</div>
`;

function exportFile() {
    var msg = document.getElementById('message');
    var format = document.querySelector('input[name="format"]:checked').value;
    var quality = document.getElementById('qualityRange').value;
    var size = document.getElementById('sizeSelect').value;
    // Update image based on selected format, quality, and size
    var img = document.getElementById('imgEff');

    // Replace the image URL with your actual image URL
    img.setAttribute('src', 'https://avatars.githubusercontent.com/u/152176996?v=4'); // Corrected line
    msg.innerHTML  = `
    Exporting <span class="fw-bold">${format}</span> format with quality <span class="fw-bold">${quality}</span> and size <span class="fw-bold">${size}</span>
    `;
    // Apply blur filter if quality is less than 70
    if (quality <= 50) {
        img.style.filter = `blur(2px)`;
    } else if (quality <= 20) {
        img.style.filter = `blur(35px)`;
    } else {
        img.style.filter = `none`;
    }

      // Apply zoom effect based on size value
      var zoomFactor = 1;
    if (size === '2x') {
        zoomFactor = 2;
    } else if (size === '3x') {
        zoomFactor = 3;
    } else if (size === '4x') {
        zoomFactor = 4;
    }
    img.style.width = (zoomFactor * 100) + 'px !imaportent';
    img.style.height = (zoomFactor * 100) + 'px !imaportent';
    
}
