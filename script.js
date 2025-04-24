let txtElArr = Array.from(document.querySelectorAll('.collapsed'));
let btnElArr = Array.from(document.querySelectorAll('button'));

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
}

function show(i) {
        btnElArr[i].setAttribute('aria-expanded', "true")
        txtElArr[i].classList.remove('collapsed');
}