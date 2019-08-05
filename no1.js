function solution(record) 
{
	var answer = [];
	var commandElements = [];
	var listOfPlayer = [];

	record.forEach(function(command, index){

		commandElements.push(command.split(' '));

		/**
			Command element :
			0 -> action
			1 -> uid
			2 -> nickname
		*/

		if( commandElements[index][0] == 'Enter' || commandElements[index][0] == 'Change' )
		{
			// assign nickname
			listOfPlayer[commandElements[index][1]] = commandElements[index][2];
		}

	});

	commandElements.forEach(function( commandElement ){

		switch(commandElement[0])
		{
			case 'Enter':
				answer.push(`${listOfPlayer[commandElement[1]]} came in.`);
				break;
			case 'Leave':
				answer.push(`${listOfPlayer[commandElement[1]]} has left.`);
				break;
		}

	});

	return answer;
}


var testCase1 = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];

var result = solution(testCase1);

console.log(result);