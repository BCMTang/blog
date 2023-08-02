let list = document.querySelectorAll("ol.chapter>li.chapter-item");
for (let i = 0; i < list.length; i++) {
    let btn = list[i].querySelector("a.toggle>div");
    if (!btn) continue;
    // btn.click();
    list[i].classList.add("nav_toggle");
    list[i].addEventListener("click", function (e) {
        // btn.click();
        // console.log(btn)
        // console.log(this)
    })
}

// chapter-item 有子项
// expanded 未展开