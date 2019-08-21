$(document).ready(function() {

  // target randomly generated
  var target = Math.floor(Math.random() * 120) + 19;
  $("#getNumber").html(target);

  // button clicked gives a random value for each button pressed
  var lego = Math.floor(Math.random() * 12) + 1;
  var plastic = Math.floor(Math.random() * 12) + 1;
  var stones = Math.floor(Math.random() * 12) + 1;
  var treasure = Math.floor(Math.random() * 12) + 1;
  var counter = 0;
  $("#collected").html("Please hurry!!")
  
  var wins = 0;
  var loses = 0;
  console.log(lego);
  console.log(plastic);
  console.log(stones);
  console.log(treasure);
  
  // when boxes are clicked add the value together
  $("#legoBox, #plasticBox, #stonesBox, #treasureBox").on("click", function () {
    var buttonId = $(this).attr('id');
    
    if (buttonId === "legoBox") {
      counter = counter + lego;
      console.log(counter);
      $("#collected").html("Great!! we have now collected " + counter + "!");
      
    } 
    else if (buttonId === "plasticBox") {
      counter = counter + plastic;
      console.log(counter);
      $("#collected").html("Great!! we have now collected " + counter + "!");
      
    } 
    else if (buttonId === "stonesBox") {
      counter = counter + stones;
      console.log(counter);
      $("#collected").html("Great!! we have now collected " + counter + "!");
      
    } 
    else if (buttonId === "treasureBox") {
      counter = counter + treasure;
      console.log(counter);
      $("#collected").html("Great!! we have now collected " + counter + "!");
      
    } 
    // if the value added together == the same as target number user wins
    if (counter === target) {
      wins++
      $("#collected").html("Yes! we have bested the bandits " + wins + " times!");
    }
    // if the value does not add up to same target number then the user loses
    if (counter > target) {
      loses++
      $("#collected").html("Oh no! we lost our crystals again, " + loses + " times!");
    }
    
  });
  console.log(wins)
  console.log(loses)
  // and will need to fight the bandits

  
  
  
  
  

});

