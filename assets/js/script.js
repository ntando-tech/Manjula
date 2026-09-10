document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            const info = this.querySelector('.info');
            const displayInfo = document.getElementById('displayInfo');
            displayInfo.innerHTML = info.innerHTML;
        });
    });
});
