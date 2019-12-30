$(document).on("mousemove", function(ev){

    var mouseX = ev.originalEvent.pageX

    var mouseY = ev.originalEvent.pageY

    $("img").each(function(){

        var imgX = $(this).position().left + 64

        var imgY = $(this).position().top + 64

        var diffX = mouseX - imgX
        console.log( mouseX - imgX)
        var diffY = mouseY - imgY

        var radians = Math.atan2(diffY, diffX)
        var angle = radians * 180 / Math.PI

        $(this).css("transform", "rotate(" + angle + "deg)")
    })

})