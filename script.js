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
		} else if ((operator === "+") || (operator === "-")) {
			if((n.length != 0) && ((n[0] == "x") || (n[0] == "/"))) {
				old_temp = value
				new_op = n.shift();
				new_temp = parseInt(n.shift())
				console.log("new temp is " + new_temp)
				console.log("temp is " + new_temp)
					if (new_op === "x") {
						value = temp * new_temp
					} else if (new_op === "/") {
						value = temp / new_temp
					}
					if (operator === "+") {
						value = old_temp + value
					} else if (operator === "-") {
						value = old_temp - value
					}
			} else if (operator === "+") {
				value = value + temp
			} else if (operator === "-") {
				value = value - temp
			}
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
		cal = $('.display-text').html()
		cal = cal.split('&nbsp;')
		last = cal[cal.length -1]
		if (last != "") {
			last_term = parseInt(last)
			if (isNaN(num) != true) {
				last_term = last_term * -1
				cal[cal.length -1] = last_term
				new_cal = cal.join('&nbsp;')
				$('.display-text').html(new_cal)
			}
		}
	})

	$('#clear').click(function(){
		clear();
	})

	$('#equal').click(function(){
		calculate();
	})
})