const clicker = document.querySelector('#special');
const image = document.querySelector('#grandma_jean');

image.style.display = 'none';
const div = document.querySelector('#caption');

clicker.onclick = () => {
   image.style.display = 'block';
   div.style.display = 'none';
};

image.onclick = () => {
   image.style.display = 'none';
   div.style.display = 'block';
};

const clicker2 = document.querySelector('#special_grandad');
const image2 = document.querySelector('#grandad_eugene');

image2.style.display = 'none';
const div2 = document.querySelector('#caption_grandad');


clicker2.onclick = () => {
   image2.style.display = 'block';
   div2.style.display = 'none';
};


image2.onclick = () => {
   image2.style.display = 'none';
   div2.style.display = 'block';
};

// second set of images JS
const image3 = document.querySelector('#secondgrandmapic');

let madgrandma = "images/grandma_was_mad.jpg";
let madgrandad = "images/grandad_was_mad.jpg";

image3.onmouseenter = (e) => {
  image3.style.border = '5px solid green';
   e.target.setAttribute('src', madgrandma);
};

image3.onmouseleave = (e) => {
  image3.style.border = '5px solid green';
   e.target.setAttribute('src', madgrandad);
};

// Link to the example JS events: https://docs.google.com/document/d/1rGt7y6AgiraWkfNy0VCKkY51Y-qqMXBQcOIEdtgs6C4/edit
