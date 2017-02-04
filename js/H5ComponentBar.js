/* 柱图组件对象 */
var H5ComponentBar=function(name,cfg){
    var component=new H5ComponentBase(name,cfg)
    $.each(cfg.data,function(idx,item){
      if(item[2]){
          color=item[2]
      }
        var line=$('<div class="line">')
        var name=$('<div class="name">')
        var rate=$('<div class="rate">')
        var per=$('<div class="per">')
        var width=item[1]*100+'%'
        rate.css('width',width).html('<div class="bg"></div>')
        rate.find('.bg').css({'backgroundColor':color})
        name.text(item[0])
        per.text(width)
        rate.append(per)
        line.append(name).append(rate)
        component.append(line)
    })

    return component
}
