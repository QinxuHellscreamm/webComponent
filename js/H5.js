/* 内容管理对象 */
var H5=function(){
    this.id=(('h5'+Math.random()).replace('.','_'));
    this.el=$('<div class="h5" id='+this.id+'>').hide()
    this.page=[]
    $('body').append(this.el);//入口元素
    /*
     * 新增一个页面
     * param{string} name 页面的名称，append到className中
     * param{string} bgc 页面背景
     * param{string} text 页面的默认文本
     * return{H5}对象，链式编程
     */
    this.addPage=function(name,bgc,text){
        var page=$('<div class="h5_page section">');
        if(name!=undefined){
            page.addClass('h5_page_'+name)
        }
        if(text) page.text(text)
        this.el.append(page)
        this.page.push(page)
        this.el.css({background:bgc})
        this.background=text
        return this
    }
    /*新增组件*/
    this.addComponent=function(name,cfg){
        var cfg=cfg||{}
        cfg= $.extend({
            type:'base'
        },cfg)
        var component;
        var page=this.page.slice(-1)[0]//取最后一个page
        switch (cfg.type){
            case 'base':
                component = new H5ComponentBase(name,cfg);
                break;
            default:
        }
        page.append(component)
        return this
    }
    /*页面加载完毕执行*/
    this.loader=function(){
        this.el.show()
        this.el.fullpage({
            onLeave:function(index,nextIndex,direction){
                console.log($(this));
                $(this).find('.h5_component').trigger('onLeave')
            },
            afterLoad:function(anchorLink,index){
                $(this).find('.h5_component').trigger('onLoad')
            }
        })
        this.page[0].find('.h5_component').trigger('onLoad')//开始时让第一页是执行onLoad事件
    }
}