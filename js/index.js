/**
 * Created by liujiaju on 2016/12/2.
 */
(function(win,doc){
    function change() {
        doc.documentElement.style.fontSize = 20*doc.documentElement.clientWidth/320+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);
// 百度地图
// var map = new BMap.Map("map");    // 创建Map实例
// map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
// var point=new BMap.Point(116.5555,39.915);
// map.centerAndZoom(point, 14);
// map.centerAndZoom(point, 14);
// var marker = new BMap.Marker(new BMap.Point(116.5555,39.915));
// map.addOverlay(marker);
// map.disableDragging();

var swiper = new Swiper('.swiper-container', {
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    grabCursor: true,
    freeMode: true
});

$('.nav').tap(function () {
    $('.pop').css({'display':'block'});
});
$('.pop .close').tap(function () {
    $('.pop').css({'display':'none'});
});
$('.pop a').tap(function () {
    $('.pop').css({'display':'none'});
});
$('.pop .call').tap(function () {
    $('.pop').css({'display':'none'});
    window.open('index.html #call','_self');
});
//播放器
// $('video').tap(function () {
//     $(this).attr('play','play');
// });
var oV=document.querySelector('video');

oV.addEventListener('touchend',function () {
    if(oV.paused){
        oV.play();
    }else{
        oV.pause();
    }
});
