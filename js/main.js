$(function() {
    /*search*/
    $('#search').focus(function() {
        $(this).addClass('active');
    });
    /*banner*/
    var swiper_banner = new Swiper(".banner>.swiper-container", {
        direction: "horizontal",
        loop: true,
        pagination: ".swiper-pagination", //圆点
        paginationClickable: true, //圆点点击
        autoplay: 5000,
        observer: true,
        autoplayDisableOnInteraction: false,
    });
    /*热门厂商*/

    var len = $('.cs-list li').length;
    $('.cs-list ul').css({
        'width': len * 2.26 + 'rem'
    });
    /*carts-list 车型分类*/
    var dom = $('#cars-list .spa-box');
    for (var i = 0; i < dom.length; i++) {
        var length = dom.eq(i).find('span').length;
        // var width = dom.eq(i).find('span').outerWidth();
        dom.eq(i).find('div').width(length * 1.56 + 'rem')
    };
    /*车型选择*/
    $('#cars-list .spa-box span').click(function() {
        var _index = $(this).index(); //当前车型的索引
        $(this).siblings('span').removeClass('active');
        $(this).addClass('active');
    });

    /*我的关注tab*/
    $('.tab-list li').click(function() {
        var _index = $(this).index();
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active');
        $('.care-videos-list').find('.list0').css({
            'display': 'none'
        });
        $('.care-videos-list').find('.list0').eq(_index).css({
            'display': 'block'
        });
    });
    /*article-manager.html 编辑点击*/
    var click_index = 0;
    $('#bj').click(function() {
        click_index++;
        if(click_index%2 == 0){
             $(this).text('编辑');
            $('.meaasge-list li').removeClass('active');
            $('.btn-box').removeClass('active');
        }else{
            $(this).text('取消');
            $('.meaasge-list li').addClass('active');
            $('.btn-box').addClass('active');
        }
        
    });
    /*底部按钮*/
     $('.btn-box li').click(function() {
        var _index = $(this).index();
        $(this).addClass('active');
        $(this).siblings('li').removeClass('active'); 
    });
    /*全选*/
    /*设置默认未选中状态*/
    var dom2 = $('#info-list .meaasge-list li');
        for(var j = 0 ; j < dom2.length ;j++){
            var isOff = dom2.eq(j).find('input').prop('checked',false);
          
        };
        /*全选*/
    $('#all-select').click(function(){
        var dom = $('#info-list .meaasge-list li');
        for(var j = 0 ; j < dom.length ;j ++){
            console.log(j);
            dom.eq(j).find('input').prop('checked',true);
        };
    });
    /*删除*/ 
    $('#all-delete').click(function(){
        var dom2 = $('#info-list .meaasge-list li');
        for(var j = 0 ; j < dom2.length ;j++){
            var isOff = dom2.eq(j).find('input').prop('checked');
            if( isOff ){
                dom2.eq(j).remove();
            }
            
        };
    });

    
        
    
});