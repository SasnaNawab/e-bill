let unit = document.getElementById('units');
let bsubmit = document.getElementById('submit'); 
let output = document.getElementById('bill');
let clear = document.getElementById('clear');
bsubmit.onclick = function(){
					let amount = calc();
					output.innerHTML = amount;
				};
clear.onclick = function() {
					output.innerHTML = "0.00";
				};
function calc(){
	let val = unit.value;
	let amount;
	if (val >= 0) {
		if (val <= 60) {
			if (val <= 30) {
				amount = (val * 2.50) + 30;
			}
			else {
				amount = (30 * 2.50)+((val-30) * 4.85) + 60;
			}
		}
		else{
			if (val <= 90) {
				amount = (60 * 7.85)+((val-60) * 10) + 90;
			}
			else if (val <= 120) {
				amount = (60 * 7.85)+(30 * 10)+((val-90) * 27.75) + 480;
			}
			else if (val <= 180) {
				amount = (60 * 7.85)+(30 * 10)+(30 * 27.75)+((val-120) * 32) + 480;
			}
			else if(val > 180){
				amount = (60 * 7.85)+(30 * 10)+(30 * 27.75)+(60 * 32)+((val-180) * 45) + 540;
			}
		}
		
	}
	else {
		alert("Error: Your Entered No of Unit is not valid!!");
	}
	return amount;
}