const listOne = ['a', 'b', 'c'];
const listTwo = [1, 2, 3];

function ziplist(list1, list2) {
  let i = 0;
  const newList = [];
  while (i < list1.length) {
    newList.push(list1[i]);
    newList.push(list2[i]);
    i++;
  }
  return newList;
}
console.log(ziplist(listOne, listTwo));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(listOne, listTwo));
