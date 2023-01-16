// var xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     // Typical action to be performed when the document is ready:
//     console.log(JSON.parse(xhttp.responseText));
//   }
// };
// xhttp.open("GET", "https://api.pexels.com/v1/search?&query=lake", true);
// xhttp.setRequestHeader("Authorization", "563492ad6f917000010000014ab540a5ae94470c8e1359c77f4dd0c7")
// xhttp.send();


const photos = [
  {
    "id": 247600,
    "width": 4288,
    "height": 2704,
    "url": "https://www.pexels.com/photo/scenic-view-of-lake-in-forest-247600/",
    "photographer": "Pixabay",
    "photographer_url": "https://www.pexels.com/@pixabay",
    "photographer_id": 2659,
    "avg_color": "#426E6B",
    "src": {
      "original": "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg",
      "large2x": "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Scenic View of Lake in Forest"
  },
  {
    "id": 2091351,
    "width": 6004,
    "height": 3802,
    "url": "https://www.pexels.com/photo/body-of-water-2091351/",
    "photographer": "Daniel Spase",
    "photographer_url": "https://www.pexels.com/@danielspase",
    "photographer_id": 220156,
    "avg_color": "#2885AB",
    "src": {
      "original": "https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg",
      "large2x": "https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Body of Water"
  },
  {
    "id": 518485,
    "width": 4760,
    "height": 3217,
    "url": "https://www.pexels.com/photo/trees-near-body-of-water-518485/",
    "photographer": "eberhard grossgasteiger",
    "photographer_url": "https://www.pexels.com/@eberhardgross",
    "photographer_id": 121938,
    "avg_color": "#799CA5",
    "src": {
      "original": "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg",
      "large2x": "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Trees Near Body of Water"
  },
  {
    "id": 346529,
    "width": 6000,
    "height": 4000,
    "url": "https://www.pexels.com/photo/calm-body-of-lake-between-mountains-346529/",
    "photographer": "Bri Schneiter",
    "photographer_url": "https://www.pexels.com/@bri-schneiter-28802",
    "photographer_id": 28802,
    "avg_color": "#536D84",
    "src": {
      "original": "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
      "large2x": "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Calm Body of Lake Between Mountains"
  },
  {
    "id": 2166711,
    "width": 7682,
    "height": 5124,
    "url": "https://www.pexels.com/photo/2-people-on-the-boat-2166711/",
    "photographer": "Quang Nguyen Vinh",
    "photographer_url": "https://www.pexels.com/@quang-nguyen-vinh-222549",
    "photographer_id": 222549,
    "avg_color": "#808883",
    "src": {
      "original": "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg",
      "large2x": "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "2 People On The Boat"
  },
  {
    "id": 2172499,
    "width": 7262,
    "height": 4844,
    "url": "https://www.pexels.com/photo/body-oof-water-2172499/",
    "photographer": "Quang Nguyen Vinh",
    "photographer_url": "https://www.pexels.com/@quang-nguyen-vinh-222549",
    "photographer_id": 222549,
    "avg_color": "#7A7D82",
    "src": {
      "original": "https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg",
      "large2x": "https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/2172499/pexels-photo-2172499.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Body oOf Water"
  },
  {
    "id": 421759,
    "width": 3008,
    "height": 2000,
    "url": "https://www.pexels.com/photo/green-leafed-trees-421759/",
    "photographer": "Jonathan Petersson",
    "photographer_url": "https://www.pexels.com/@grizzlybear",
    "photographer_id": 131183,
    "avg_color": "#959183",
    "src": {
      "original": "https://images.pexels.com/photos/421759/pexels-photo-421759.jpeg",
      "large2x": "https://images.pexels.com/photos/421759/pexels-photo-421759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/421759/pexels-photo-421759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/421759/pexels-photo-421759.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/421759/pexels-photo-421759.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/421759/pexels-photo-421759.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/421759/pexels-photo-421759.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/421759/pexels-photo-421759.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Green Leafed Trees"
  },
  {
    "id": 709552,
    "width": 3504,
    "height": 2336,
    "url": "https://www.pexels.com/photo/body-of-water-between-green-leaf-trees-709552/",
    "photographer": "Ian Turnell",
    "photographer_url": "https://www.pexels.com/@samandgos",
    "photographer_id": 221734,
    "avg_color": "#3D513E",
    "src": {
      "original": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg",
      "large2x": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Body of Water Between Green Leaf Trees"
  },
  {
    "id": 2166695,
    "width": 5304,
    "height": 7952,
    "url": "https://www.pexels.com/photo/foggy-lake-2166695/",
    "photographer": "Quang Nguyen Vinh",
    "photographer_url": "https://www.pexels.com/@quang-nguyen-vinh-222549",
    "photographer_id": 222549,
    "avg_color": "#7D8C8F",
    "src": {
      "original": "https://images.pexels.com/photos/2166695/pexels-photo-2166695.jpeg",
      "large2x": "https://images.pexels.com/photos/2166695/pexels-photo-2166695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/2166695/pexels-photo-2166695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/2166695/pexels-photo-2166695.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/2166695/pexels-photo-2166695.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/2166695/pexels-photo-2166695.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/2166695/pexels-photo-2166695.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/2166695/pexels-photo-2166695.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Foggy Lake"
  },
  {
    "id": 2098405,
    "width": 3648,
    "height": 5472,
    "url": "https://www.pexels.com/photo/house-near-lake-2098405/",
    "photographer": "eberhard grossgasteiger",
    "photographer_url": "https://www.pexels.com/@eberhardgross",
    "photographer_id": 121938,
    "avg_color": "#162F37",
    "src": {
      "original": "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg",
      "large2x": "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "House Near Lake"
  },
  {
    "id": 40465,
    "width": 2700,
    "height": 3840,
    "url": "https://www.pexels.com/photo/lake-surrounded-with-green-leafed-trees-40465/",
    "photographer": "Deepu B Iyer",
    "photographer_url": "https://www.pexels.com/@deepu-b-iyer",
    "photographer_id": 1074,
    "avg_color": "#63B4E0",
    "src": {
      "original": "https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg",
      "large2x": "https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/40465/pexels-photo-40465.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Lake Surrounded With Green Leafed Trees"
  },
  {
    "id": 205002,
    "width": 5760,
    "height": 3840,
    "url": "https://www.pexels.com/photo/low-angle-photography-of-brown-wooden-dock-at-golden-house-205002/",
    "photographer": "Heiner",
    "photographer_url": "https://www.pexels.com/@heiner-56542",
    "photographer_id": 56542,
    "avg_color": "#918B81",
    "src": {
      "original": "https://images.pexels.com/photos/205002/pexels-photo-205002.jpeg",
      "large2x": "https://images.pexels.com/photos/205002/pexels-photo-205002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/205002/pexels-photo-205002.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/205002/pexels-photo-205002.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/205002/pexels-photo-205002.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/205002/pexels-photo-205002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/205002/pexels-photo-205002.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/205002/pexels-photo-205002.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Low Angle Photography of Brown Wooden Dock at Golden House"
  },
  {
    "id": 2093805,
    "width": 2592,
    "height": 3872,
    "url": "https://www.pexels.com/photo/landscape-photography-of-grass-near-body-of-water-2093805/",
    "photographer": "Alex Gállego",
    "photographer_url": "https://www.pexels.com/@agallego007",
    "photographer_id": 1096611,
    "avg_color": "#97928B",
    "src": {
      "original": "https://images.pexels.com/photos/2093805/pexels-photo-2093805.jpeg",
      "large2x": "https://images.pexels.com/photos/2093805/pexels-photo-2093805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/2093805/pexels-photo-2093805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/2093805/pexels-photo-2093805.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/2093805/pexels-photo-2093805.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/2093805/pexels-photo-2093805.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/2093805/pexels-photo-2093805.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/2093805/pexels-photo-2093805.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Landscape Photography of Grass Near Body of Water"
  },
  {
    "id": 2649403,
    "width": 7782,
    "height": 5191,
    "url": "https://www.pexels.com/photo/photo-of-body-of-water-2649403/",
    "photographer": "Quang Nguyen Vinh",
    "photographer_url": "https://www.pexels.com/@quang-nguyen-vinh-222549",
    "photographer_id": 222549,
    "avg_color": "#6E7891",
    "src": {
      "original": "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg",
      "large2x": "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Photo Of Body Of Water "
  },
  {
    "id": 1450082,
    "width": 4244,
    "height": 5304,
    "url": "https://www.pexels.com/photo/mountain-scenery-1450082/",
    "photographer": "Marlon Martinez",
    "photographer_url": "https://www.pexels.com/@marlon-martinez-505085",
    "photographer_id": 505085,
    "avg_color": "#798985",
    "src": {
      "original": "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg",
      "large2x": "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false,
    "alt": "Mountain Scenery"
  }
]



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

  return;
}

appendPhotos(photos)