// Write your solution here!
// Write your solution here!
// test 1
const cats = ["Milo", "Otis", "Garfield"];
// test 2
function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}
// test 3
function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}
// test 4
function destructivelyRemoveLastCat() {
    return cats.pop();
}
// test 5
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
// test 6
const copyOfCatsAppend = [...cats, "Broom"];
function appendCat(name) {
    return copyOfCatsAppend;
}
// test 7
const copyOfCatsPrepend = ["Arnold", ...cats];
function prependCat(name) {
    return copyOfCatsPrepend;
}
//test 8
function removeLastCat() {
    return cats.slice(0, -1);
}
//test 9
function removeFirstCat() {
    return cats.slice(1);
}