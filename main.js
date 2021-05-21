alert("Take this quiz to see which nail shape is best recommended for you!");

var choices = [];

var options = {
    first:[" 1: Classy, Sophisticated, Elegant \n 2: Simple, Comfortable, Casual \n 3: Trendy, New, Always Changing"],
    second:["Test"],
    third:["like"],
    fourth:[""],
    fifth:[""],
    sixth:[""]
}

for(item in options) {
    var questions = Number(prompt("Which of these best describes your style?\n" + options[item]));

    questions = Check(questions, options[item])

    choices.push(questions);
}

console.log(choices);

function Check(response, question) {
    while (isNaN(response) || response < 1 || response > 3) {
        response = Number(prompt("Please choose a valid number option:\n" + question))
    }

    return response;
}