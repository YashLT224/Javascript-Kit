let arr = [{
    name: 'yash',
    id: 4
  },
  {
    name: 'verma',
    id: 2
  },
  {
    name: 'tarun',
    id: 5
  },
  {
    name: 'sharma',
    id: 1
  },
  {
    name: 'vivek',
    id: 7
  },
]

//console.log(arr.sort((a,b)=>a.id-b.id)); // sort by id in ascending order
//console.log(arr.sort((a,b)=>b.id-a.id)); // sort by id in descending order


console.log(arr.sort((a, b) => {
  if (a.name > b.name) {
    return -1
  }
  else if(b.name>a.name){
  return 1;
  }
  return 0;
})); // sort by name  in descending order




console.log(arr.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  else if(b.name>a.name){
  return -1;
  }
  return 0;
})); // sort by name  in ascending order
