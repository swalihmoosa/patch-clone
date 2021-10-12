$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
    });

    $("#faq .tabhead a").on("click",function(){
        var $this = $(this);
        $("#faq .tabhead a").removeClass("active");
        $this.addClass("active");
        let click_tab = $this.data("id");
        $("#faq .tabbody  div.item").removeClass("active");
        $(`#${click_tab}`).addClass("active");

    })
});