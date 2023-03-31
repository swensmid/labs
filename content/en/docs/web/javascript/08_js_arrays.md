---
title: "Arrays"
type: docs
linkTitle: "Arrays"
weight: 8
date: 2023-03-28
description: >
    Modul #F4 - JavaScript - In JavaScript sind Array mit deren Methoden sehr wichtig, diese werden hier angeschaut.
---

## Ziele
* Du weisst, wie man ein Array erstellt und updated.
* Du weisst wie man durch Arrays iterieren kann und was welche Vor-/Nachteile besitzt.
* Du kennst, mindestens drei der wichtigen Array-Funktionen und kannst diese anwenden.

### Arrays Basics
Ein Array in JavaScript ist eine Datenstruktur, die eine geordnete Sammlung von Elementen speichert. Ein Array kann verschiedene Datentypen speichern, einschließlich Zahlen, Zeichenketten und Objekten. Arrays werden in JavaScript durch eckige Klammern `[]` definiert und die Elemente innerhalb des Arrays werden durch Kommas getrennt.

```javascript
const array = [1, 2, 3, 'vier', 'fünf', {name: 'Max'}]

console.log(array) // [1, 2, 3, 'vier', 'fünf', {name: 'Max'}]
```

Jedes Element im Array hat eine Indexposition, die bei 0 beginnt. Auf die Elemente eines Arrays kann zugegriffen werden, indem der Index des Elements in eckigen Klammern angegeben wird:
```javascript
const array = [1, 2, 3, 'vier', 'fünf', {name: 'Max'}]

console.log(array[0]); // 1
console.log(array[3]); // 'vier'
```

#### Erstellen
Um ein Array in JavaScript zu erstellen, kann man die eckigen Klammern-Notation verwenden und die Elemente durch Kommas trennen.

```javascript
const array = [1, 2, 3, 'vier', 'fünf', {name: 'Max'}]

console.log(array) // [1, 2, 3, 'vier', 'fünf', {name: 'Max'}]
```
Man kann ein Array auch leer erstellen können, indem man nur die eckigen Klammern verwenden:
```javascript
const array = [];

console.log(array) // []

```

#### Updaten
Um ein Array in JavaScript zu aktualisieren, kann man einfach den Index des Elements in eckigen Klammern angeben, das man aktualisieren möchten, und ihm einen neuen Wert zuweisen.

```javascript
let array = [1, 2, 3, 4, 5]
array[1] = 10

console.log(array) // [1, 10, 3, 4, 5]
```

#### Länge bestimmen
Man kann die Länge (Anzahl der Elemente) eines JavaScript-Arrays mit der Eigenschaft `length` bestimmen. 

```javascript
const array = [1, 2, 3, 4, 5]
const arrayLength = array.length

console.log(arrayLength) // 5
```
Es ist jedoch nicht nötig die Length in eine Variable zu speichern.
```javascript
const array = [1, 2, 3, 4, 5]

console.log(array.length) // 5
```

Zu beachten ist, dass die `length` Eigenschaft die Anzahl der Elemente im Array zurückgibt, unabhängig davon, ob das letzte Element undefined ist oder nicht. Auch die falsy Werte haben keinen Einfluss auf die `length`.
```javascript
const array = [false, '', null, 0, undefined]
const arrayLength = array.length

console.log(arrayLength) // 5
```
### Iterieren
Um durch ein Array zu iterieren, gibt es mehrere Möglichkeiten. Die gängisten davon sind `for`, `forEach` und `for of`

#### For-Loop
Der for Loop ist eine Loop, mit der man eine bestimmte Anzahl von Loop durchläufen ausführen kann. Der for Loop wird oft verwendet, um durch Arrays zu iterieren oder um eine Aktion eine bestimmte Anzahl von Malen auszuführen.
```javascript
const array = [1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}
// 1
// 2
// 3
// 4 
// 5
```
Der for Loop bietet mehr Kontrolle über die Schleife als der for...of Loop. Zum Beispiel können Sie den Loop mit `break` oder `continue` unterbrechen oder überspringen, um bestimmte Bedingungen innerhalb der Schleife zu erfüllen.

#### break
Das `break`-Statement in einem for-Loop wird verwendet, um den Loop vorzeitig zu beenden und den Rest des Codes nach dem Loop auszuführen.
```javascript
const numbers = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 4) {
        break
    }
    console.log(numbers[i])
}

console.log('Loop beendet!')
// 1
// 2
// 3
// Loop beendet!
```

#### continue
Das `continue`-Statement in einem for-Loop wird verwendet, um den aktuellen Durchlauf des Loops zu überspringen und mit dem nächsten Durchlauf fortzufahren.
```javascript
const numbers = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    continue
  }
  console.log(numbers[i])
}

console.log('Loop beendet!')
// 1
// 3
// 5
// Loop beendet!
```

#### forEach-Loop
Der forEach Loop ist eine Methode in JavaScript, die auf Arrays angewendet werden kann und verwendet wird, um jedes Element des Arrays nacheinander zu durchlaufen. Der forEach Loop ist eine einfachere und kürzere Möglichkeit, um durch ein Array zu iterieren als der traditionelle for Loop.

Man kann es in JavaScript mit der `function()` lösen, dieses ist speziell für JavaScript.
```javascript
const array = [1, 2, 3, 4, 5]

array.forEach(function(element) {
  console.log(element)
});
// 1
// 2
// 3
// 4 
// 5
```

Wie in Kapitel [Functions](../../../../en/docs/web/javascript/07_js_functions.md#arrow-functions) beschrieben kann man ein ForEach-Loop auch Arrow-Functions verwenden.
```javascript
const array = [1, 2, 3, 4, 5]

array.forEach((element) => {
  console.log(element)
});
// 1
// 2
// 3
// 4 
// 5
```

Im Gegensatz zum for Loop bietet der forEach Loop jedoch weniger Kontrolle über den Loop. Zum Beispiel kann man den Loop nicht mit `break` oder `continue` unterbrechen oder überspringen. Außerdem gibt es keine Möglichkeit, auf den Index jedes Elements im Array zuzugreifen. Wenn man den Index benötigen, müsste man einen Zähler verwenden.

### for...of-Loop
Der for...of Loop ist eine Loop, die speziell dafür ausgelegt ist, Arrays oder andere iterierbare Objekte wie Maps, Sets, Strings usw. zu durchlaufen. Der for...of Loop ist in der Regel einfacher zu lesen und zu schreiben als ein traditioneller for Loop.
```javascript
const array = [1, 2, 3, 4, 5]

for (let element of array) {
  console.log(element)
}
// 1
// 2
// 3
// 4 
// 5
```

Der for...of Loop hat die gleichen Einschränkungen wie der Foreach. 

### Array wichtige Funktionen (Higher Order Functions)

#### push()
Mit der `push()`Methode kann man ein Element am Ende des Arrays hinzufügen.

Zu beachten ist, dass `push()` die neue Array-Länge zurückgibt, nachdem das Element hinzugefügt wurde.
```javascript
let array = [1, 2, 3]
const newLength = array.push(4, 5)

console.log(array) // [1, 2, 3, 4, 5]
console.log(newLength) // 4, 5
```

Man kann auch eine Variable verwenden, um das Element hinzuzufügen.
```javascript
let array = [1, 2, 3]
const newElement = 4
array.push(newElement)

console.log(array) // [1, 2, 3, 4]
```

#### pop()
Mit der Methode `pop()` kann man das letzte Element aus dem Array entfernen und zurückgeben.

```javascript
let array = [1, 2, 3, 4, 5];
const removedElement = array.pop();

console.log(array); // 1, 2, 3, 4]
console.log(removedElement); // 5
```

#### shift()
Im Gegensatz zu `pop()` verwendet man `shift()` um das erste Element aus dem Array entfernen und zurückgeben zu können.

```javascript
let array = [1, 2, 3, 4, 5]
const removedElement = array.shift()

console.log(array) // [2, 3, 4, 5]
console.log(removedElement) // 1
```

#### unshift()
Die Methode `unshift()`ist das Gegenstück zu der Methode `shift()`, mit der Sie ein oder mehrere Elemente am Anfang des Arrays hinzufügen können. 

Auch `unshift()` gibt die neue Länge des Arrays zurückgibt.

```javascript
let array = [1, 2, 3]
let newLength = array.unshift(4, 5)

console.log(array); // [4, 5, 1, 2, 3]
console.log(newLength); // 5
```

#### slice()
Die Methode `slice()` entfernt Elemente aus einem Array und fügt neue Elemente an ihrer Stelle ein. Die `splice()` Methode nimmt drei Parameter an: den Index, an dem man beginnen möchten, die Anzahl der Elemente, die man entfernen möchten, und die neuen Elemente, die man einfügen möchten.

```javascript
let array = [1, 2, 3, 4, 5]
array.splice(1, 1, 'new element 1', 'new element 2')

console.log(array) // [1, 'new element 1', 'new element 2', 3, 4, 5]
```

#### splice()
Die `splice()` Methode wird angewendet, um Elemente im Array hinzuzufügen oder zu entfernen. `splice()` ändert das ursprüngliche Array und gibt das gelöschte Element oder die gelöschten Elemente zurück.

Beispiel für Elemente löschen:
```javascript
let array = [1, 2, 3, 4, 5]
const removedElements = array.splice(2, 2)

console.log(array) // [1, 2, 5]
console.log(removedElements) // [3, 4]
```

Beispiel für Elemente hinzufügen:
```javascript
let array = [1, 2, 3, 4, 5];
array.splice(2, 0, 6, 7);

console.log(array); // [1, 2, 6, 7, 3, 4, 5]
```
#### concat()
Die `concat()` Methode gibt ein neues Array zurück, das aus der Verkettung (Zusammenführung) von zwei oder mehr Arrays besteht. Man kann somit mehrere Arrays zusammenmergen.

```javascript
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
let newArray = array1.concat(array2)

console.log(newArray) // [1, 2, 3, 4, 5, 6]
```

Mehrere Arrays werden wie folgt miteinander verkettet:
```javascript
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const array3 = [7, 8, 9]
let newArray = array1.concat(array2, array3)
console.log(newArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### indexOf()
Die Methode `indexOf()`, die verwendet wird, um den Index eines bestimmten Elements in einem Array zu finden. Wenn das Element im Array nicht gefunden wird, gibt die Methode den Wert -1 zurück.

Beispiel:
```javascript
const fruits = ['apple', 'banana', 'orange', 'pear']
const index = fruits.indexOf('banana')

console.log(index) // 1
```

Beispiel wenn Element nicht gefunden wird:
```javascript
const fruits = ['apple', 'banana', 'orange', 'pear']
const index = fruits.indexOf('grape')

console.log(index) // -1 
```

Man kann der Methode auch einen optionalen Parameter hinzufügen, der angibt, ab welchem Index die Suche beginnen soll. Wenn dieser Parameter nicht angegeben wird, wird die Suche ab Index 0 gestartet.
```javascript
const fruits = ['apple', 'banana', 'orange', 'pear']
const index = fruits.indexOf('pear', 1)

console.log(index) // 3 
```

#### map()
Die `map()` Methode verwendet man, um eine neue Array-Instanz zu erstellen, indem jeder Wert des ursprünglichen Arrays durch eine bestimmte Funktion transformiert wird. Dabei wird eine neue Array-Instanz erstellt, die die transformierten Werte enthält.

```javascript
const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map(function(num) {
  return num * num
});

console.log(squares) // [1, 4, 9, 16, 25]
```

Es ist auch möglich, eine Arrow-Funktion zu verwenden, um die Transformation durchzuführen:
```javascript
const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map(num => num * num)

console.log(squares) // [1, 4, 9, 16, 25]
```

#### filter()
Die Methode `filter()` wird angewendet, um eine neue Array-Instanz zu erstellen, die nur die Elemente des ursprünglichen Arrays enthält, die bestimmte Kriterien erfüllen (Filtern). Die Methode ist sehr nützlich, da sie eine elegante Möglichkeit bietet, Arrays zu filtern, ohne dass man einen Loop schreiben muss.
```javascript
const numbers = [1, 2, 3, 4, 5]
const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0
});

console.log(evenNumbers) // [2, 4]
```

Auch hier ist es möglich, eine Arrow-Funktion zu verwenden, um das Filtern durchzuführen:
```javascript
const numbers = [1, 2, 3, 4, 5]
const evenNumbers = numbers.filter(num => num % 2 === 0)

console.log(evenNumbers) // [2, 4] 
```

#### sort()
Die Methode `sort()` wird angewendet, um die Elemente in einem Array zu sortieren. Die Standard-Sortierreihenfolge ist alphanumerisch, was bedeutet, dass die Elemente nach ihrem Unicode-Codepunkt sortiert werden.

```javascript
const fruits = ['Banana', 'Mango', 'Apple', 'Orange']
const sortedFruits = fruits.sort()

console.log(sortedFruits) // ["Apple", "Banana", "Mango", "Orange"]
```

`sort()` kann auch mit einer Vergleichsfunktion verwendet werden, um die Elemente auf andere Weise zu sortieren. Die Vergleichsfunktion sollte zwei Argumente haben und einen negativen Wert zurückgeben, wenn das erste Argument vor dem zweiten Argument in der Sortierreihenfolge stehen soll, einen positiven Wert, wenn das erste Argument nach dem zweiten Argument stehen soll, und Null, wenn sie gleich sind.
```javascript
const numbers = [10, 5, 20, 3]
numbers.sort((a, b) => a - b)

console.log(numbers) // [3, 5, 10, 20]
```

#### includes()
Die `includes()` Methode wird verwendet, um zu prüfen, ob ein bestimmtes Element in einem Array vorhanden ist oder nicht. Die Funktion gibt "true" zurück, wenn das Element gefunden wird, andernfalls gibt sie "false" zurück.

```javascript
const fruits = ['Banana', 'Mango', 'Apple', 'Orange']
const isAppleInFruits = fruits.includes('Apple')

console.log(isAppleInFruits) // true
```

`includes()` kann auch mit einem optionalen zweiten Parameter verwendet werden, der den Index angibt, ab dem die Suche beginnen soll. Wenn dieser Parameter nicht angegeben wird, beginnt die Suche am Anfang des Arrays.
```javascript
const fruits = ['Banana', 'Mango', 'Apple', 'Orange']
const isAppleInFruits = fruits.includes('Banana', 2)

console.log(isAppleInFruits) // false
```

#### some()
Die Methode `some()` prüft, ob zumindest ein Element in einem Array den angegebenen Test bestehen würde. Die Funktion gibt "true" zurück, wenn mindestens ein Element den Test besteht, andernfalls gibt sie "false" zurück.

```javascript
const fruits = ['Banana', 'Mango', 'Apple', 'Orange']
const isAppleInFruits = fruits.some(fruit => fruit === 'Apple')

console.log(isAppleInFruits) // true
```

#### find()
Die `find()` Methode wird verwendet, um das erste Element in einem Array zu finden, das den angegebenen Test bestehen würde. Die Funktion gibt das gefundene Element zurück, falls eines gefunden wird, andernfalls gibt sie "undefined" zurück.

```javascript
const fruits = ['Banana', 'Mango', 'Apple', 'Orange']
const apple = fruits.find(fruit => fruit === 'Apple')

console.log(apple) // 'Apple'
```

#### reduce()
Die `reduce()` Methode, wird angewendet, um das Array auf einen einzigen Wert zu reduzieren. Dabei wird der erste Wert (Accumulator) genommen und mit dem zweiten kombiniert. Das Ergebnis davon ist der neue Accumulator und mit dem nächsten Wert (Wert des dritten Elements) im Array kombiniert. Dies solange bis man durch das gesamte Array durch ist.

Beispiel mit nur Reduktionsfunktion:
```javascript
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
});

console.log(sum) // 15
```

Beispiel mit optionalem Anfangswert:
```javascript
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
}, 5);

console.log(sum) // 20
```

Es ist auch bei dieser Methode möglich, eine Arrow-Funktion zu verwenden, um die Reduktion durchzuführen:
```javascript
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(sum) // 15 
```