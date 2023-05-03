// Toggle icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar ');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


// Scroll secitons active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // Sticky Navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolloY > 100);

    // Remove toggle and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .porfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Multiple text
const typed = new Typed('.multiple-text', {
    strings: ['Diseñador', 'Publicista Profesional', 'Community Manager', 'Productor Ejecutivo', 'Locutor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active_work'))
    this.classList.add('active_work')
}

linkWork.forEach(l=> l.addEventListener("click", activeWork))


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/*===== Work Popup =====*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work_img")){
        togglePortfolioPopup()
        portfolioItemDetails(e.target.parentElement);
    }
})

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup()
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".close-modal").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    // Se puede cambiar el img class, para cargar otro recurso
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_tittle").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portafolio_item-details").innerHTML;
}
