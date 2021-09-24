//Ex 1 - com curto-circuito e template string
let n = 10
function checkZero(x) {
  return (x != 0 && `X não é zero`) || `X é zero`
}

console.log(checkZero(n))
