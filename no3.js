function solution(relation) 
{
    // precondition
    if( relation.length == 0 ) return 0;

    var answer = 0;
    var remainingAttributes = [];
    var combArray = [];
    var data = [];
    var checkDuplicates = [];
    var hashIndex = '';
    var isUnique = true;
    var attributeCombinationCount = 1;

    /**
        Algorithm :
        0. initialize number of candidate_key to 0
        1. initialize array of remaining_attributes
        2. initialize attribute_combination_count to 1
        3. while attribute_combination_count < remaining_attributes length
            a. generate all combinations with the length of attribute_combination_count
            b. for each combination, record each pair
                if there is a duplicate between these combinations, continue to the next combinatio
            c. if there is not then increment candidate_key for 1, and remove the combination index from remaining attributes
        4. return candidate_key as answer
    */


    for( var i = 0; i < relation[0].length; i++ )
    {
        remainingAttributes.push(i);
    }

    while( remainingAttributes.length > attributeCombinationCount )
    {   
        combinationUtil(remainingAttributes, data, 0, remainingAttributes.length - 1, 0, attributeCombinationCount, combArray);

        combArray.forEach(function(attributes){

            checkDuplicates = [];
            isUnique = true;

            for( var i = 0; i < relation.length; i++ )
            {
                hashIndex = '';

                for( var j = 0; j < attributes.length; j++ )
                {
                    hashIndex += '-' + relation[i][attributes[j]];
                }

                if( checkDuplicates[hashIndex] )
                {
                    isUnique = false;
                    break;
                }
                else
                {
                    checkDuplicates[hashIndex] = 1;
                }
            }


            if( isUnique )
            {
                for( var i = 0; i < attributes.length; i++ )
                {
                    remainingAttributes = remainingAttributes.filter(function(attributeIndex){
                        return attributeIndex !== attributes[i];
                    });
                }

                answer++;
            }

        });

        combArray = [];
        data = [];

        attributeCombinationCount++;
    }

    return answer;
}

function combinationUtil(arr, data, start, end, index, r, combArray)
{
    if (index == r) 
    {  
        combArray.push( Array.from(data) );
        
        return;
    } 

    for ( var i = start; i <= end && end - i + 1 >= r - index; i++) 
    { 
        data[index] = arr[i]; 
        combinationUtil(arr, data, i + 1, end, index + 1, r, combArray); 
    } 
}

var testCase1 = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];

console.log( solution(testCase1) );