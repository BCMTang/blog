# 项目注意事项

> 网易游戏前端项目注意事项记录，欢迎补充

- `nie`的组件初始化定义都在`nie.define()`里，否则可能报错。
- 文件名不能大写
- js使用img路径时，用`_uri()`，否则上线后混淆处理后，找不到文件
- 所有跳转官网的链接后缀一定要带`/index.html`，如`https://game.163.com/index.html` 而不是 `https://game.163.com/` 前者是官网地址，后者默认映射到前者，但有时候会改配置
- 该框架下，解构报错、class设置属性初始值时报错
- 项目配置(`fis-conf.js`)，初始模板如下，如果使用发布项目的代码，在初次发布（还是提交git？）之前改回如下。如果没有，就要在发布地址找到copy过来
    ```js
    //修改cdn的绝对路径（测试环境）
    fis.set('cdn-path','$cdn-path$');
    //修改cdn的绝对路径（正式环境）
    fis.set('cdn-path-release','$cdn-path-release$');
    ```
- 手机端预加载插件使用后，不能在初始化前找jQuery节点