window.addEventListener('pageshow', onpageshow);

function onpageshow() {
    localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');       
}
