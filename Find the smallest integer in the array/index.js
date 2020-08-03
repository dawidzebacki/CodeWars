class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest;
    for (let i = 0; i < args.length; i++) {
        if (i === 0) {
            smallest = args[i];
        } else {
            if (args[i] < smallest) {
                smallest = args[i];
            }
        }
    }
    return smallest;
  }
}