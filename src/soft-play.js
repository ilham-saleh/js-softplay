// do not change these lines
let adults = 0
let children = 0

let totalA = 0
let totalC = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

function total(){
  return {
    adults: totalA,
    children: totalC
  }
}

function enter(numAdults, numChildren) {
  let check = false
  if (numAdults >= numChildren) {
    check = true
    adults += numAdults
    children += numChildren

    totalA += numAdults
    totalC += numChildren
  }
  return check
}
// console.log('q2', enter(3, 2))
// console.log(occupancy())


function leave(numAdults, numChildren) {
  let check = false

  if (
    numAdults >= numChildren &&
    numAdults <= adults &&
    numChildren <= children
  ) {
    const adultQuantityCheck = adults - numAdults
    const childrenQuantityCheck = children - numChildren

    if (
      adultQuantityCheck >= 0 &&
      childrenQuantityCheck >= 0 &&
      adultQuantityCheck >= childrenQuantityCheck
    ) {
      check = true
      adults -= numAdults
      children -= numChildren
    }
  }

  return check
}
// console.log('q3', leave(3, 2))
console.log(occupancy())
// console.log(total())



// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: total
}
