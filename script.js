var $ask = $('#ask'),
	$error = $('#error'),
	$number = $('#number'),
	$roman = $('#roman');

names = {
	3: 'сотого',
	2: 'десятичного',
	1: 'единичного'
}
// sept cent soixante-dix-sept
//  cent quinze  cinquante-cinq
$('button').on('click', function() {
	$error.slideUp();
	var value = $ask.val().replace(/\s{2,}/g, ' ').trim().toLowerCase(),
		number = null,
		length = null;
	try {
		number = parser.parse(value);
		number = parser.parse(value);
		$number.text(number);
		$roman.text(strToRim(number));
	} catch (err1) {
		if (err1.name === 'SyntaxError') {
			length = err1.result.toString().length;
			try {
				number = parser.parse(value.substr(err1.column))
				showError('За числом ' + names[length] + ' порядка (' + err1.result + ') не должно следовать число ' + number.toString().length + ' порядка (' + number + ').')
			} catch (err2) {
				showError(err1.message);
			}
		}
	}
});

function showError(text) {
	$error.text(text).slideDown();
	$ask.addClass('error');
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