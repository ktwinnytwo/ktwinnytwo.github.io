//Goal 1: Have the two colors pickers values show up
//below so we can see what the colors are
  //Step 1: Select two colors inputs and h3 so we can center
  //the color from the inputs into it
  /*
  var color1 = document.getElementsByTagName('input')[0];
  var color2 = document.getElementsByTagName('input')[1];
  ^This works too :D */
  var css = document.querySelector("h3");
  var color1 = document.querySelector(".color1");
  var color2 = document.querySelector(".color2");
  //why query selector instead of getElementsByTagName?
  //Now we need to cache the Background body stylesheet
  var body = document.getElementById("gradient");

  //to change the body background style:
  //body.style.background = "red"; and it'll change to red
  //Implement this in the fucntions for the inputs below:

function gradientColors() {
  body.style.background = "linear-gradient(to right, " +
  color1.value + ", " + color2.value + ")";
  //to display the text content of the body's background style
  css.textContent = body.style.background + ";";
}

//Need something to Listen to what the user is doing with
//the input color
//These functions will log eveery color that gets selected
//as the User clicks through them
//Now we want it to change the background as the color changes in the inputs
color1.addEventListener("input", gradientColors);

color2.addEventListener("input", gradientColors);
// color1.addEventListener("input", function() {
//   body.style.background = color1.value; > Works, but does
//not apply the 2nd color. Only 1st.
// });
//
// color2.addEventListener("input", function() {
//   body.style.background = color2.value;> Works, but does
//not apply the 1st color. Only 2nd.
// });
// body.style.background = "linear-gradient(to right, " +
// color1.value + ", " + color2.value + ")"; > Is how you changes
//the linear gradient. Must apply to both inputs.

//Goal 2: Log the two input colors so they show up on the screen
//once selected.
