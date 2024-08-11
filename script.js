const sliderData = {
    slides: [
        {
            image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000",
            title: "Womens Apparel",
            description: "Elevate your wardrobe<br> with our limited-time<br>fashion offer!",
            buttonText: "Explore More",
            buttonLink: "https://veena-theme-fashion.myshopify.com/collections",
            defaultPosition: "middle-center"
        },
        {
            image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=2000",
            title: "Modern Elegance",
            description: "Step into the World of<br>Style with the<br>Latest Fashion Trends Unveiled!",
            buttonText: "Explore More",
            buttonLink: "https://veena-theme-fashion.myshopify.com/collections",
            defaultPosition: "middle-left"
        },
        {
            image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000",
            title: "Trendy classic",
            description: "Discover Signature Look:<br>Fashion Forward and<br>Fabulous!",
            buttonText: "Shop Now",
            buttonLink: "https://veena-theme-fashion.myshopify.com/collections",
            defaultPosition: "middle-left"
        }
    ]
};

const positionClasses = {
    'top-left': 'top-left',
    'top-center': 'top-center',
    'top-right': 'top-right',
    'middle-left': 'middle-left',
    'middle-center': 'middle-center',
    'middle-right': 'middle-right',
    'bottom-left': 'bottom-left',
    'bottom-center': 'bottom-center',
    'bottom-right': 'bottom-right',
};

let splide;

function initializeSlider() {
    const sliderContent = document.getElementById('slider-content');
    const slidesHTML = sliderData.slides.map(({ image, title, description, buttonText, buttonLink, defaultPosition }, index) => `
        <li class="splide__slide">
            <img src="${image}" alt="Slide ${index + 1}">
            <div class="description ${positionClasses[defaultPosition]}">
                <h6>${title}</h6>
                <p>${description}</p>
                <a href="${buttonLink}" class="slider-button">${buttonText}</a>
            </div>
        </li>
    `).join('');

    sliderContent.innerHTML = slidesHTML;

    // Initialize Splide
    splide = new Splide('#image-slider', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        pagination: true,
    }).mount();
}
function updatePosition() {
    const selectedPosition = document.getElementById('position-select').value;
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(description => {
        description.className = `description ${positionClasses[selectedPosition]}`;
    });
}

function previousSlide() {
    splide?.go('<');
}

function nextSlide() {
    splide?.go('>');
}

// Initialize slider and set up event listeners
document.addEventListener('DOMContentLoaded', initializeSlider);
