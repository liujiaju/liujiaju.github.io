        (function (win,doc) {
            function change(){
                doc.documentElement.style.fontSize = 20*doc.documentElement.clientWidth/320+'px';
            }
            change();
            win.addEventListener('resize',change,false);
        })(window,document);
        (function(){
            $('.nav').tap(function () {
                $('.pop').css({'display':'block'});
            });
            $('.pop .close').tap(function () {
                $('.pop').css({'display':'none'});
            });
            $('.pop a').tap(function () {
                $('.pop').css({'display':'none'});
            });
            $('.pop').tap(function(){
                $('.pop').css({'display':'none'});
            });
        })();
        /*选项卡*/
        (function(){
            $.fn.tabSlider=function(){
                /*$(document).on('touchstart',function(ev){
                    /!*return false;*!/
                    /!*ev.preventDefault();*!/
                });*/
                this.each(function(index,element){
                    var aTap=$(this).find('#select li');
                    var oMoveDiv=$(this).find('#options li');
                    var oBox=$('#options li');
                    var iNow=0;
                    aTap.tap(function(){
                        iNow=$(this).index();
                        tab();
                    });
                    function tab(){
                        aTap.removeClass('active');
                        aTap.eq(iNow).addClass('active');
                        oMoveDiv.animate({'-webkit-transform':'translateX(-'+100*iNow+'%)'},{easing:'ease-out'});
                    }
                    oBox.swipeLeft(function(){
                        iNow = $(this).index();
                        iNow++;
                        if(iNow==aTap.length){iNow=aTap.length-1};
                        tab();
                    });
                    oBox.swipeRight(function(){
                        iNow = $(this).index();
                        iNow--;
                        if(iNow==-1)iNow=0;
                        tab();
                    });
                });
            };
            $(function(){
                $('.box').tabSlider();
            });
        })();