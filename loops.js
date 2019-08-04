<<<<<<< HEAD
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`)
   } else {
      array.push(`I am ${i} strange loops.`)
   }
 }
 return array;
}

function whileLoop(n) {
  let countdown = n;
  
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done"
}

function doWhileLoop(num) {
  var i = 0;
  function incrementVariable() {
  i = i + 1;
  return i;
 }
  do {
  console.log("I run once regardless.");
 } while (incrementVariable() < num)
=======
forLoop (let i = 0; i < 25; i++) {
  if i == 1:
   print("I am 1 strange loop")
  else:
   print("I am ${i} strange loops")
>>>>>>> dd270084aa6afdaec3785d211d5826ecef053c53
}