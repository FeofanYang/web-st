var isMB;
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    // 微信页面
    var bIsWeChat = sUserAgent.match(/MicroMessenger/i) == "micromessenger";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsWeChat) {
		isMB = true;
    }
}
browserRedirect();

if(!isMB){
	var isMenuOpen;
	if(navIndex == undefined){
		var navIndex = 0;
	}
	// 初始化nav active
	$(".menu>li").eq(navIndex).addClass('active');
	if(isMenuOpen){
		$(".navText, footer").animate( {"opacity":0}, 100, "linear");
		$(".i_menu").animate( {"margin-left":"0"}, 100, "linear");
		$("nav").animate( {"width":".7rem"} , 100, "linear", function () {
			$(".menu li").removeClass('active');
			$(".menu>li").eq(navIndex).addClass('active');
		});
	}

	// 鼠标经过nav
	$("body").on("mouseover", "nav", function () {
		$(".navText, footer, .i_menu, nav").finish();
		$(".navText, footer").animate( {"opacity":1}, 100, "linear");
		$(".i_menu").animate( {"margin-left":"20px"}, 100, "linear");
		$("nav").animate( {"width":"220px"}, 100, "linear", function(){
			isMenuOpen = true;
		});
	});
	$("body").on("mouseleave", "nav", function () {
		if(isMenuOpen){
			$(".navText, footer").animate( {"opacity":0}, 100, "linear");
			$(".i_menu").animate( {"margin-left":"0"}, 100, "linear");
			$("nav").animate( {"width":".7rem"} , 100, "linear", function () {
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
}else{
	var isMenuOpen;
	$("nav").prepend("<i class='iconfont icon-caidan'></i>");
	if(navIndex == undefined){
		var navIndex = 0;
	}
	// 初始化nav active
	$(".menu>li").eq(navIndex).addClass('active');
	if(isMenuOpen){
		$(".navText, footer").animate( {"opacity":0}, 100, "linear");
		$(".i_menu").animate( {"margin-left":"0"}, 100, "linear");
		$("nav").animate( {"width":".7rem"} , 100, "linear", function () {
			$(".menu li").removeClass('active');
			$(".menu>li").eq(navIndex).addClass('active');
		});
	}

	// 鼠标经过nav
	$("nav").click(function () {
		$(".navText, footer, .i_menu, nav").finish();
		$(".navText, footer").animate( {"opacity":1}, 200, "linear");
		$(".i_menu").animate( {"margin-left":"20px"}, 200, "linear");
		$(".icon-caidan").hide();
		$("nav").animate( {"width":"220px","height":"100%"}, 200, "linear", function(){
			isMenuOpen = true;
		});
	})
	$(".wrap").click(function () {
		if(isMenuOpen){
			$(".navText, footer").animate( {"opacity":0}, 200, "linear");
			$(".i_menu").animate( {"margin-left":"0"}, 200, "linear");
			$(".icon-caidan").show();
			$("nav").animate( {"width":".7rem","height":".7rem"} , 200, "linear", function () {
				$(".menu li").removeClass('active');
				$(".menu>li").eq(navIndex).addClass('active');
			});
		}
	});
	// 鼠标经过nav menu
	$(".menu").on("click", "li", function () {
		$(".menu li").removeClass('active');
		$(this).addClass('active');
	});
}