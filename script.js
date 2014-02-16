var input, cal, num, value, operator, pm, check;

function readOperand(n){
	num = n[0];
	n.shift();
	if (num.length === 0) {
		num = n[0] + n[1]
		n.shift();
		n.shift();
		console.log(n)
	}
	num = parseInt(num, 10)
	if (isNaN(num) == true) {
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
		} else if (operator === "/"){
			value = value / temp
		} else {
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
		input = $(this).data('id');
		if (input != '=' && input != 'plusminus') {
			$(".display-text").append(input);
		}
	})

	$('#plusminus').click(function(){
		calculate();
		// console.log(val);
		if (val < 0) {
			val = Math.abs(val)
		} else {
			val = -Math.abs(val)
		}
		$('.display-text').html(val)
	})

	$('#clear').click(function(){
		clear();
	})

	$('#equal').click(function(){
		calculate();
	})
})