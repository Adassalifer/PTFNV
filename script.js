const gallery = document.querySelector('.gallery');
let isMouseDown = false;
let startX;

gallery.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - gallery.offsetLeft;
  gallery.style.cursor = 'grabbing';
});

gallery.addEventListener('mouseup', () => {
  isMouseDown = false;
  gallery.style.cursor = 'grab';
});

gallery.addEventListener('mousemove', (e) => {
  if (isMouseDown) {
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 3;
    gallery.scrollLeft -= walk;
  }
});