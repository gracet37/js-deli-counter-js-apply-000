var katzDeli = [];

function takeANumber(katzDeli,name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}
 
function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
  return `There is nobody waiting to be served!`
} else {
    for (let i=0;i<katzDeli.length;i++) {
      return `Currently serving ${katzDeli.shift()}.`
    }
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return `The line is currently empty.`;
 } else { 
   var line = []
<<<<<<< HEAD
   let i = 0;
   while (i < katzDeli.length) {
     line.push(" " + (i+1) + ". " + katzDeli[i]);
  i++}
}
return `The line is currently:${line}`;
=======
   for (let i=0;i<katzDeli.length; i++) {
     line.push(i+1 + ". " + katzDeli[i]);
  }
}
return `The line is currently: ${line} `;
>>>>>>> 9617242b9cb4ecee71eab7d64580dbaf50919a8c
}

