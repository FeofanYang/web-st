var isMenuOpen;
if(navIndex == undefined){
	var navIndex = 0;
}
// 初始化nav active
$(".menu>li").eq(navIndex).addClass('active');
if(isMenuOpen){
	$("nav .menu li p,footer").animate( {"opacity":0}, 100, "linear");
	$("nav .menu li a").animate( {"margin-left":"0"}, 100, "linear");
	$("nav").animate( {"width":"70px"} , 100, "linear", function () {
		$(".menu li").removeClass('active');
		$(".menu>li").eq(navIndex).addClass('active');
	});
}

// 鼠标经过nav
$("body").on("mouseover", "nav", function () {
	$("nav .menu li p,footer, nav .menu li a, nav").finish();
	$("nav .menu li p,footer").animate( {"opacity":1}, 100, "linear");
	$("nav .menu li a").animate( {"margin-left":"20px"}, 100, "linear");
	$("nav").animate( {"width":"220px"}, 100, "linear", function(){
		isMenuOpen = true;
	});
});
$("body").on("mouseleave", "nav", function () {
	if(isMenuOpen){
		$("nav .menu li p,footer").animate( {"opacity":0}, 100, "linear");
		$("nav .menu li a").animate( {"margin-left":"0"}, 100, "linear");
		$("nav").animate( {"width":"70px"} , 100, "linear", function () {
			$(".menu li").removeClass('active');
			$(".menu>li").eq(navIndex).addClass('active');
		});
	}
});
// 鼠标经过nav menu
$(".menu").on("mouseover", "li", function () {
	$(".menu li").removeClass('active');
	$(this).addClass('active');
});