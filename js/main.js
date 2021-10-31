$(".menu-btn").on("click", () => {
    $(".header__menuContent").toggleClass("active");
    $(".menu-btn").toggleClass("menu-btn_active");
    $("body").toggleClass("lock");
});

$(".linkRegAuth").on("click", () => {
    $("#headerBtn").fadeToggle(500).css("display", "flex");
});