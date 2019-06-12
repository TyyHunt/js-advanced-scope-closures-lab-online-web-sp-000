function produceDrivingRange(range) {
  return function(start, end) {

    let tripDistance = (parseInt(end) - parseInt(end));
    let difference = (range - tripDistance);
    if (tripDistance <= range) {
      return `within range by ${tripDistance}`;
    } else {
      return `${Math.abs(difference)} blocks out of range.`
    }
  };
};
