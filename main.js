alert("Take this quiz to see which nail shape is best recommended for you!");

var choices = [];

var options = {
    first:["1: Classy, Sophisticated, Elegant \n 2: Simple, Comfortable, Casual \n 3: Trendy, New, Always Changing"],
    second:["1: I have long, slender hands \n 2: I have wide, short hands \n 3: I have wide palms with long fingers"],
    third:["1: When I'm not at work or school, I enjoy a fun night with my friends \n 2: You can find me gardening, typing, and doing other hands-on things \n 3: You can find me where the party's at"],
    fourth:["1:Quiet evening in the 'burbs \n 2: Take me to the beach \n 3: City life all the way"],
    fifth:["1: Matte or gloss with painted designs are my go-to \n 2: One or two coats of polish and I'm good \n 3: I want all the bling"],
    sixth:["1: My nails often match my moodg \n 2: I just want something cute that'll last \n 3: My nails absolutly have to match my outfit"]
}

for(item in options) {
    var questions = Number(prompt("Which of these best describes you?\n " + options[item]));

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