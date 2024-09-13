function myMap(foo, arr) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(foo(arr[i], i, arr));
  }

  return res;
}
