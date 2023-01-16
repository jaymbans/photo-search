// Append Photos to HTML
const appendPhotos = (photosArray) => {
  const imageColumns = document.querySelectorAll('.col');
  let colIdx = 0;

  for (let photo of photosArray) {
    const photoDiv = document.createElement('div');
    photoDiv.style.backgroundImage = `url(${photo.src.large})`;
    photoDiv.classList.add('img');
    photoDiv.innerHTML = `
    <div class='image-content d-none'>
        <a target='_blank' href=${photo.url}>
          <h5>taken by ${photo.photographer}</h5>
        </a>
    </div>`

    imageColumns[colIdx].appendChild(photoDiv);
    colIdx++;

    if (colIdx >= imageColumns.length) {
      colIdx = 0;
    }
  }

  // Adding event listeners upon loading from GET
  const displayedImages = document.querySelectorAll('.img');
  for (let image of displayedImages) {
    image.addEventListener('mouseenter', showPhotoCredit)
    image.addEventListener('mouseleave', hidePhotoCredit)
  }


  return;
}

// Photo Credit Toggle

const showPhotoCredit = (e) => {
  e.target.children[0].classList.remove('d-none')
}

const hidePhotoCredit = (e) => {
  e.target.children[0].classList.add('d-none')
}

// Fetch photos
const searchPhoto = (e) => {
  e.preventDefault();
  const searchBar = document.getElementById('search-bar');
  const searchedOutput = document.querySelector('.search-output h5');
  var xhttp = new XMLHttpRequest();

  let photos = [];

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(xhttp.responseText);
      photos = data.photos;
      appendPhotos(photos);
    }
  };
  xhttp.open("GET", `https://api.pexels.com/v1/search?&query=${searchBar.value}&per_page=21`, true);
  xhttp.setRequestHeader("Authorization", "563492ad6f917000010000014ab540a5ae94470c8e1359c77f4dd0c7")
  xhttp.send();

  if (!photos.length) {
    searchedOutput.innerHTML = `No media found for <i>${searchBar.value}</i>`;
  }

  searchedOutput.innerHTML = `Media for <i>${searchBar.value}</i>:`;

  searchBar.value = '';
  return;
}

const searchButton = document.querySelector('form button');
searchButton.addEventListener('click', searchPhoto);