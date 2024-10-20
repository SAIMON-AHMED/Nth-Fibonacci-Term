// A better solution than recursive implementation regarding complexity.
// Time -> O(n) | Space -> O(1) - where n is the number of nodes
function getNthFib(n) {

  if (n === 1) return 0;
  if (n === 2) return 1;

  let nthTerm = 0;
  let firstTerm = 0;
  let secondTerm = 1;

  for (let i = 2; i < n; i++) {
    let temp = secondTerm
    secondTerm = firstTerm + secondTerm;
    firstTerm = temp;
  }
  nthTerm = secondTerm;
  return nthTerm;

}

