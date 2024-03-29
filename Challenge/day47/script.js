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