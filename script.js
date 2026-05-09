   var swiper = new Swiper(".hotelSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".hotel-next",
            prevEl: ".hotel-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4, // 4 Cards on Desktop
            },
        },
    });
    // Transport Swiper initialization
var transportSwiper = new Swiper(".transportSwiper", {
    slidesPerView: 1, // Mobile par 1 card
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2, // Tablet par 2 cards
        },
        1024: {
            slidesPerView: 3, // Choti screens par 3 cards
        },
        1280: {
            slidesPerView: 4, // Desktop par exactly 4 cards
        },
    },
});
var packageSwiper = new Swiper(".packageSwiper", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: { delay: 4500 },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 } // Exactly 4 cards on desktop
    },
});

function showHotels(category) {
    document.querySelectorAll('.hotel-section').forEach(section => section.classList.add('hidden'));
    document.getElementById(category + '-content').classList.remove('hidden');
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active-tab');
        btn.classList.add('inactive-tab');
    });
    document.getElementById('btn-' + category).classList.add('active-tab');
    document.getElementById('btn-' + category).classList.remove('inactive-tab');
}

function showTransport(category) {
    document.querySelectorAll('.transport-section').forEach(section => section.classList.add('hidden'));
    document.getElementById(category + '-content').classList.remove('hidden');
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active-tab');
        btn.classList.add('inactive-tab');
    });
    document.getElementById('btn-' + category).classList.add('active-tab');
    document.getElementById('btn-' + category).classList.remove('inactive-tab');
}
