var input, cal, num, value, operator, pm, check, new_temp, new_op, new_value;

function readOperand(n){
	num = n[0];
	n.shift();
	if (num.length === 0) {
		num = n[0] + n[1]
		n.shift();
		n.shift();
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
		console.log(n);
		operator = n[0];
		n.shift();
		temp = readOperand(n)
		if (operator === "x") {
			value = value * temp;
		} else if (operator === "/"){
			value = value / temp
		} else if ((n.length > 1) && ((operator === "+") || (operator === "-")) && ((n.indexOf("x") != -1) || (n.indexOf("/") != -1))) {
			saved_op = operator;
			new_op = n.shift();
			new_temp = parseInt(n.shift());
			if (new_op === "x") {
				new_value = temp * new_temp;
			} else if (new_op === "/") {
				new_value = temp / new_temp
			}
			if (operator === "+") {
				value = value + new_value
			} else if (operator === "-") {
				value = value - new_value
			}
		} else if (operator === "+") {
			value = value + temp
		} else if (operator === "-") {
			value = value - temp
		}
	}
	return value;
}

function calculate() {
	cal = $('.display-text')[0].innerHTML;
	cal = cal.split('&nbsp;')
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