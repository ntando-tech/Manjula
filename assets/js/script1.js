/*document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');

    images.forEach(function(image) {
        const button = image.querySelector('button');
        const imgSrc = image.querySelector('img').getAttribute('src');

        button.addEventListener('click', function() {
            const popup = window.open("center", "Popup", "width=600,height=400");
            popup.document.write(`<img src="${imgSrc}" style="width:100%; height:100%;" />`);
        });

        image.addEventListener('click', function() {
            const info = this.querySelector('.info');
            const displayInfo = document.getElementById('displayInfo');
            displayInfo.innerHTML = info.innerHTML;
        });
    });
});*/

/*document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');

    images.forEach(function(image) {
        const button = image.querySelector('button');
        const imgSrc = image.querySelector('img').getAttribute('src');

        button.addEventListener('click', function() {
            const popupWidth = 600;
            const popupHeight = 400;
            const left = window.screen.width / 2 - popupWidth / 2;
            const top = window.screen.height / 2 - popupHeight / 2;
            const popup = window.open("", "Popup", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
            popup.document.write(`<html><body style="display:flex;justify-content:center;align-items:center;margin:0;"><img src="${imgSrc}" style="max-width:100%; max-height:100%;" /></body></html>`);
        });

        image.addEventListener('click', function() {
            const info = this.querySelector('.info');
            const displayInfo = document.getElementById('displayInfo');
            displayInfo.innerHTML = info.innerHTML;
        });
    });
});*/

/*document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');

    images.forEach(function(image) {
        const button = image.querySelector('button');
        const imgSrc = image.querySelector('img').getAttribute('src');

        button.addEventListener('click', function() {
            const popupWidth = 600;
            const popupHeight = 400;
            const left = window.screen.width / 2 - popupWidth / 2;
            const top = window.screen.height / 2 - popupHeight / 2;
            const popup = window.open("", "Popup", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
            popup.document.write(`<html><body style="display:flex;justify-content:center;align-items:center;margin:0;"><img src="${imgSrc}" style="max-width:100%; max-height:100%;" /></body></html>`);
            button.style.backgroundColor = "lightblue"; // Change the background color of the clicked button
        });

        image.addEventListener('click', function() {
            const info = this.querySelector('.info');
            const displayInfo = document.getElementById('displayInfo');
            displayInfo.innerHTML = info.innerHTML;
        });
    });
});*/

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    let currentButton = null; // Keep track of the currently clicked button

    images.forEach(function(image) {
        const button = image.querySelector('button');
        const imgSrc = image.querySelector('img').getAttribute('src');
        const originalColor = button.style.backgroundColor;

        button.addEventListener('click', function() {
            if (currentButton !== null) {
                currentButton.style.backgroundColor = originalColor; // Reset the previous button's color
            }
            button.style.backgroundColor = "darkgreen"; // Change the background color of the clicked button
            currentButton = button; // Update the currentButton variable to the clicked button
            const popupWidth = 600;
            const popupHeight = 400;
            const left = window.screen.width / 2 - popupWidth / 2;
            const top = window.screen.height / 2 - popupHeight / 2;
            const popup = window.open("", "Popup", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
            popup.document.write(`<html><body style="display:flex;justify-content:center;align-items:center;margin:0;"><img src="${imgSrc}" style="max-width:100%; max-height:100%;" /></body></html>`);
        });

        image.addEventListener('click', function() {
            const info = this.querySelector('.info');
            const displayInfo = document.getElementById('displayInfo');
            displayInfo.innerHTML = info.innerHTML;
        });
    });
});

