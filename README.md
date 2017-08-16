# webSite
技术栈：node(后端) + webpack(前端构建工具) + vue + vuex(前端框架)
#安装依赖
npm install
#开发模式
npm run dev
#生产发布
npm run build


#问题1
vue-loader没有将组件内的es6转成es5
解决方法：
    1.添加对js文件的解析，babel-loader,为此，需要安装babel-loader的依赖，依次为：
        "babel-core": "^6.25.0",
        "babel-loader": "^7.1.1",
        "babel-preset-env": "^1.6.0",
        "babel-preset-es2015": "^6.24.1",
        "babel-preset-stage-0": "^6.24.1",
    2.在项目的根目录下添加.bebelrc文件，内容为：
    {
        "presets": ["es2015", "stage-0"],
        "comments": false
    }
    3.解决方法参考：https://github.com/vuejs/vue-loader/issues/385

#问题2
编译stylus时，style－loader并没有将style打入html啊
#问题2
如何启动整个vue组件