var input, cal, num, value, operator;

function readOperand(n){
	num = n[0];
	n.shift();
	num = parseInt(num)
	if (isNaN(num) === true) {
		return "First input must be a number."
	} else if (n[0] === "-") {
		console.log('negative operand')
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
		} else if (operator === "÷") {
			value = value/temp;
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
		input = this.innerHTML;
		if (input != '=') {
			$(".display-text").append(input);
		}
	})

	$('#clear').click(function(){
		clear();
	})

	$('#equal').click(function(){
		calculate();
	})
})