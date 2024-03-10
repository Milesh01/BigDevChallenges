function filterPosts(category) {
    var posts = document.getElementsByClassName('post');
    for (var i = 0; i < posts.length; i++) {
      if (category === 'all') {
        posts[i].style.display = 'block';
      } else {
        if (posts[i].classList.contains(category)) {
          posts[i].style.display = 'block';
        } else {
          posts[i].style.display = 'none';
        }
      }
    }
  }
  

//   ===============active=================
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('li button');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });


//    =============dynamic=====================
   function createElements() {
    // Get the reference to the dynamic-content div
    const dynamicContentDiv = document.getElementById('dynamic-content');

    // Create ul element
    // const ul = document.createElement('ul');
    // ul.classList.add('ps-0', 'd-flex', 'text-center', 'justify-content-around', 'overflow-hidden', 'pt-1',');

    // Add list items to the ul element
    // ul.innerHTML = ``

    // Append the ul element to the dynamic-content div
    // dynamicContentDiv.appendChild(ul);

    // Create div element for table
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('h-[180]', 'overflow-y-scroll');

    // Create table element
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-dark');

    // Create table body
    const tbody = document.createElement('tbody');

    // Add table rows to the tbody element
    tbody.innerHTML = `
        <tr class="">
            <th scope="row" class="text-center">4<br><i class="bi bi-caret-up-fill text-green-500"></i></th>
            <td class="d-flex align-items-center"><img src="https://images.unsplash.com/photo-1608176906358-808c28865e2e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWFuJTIwYm95fGVufDB8fDB8fHww" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Mark</td>
            <td class="text-end pt-3">0004</td>
        </tr>
        <tr class="">
        <th scope="row" class="text-center">5<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
        <td class="d-flex align-items-center"><img src="https://media.istockphoto.com/id/862664362/photo/young-tourist-with-camera-in-the-old-town.jpg?s=612x612&w=0&k=20&c=lQlFOenQ4vDpxz7Sy-5oYcLatcUkp_zoHoIfb58kydU=" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Dipak</td>
        <td class="text-end pt-3">0005</td>
      </tr> 
      <tr class="">
        <th scope="row" class="text-center">6<br><i class="bi bi-caret-down-fill "></i></th>
        <td class="d-flex align-items-center"><img src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Khosbo</td>
        <td class="text-end pt-3">0006</td>
      </tr> 
      <tr class="">
        <th scope="row" class="text-center">7<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
        <td class="d-flex align-items-center"><img src="https://avatars.githubusercontent.com/u/152176996?v=4" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Vijay</td>
        <td class="text-end pt-3">0007</td>
      </tr> 
      <tr class="">
        <th scope="row" class="text-center">8<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
        <td class="d-flex align-items-center"><img src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Pinto</td>
        <td class="text-end pt-3">0008</td>
      </tr> 
      <tr class="">
        <th scope="row" class="text-center">9<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
        <td class="d-flex align-items-center"><img src="https://images.unsplash.com/photo-1608176906358-808c28865e2e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWFuJTIwYm95fGVufDB8fDB8fHww" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Lasit</td>
        <td class="text-end pt-3">0009</td>
      </tr> 
      <tr class="">
        <th scope="row" class="text-center">10<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
        <td class="d-flex align-items-center"><img src="https://media.istockphoto.com/id/862664362/photo/young-tourist-with-camera-in-the-old-town.jpg?s=612x612&w=0&k=20&c=lQlFOenQ4vDpxz7Sy-5oYcLatcUkp_zoHoIfb58kydU=" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Mili</td>
        <td class="text-end pt-3">0010</td>
      </tr> 
    `;

    // Append the tbody element to the table element
    table.appendChild(tbody);

    // Append the table element to the tableDiv element
    tableDiv.appendChild(table);

    // Append the tableDiv element to the dynamic-content div
    dynamicContentDiv.appendChild(tableDiv);
}

// Call the function to create and append elements
createElements();




//    =============dynamic2=====================
function createElements2() {
    const dynamicContentDiv = document.getElementById('dynamic-content2');

    const tableDiv = document.createElement('div');
    tableDiv.classList.add('h-[180]', 'overflow-y-scroll');

    // Create table element
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-dark');

    // Create table body
    const tbody = document.createElement('tbody');

    // Add table rows to the tbody element
    tbody.innerHTML = `
    <tr class="">
    <th scope="row" class="text-center">4<br><i class="bi bi-caret-up-fill text-green-500"></i></th>
    <td class="d-flex align-items-center"><img src="https://us.123rf.com/450wm/nuevoimg/nuevoimg2307/nuevoimg230709683/208710680-portrait-of-asian-man-traveler-with-backpack-and-hat-on-the-street.jpg?ver=6" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Zukar</td>
    <td class="text-end pt-3">0004</td>
  </tr>   
  <tr class="">
      <th scope="row" class="text-center">5<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
      <td class="d-flex align-items-center"><img src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Uttan</td>
      <td class="text-end pt-3">0005</td>
    </tr> 
    <tr class="">
      <th scope="row" class="text-center">6<br><i class="bi bi-caret-down-fill "></i></th>
      <td class="d-flex align-items-center"><img src="https://images.unsplash.com/photo-1608176906358-808c28865e2e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWFuJTIwYm95fGVufDB8fDB8fHww" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Manu</td>
      <td class="text-end pt-3">0006</td>
    </tr> 
    <tr class="">
      <th scope="row" class="text-center">7<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
      <td class="d-flex align-items-center"><img src="https://us.123rf.com/450wm/nuevoimg/nuevoimg2307/nuevoimg230709683/208710680-portrait-of-asian-man-traveler-with-backpack-and-hat-on-the-street.jpg?ver=6" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Shayan</td>
      <td class="text-end pt-3">0007</td>
    </tr> 
    <tr class="">
      <th scope="row" class="text-center">8<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
      <td class="d-flex align-items-center"><img src="https://us.123rf.com/450wm/nuevoimg/nuevoimg2307/nuevoimg230709683/208710680-portrait-of-asian-man-traveler-with-backpack-and-hat-on-the-street.jpg?ver=6" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Ranu</td>
      <td class="text-end pt-3">0008</td>
    </tr> 
    <tr class="">
      <th scope="row" class="text-center">9<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
      <td class="d-flex align-items-center"><img src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Om</td>
      <td class="text-end pt-3">0009</td>
    </tr> 
    <tr class="">
      <th scope="row" class="text-center">10<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
      <td class="d-flex align-items-center"><img src="https://images.unsplash.com/photo-1608176906358-808c28865e2e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWFuJTIwYm95fGVufDB8fDB8fHww" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Nimal</td>
      <td class="text-end pt-3">0010</td>
    </tr> 
    `;

    // Append the tbody element to the table element
    table.appendChild(tbody);

    // Append the table element to the tableDiv element
    tableDiv.appendChild(table);

    // Append the tableDiv element to the dynamic-content div
    dynamicContentDiv.appendChild(tableDiv);
}

// Call the function to create and append elements
createElements2();



//    =============dynamic3=====================
function createElements3() {
    const dynamicContentDiv = document.getElementById('dynamic-content3');

    const tableDiv = document.createElement('div');
    tableDiv.classList.add('h-[180]', 'overflow-y-scroll');

    // Create table element
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-dark');

    // Create table body
    const tbody = document.createElement('tbody');

    // Add table rows to the tbody element
    tbody.innerHTML = `
    <tr class="">
                                          <th scope="row" class="text-center">4<br><i class="bi bi-caret-up-fill text-green-500"></i></th>
                                          <td class="d-flex align-items-center"><img src="https://media.istockphoto.com/id/862664362/photo/young-tourist-with-camera-in-the-old-town.jpg?s=612x612&w=0&k=20&c=lQlFOenQ4vDpxz7Sy-5oYcLatcUkp_zoHoIfb58kydU=" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Ambani</td>
                                          <td class="text-end pt-3">0004</td>
                                        </tr>   
                                        <tr class="">
                                            <th scope="row" class="text-center">5<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
                                            <td class="d-flex align-items-center"><img src="https://images.unsplash.com/photo-1608176906358-808c28865e2e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWFuJTIwYm95fGVufDB8fDB8fHww" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Aannat</td>
                                            <td class="text-end pt-3">0005</td>
                                          </tr> 
                                          <tr class="">
                                            <th scope="row" class="text-center">6<br><i class="bi bi-caret-down-fill "></i></th>
                                            <td class="d-flex align-items-center"><img src="https://us.123rf.com/450wm/nuevoimg/nuevoimg2307/nuevoimg230709683/208710680-portrait-of-asian-man-traveler-with-backpack-and-hat-on-the-street.jpg?ver=6" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Vibha</td>
                                            <td class="text-end pt-3">0006</td>
                                          </tr> 
                                          <tr class="">
                                            <th scope="row" class="text-center">7<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
                                            <td class="d-flex align-items-center"><img src="https://avatars.githubusercontent.com/u/152176996?v=4" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;Aanu</td>
                                            <td class="text-end pt-3">0007</td>
                                          </tr> 
                                          <tr class="">
                                            <th scope="row" class="text-center">8<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
                                            <td class="d-flex align-items-center"><img src="https://images.unsplash.com/photo-1608176906358-808c28865e2e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWFuJTIwYm95fGVufDB8fDB8fHww" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;smap</td>
                                            <td class="text-end pt-3">0008</td>
                                          </tr> 
                                          <tr class="">
                                            <th scope="row" class="text-center">9<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
                                            <td class="d-flex align-items-center"><img src="https://media.istockphoto.com/id/862664362/photo/young-tourist-with-camera-in-the-old-town.jpg?s=612x612&w=0&k=20&c=lQlFOenQ4vDpxz7Sy-5oYcLatcUkp_zoHoIfb58kydU=" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;randi</td>
                                            <td class="text-end pt-3">0009</td>
                                          </tr> 
                                          <tr class="">
                                            <th scope="row" class="text-center">10<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
                                            <td class="d-flex align-items-center"><img src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpghttps://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpger-solid border-2 border-lime-400" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;maahi</td>
                                            <td class="text-end pt-3">0010</td>
                                          </tr> 
    `;

    // Append the tbody element to the table element
    table.appendChild(tbody);

    // Append the table element to the tableDiv element
    tableDiv.appendChild(table);

    // Append the tableDiv element to the dynamic-content div
    dynamicContentDiv.appendChild(tableDiv);
}

// Call the function to create and append elements
createElements3();


//    =============dynamic4=====================
function createElements4() {
    const dynamicContentDiv = document.getElementById('dynamic-content4');

    const tableDiv = document.createElement('div');
    tableDiv.classList.add('h-[180]', 'overflow-y-scroll');

    // Create table element
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped', 'table-dark');

    // Create table body
    const tbody = document.createElement('tbody');

    // Add table rows to the tbody element
    tbody.innerHTML = `
    <tr class="">
                                          <th scope="row" class="text-center">4<br><i class="bi bi-caret-up-fill text-green-500"></i></th>
                                          <td class="d-flex align-items-center"><img src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;chhoti</td>
                                          <td class="text-end pt-3">0004</td>
                                        </tr>   
                                        <tr class="">
                                            <th scope="row" class="text-center">5<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
                                            <td class="d-flex align-items-center"><img src="https://media.istockphoto.com/id/862664362/photo/young-tourist-with-camera-in-the-old-town.jpg?s=612x612&w=0&k=20&c=lQlFOenQ4vDpxz7Sy-5oYcLatcUkp_zoHoIfb58kydU=" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;pono</td>
                                            <td class="text-end pt-3">0005</td>
                                          </tr> 
                                          <tr class="">
                                            <th scope="row" class="text-center">6<br><i class="bi bi-caret-down-fill "></i></th>
                                            <td class="d-flex align-items-center"><img src="https://avatars.githubusercontent.com/u/152176996?v=4" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;yooj</td>
                                            <td class="text-end pt-3">0006</td>
                                          </tr> 
                                          <tr class="">
                                            <th scope="row" class="text-center">7<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
                                            <td class="d-flex align-items-center"><img src="https://avatars.githubusercontent.com/u/152176996?v=4" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;mmnu</td>
                                            <td class="text-end pt-3">0007</td>
                                          </tr> 
                                          <tr class="">
                                            <th scope="row" class="text-center">8<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
                                            <td class="d-flex align-items-center"><img src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;aanjjk</td>
                                            <td class="text-end pt-3">0008</td>
                                          </tr> 
                                          <tr class="">
                                            <th scope="row" class="text-center">9<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
                                            <td class="d-flex align-items-center"><img src="https://images.unsplash.com/photo-1608176906358-808c28865e2e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWFuJTIwYm95fGVufDB8fDB8fHww" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;kioe</td>
                                            <td class="text-end pt-3">0009</td>
                                          </tr> 
                                          <tr class="">
                                            <th scope="row" class="text-center">10<br><i class="bi bi-caret-down-fill text-red-500"></i></th>
                                            <td class="d-flex align-items-center"><img src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg" class="object-cover h-[40] w-[40] rounded-full border-solid border-2 border-lime-400">&nbsp;majhi</td>
                                            <td class="text-end pt-3">00010</td>
                                          </tr>     
    `;

    // Append the tbody element to the table element
    table.appendChild(tbody);

    // Append the table element to the tableDiv element
    tableDiv.appendChild(table);

    // Append the tableDiv element to the dynamic-content div
    dynamicContentDiv.appendChild(tableDiv);
}

// Call the function to create and append elements
createElements4();