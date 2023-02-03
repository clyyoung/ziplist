const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(first, second) {
  const final = [];
  for (let i = 0; i < first.length; i++) {
    final.push(first[i], second[i]);
  }
  return final;
}
console.log(zipList(list1, list2));

function zipListTheSimpleWay(first, second) {
  return _.flatten(_.zip(first, second));
}
console.log(zipListTheSimpleWay(list1, list2));
