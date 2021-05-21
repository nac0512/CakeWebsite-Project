// Survey prompt to the user
alert("Take this quiz to see which nail shape is best recommended for you!");

// Create variable to store user answers as an array
var choices = [];

// Create dictionary to present questions without having to retype where needed

var options = {
    first:["1: Classy, Sophisticated, Elegant \n 2: Simple, Comfortable, Casual \n 3: Trendy, New, Always Changing"],
    second:["1: I have long, slender hands \n 2: I have wide, short hands \n 3: I have wide palms with long fingers"],
    third:["1: When I'm not at work or school, I enjoy a fun night with my friends \n 2: You can find me gardening, typing, and doing other hands-on things \n 3: You can find me where the party's at"],
    fourth:["1: Quiet evening in the 'burbs \n 2: Take me to the beach \n 3: City life all the way"],
    fifth:["1: Matte or gloss with painted designs are my go-to \n 2: One or two coats of polish and I'm good \n 3: I want all the bling"],
    sixth:["1: My nails often match my mood \n 2: I just want something cute that'll last \n 3: My nails absolutly have to match my outfit"]
}

// Create for loop to iterate through questions using prompts from dictionary 

for(item in options) {
    var questions = Number(prompt("Which of these best describes you?\n\n " + options[item]));

    // Validate questions return an acceptable answer, pass through questions to be reasked 
    questions = Check(questions, options[item])

    // Add acceptable answers to previously created array 
    choices.push(questions);
}

console.log(choices);

// Pass array to function and create variable to store most occuring number (will come back as an array)
var result = mostOccurring(choices);

console.log(result);

//  Create loop to determing which result to show to user
  // If there was a tie between multiple numbers, create "default" result
  // Condition needs to account for length AND index number because if the index number is 1, but also has a second array item, it will show two results (not what we want)
if(result.length == 1 && result[0] == 1) {
  alert("Your recommended nail shape is: Ballerina or Almond! \n\nWhether your relaxing in the house or getting ready for a night out with friends, you can't go wrong with this classy shape. Try it in long or short, you can keep it simple with traditional colors, or use the space to add some bling. Keep reading to find out more!");
}
else if(result.length == 1 && result[0] == 2) {
   alert("Your recommended nail shape is: Square or Oval! \n\nSimple and casual, this nail shape is best suited for your every day needs. Try these shapes in medium and short lengths and no matter how outdoorsy or hands on you get, you manicure is sure to always look fresh. Keep reading to find out more!");
}
else if(result.length == 1 && result[0] == 3) {
   alert("Your recommended nail shape is: Stilleto or Lipstick! \n\nWhen it comes to keeping up with the latest trends, you're the one setting them. These nail shapes require a bold personality to pull them off, and you've clearly got what it takes. Whether you keep them plain or add bling, these nails will definitely add some flare to your look. Keep reading to find out more!");
}
else {
  alert("Wow! Looks like you matched with multiple nail shapes. Whether you want to look cute and casual or trendy and hip, you can't go wrong. Keep reading to find out more!");
}

// switch (result) {
//     case 1:
//         alert("Your recommended nail shape is: Ballerina or Almond! \n\nWhether your relaxing in the house or getting ready for a night out with friends, you can't go wrong with this classy shape. Try it in long or short, you can keep it simple with traditional colors, or use the space to add some bling. Keep reading to find out more!");
//         break;
//     case 2: 
//         alert("Your recommended nail shape is: Square or Oval! \n\nSimple and casual, this nail shape is best suited for your every day needs. Try these shapes in medium and short lengths and no matter how outdoorsy or hands on you get, you manicure is sure to always look fresh. Keep reading to find out more!");
//         break;
//     case 3:
//         alert("Your recommended nail shape is: Stilleto or Lipstick! \n\nWhen it comes to keeping up with the latest trends, you're the one setting them. These nail shapes require a bold personality to pull them off, and you've clearly got what it takes. Whether you keep them plain or add bling, these nails will definitely add some flare to your look. Keep reading to find out more!"); 
//         break;

//     default:
//         alert("Wow! Looks like you matched with multiple nail shapes. Whether you want to look cute and casual or trendy and hip, you can't go wrong. Keep reading to find out more!");
//         break;
// }





// Create function to validate user response is a number within the given parameters, if not, reprompt
// Return accepted answer
function Check(response, question) {
    while (isNaN(response) || response < 1 || response > 3) {
        response = Number(prompt("Please choose a valid number option:\n" + question))
    }

    return response;
}

// Create function to find most occurring item in array
// Return most occuring item(s) as an array
function mostOccurring (result) {
  // Create empty array to store values 
  // Create object to store keys to compare to
  // create counter
    var obj = {};
    var mostFreq = 0;
    var max = [];

    // Create statement for if current array element has been counted before
      // If not, change to one, otherwise, add one
    result.forEach(ea => {
      if (!obj[ea]) {
        obj[ea] = 1;
      } else {
        obj[ea]++;
      }

      // Compare keys (counts) values of the keys (array items) in the created object
      // Add key (or keys) which the have the highest values to the empty array
      if (obj[ea] > mostFreq) {
        mostFreq = obj[ea];
        max = [ea];
      } else if (obj[ea] === mostFreq) {
        max.push(ea);
      }
    });

    // Return array of most occurring elements
    return max;
     
  }