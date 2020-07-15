
一、包与NPM
    1、包
        Nodejs中除了它自己提供的核心模块外，我们还可以自定义模块，也可以使用第三方的模块。Nodejs中第三方模块由包组成,可以通过包来对一组具有相互依赖关系的模块进行统一管理

        完全符合CommonJS规范的包目录一般包括如下这些文件。
            1、package.json: 包描述文件。
            2、bin: 用于存放可执行的二进制文件的目录。
            3、lib: 用于存放JavaScript代码的目录。
            4、doc：用于存放文档的目录。

        在NodeJS中通过NPM命令来下载三方模块的包

    2、NPM介绍
        npm是世界上最大的开放源代码的生态系统。我们可以通过npm下载各种各样的包，
        npm是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有一下集中：
            1、允许用户从NPM服务器下载别人编写的第三方包到本地使用
            2、允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用(supervisor)
            3、允许用户将自己编写的包或命令行程序上传到NPM服务器共别人使用

    3、NPM命令详解
        1、npm -v 查看npm版本

        2、npm install *** -S（--save） 下载，如果没有写--save或者-S那么使用cnpm还原的时候是会出现问题的

        3、npm uninstall mudole Name 卸载模块

        4、npm list 查看当前目录下已经安装的node包

        5、npm info ** 查看**的版本

        6、指定版本安装(在版本号前面加一个@符号) npm install jquery@1.8.0


    4、dependencies前面的标识符详解

        "dependencies" : {
            "ejs": "^2.3.4",
            "express": "~4.13.3"
        }

        ^ 表示第一位版本号不变，后面两位取最新

        ~ 表示前两位不变，最后一位取最新

        * 表示全部取最新

        什么都不加就表示指定当前版本

    5、淘宝镜像

        http://www.npmjs.org npm管网

        https://npm.taobao.org 淘宝npm镜像管网

        淘宝NPM镜像是一个完整npmjs.org镜像，可以用此替代官方版本（只读），同步频率目前为10分钟一次，一次以保证尽量与官方服务同步。

        npm install -g cnpm --registry==https://registry.npm.taobao.org

    