# webComponent
### 组件介绍
* 组件目前还处于开发测试阶段，目前封装了一些css3`动画组件`以及`数据可视化散点图组件`。
* 组件依赖`jqery`&`jquery.fullpage`
* 组件依赖`H5.js` `H5_Component_Base.js` `H5.css` `H5_Component_Base.css`
* 如果需要使用数据可视化需要引用响应的js文件和css文件，如散点图需要引用`Point.js` `Point.css`
#### 类规划
H5.js中规划了H5类用于构建整个页面，内置了三个方法`addpage`&`addcomponent`&`loader`
#####核心API
```javascript
this.addpage(name,bgc,text)//添加页面的名字string，背景，文本
this.addComponent(name,cfg)//组件名，配置参数
this.loader()//生成的页面默认隐藏，需要在代码末尾调用H5的loader方法来让页面显示。
```
#####Point示例代码
```javascript
$(function(){
        var h5=new H5()
        var cfg={
            type:'point',//重要参数决定了生成怎样的可视化组件
            width:300,   //宽高这里内部做了处理因为要兼容pc和移动端，宽高会自动/2这里组件实际宽高150
            height:300,
            /*data参数 默认data[0]为参照物,不可以添加位置参数,z-index最高,宽高为component的百分之百，其余data内容均在component中水平垂直居中，且五个参数必不可少*/
            data:[
                ['A项',.4,'green'], /*文本，大小比例，颜色，left(number)，top(per)*/
                ['B项',.2,'yellow',-40,'-50%'],
                ['C项',.22,'red',140,'80%'],
                ['D项',.15,'blue',100,'-60%'],
                ['E项',.15,'black',-40,'140%']
            ],
            css:{
                bottom:200,
                color:'#ddd'
            },
            center:true//组件水平居中
        }
        h5.addPage('one','#efefef').addComponent('point',cfg).addPage('two')//addcomponent这个方法中会根据cfg的type类型自动生成相应的组件
        h5.loader()
    })
```
#####下图为示例代码生成的效果
![image](https://github.com/QinxuHellscreamm/webComponent/blob/master/imgs/point.gif)
