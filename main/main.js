module.exports = function main(inputs) {
//    console.log("Debug Info");
	console.log(inputs[0].Barcode);
//	return printReceipt(inputs);

	console.log('***<store earning no money>Receipt ***');
//count number of items
	var counts = [];
	for (var i = 0; i < inputs.length; i++) {
	    counts[inputs[i].Name] = 1 + (counts[inputs[i].Name] || 0);
	}
	var unit;
//	name of objects
	var keys = Object.keys(counts);
//output
	for (var i = 0; i < keys.length; i ++){
		if (inputs[i].Unit == 'bottle')
			unit = ' bottles';
		if(keys[i] == 'Battery')
			unit = '';
		console.log('Name: ' + keys[i] + ', Quantity: ' + counts[keys[i]] + unit + ', '
			+ 'Unit price: ');
	}

};