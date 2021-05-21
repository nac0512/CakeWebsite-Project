alert("Take this quiz to see which nail shape is best recommended for you!");

var choices = [];

var options = {
    first:["1: Classy, Sophisticated, Elegant \n 2: Simple, Comfortable, Casual \n 3: Trendy, New, Always Changing"],
    second:["1: I have long, slender hands \n 2: I have wide, short hands \n 3: I have wide palms with long fingers"],
    third:["1: When I'm not at work or school, I enjoy a fun night with my friends \n 2: You can find me gardening, typing, and doing other hands-on things \n 3: You can find me where the party's at"],
    fourth:["1: Quiet evening in the 'burbs \n 2: Take me to the beach \n 3: City life all the way"],
    fifth:["1: Matte or gloss with painted designs are my go-to \n 2: One or two coats of polish and I'm good \n 3: I want all the bling"],
    sixth:["1: My nails often match my mood \n 2: I just want something cute that'll last \n 3: My nails absolutly have to match my outfit"]
}

for(item in options) {
    var questions = Number(prompt("Which of these best describes you?\n " + options[item]));

    questions = Check(questions, options[item])

    choices.push(questions);
}

console.log(choices);

var result = mostOccurring(choices);

console.log(result);

switch (result) {
    case 1:
        alert("Your recommended nail shape is: Ballerina or Almond! \n\nWhether your relaxing in the house or getting ready for a night out with friends, you can't go wrong with this classy shape. Try it in long or short, you can keep it simple with traditional colors, or use the space to add some bling. Keep reading to find out more!");
        break;

    case 2:
        alert("Your recommended nail shape is: Square or Oval! \n\nSimple and casual, this nail shape is best suited for your every day needs. Try these shapes in medium and short lengths and no matter how outdoorsy or hands on you get, you manicure is sure to always look fresh. Keep reading to find out more!");
        break;

    case 3:
        alert("Your recommended nail shape is: Stilleto or Lipstick! \n\nWhen it comes to keeping up with the latest trends, you're the one setting them. These nail shapes require a bold personality to pull them off, and you've clearly got what it takes. Whether you keep them plain or add bling, these nails will definitely add some flare to your look. Keep reading to find out more!");
        break;

    default:
        break;
}





function Check(response, question) {
    while (isNaN(response) || response < 1 || response > 3) {
        response = Number(prompt("Please choose a valid number option:\n" + question))
    }

    return response;
}


function mostOccurring(array) {
    var max = array[0],
        counter = {},
        i = array.length,
        element;
    
    while (i--) {
        element = array[i];
        if (!counter[element]) counter[element] = 0;
        counter[element]++;
        if (counter[max] < counter[element]) max = element;
    }

    return max;
}