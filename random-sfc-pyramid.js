
var nSFC = function(n){
  var message = "";
  var counter = 0;
 
  while(counter < n){
    message = message + "SFC ";
    counter = counter + 1;
  }
  
  return message;
};


var RandomSFCPyramid = function(n){
  var n = Math.floor(Math.random() * 100);
 
  var output = "";
  var row = 1
  
  while(row <= n){
   output = nSFC(row);
   console.log(output);
   row = row + 1;
   };
  return output;
  };


RandomSFCPyramid()
