function myMap(foo, arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(foo(arr[i], i, arr));
  }

  return res;
}

const arr = ["1", "2", "3", "4", "5"];
