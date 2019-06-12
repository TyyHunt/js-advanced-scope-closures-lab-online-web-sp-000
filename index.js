function produceDrivingRange(range) {
  return function(start, end) {
    let tripDistance = (parseInt(end) - parseInt(end));
    let total = (range - tripDistance);
    if (tripDistance <= range) {
      return `within range by ${tripDistance}`;
    } else {
      return `${Math.abs(total)} blocks out of range.`
    }
  };
};
