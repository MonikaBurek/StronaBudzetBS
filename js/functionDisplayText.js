// Przeglądaj bilans: napis
document.getElementById("myBtn").addEventListener("click", displayText);

function displayText()
{
	var differenceInBalanceString;
	var differenceInBalance;
	var text;
	
	differenceInBalanceString = document.getElementById("differenceNumber").innerHTML;
	differenceInBalance = Number(differenceInBalanceString);
	
	if (differenceInBalance >= 0)
	{
		text = 'Gratulacje. Świetnie zarządzasz finasami!';
	}

	else
	{
		text = 'Uważaj, wpadasz w długi!';
	}
	
	document.getElementById("differenceText").innerHTML = text;
	
}