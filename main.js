document.addEventListener('DOMContentLoaded', function () {
    const emailIcon = document.querySelector('.bx.bxs-envelope');
    const instagramIcon = document.querySelector('.bx.bxl-instagram-alt');
    const whatsappIcon = document.querySelector('.bx.bxl-whatsapp-square');
    const tiktokIcon = document.querySelector('.bx.bxl-tiktok');

    // Tambahkan event listener untuk setiap ikon
    emailIcon.addEventListener('click', function () {
        window.location.href = 'mailto:emapranap15@email.com';
    });
    
    instagramIcon.addEventListener('click', function () {
        window.location.href = 'https://www.instagram.com/vndprdn_';
    });

    whatsappIcon.addEventListener('click', function () {
        window.location.href = 'https://wa.me/62881037818658';
    });

    tiktokIcon.addEventListener('click', function () {
        window.location.href = 'https://www.tiktok.com/@arthemishit';
    });
});
