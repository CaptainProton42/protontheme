window.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    toggle_dark_mode();
    
   var toggle = document.getElementById('dark-toggle');
    toggle.onclick = function() {
        localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark');
        toggle_dark_mode();
     }
}

function toggle_dark_mode() {
    localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');
    var toggle = document.getElementById('dark-toggle');
    localStorage.getItem('mode') === 'dark' ? toggle.innerHTML = '<i class="material-icons left">brightness_high</i>' : toggle.innerHTML = '<i class="material-icons left">brightness_4</i>';
}
