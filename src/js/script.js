$(function (){
	$('#js-carousel-1').owlCarousel({
		items: 1, // А по-умолчанию 3
		nav: true,
		loop: true,
		// autoplay: true,
		// autoplayTimeout: 5000
	});

	const $tabsLinksTitle = $('.tabs__link-title');
    const $tabsBlocksContent = $('.tabs__block-content');

    $tabsLinksTitle.each(function(index) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $tabsBlocksContent.removeClass('visible')
            $tabsLinksTitle.removeClass('tabs__link-title--active');
            $(this).addClass('tabs__link-title--active');
            $tabsBlocksContent.each(function (indexContent) {
                console.log({item:  $(this), indexContent});
                
                if (index === indexContent) {
                    $(this).addClass('visible')
                }
            })
        })
    })
})