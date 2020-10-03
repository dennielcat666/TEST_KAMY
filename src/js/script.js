$(function (){
	$('#js-carousel-1').owlCarousel({
		items: 1, // А по-умолчанию 3
		nav: true,
		loop: true,
    });




    $('.tabs').each(function(index) {
        const $tabsLinksTitle = $(this).find('.tabs__link-title');
        const $tabsBlocksContent = $(this).find('.tabs__block-content');


        $tabsLinksTitle.each(function(index) {
            $(this).on('click', function(e) {
                e.preventDefault();
    
                
                $tabsBlocksContent.removeClass('visible')
                $tabsLinksTitle.removeClass('tabs__link-title--active');
                $(this).addClass('tabs__link-title--active');

                
                $tabsBlocksContent.each(function (indexContent) {
                    if (index === indexContent) {
                        $(this).addClass('visible')
                    }
                })
            })
        })
    })
})