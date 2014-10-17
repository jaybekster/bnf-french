var $ask = $('#ask'),
	$error = $('#error'),
	$number = $('#number'),
	$roman = $('#roman');

function getNumberName(number) {
	if (number > 0 && number < 10) {
		return '(единичного порядка)';
	} else if (number >= 11 && number <=19) {
		return '(числа типа 11-19)';
	} else if (number >= 20 && number < 100) {
		return '(десятого порядка)';
	} else if (number >= 100) {
		return '(сотого порядка)';
	}
}

// sept cent soixante-dix-sept
// 150
// 1 15 50
// cent quinze cinquante
// cent onze  un trente-trois
// trois trois cent trois trente-trois
// trois cent cent trois trente-trois
//   trois treize  trente-trois
$('button').on('click', function() {
	$error.slideUp();
	var value = $ask.val().replace(/\s{2,}/g, ' ').trim().toLowerCase(),
		number = null,
		number2 = null;
		length = null;

	if (!value) {
		return false;
	}

	try {
		number = parser.parse(value);
		$number.text(number);
		$roman.text(strToRim(number));
	} catch (err1) {
		// console.log(err1);
		if (err1.name === 'SyntaxError' && typeof err1.result === 'number') {
			length = err1.result.toString().length;
			try {
				var before = value.substr(0, err1.offset).trim().split(' ');
				number = parser.parse(value.substr(err1.offset).trim());
				number2 = parser.parse(value.substr(err1.offset).trim().split(' ')[0]);
				// console.log(value.substr(err1.offset).trim().join(' ')[0]);
				showError('За числом ' + parser.parse(before[before.length-1]) + ' ' + getNumberName(parser.parse(before[before.length-1])) + ' не должно следовать число ' + number2 + ' ' + getNumberName(number2) + '.');
				// console.log('За числом ' + parser.parse(before[before.length-1]) + ' ' + getNumberName(parser.parse(before[before.length-1])) + ' не должно следовать число ' + number + '.');
			} catch (err2) {
				if (err2 && err2.result && typeof err2.result === 'number') {
					number2 = parser.parse(value.substr(err1.offset).trim().split(' ')[0]);
					showError('За числом ' + parser.parse(before[before.length-1]) + ' ' + getNumberName(parser.parse(before[before.length-1])) + ' не должно следовать число ' + number2 + ' ' + getNumberName(number2) + '.');
					// console.log('За числом ' + parser.parse(before[before.length-1]) + ' ' + getNumberName(parser.parse(before[before.length-1])) + ' не должно следовать число ' + err2.result + '.');
				} else {
					// console.log('За числом ' + parser.parse(before[before.length-1]) + ' ' + getNumberName(parser.parse(before[before.length-1])) + ' не должно следовать число ' + err2.result + '.');
					showError(err2.message);
				}
			}
		} else {
			showError(err1.message);
		}
	}
});

function showError(text) {
	$error.text(text).slideDown();
	$number.text('');
	$roman.text('');
}

function strToRim(num) {
	var font_ar =  [1,4,5,9,10,40,50,90,100,400,500,900,1000,4000,5000,9000,10000],
		font_rom = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M','M&#8577;','&#8577;','&#8577;&#8578;','&#8578;'],
		result = '',
		n = font_ar.length - 1;
	while (num > 0) {
		if (num >= font_ar[n]) {
			result += font_rom[n];
			num -= font_ar[n];
		}
		else n--;
	}
	return result;
}