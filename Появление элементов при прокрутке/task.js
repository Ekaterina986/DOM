const revealList = document.getElementsByClassName('reveal');
const active = document.getElementsByClassName('reveal_active');

window.addEventListener('scroll', function() {
    for (let reveal of revealList){
        const clientHeight = document.documentElement.clientHeight
        const scrolTop = reveal.getBoundingClientRect().bottom;
        if (scrolTop < clientHeight){
            reveal.classList.add('reveal_active')
        } else {
            reveal.classList.remove('reveal_active')
        }
    }
  });