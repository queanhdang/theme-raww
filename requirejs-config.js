var config = {
    deps:['Magento_Cms/js/requireSlick', 'Magento_Catalog/js/requireSlick', 'Magento_Catalog/js/custom', 'Magento_Swatches/js/custom-swatch', 'Magento_Wishlist/js/custom-swatch'],
    paths: {
        'owlcarousel': "js/owl.carousel.min",
        'slick': 'js/slick'
    },
    shim: {
        'owlcarousel': {
            deps: ['jquery']
        },
        'slick': {
            deps: ['jquery']
        }
    }
};