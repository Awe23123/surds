print("searchA", "");
print("searchB", "");
print("output", "");

n = 2;
setInterval(function(){
	try{
		s = simpleSurd(n);
		var h = document.createElement("p");
		var t = document.createTextNode("√" + n + " = " + s);
		h.appendChild(t);
		document.body.appendChild(h);
	}catch(err){
	}
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
				a = " or √(" + key + " × " + value + ")";
				if(isInt(sqrtK)){
					return sqrtK + "√" + value + a;
				}else{
					return sqrtV + "√" + key + a;
				}
			}
		}
	}
	throw "No result";
}

function searchA() {
	try{
		var s = document.getElementById("searchA").value;
		var i = toInt(s);
		print("output", simpleSurd(i));
	}catch(ex){
		print("output", ex.message);
	}
}

function searchB() {
	try{
		var s = document.getElementById("searchB").value;
		var ab = s.split("/");
		var a = toInt(ab[0]);
		var b = toInt(ab[1]);
		print("output", "√" + (a * a * b));
	}catch(ex){
		print("output", ex.message);
	}
}

function print(id, str){
	document.getElementById(id).value = str;
}

function isInt(n){
	return (n ^ 0) === n;
}

function toInt(str){
	var i = parseInt(str);
	if(isNaN(i)){
		throw "Invaild input";
	}
	return i;
}
