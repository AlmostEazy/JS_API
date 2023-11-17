// Если нужно постоянно наблюдать за изменениями ориентации экрана
const orientationText = document.querySelector('.orientationType');
screen.orientation.addEventListener('change', () => {
    if (screen.orientation.type === 'portrait-primary' || screen.orientation.type === 'portrait-secondary') {
        orientationText.textContent = 'Портретная'
    } else {
        orientationText.textContent = 'Ландшафтная / Альбомная'
    }
})



// Если нужно отследить изначальное состояние ориентации экрана, в зависимости от ориентации, с которой зашел на сайт
// if (window.matchMedia("(orientation: portrait)").matches) {
//     document.querySelector('.orientationType').textContent = 'Портретная';
// }
// if (window.matchMedia("(orientation: landscape)").matches) {
//     document.querySelector('.orientationType').textContent = 'Ландшафтная / Альбомная';
// }
