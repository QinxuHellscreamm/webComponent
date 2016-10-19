# webComponent
### 组件介绍
* 组件目前还处于开发测试阶段，目前封装了一些css3`动画组件`以及`数据可视化散点图组件`。
* 组件依赖`jqery`&`jquery.fullpage`
* 组件依赖`H5.js` `H5_Component_Base.js` `H5.css` `H5_Component_Base.css`
* 如果需要使用数据可视化需要引用响应的js文件和css文件，如散点图需要引用`Point.js` `Point.css`
#### 类规划
H5.js中规划了H5类用于构建整个页面，内置了三个方法`addpage`&`addcomponent`&`loader`
```javascript
this.addpage(name,bgc,text)//添加页面的名字string，背景，文本
this.addComponent(name,cfg)//组件名，配置参数
this.loader()//生成的页面默认隐藏，需要在代码末尾调用H5的loader方法来让页面显示。
```
