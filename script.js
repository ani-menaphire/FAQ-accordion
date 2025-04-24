let txtElArr = Array.from(document.querySelectorAll('.content'));
let btnElArr = Array.from(document.querySelectorAll('button'));
let plusIconElArr = Array.from(document.querySelectorAll('.plus-icon'));
let minusIconElArr = Array.from(document.querySelectorAll('.minus-icon'));

console.log(txtElArr)

for (let btn of btnElArr) {
    btn.addEventListener('click', ()=> { 
        let index = btnElArr.indexOf(btn);
        let isCollapsed = txtElArr[index].classList.contains('collapsed');
        
        hideAll();
        if(isCollapsed) {
            show(index);
        }
    })
}

function hideAll() {
    for(let txt of txtElArr) {
        txt.classList.add('collapsed');
    }

    for(let btn of btnElArr) {
        btn.setAttribute('aria-expanded', "false")
    }
    
    for(let icon of minusIconElArr) {
        icon.classList.add('collapsed');
    }

    for(let icon of plusIconElArr) {
        icon.classList.remove('collapsed')
    }
}

function show(i) {
        btnElArr[i].setAttribute('aria-expanded', "true");
        txtElArr[i].classList.remove('collapsed');

        plusIconElArr[i].classList.add('collapsed');
        minusIconElArr[i].classList.remove('collapsed');
}