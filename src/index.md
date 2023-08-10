# 首页
> 该文档是对[网易游戏部组件库](http://webpack.nie.netease.com/index.html)的组件尝试使用，对各个组件及其配置熟悉下。

> 本文档为本人私人笔记，不具权威性，仅供参考，且更新时间不定。2023-08-10 14:24:49 tzj

# 导入
```html
<!--国内内部组件-->
<!--PC-->
<script src="https://nie.res.netease.com/comm/js/jquery(mixNIE).1.11.js"></script>
<!--移动-->
<script src="https://nie.res.netease.com/comm/js/zepto(mixNIE).last.js"></script>

<!--海外内部组件-->
<!--PC-->
<script src="https://comm.res.easebar.com/js/jquery(mixNIE).1.11.js"></script>
<!--移动-->
<script src="https://comm.res.easebar.com/js/zepto(mixNIE).last.js"></script>

<!--代理合作-->
<!--PC-->
<script src="https://comm.res.easebar.com/js/tw/jquery(mixNIE).1.11.js"></script>
<!--移动-->
<script src="https://comm.res.easebar.com/js/tw/zepto(mixNIE).last.js"></script>
<!--内部组件代理合作版不支持该组件库-->
```

> **规范** 外部组件若域名是`nie.res.netease.com`则可以用外链，否则需下载到本地`src/js/lib/插件.js`。
> 海外和代理合作，将域名替换为`comm.res.easebar.com`。

# 初始化
> **注意** 所有内部组件`nie.require("nie.util.模块名")`必须写在`nie.define`的回调里，否则报错。

```js
// copyright 设置white，写在外面
// nie.config.copyRight.setWhite();
// 模块，一般一个就够了，Index为暴露全局的变量名
nie.define("Index", function () {
    //创建（分享）组件实例
    const shareV5 = nie.require("nie.util.shareV5");
    // 引入外部js，也可以是其他文件如.txt、.md，内容会直接插入
    __inline('json.js');

    const index = {
        init: function () {
            this.bind();
            this.share();
        },
        bind: function () {
            // 可以视为加载完成的回调
        },
        // 给模块定义方法
        share: function () {
            let shareTitle = $("#share_title").html();
            let shareTxt = $("#share_desc").html();
            let sharePic = $("#share_pic").attr("data-src");
            let share = shareV5({
                fat: "#NIE-share",
                type: 1,
                defShow: [23, 2, 1, 24],
                title: shareTitle,
                content: shareTxt,
                img: sharePic
            });
        }
    }

    index.init();
    // 暴露给全局
    return index
});
```
[授权接口](https://note.youdao.com/ynoteshare/index.html?id=6d1b1b5e350a6faabb680d814418292b&type=note&_time=1689903109543)


# 待处理
- [ ] pre复制
- [ ] 路径加参数，自动跳转到指定页
- [ ] 弹出html，可编辑内容

```js
window.location.protocol+"//"+window.location.host; //   返回https://mp.csdn.net

window.location.host; //返回url 的主机部分，例如：mp.csdn.net  
window.location.hostname; //返回mp.csdn.net
window.location.href; //返回整个url字符串(在浏览器中就是完整的地址栏)
window.location.pathname; //返回/a/index.php或者/index.php  
window.location.protocol; //返回url 的协议部分，例如： http:，ftp:，maito:等等。  
window.location.port //url 的端口部分，如果采用默认的80端口，那么返回值并不是默认的80而是空字符  
 
```