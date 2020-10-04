$(function (){
	$('#js-carousel-1').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
    });




    $('.js-tabs').each(function(index) {
        const $tabsLinksTitle = $(this).find('.js-tabs-link-title');
        const $tabsBlocksContent = $(this).find('.js-tabs-block-content');


        $tabsLinksTitle.each(function(index) {
            $(this).on('click', function(e) {
                e.preventDefault();
    
                
                $tabsBlocksContent.removeClass('visible')
                $tabsLinksTitle.removeClass('active');
                $(this).addClass('active');

                
                $tabsBlocksContent.each(function (indexContent) {
                    if (index === indexContent) {
                        $(this).addClass('visible')
                    }
                })
            })
        })
    })
})