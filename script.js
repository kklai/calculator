var input, cal, num, value, operator, pm;

function readOperand(n){
	num = n[0];
	n.shift();
	num = parseInt(num)
	if (n[0] === "-") {
		num = n[0] + n[1];
		num = parseInt(num)
		n.shift();
		n.shift();
		return num
	} else if (isNaN(num) == true) {
		return "First input must be a number."
	} else {
		return num
	}
}

function evaluate(n) {
	if (n.length === 0) {
		console.log('missing operand')
	}
	value = readOperand(n)
	while (n.length != 0) {
		operator = n[0];
		n.shift();
		temp = readOperand(n)
		if (operator === "+") {
			value = value + temp
		} else if (operator === "-") {
			value = value - temp;
		} else if (operator === "x") {
			value = value * temp;
		} else if (operator === "/") {
			value = value/temp;
		} else { 
			console.log(operator);
			console.log('Unrecognized operator');
		}
	}
	return value
}

function calculate() {
	cal = $('.display-text')[0].innerHTML;
	cal = cal.split('&nbsp;')
	console.log(cal);
	try {
		val = evaluate(cal)
		$('.display-text').html(value);
	} catch (err) {
		return err;
	}
}

function clear() {
	$('.display-text').html('');
}

$(document).ready(function(){
	$('.btn').click(function(){
		input = this.innerHTML;
		if (input != '=') {
			$(".display-text").append(input);
		}
	})

	$('#plusminus').click(function(){
		pm = $('.display-text').innerHTML;
	})

	$('#clear').click(function(){
		clear();
	})

	$('#equal').click(function(){
		calculate();
	})
})