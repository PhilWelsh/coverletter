$(document).ready(function () {
    $('#fullpage').fullpage({
        'slidesColor': ['#AAA', '#FFB', '#0BD'],
        'scrollingSpeed': 700,
        'anchors': ['first', 'second', 'third', 'forth', 'fifth'],
        'controlArrowColor': '#000',
        'navigation': true,
        'navigationPosition': 'right',
        'navigationColor': '#000',
        'navigationTooltips': [],

        'slidesNavigation': true,
        'slidesNavPosition': 'bottom',
        'controlArrowColor': '#000',
        'loopBottom': true,
        'loopTop': false,
        'loopHorizontal': true,
        'autoScrolling': true,
        'scrollOverflow': true,

    });

    $('.slip').on('click', function (e) {
        var $this = $(e.currentTarget);
        if($this.hasClass('move')){
            $this.parent().children().removeClass('move');
            setTimeout(function () {
                $this.parent().children().addClass('move');
            }, 1000)        
        } else {
            $this.parent().children().addClass('move');
        }

        $('.pers').on('click', function () {
            setTimeout(function () {
                $('.abilitytech').addClass('displaynone')
                $('.abilitypers').removeClass('displaynone');
            }, 800);
        });
        $('.tech').on('click', function () {
            setTimeout(function () {
                $('.abilitypers').addClass('displaynone')
                $('.abilitytech').removeClass('displaynone');
            }, 800);
        });
    })

    //if ($('.four').hasClass('active')) {
    //    $('.wrap').addClass('anim')
    //}else{}
    
});