// script.js  
const galleryGrid = document.querySelector('.gallery-grid');  
  
// Sample image data (replace with your own data)  
const images = [  
   { id: 1, src: 'image1.jpg', alt: 'Image 1' },  
   { id: 2, src: 'image2.jpg', alt: 'Image 2' },  
   { id: 3, src: 'image3.jpg', alt: 'Image 3' },  
   { id: 4, src: 'image4.jpg', alt: 'Image 4' },  
   { id: 5, src: 'image5.jpg', alt: 'Image 5' },  
   { id: 6, src: 'image6.jpg', alt: 'Image 6' },  
];  
  
// Generate image items  
images.forEach((image) => {  
   const img = document.createElement('img');  
   img.src = image.src;  
   img.alt = image.alt;  
   galleryGrid.appendChild(img);  
});
