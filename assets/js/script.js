const numQuestions = 8;

// function whatIsTheAnswer(num){
//     document.getElementById('a'+num).style.display='block';
// }

function whatIsTheAnswer(num){
    for (let i = 1; i<=numQuestions; i++){
        document.getElementById('a'+i).style.display='none';
    }
    document.getElementById('a'+num).style.display='block';
}