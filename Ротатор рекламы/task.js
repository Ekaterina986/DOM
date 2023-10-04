setInterval(function() {
    const textActiveList = document.getElementsByClassName('rotator__case');
    console.log(textActiveList)
    for ( let textActive of textActiveList) {
        console.log(textActiv)
        textActive.classList.remove('rotator__case_active');
        console.log(textActiv.nextElementSibling);
        if (textActiv.nextElementSibling) {
            textActiv.nextElementSibling.classList.add('rotator__case_active');
        } else {
            textActiv[0].classList.add('rotator__case_active');
        }
        
    }
  }, 1000)