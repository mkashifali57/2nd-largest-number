let i, first, second;
  let arr= [ 12, 3534, 1, 10, 344, 1 ];
  // sort the array
  arr.sort();

  // start from second last element
  // as the largest element is at last
  for (i = arr.length - 2; i >= 0; i--) {
      // if the element is not
      // equal to largest element
      if (arr[i] != arr[arr.length - 1]) {
          console.log( arr[i]);
          break;
      }
  }  
