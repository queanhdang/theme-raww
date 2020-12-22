require([
    'jquery'
    ], function ($) {
        $(function () { // to ensure that code evaluates on page load
            $(".minus-btn").on("click", function(){
                var qty = $(this).closest("div.control").find("input");
                var value = Number(qty.val());
                if(value > 1) {
                    value = value - 1;
                }
                qty.attr('value', value);
            })
            $(".plus-btn").click(function(){
                var qty = $(this).closest("div.control").find("input");
                var value = Number(qty.val());
                value = value + 1;
                qty.attr('value', value);
            })
        });
    });