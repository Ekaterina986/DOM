const rotatorList = document.getElementsByClassName('rotator');
for ( let rotator of rotatorList) {
    setInterval(function() {
        const caseActive = rotator.getElementsByClassName('rotator__case_active')[0];
        let caseNext = caseActive.nextElementSibling;
        if (!caseNext) {
            caseNext = rotator.firstElementChild;
        }
        caseActive.classList.remove('rotator__case_active');
        caseNext.classList.add('rotator__case_active');
    }, 1000)
}