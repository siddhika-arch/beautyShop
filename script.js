
// ===== Volume Option Selection =====
const volumeOptions = document.querySelectorAll('.volumeOption');

// Add click event to each volume option
volumeOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Remove 'active' class from all options
    volumeOptions.forEach(o => o.classList.remove('active'));
    // Add 'active' to the clicked option
    option.classList.add('active');
  });
});

// ===== Quantity Increase/Decrease Buttons =====
const qtyDisplay = document.getElementById('qtyDisplay');

// Increase quantity on "+" button click
document.getElementById('increaseQty').onclick = () => {
  let qty = parseInt(qtyDisplay.innerText);
  qtyDisplay.innerText = qty + 1;
};

// Decrease quantity on "−" button click (minimum = 1)
document.getElementById('decreaseQty').onclick = () => {
  let qty = parseInt(qtyDisplay.innerText);
  if (qty > 1) qtyDisplay.innerText = qty - 1;
};

// ===== Tab Navigation with Underline Animation =====
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tabContent');
const underline = document.querySelector('.tabUnderline');

// Tab click functionality
tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove 'active' class from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add 'active' to clicked tab and show corresponding content
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');

    // Animate underline to the selected tab
    underline.style.transform = `translateX(${tab.offsetLeft}px)`;
    underline.style.width = `${tab.offsetWidth}px`;
  });
});

// Position underline on page load
window.addEventListener('load', () => {
  const activeTab = document.querySelector('.tab.active');
  underline.style.transform = `translateX(${activeTab.offsetLeft}px)`;
  underline.style.width = `${activeTab.offsetWidth}px`;
});

// Update underline position on window resize
window.addEventListener('resize', () => {
  const activeTab = document.querySelector('.tab.active');
  underline.style.transform = `translateX(${activeTab.offsetLeft}px)`;
  underline.style.width = `${activeTab.offsetWidth}px`;
});

// ===== Responsive Menu Toggle (Mobile Nav) =====
const menu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');

// Toggle mobile menu open/close
function toggleMenu() {
  menu.classList.toggle('active');
  menuToggle.textContent = menu.classList.contains('active') ? 'x' : '☰';
}

// ===== Horizontal Image/Product Slider =====
const slider = document.getElementById('slider');
const next = document.querySelector('.nextBtn');
const prev = document.querySelector('.prevBtn');

// Scroll slider right on "next" button click
next.addEventListener('click', () => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
});

// Scroll slider left on "previous" button click
prev.addEventListener('click', () => {
  slider.scrollBy({ left: -300, behavior: 'smooth' });
});

// ===== Accordion Toggle Section =====
const toggle = document.getElementById('accordionToggle');
const content = document.getElementById('accordionContent');
const icon = document.getElementById('accordionIcon');

// Expand or collapse accordion on toggle click
toggle.addEventListener('click', () => {
  content.classList.toggle('show'); // Toggle visibility class
  icon.classList.toggle('rotate');  // Rotate the icon if needed

  // Animate open/close by setting maxHeight
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }

  // Toggle icon text between '+' and '−'
  icon.textContent = icon.textContent === '+' ? '−' : '+';
});

