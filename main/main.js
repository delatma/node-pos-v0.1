module.exports = function main(input) {
    console.log("Debug Info");

	return printReceipt(input);
	function printReceipt(input){
		var startOfReceipt = '***<store earning no money>Receipt ***';
		var midOfReceipt = '----------------------\nTotal: ';
		var endOfReceipt = '**********************\n';
		var itemizedReceipt = '';
		var subtotal = 0;
		var totalAmount = 0;
		var itemCount = [];
		var itemPrice = [];
		var unit;
		var price = 0;
		var currency = 'yuan';
		//count instances of item names
		for (var i = 0; i < input.length; i++) {
		    itemCount[input[i].Name] = 1 + (itemCount[input[i].Name] || 0);
		}//[ 'Coca-Cola': 5, Sprite: 2, Battery: 1 ]
		var itemName = Object.keys(itemCount);

		for (var i = 0; i < itemName.length; i++){
			if (input[i].Unit == 'bottle'){
				unit = ' ' + input[i].Unit + 's';
			}
			if(itemName[i] == 'Battery')
				unit = '';

			input.forEach(function(x){
				if (x.Name == itemName[i])
					price = x.Price;
			 });

			subtotal = price * itemCount[itemName[i]];
			totalAmount += subtotal;
	   		itemizedReceipt += 'Name: ' + itemName[i]
	   		        + ', Quantity: ' + itemCount[itemName[i]] + unit + ', '
					+ 'Unit price: ' + price.toFixed(2)
					+ ` (${currency}), `
					+ 'Subtotal: ' + subtotal.toFixed(2) + ` (${currency})\n`;
		}

		var finalReceipt = startOfReceipt + '\n' + itemizedReceipt + '\n' 
		+ midOfReceipt + totalAmount.toFixed(2) + ` (${currency})` + '\n' + endOfReceipt;
		return finalReceipt.replace(/[\r\n]+/g, '\n');
	}

};