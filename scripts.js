// Time -> O(2^n) | Space -> O(n) - where n is the number of nodes

function getNthFib(n) {

  if (n === 1) return 0;
  if (n === 2) return 1;

  return getNthFib(n - 1) + getNthFib(n - 2);
  
}
