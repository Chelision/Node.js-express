
    一、Node.js自动启动工具supervisor

        supervisor会不停的watch你应用下的所有文件，发现有文件被修改，就重新载入程序文件，这样就实现了部署，修改程序文件后马上就能看到变更后的结果，而再也不用重新启动node.js了。

        1、首先安装supervisor

            npm install -g supervisor

        2、使用supervisor代替node命令启动应用