let getTabClass = document.getElementsByClassName("tab")


for (i = 0; i < getTabClass.length; i++) {
    getTabClass[i].addEventListener("click", changeTab)
}

function changeTab() {

    let getIsActiveClass = document.getElementsByClassName("is-active")
    let getIsShowClass = document.getElementsByClassName("is-show")
    let getTextClass = document.getElementsByClassName('text')

    let arr = [].slice.call(getTabClass);
    let index = arr.indexOf(this);

    getIsActiveClass[0].classList.remove("is-active")
    getIsShowClass[0].classList.remove("is-show")

    this.classList.add("is-active")
    getTextClass[index].classList.add("is-show")
}


