const removeDuplicates = (items) => {
    let uniqueItems = [];
    for (let i = 0; i <= items.length - 1; i++) {
      if (uniqueItems.indexOf(items[i]) == -1) {
        uniqueItems.push(items[i]);
      }
    }
    return uniqueItems;
  }
  
  
  let uniqueItemsarray = removeDuplicates([1, 2, 3, 2, 1, 2, 3, 4, 5, 7, 3, 2, 2]);
  for (let item of uniqueItemsarray) {
    console.log(item); //2,3,4,5,7
  }
  