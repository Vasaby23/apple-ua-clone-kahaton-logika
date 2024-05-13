

const items = document.querySelectorAll('.item');
const contents = document.querySelector('.contents');
items.forEach(item => {
    item.addEventListener('mouseover', () => {

        setTimeout(() => {
            contents.classList.add('blurred');
        }, 2000); 
    });
    item.addEventListener('mouseout', () => {
      
        contents.classList.remove('blurred');
    });
});


