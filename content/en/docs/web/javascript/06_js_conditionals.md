---
title: "Conditionals"
type: docs
linkTitle: "Conditionals"
weight: 6
date: 2023-03-24
description: >
    Modul #F4 - JavaScript - Es gibt in JavaScript verschiedene Basic oder nützliche Conditionals. Diese schauen wir hier an.
---

## Ziele
* Du weisst, welche verschiedenen Conditionals es gibt.
* Du kennst, die Vorteile von einem Switch-Statement und weisst wie man es anwendet.
* Du weisst, den Unterschied zwischen Vergleiches und Logische Operatoren.
* Du weisst, was truthy und falsy Werte sind.
* Du kennst, die special Operators und kannst diesen anwenden.


### Conditionals
Conditional Statements oder auch Bedingungsanweisungen sind ein grundlegendes Konzept in JavaScript und anderen Programmiersprachen. Sie ermöglichen es dem Programm, verschiedene Aktionen basierend auf Bedingungen auszuführen. In JavaScript gibt es zwei Hauptarten von Conditionals: if/else-Statements und switch-Statements.


#### if/else-Statement
If-Statements überprüfen, ob eine Bedingung. Ist diese true, wird der darauf folgende Codeblock ausgeführt.
```javascript
const condition = true

if (condition) {
    // condition ist true
}
```

Wenn man nun jedoch einen anderen Codeblock ausführen möchte, falls die Bedingung false ist, kann man das else-Statement verwenden.
```javascript
const condition = false

if (condition) {
    // condition ist true
} else {
    // condition ist false
}
```

Man kann jedoch auch auf mehrere Bedingungen prüfen in dem if else-Statement vor dem else-Statement schreibt.
```javascript
const condition1 = false
const condition2 = true


if (condition1) {
    // condition1 ist true
} else if (condition2) {
    // condition2 ist true
} else {
    // keine der condition ist true
}
```

In einem If-Statement kann man komplexere Bedingungen schreiben. Wie das Prüfen, ob eine Variable einen bestimmten Wert hat.
```javascript
const variable = 1

if (variable == 1) {
    // condition ist true, da die variable den Wert 1 hat.
} else {
    // condition ist false
}
```
```javascript
const variable = "js"

if (variable == "js") {
    // condition ist true, da die variable den Wert "js" hat.
} else {
    // condition ist false
}
```

#### switch-Statement
switch-Statements in JavaScript ermöglichen es, verschiedene Codeblöcke basierend auf verschiedenen Bedingungen auszuführen. Das ist besser als mehrere else if zu verwenden. 

Ein switch-Statement besitzt auch immer ein default Case, in diesen Codeblock wir der Code festgehalten der ausgeführt werden soll, wenn keine der Bedingungen zutrifft. 

```javascript
const expression = "Auto"

switch (expression) {
    case "Bus":
        // Code, der ausgeführt wird, wenn Ausdruck gleich "Bus" ist
        break;
    case "Auto":
        // Code, der ausgeführt wird, wenn Ausdruck gleich "Auto" ist
        break;
    default:
        // Code, der ausgeführt wird, wenn keine der Bedingungen zutrifft
        break;
}
```

Die break in den Cases sind dazu da, das switch-Statement abzubrechen, wenn der Case zutraf und der Codeblock ausgeführt wurde.
```javascript
const expression = "Auto"

switch (expression) {
    case "Bus":
        // Code, der ausgeführt wird, wenn Ausdruck gleich "Bus" ist
        break;
    case "Auto":
        // Code, der ausgeführt wird, wenn Ausdruck gleich "Auto" ist
        // break; das break wurde nicht gesetzt oder auskomentiert
    default:
        // Code, der ausgeführt wird, wenn keine der Bedingungen zutrifft 
        // oder Auto zutrifft (da im case Auto das break fehlt.).
        break;
}
```

### Vergleiches und Logische Operatoren
#### Vergleichsoperatoren (comparison operators)
Vergleichsoperatoren werden verwendet, um den Wert zweier Variablen oder Ausdrücke miteinander zu vergleichen. Es gibt folgende:
* Gleichheit (`==`)
* Ungleichheit (`!=`)
* Strikte Gleichheit (`===`)
* Strikte Ungleichheit (`!==`)
* Grösser als (`>`)
* Kleiner als (`<`)
* Grösser-Gleich (`>=`)
* Kleiner-Gleich (`<=`)

```javascript
const a = 5
const b = 10
const c = "5"
const d = 10

// Gleichheit
console.log(a == b) // false
console.log(a == c) // true

// Ungleichheit
console.log(a != b) // true

//Strikte Gleichheit
console.log(a === b) // false
console.log(a === c) // false

// Strikte Ungleichheit
console.log(a !== b) // true

// Grösser als
console.log(a > b) // false

// Kleiner als
console.log(a < b) // true

// Grösser-Gleich
console.log(a >= b) // false
console.log(b >= d) // true

// Kleiner-Gleich
console.log(a <= b) // true
console.log(b <= d) // true
```

#### Unterschiede von Gleichheit und strikte Gleichheit
* Das doppelte Gleichheitszeichen `==` führt einen schwachen Vergleich durch. Das bedeutet, dass JavaScript bei der Verwendung des doppelten Gleichheitszeichens versucht, den Wert beider Operanden zu vergleichen, indem es sie in einen gemeinsamen Typ konvertiert. Wenn die Operanden unterschiedliche Datentypen haben, führt JavaScript implizite Typumwandlungen durch, um sie zu vergleichen.
* Das dreifache Gleichheitszeichen `===` führt einen starken Vergleich durch. Das bedeutet, dass JavaScript bei der Verwendung des dreifachen Gleichheitszeichens nicht nur den Wert der Operanden vergleicht, sondern auch ihren Datentyp berücksichtigt. Wenn die Operanden unterschiedliche Datentypen haben, gibt der dreifachen Gleichheitszeichen immer false zurück.

Hier sind einige Beispiele, die den Unterschied zwischen `==` und `=== veranschaulichen:
```javascript
console.log(5 == "5") // true
console.log(5 === "5") // false

console.log(true == 1) // true, weil Binär 0 für false ist und alles über 0 als true
console.log(true === 1) // false

console.log(null == undefined) // true
console.log(null === undefined) // false
```

#### Logische Operatoren (logical operators)
Logische Operatoren werden verwendet, um mehrere Bedingungen zu kombinieren und Ausdrücke zu evaluieren. Hier gibt es folgende:
* Bitwise AND (`&`)
* AND (`&&`)
* Bitwise OR (`|`)
* OR (`||`)
* NOT (`!`)

Bitwise AND:
Der bitweise AND-Operator vergleicht jedes Bit in den beiden Operanden und gibt für jede Bitposition im Ergebnis eine 1 zurück, wenn sowohl der linke als auch der rechte Operand an dieser Bitposition eine 1 haben. Wenn entweder der linke oder der rechte Operand eine 0 an dieser Bitposition hat, gibt der bitweise AND-Operator eine 0 zurück.

Beispiel:
```javascript
const a = 5        // 00000000000000000000000000000101
const b = 3        // 00000000000000000000000000000011

console.log(a & b) // 00000000000000000000000000000001
// Expected output: 1
```

AND (logisches AND):
Der Operator wird verwendet, um zu überprüfen, ob alle Operanden, auf die er angewendet wird, wahr sind. Wenn ja, gibt er den Wert "true" zurück, andernfalls gibt er "false" zurück. Der Operator wird häufig in Bedingungen verwendet, um zu überprüfen, ob mehrere Bedingungen erfüllt sind, bevor eine Aktion ausgeführt wird.

Beispiel:
```javascript
const a = 5
const b = 10

if (a > 0 && b == 15) {
    // Wenn beide Bedingungen true sind, wird der folgende Codeblock ausgeführt
    console.log("1")
} else if (a > 0 && b == 10) {
    // Wenn beide Bedingungen true sind, wird der folgende Codeblock ausgeführt
    console.log("2")
} else {
    // Wenn beide Bedingungen nicht true sind, wird der folgende Codeblock ausgeführt
    console.log("3")
}
// Expected output: "2"

```

Bitwise OR:
Der bitweise OR-Operator vergleicht jedes Bit in den beiden Operanden und gibt für jede Bitposition im Ergebnis eine 1 zurück, wenn entweder der linke oder der rechte Operand oder beide Operanden an dieser Bitposition eine 1 haben. Wenn sowohl der linke als auch der rechte Operand an dieser Bitposition eine 0 haben, gibt der bitweise OR-Operator eine 0 zurück.

Beispiel:
```javascript
const a = 5        // 00000000000000000000000000000101
const b = 3        // 00000000000000000000000000000011

console.log(a | b) // 00000000000000000000000000000111
// Expected output: 7
```

OR (logisches OR):
Der Operator wird verwendet, um zu überprüfen, ob mindestens einer der Operanden, auf die er angewendet wird, wahr ist. Wenn ja, gibt er den Wert "true" zurück, andernfalls gibt er "false" zurück. Der Operator wird häufig in Bedingungen verwendet, um alternative Bedingungen zu überprüfen und eine Aktion auszuführen, wenn mindestens eine der Bedingungen erfüllt ist.

Beispiel:
```javascript
const a = 5
const b = 10

if (a < 0 || b == 15) {
    // Wenn eine der Bedingungen true ist, wird der folgende Codeblock ausgeführt
    console.log("1")
} else if (a > 0 || b == 15) {
    // Wenn eine der Bedingungen true ist, wird der folgende Codeblock ausgeführt
    console.log("2")
} else {
    // Wenn beide Bedingungen nicht true sind, wird der folgende Codeblock ausgeführt
    console.log("3")
}
// Expected output: "2"
```

NOT (logisches NOT):
Der Operator wird verwendet, um einen booleschen Wert umzukehren, dh. aus "true" wird "false" und aus "false" wird "true". Wenn ein Operand true ist, gibt der Operator false zurück, und wenn der Operand false ist, gibt er true zurück. Der Operator wird häufig in Bedingungen verwendet, um die Aussage einer Bedingung umzukehren.

Beispiel:
```javascript
const a = 5
const b = 10

if (!(a > 0 && b == 10)) {
    console.log("1")
} else if (!(a > 0 && b == 15)) {
    console.log("2")
} else {
    console.log("3")
}
// Expected output: "2"
```

### truthy und falsy
In JavaScript gibt es Konzepte von truthy und falsy Werten. Truthy bezieht sich auf einen Wert, der im booleschen Kontext als wahr interpretiert wird, während falsy sich auf einen Wert bezieht, der als falsch interpretiert wird.

Es gibt sechs falsy Werte: 
* `false`
* `null`
* `undefined`
* `0`
* Not a Number `NaN`
* leeren String (`''`)

Alle anderen Werte sind truthy.

Beispiel:
```javascript
const conditionFalse = false 
const conditionNull = null
const conditionUndefined = undefined
const conditionZero = 0
const conditionNaN = NaN
const conditionEmptyString = ''
    
if (
    conditionFalse || 
    conditionNull || 
    conditionUndefined || 
    conditionZero || 
    conditionNaN || 
    conditionEmptyString
) {
    // Codeblock wird nicht ausgeführt
} else {
    // Codeblock wird ausgeführt
}
```

### Special Operators

#### doppeltes NOT (`!!`)
Der Operator wird verwendet, um einen Wert in einen booleschen Wert umzuwandeln. Die erste Negation kehrt den Wert um und die zweite Negation kehrt ihn wieder zurück, so dass der resultierende Wert immer ein boolescher Wert ist. Wenn der ursprüngliche Wert truthy, wird das Ergebnis true sein, andernfalls false. Der doppelte Negationsoperator wird häufig verwendet, um sicherzustellen, dass ein Wert wirklich einen booleschen Wert hat.


```javascript
console.log(0) // 0
console.log(!!0) // false

console.log(1) // 1
console.log(!!1) // true

console.log(-1) // -1
console.log(!!-1) // true

console.log(1/0) // Infinity
console.log(!!(1/0)) // true

console.log(parseInt('js')) // NaN
console.log(!!parseInt('js')) // false

console.log('') // ''
console.log(!!'') // false

console.log('js') // 'js'
console.log(!!'js') // true

console.log('false') // 'false'
console.log(!!'false') // true auch wenn es einen falsy value hat

console.log(person.name) // undefined
console.log(!!person.name) // false

console.log(undefined) // undefined
console.log(!!undefined) // false

console.log(null) // null
console.log(!!null) // false

console.log({}) // {}
console.log(!!{}) // true

console.log([]) // []
console.log(!![]) // true
```
#### Logische OR Assignment Operator (`||=`)
Der Operator `||=` prüft, ob die linke Seite des Operators falsy ist. Wenn die linke Seite falsy ist, wird der rechte Operand ausgewertet und der Wert diesem zugewiesen. Wenn die linke Seite truthy ist, wird der linke Wert beibehalten und kein weiterer Ausdruck ausgewertet.

Beispiel:
```javascript
let falsyVariable = ''
let truthyVariable = 'Welt!'

falsyVariable ||= 'Hallo'
truthyVariable ||= 'Mensch'

console.log(falsyVariable) // 'Hallo'
console.log(truthyVariable) // 'Welt'
```
#### Logische AND Assignment Operator (`&&=`)
Der Operator `&&=` prüft, ob die linke Seite des Operators truthy ist. Wenn die linke Seite truthy ist, wird der rechte Operand ausgewertet und der Wert diesem zugewiesen. Wenn die linke Seite falsy ist, wird der linke Wert beibehalten und kein weiterer Ausdruck ausgewertet.

Beispiel:
```javascript
let falsyVariable = ''
let truthyVariable = 'Welt!'

falsyVariable &&= 'Hallo'
truthyVariable &&= 'Mensch'

console.log(falsyVariable) // ''
console.log(truthyVariable) // 'Mensch'
```
#### nullish coalescing Assignment Operator (`??=`)
Der Operator `??=` prüft, ob die linke Seite des Operators `null` oder `undefined` ist. Wenn die linke Seite `null` oder `undefined` ist, wird der rechte Operand ausgewertet und der Wert diesem zugewiesen. Wenn die linke Seite einen anderen falsy Wert als `null` oder `undefined` hat, wird der linke Wert beibehalten und kein weiterer Ausdruck ausgewertet.

Beispiel:
```javascript
let nullVariable = null
let falsyVariable = ''

nullVariable ??= 'hello'
falsyVariable ??= 'world'

console.log(nullVariable) // 'hello'
console.log(falsyVariable) // ''
```
#### nullish coalescing Operator (`??`)
Der Operator `??` gibt den linken Ausdruck zurück, wenn er `null` oder `undefined` ergibt, andernfalls gibt er den rechten Ausdruck zurück. Im Gegensatz zum logischen OR-Operator (`||`) behandelt der Nullish Coalescing-Operator nur `null` und `undefined` als falsy Werte, und alle anderen Werte werden als truthy behandelt.

Beispiel:
```javascript
const nullCheck = null ?? 'left is null'
console.log(nullCheck) // 'left is null'

const zeroCheck = 0 ?? 42
console.log(zeroCheck) // 0 

const undefinedCheck = undefined ?? 'left is undefined'
console.log(undefinedCheck) // 'left is undefined'

const emptyStringCheck = '' ?? 'empty string'
console.log(emptyStringCheck) // '' weil eon leerer String zwar falsy aber nicht null oder undefined ist
```
### ternary Operator (`?:`)
Der Ternary Operator (`?:`) ist ein Operator, der die Verwendung von if/else-Statements reduziert und es ermöglicht, eine Bedingung in einer einzigen Anweisung auszudrücken.

Syntax:
```javascript
condition ? expression1 : expression2
```
Die Bedingung (condition) wird zuerst ausgewertet. Wenn diese `true` ist, wird expression1 ausgeführt, andernfalls wird expression2 ausgeführt.

Beispiel:
```javascript
const age = 18;
const canVote = age >= 18 ? 'yes' : 'no';
console.log(canVote); // 'yes'

const oddNumber = 5;
const result = oddNumber % 2 === 0 ? 'even' : 'odd';
console.log(result); // 'odd' 
```