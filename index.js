var katzDeliLine = [];

function takeANumber(line){
  line.push(line.length+1);
 console.log("Welcome. You are number "+ line.length + " in line.")
 return ("Welcome. You are number "+ line.length + " in line.")
  }
  
  function currentLine(line){
  if (line.length===0){
    console.log("The line is currently empty.");
    return ("The line is currently empty.");
  }
  let namePosition = [];
  for (let i=0; i<line.length; i++){namePosition.push(i+1+". "+ line[i]);
  }
  console.log("The line is currently: " + namePosition.join(', '));
  return("The line is currently: " + namePosition.join(', '));
}
  
function nowServing(line){
  if (line.length===0){
  console.log("There is nobody waiting to be served!");
  return("There is nobody waiting to be served!");}
  else {
    console.log("Currently serving " + line.shift() + ".");
    return("Currently serving " + line.shift() + ".");}
}


takeANumber(katzDeliLine); 
// "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine); 
// "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine); 
// "Welcome, Kent. You are number 3 in line."
currentLine(katzDeliLine); 
// "The line is currently: 1. Ada, 2. Grace, 3. Kent"
 
nowServing(katzDeliLine); // "Currently serving Ada."
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
 
takeANumber(katzDeliLine); // "3"
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
 
nowServing(katzDeliLine); // "Currently serving Grace."
 
currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"