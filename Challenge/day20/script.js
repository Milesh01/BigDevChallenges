const colorPicker = document.getElementById('colorPicker');
  const colorBox = document.getElementById('colorBox');
  const colorCode = document.getElementById('colorCode');
  const colorPic1 = document.getElementById('colorPic1');
  const colorPic2 = document.getElementById('colorPic2');
  const colorPic3 = document.getElementById('colorPic3');
  const closeButton = document.getElementById('close');
  const closeButton2 = document.getElementById('close2');

  colorPicker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    colorBox.style.backgroundColor = selectedColor;
    colorCode.textContent = selectedColor.toUpperCase();
    colorPic1.style.backgroundColor = selectedColor;
    colorPic2.style.backgroundColor = selectedColor;
    colorPic3.style.backgroundColor = selectedColor;
  });
  closeButton.addEventListener('click', () => {
    const colorPickerContainer = document.querySelector('.card-1');
    colorPickerContainer.style.display = 'none';
  });
  closeButton2.addEventListener('click', () => {
    const colorPickerContainer = document.querySelector('.card-2');
    colorPickerContainer.style.display = 'none';
  });