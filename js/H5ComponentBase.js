/* 基本图文组件对象 */
var H5ComponentBase=function(name,cfg){
    var cfg=cfg||[]
    var id=('h5_c_'+Math.random()).replace('.','_')
    var cls='h5_component_name_'+name+' h5_component_'+cfg.type;
    var component=$('<div class="h5_component '+cls+'" id="'+id+'">')
    cfg.text&&component.text(cfg.text)
    cfg.width&&component.width(cfg.width/2)
    cfg.height&&component.height(cfg.height/2)
    cfg.css&&component.css(cfg.css)
    cfg.class&&component.addClass(cfg.class)
    //有居中属性就阻止translateX
    if(cfg.center&&cfg.relativeTo){
        if(cfg.relativeTo.indexOf('X')!=-1){
            console.log('cfg.center为true时无法进行X轴位移')
        }else {
            cfg.relativeTo&&(component[0].style.transform=cfg.relativeTo)//css位移  参数格式"translateY(-110px)"
        }
    }else if(cfg.relativeTo){
        cfg.relativeTo&&(component[0].style.transform=cfg.relativeTo)
    }

    cfg.bg&&component.css('backgroundImage','url('+cfg.bg+')')
    //水平居中
    if(cfg.center==true){
        component.css({
            'marginLeft':(cfg.width/4 * -1)+'px',
            left:'50%'
        })
    }
    //加载执行
    component.on('onLoad',function(){
        console.log('开始翻页')
        component.removeClass(cls+'_leave').addClass(cls+'_load')
        cfg.animateIn&&component.animate(cfg.animateIn)
        cfg.animation&&(component.addClass('animation'+cfg.animation))
        if(cfg.type=='point'){
            points=component.find('.point')
            $.each(points,function(idx,item){
                console.log(points);
                $(item).animate({'top':item.data('top'),'left':$(item).data('left'),'margin':0},500)
            })
        }else if(cfg.type=='bar'){
             bar=component.find('.bg')
            for(var i=0;i<bar.length;i++){
                $(bar[i]).animate({width:'100%'},1000)
            }
        }else if(cfg.type=='bar_v'){
             bar=component.find('.bg')
            for(var i=0;i<bar.length;i++){
                $(bar[i]).animate({height:'100%'},1000)
            }
        }

        return false
    })
    //离开执行
    component.on('onLeave',function(){
        console.log('结束翻页')
        component.removeClass(cls+'_load').addClass(cls+'_leave')
        cfg.animateOut&&component.animate(cfg.animateOut)
        for(var i=0;i<component[0].classList.length;i++){
            if(component[0].classList[i].indexOf('component-rotateY90')!=-1){
                component.removeClass(component[0].classList[i])
            }
            if(component[0].classList[i].indexOf('preserve-3d')!=-1){
                component.removeClass(component[0].classList[i])
            }
        }
        if(cfg.type=='point'){
            for(var i=0;i<points.length;i++){
                //point.css('left',item[3]).css('top',item[4])
                if(i!=0){
                    $(points[i]).animate({'left':'50%','marginLeft':-$(points[i]).width()/2,'top':'50%','marginTop':-$(points[i]).width()/2})
                }
            }
        }else if(cfg.type=='bar'){
            for(var i=0;i<bar.length;i++){
                $(bar[i]).animate({width:0})
            }
        }else if(cfg.type=='bar_v'){
            for(var i=0;i<bar.length;i++){
                $(bar[i]).animate({height:0})
            }
        }
        return false
    })
    return component
}