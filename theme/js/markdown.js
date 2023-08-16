// markdown相关逻辑
window.addEventListener("load",function (){
    skip();
})

// 设置markdown里的a标签
function skip(target = "_blank") {
    let content = document.querySelector("div#content"); // 获取div#content元素
    let links = content.getElementsByTagName("a"); // 获取div#content下的所有a标签

    for (let i = 0; i < links.length; i++) {
        links[i].setAttribute("target", target); // 设置target属性为"_blank"
    }
}