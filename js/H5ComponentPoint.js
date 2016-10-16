/* 散点图表组件对象 */

var H5ComponentPoint=function(name,cfg){
    var component =new H5ComponentBase(name,cfg)
    var base=cfg.data[0][1];
    $.each(cfg.data,function(idx,item){
        var point=$('<div class="point point_'+idx+'"></div>')
        var name=$('<div class="name">'+item[0]+'</div>')
        var rate=$('<div class="per">'+(item[1]*100)+'%</div>')
        point.append(name)
        name.append(rate)
        /*百分比*/
        var per=item[1]/base*100+'%'
        point.width(per).height(per)
        console.log(item);
        console.log(point.width()*1.5);
        if(item[2]){
            point.css('backgroundColor',item[2])
        }
        if(item[3]!==undefined&&item[4]){
                point.css({'left':'50%','marginLeft':-(point.width())/2*1.5}).css({'top':'50%','marginTop':-(point.width())/2*1.5})
                point.data('left',item[3]).data('top',item[4])
        }else{
            point.css({'zIndex':10})
        }

        component.append(point)
    })
    //component.text('text componentPoint')
    return component
}