
document.querySelector('.circle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => { menu.style.display = 'none'; }, 500);
    } else {
        menu.style.display = 'block';
        setTimeout(() => { menu.classList.add('show'); }, 10);
    }
});


let postcardBtn1 = document.querySelector('.postcard_btn1')
let postcard1 = document.querySelector('.postcard1')
let postcardBtn2 = document.querySelector('.postcard_btn2')
let postcard2 = document.querySelector('.postcard2')

postcardBtn1.addEventListener('click', () => {
    postcard1.style.display = 'block'
    postcard2.style.display = 'none'
})
postcardBtn2.addEventListener('click', () => {
    postcard2.style.display = 'block'
    postcard1.style.display = 'none'
})
