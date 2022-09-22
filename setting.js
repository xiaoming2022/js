var _0x163909=function(_0x3bdab2){
	var _0x441816=true;
	return function(_0xf48c4c,_0x3f8ff5){
		var _0x3c9407='‮';
		var _0x494756=_0x441816?function(){
			if(_0x3c9407==='‮'&&_0x3f8ff5){
				var _0x8a2654=_0x3f8ff5.apply(_0xf48c4c,arguments);
				_0x3f8ff5=null;
				return _0x8a2654;
			}
		}:function(_0x3bdab2){};
		_0x441816=false;
		var _0x3bdab2='‮';
		return _0x494756;
	};
}();
var _0x10a250=_0x163909(this,function(){
	var _0x4e4057=function(){
		return'dev';
	},_0x5ba7ac=function(){
		return'window';
	};
	var _0x3e53ff=function(){
		var _0x55c75b=new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|"].+[\'|"];? *}');
		return!_0x55c75b['test'](_0x4e4057['toString']());
	};
	var _0x3dbb8a=function(){
		var _0x5db682=new RegExp('(\\\\[x|u](\\w){2,4})+');
		return _0x5db682['test'](_0x5ba7ac['toString']());
	};
	var _0x4a1dd9=function(_0x7c54ae){
		var _0x1c645b=~-0x1>>0x1+255%0;
		if(_0x7c54ae['indexOf']('i'===_0x1c645b)){
			_0x4a3e67(_0x7c54ae);
		}
	};
	var _0x4a3e67=function(_0x4ce282){
		var _0x1f9d46=~-0x4>>0x1+255%0;
		if(_0x4ce282['indexOf']((true+'')[3])!==_0x1f9d46){
			_0x4a1dd9(_0x4ce282);
		}
	};
	if(!_0x3e53ff()){
		if(!_0x3dbb8a()){
			_0x4a1dd9('indеxOf');
		}else{
			_0x4a1dd9('indexOf');
		}
	}else{
		_0x4a1dd9('indеxOf');
	}
});
_0x10a250();
function player(_0x3fbf0f){
	if((navigator.userAgent.indexOf('MSIE')>=0)||(navigator.userAgent.indexOf('Trident')>=0)){
		alert('本播放器在IE浏览器和兼容模式下无法播放，请将浏览器设置为 极速模式！');
	}
	$.ajaxSettings.timeout='30000';
	$.ajaxSettings.async=true;
	$.post('API.php',{'url':_0x3fbf0f.url},function(_0x34e830){
		if(_0x34e830.code=='200'){
			MPlayer(_0x34e830.url,_0x34e830.type,_0x3fbf0f.title,_0x3fbf0f.vkey,_0x3fbf0f.next,_0x3fbf0f.contextmenu,_0x3fbf0f.contextlink,_0x3fbf0f.background,_0x3fbf0f.themeColor,_0x3fbf0f.dragSpotShape);
		}else{
			TheError();
		}
	},'json').error(function(_0x3ccda6,_0x2edbe6,_0x35ba0f){
		TheError();
	});
}
function MPlayer(_0x2eb2ae,_0x26ac79,_0x5b2c97,_0x1a403a,_0x27e191,_0x280679,_0x425e19,_0x5a87a1,_0x25c84e,_0x277e91){
	$('#loading').remove();
	if(!_0x27e191){
		playcss(1);
	}else{
		playcss(2);
	}
	var _0x33354f={'container':'#mui-player','themeColor':_0x25c84e,'src':_0x2eb2ae,'title':_0x5b2c97,'poster':_0x5a87a1,'autoplay':true,'initFullFixed':true,'preload':'auto','autoOrientaion':true,'dragSpotShape':_0x277e91,'lang':'zh-cn','volume':'1','videoAttribute':[{'attrKey':'webkit-playsinline','attrValue':'webkit-playsinline'},{'attrKey':'playsinline','attrValue':'playsinline'},{'attrKey':'x5-video-player-type','attrValue':'h5-page'}],'plugins':[new MuiPlayerDesktopPlugin({'leaveHiddenControls':true,'fullScaling':1}),new MuiPlayerMobilePlugin({'key':'01I01I01H01J01L01K01J01I01K01J01H01D01J01G01E','showMenuButton':true}),new MuiPlayerDesktopPlugin({'contextmenu':[{'name':'contextmenu','context':_0x280679,'zIndex':0,'show':true,'click':function(_0x1dfcee){
					window.open(_0x425e19,'_blank');
				}}]})]};
	if(_0x2eb2ae.indexOf('.m3u8')>0){
		zhetype='hls';
	}else if(_0x2eb2ae.indexOf('.flv')>0){
		zhetype='flv';
	}else{
		if((_0x26ac79=='hls')||(_0x26ac79=='m3u8')){
			zhetype='hls';
		}else{
			zhetype=_0x26ac79;
		}
	}
	if(zhetype=='hls'){
		_0x33354f.parse={'type':'hls','loader':Hls,'config':{'debug':false}};
	}else if(zhetype=='flv'){
		_0x33354f.parse={'type':'flv','loader':flvjs,'config':{'cors':true}};
	}
	if(!!_0x27e191){
		_0x33354f.custom={'footerControls':[{'slot':'nextMedia','position':'left','tooltip':'下一集','oftenShow':true,'click':function(_0x18f7f1){
					top.location.href=_0x27e191;
				}}]};
	}
	var _0x5b06fd=new MuiPlayer(_0x33354f);
	_0x5b06fd.on('ready',function(){
		var _0x27ac23=_0x5b06fd.video();
		var _0x41a3d3=localStorage.getItem(_0x1a403a);
		_0x27ac23.addEventListener('loadedmetadata',function(){
			this.currentTime=_0x41a3d3;
		});
		_0x27ac23.addEventListener('timeupdate',function(){
			var _0x41a3d3=Math.floor(_0x27ac23.currentTime);
			localStorage.setItem(_0x1a403a,_0x41a3d3);
		});
		_0x27ac23.addEventListener('ended',function(){
			localStorage.removeItem(_0x1a403a);
			if(!!_0x27e191){
				top.location.href=_0x27e191;
			}
		});
	});
}
function playcss(_0x608eb2){
	if(_0x608eb2==1){
		$('body').append('<div id="mui-player" class="content"></div>');
	}else{
		$('body').append('<div id="mui-player" class="content"><template slot="nextMedia"><svg t="1584686776454" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1682"><path d="M783.14692466 563.21664097L240.85307534 879.55472126c-39.1656664 24.10194914-90.38230866-6.02548665-90.38230865-51.21664226v-632.676158c0-45.19115433 51.21664097-75.31859011 90.38230865-51.21664226l542.29384932 316.33808029c39.1656664 21.08920518 39.1656664 81.34407804 0 102.43328194z" p-id="1683" fill="#ffffff"></path><path d="M873.52923331 734.94302767c0 42.17841036-39.1656664 78.33133408-90.38230865 78.33133407s-90.38230866-36.15292371-90.38230735-78.33133407V289.05697233c0-42.17841036 39.1656664-78.33133408 90.38230735-78.33133407s90.38230866 36.15292371 90.38230865 78.33133407v445.88605534z" p-id="1684" fill="#ffffff"></path></svg></template></div>');
	}
}
function TheError(){
	$('body').append('<div id="error"><h1>解析失败，请切换线路或刷新！</h1></div>');
	$('#loading').remove();
};