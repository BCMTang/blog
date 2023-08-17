// 获取所有一级标题的父级li元素
const partItems = document.querySelectorAll("#sidebar > div > ol.chapter > li");

partItems.forEach((partItem) => {
    // 删除一级标题的类名 "expanded"
    partItem.classList.remove("expanded");

    // 查找当前选中的一级标题下的a标签
    const selectedLink = partItem.querySelector("a.active");


    if (selectedLink) {
        let parent = selectedLink.parentElement;
        if(!parent.classList.contains("affix")){
            const chapterItem = selectedLink.parentElement.parentElement.parentElement.previousSibling;
            chapterItem.classList.add("expanded");
        }
    }

    partItem.addEventListener("click",function (e){
        this.classList.toggle("expanded");
    })
});
