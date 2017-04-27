n = 2;
setInterval(function(){
	s = simpleSurd(n);
	while(s.startsWith("√")){
		s = simpleSurd(n);
		n++;
	}
	var h = document.createElement("p");
    var t = document.createTextNode("√" + (n - 1) + " = " + s);
    h.appendChild(t);
    document.body.appendChild(h);
	n++;
}, 1);

function simpleSurd(num) {
	for (var i = 2; i <= Math.sqrt(num); i++) {
		if (num % i == 0 && i != num / i) {
			var key = i;
			var value = num / i;
			var sqrtK = Math.sqrt(key);
			var sqrtV = Math.sqrt(value);
			if (isInt(sqrtK) ^ isInt(sqrtV)) {
				if(isInt(sqrtK)){
					return sqrtK + "√" + value;
				}else{
					return sqrtV + "√" + key;
				}
			}
		}
	}
	return "√" + num;
}

function isInt(n){
	return (n ^ 0) === n;
}

