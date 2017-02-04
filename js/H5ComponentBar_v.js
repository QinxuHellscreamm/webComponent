/* 垂直柱图组件对象 */
var H5ComponentBar_v=function(name,cfg){
    var component=new H5ComponentBase(name,cfg)
    var length=100/cfg.data.length
    var cfgwidth=cfg.width
    $.each(cfg.data,function(idx,item){
        if(item[2]){
            color=item[2]
        }
        var line=$('<div class="line">')
        var name=$('<div class="name">')
        var rate=$('<div class="rate">')
        var per=$('<div class="per">')
        var height=item[1]*100+'%'

        rate.css('height',height).html('<div class="bg"></div>')
        console.log(rate.find('.bg').width()/2);
        rate.find('.bg').css({'backgroundColor':color,'marginLeft':cfgwidth/length-8})
        name.text(item[0])
        per.text(height)
        rate.append(per)
        line.css('width',length+'%')
        line.append(name).append(rate)
        component.append(line)
    })
    return component
}



