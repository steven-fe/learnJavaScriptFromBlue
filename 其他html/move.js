var move = (function(){
	var timer = 0;
	return function(o,name,eVal,scale,callBack){
		if(!timer){
			o[name+"timer"] = null;//设置对象相对应CSS属性的专有定时器
			timer = 1;
		}
		o["s"+name] = (name=="opacity")?Math.round(100*getStyle(o,name)):(parseInt(getStyle(o,name)));
		o["e"+name] = eVal;
		clearInterval(o[name+"timer"]);
		o[name+"timer"] = setInterval(function(){
			var s = (o["e"+name]-o["s"+name])/scale;
			var speed = (s>0)?(Math.ceil(s)):(Math.floor(s));

			if(o["e"+name]===o["s"+name]){
				clearInterval(o[name+"timer"]);
				if(callBack){
					callBack();
				}
			}else{
				o["s"+name] += speed;
				if(name=="opacity"){
					o.style[name] = o["s"+name]/100;
					o.style.filter = "alpha(opacity="+o["s"+name]+")";
				}else{
					o.style[name] = o["s"+name]+"px";
				}
			}
		},30);
	}
})();

function getStyle(o,name){
	if(o.currentStyle){
		return o.currentStyle[name];
	}else{
		return getComputedStyle(o,false)[name];
	}
}