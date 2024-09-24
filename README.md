# 网易游戏组件库

> 2023-07-28 11:01:22 tzj
> 
> 该文档由mdbook生成。
> 
> 更想用gitbook，hexo，日后再说

## 访问地址
> [访问地址](https://bcmtang.github.io/blog/book/)，github pages配置默认地址index.html没弄好

## 使用
- 安装：[官网](https://rust-lang.github.io/mdBook)或者：[百度网盘文件](https://pan.baidu.com/s/1nd1343_nmaZBu_ogcWaN1Q?pwd=isjq)
- 放在该目录或配环境变量
- 非新项目无需初始化
- 运行`mdbook serve`后用默认浏览器打开：http://localhost:3000。

##初始化

```shell
mdbook.exe init
```

title 选项没法输中文，可以在配置文件里改：`book.toml`

## 启动服务指令： 默认浏览器打开默认地址 http://localhost:3000

```shell
mdbook serve -o
```

```shell
mdbook serve -n 192.168.1.2 -p 3000 -o
```

