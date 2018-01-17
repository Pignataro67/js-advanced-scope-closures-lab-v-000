function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let start = parseInt(startingBlock)
    let end = parseInt(endingBlock)
    let distance = end - start
      if(blockRange >= distance) {
        return `within range by ${blockRange - distance}`
      } else {
        return `${distance - blockRange} blocks out of range`
    }
  }
}
  function produceTipCalculator(tipPercentage) {
    return function(rideFare) {
      return rideFare * tipPercentage
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
