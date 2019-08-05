function solution(N, users) 
{
    var answer = [];
    var failureRates = [];
    var failureCounts = [];
    var userCount = users.length;

    for( var i = 0; i < N; i++ )
    {
    	failureRates[i] = {
    		stage: (i+1)
    		, rates: 0
    	};

    	failureCounts[i] = 0;

    }

    users.forEach(function(failedStage){

    	failureCounts[failedStage-1]++;

    });

    failureCounts.forEach(function(count, index){

    	if( failureRates[index] )
    	{
	    	failureRates[index].rates = count / userCount;
    	}

    	userCount -= count;

    });

    failureRates.sort(function(a, b){
    	if( a.rates === b.rates )
    	{
    		return a.stage - b.stage;
    	}
    	else
    	{
    		return b.rates - a.rates;
    	}
    });

    failureRates.forEach(function(data){
    	answer.push(data.stage);
    });

    return answer;
}

var testCase1 = [4,4,4,4,4];
var testCase2 = [2,1,2,6,2,4,3,3];

console.log( solution(4, testCase1) );
console.log( solution(5, testCase2) );