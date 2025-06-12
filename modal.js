document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.projetos-card').forEach(card => {
        card.addEventListener('click', function() {
            const modal = document.getElementById('modal-projeto');
            const modalImg = document.getElementById('modal-img');
            const modalVideo = document.getElementById('modal-video');
            const imgSrc = this.querySelector('.projetos-imagem').getAttribute('data-modal-img');
            const videoSrc = this.querySelector('.projetos-imagem').getAttribute('data-modal-video');

            if (videoSrc) {
                modalVideo.src = videoSrc;
                modalVideo.style.display = 'block';
                modalImg.style.display = 'none';
                modalVideo.load();
            } else {
                modalImg.src = imgSrc;
                modalImg.style.display = 'block';
                modalVideo.style.display = 'none';
            }
            modal.classList.add('modal-aberto'); 
        });
    });

    document.querySelector('.modal-fechar').onclick = function() {
        document.getElementById('modal-projeto').classList.remove('modal-aberto');
    };
    document.getElementById('modal-projeto').onclick = function(e) {
        if (e.target === this) {
            this.classList.remove('modal-aberto');
        }
    };
});