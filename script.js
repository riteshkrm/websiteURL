
document.querySelector('.button').addEventListener('click', () =>{
    const currentUrl = window.location.href;
    document.querySelector('#url').innerHTML = currentUrl;
})