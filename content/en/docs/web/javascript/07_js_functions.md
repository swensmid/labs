---
title: "Functions"
type: docs
linkTitle: "Functions"
weight: 7
date: 2023-03-28
description: >
    Modul #F4 - JavaScript - In JavaScript gibt es verschiedene Arten von Funktionen, welche nun hier angeschaut werden.
---

## Ziele
* Du weisst, wie eine Funktions-Definition aussieht und deren Aufruf. Du kannst diese verwenden.
* Du weisst, was Default-Parameter sind und wie man sie verwendet.
* Du weisst, wofür das arrow-functions sind und wie man diese anwendet.
* Du kennst, den Unterschied von Funktionen und Funktions Expressions.
* Du weisst, was Globaler-Scope und Block-Scope bedeutet.


### Funktions-Definition und Aufruf
Eine Funktions-Definition in JavaScript ist eine Möglichkeit, einen Code-Block zu erstellen und diesen zu benennen, der eine bestimmte Aufgabe ausführt.

```javascript
function sum(number1, number2) {
    return number1 + number2
}
```

Um die Funktion aufzurufen, können wir den Funktionsnamen gefolgt von Rundenklammern verwenden und die Argumente innerhalb der Rundenklammern übergeben:
```javascript
let total = sum(3, 5)
console.log(total) // 8
```

Man kann auch Funktionen ohne Argumente aufrufen, indem man einfach den Funktionsnamen gefolgt von Klammern verwendet:
```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello(); // 'Hello!'
```

### Default-Parameter
In JavaScript können Default-Parameter in Funktionen verwendet werden, um automatisch einen Standardwert für einen Funktionsparameter zu setzen, wenn kein Wert oder `undefined an diesen Parameter übergeben wird. Dies erleichtert die Handhabung von Funktionen mit variablen Argumenten und ermöglicht es Entwicklern, Funktionen mit weniger Code zu schreiben. Default-Parameter sind nützlich, um die Lesbarkeit von Code zu erhöhen, Fehler zu vermeiden und den Codeumfang zu reduzieren.

Der Default-Parameter von `number2` ist `10`, wenn also `number2` im Funktionsaufruf nicht explizit angegeben wird oder `undefined` ist, wird automatisch der Standardwert von `10` verwendet.
```javascript
function sum(number1, number2 = 10) {
    return number1 + number2
}

let total = sum(3, 5)
let totalWithDefault = sum(3)

console.log(total) // 8
console.log(totalWithDefault) // 13
```

### Arrow Functions
Arrow-Funktionen sind eine kompakte und prägnante Möglichkeit, Funktionen in JavaScript zu definieren. Im Gegensatz zu herkömmlichen Funktionsdefinitionen haben Arrow-Funktionen einen kürzeren und einfacheren Syntax. Dies ist besonders nützlich, um den Code zu vereinfachen und die Lesbarkeit zu erhöhen. Arrow-Funktionen haben auch eine andere `this`-Binding-Regel im Vergleich zu herkömmlichen Funktionen. In Arrow-Funktionen wird `this` an das `this`-Objekt des äußeren Kontexts gebunden, während bei herkömmlichen Funktionen this an das Objekt des Aufrufers gebunden wird.

Im Gegensatz zu herkömmlichen Funktionsdefinition wird der Funktionname weggelassen und durch einen Pfeil (`=>`) ersetzt.

```javascript
const sum = (number1, number2) => {
     return number1 + number2
}

let total = sum(3, 5)
console.log(total) // 8
```

Wenn die Funktion nur einen Ausdruck hat, kann sie noch kürzer geschrieben werden, indem die geschweiften Klammern und das return-Schlüsselwort weggelassen werden. Diese Syntax nennt man auch "implizite Rückgabe".
```javascript
const sum = (number1, number2) => number1 + number2
```

### Function Expressions
Eine Funktionsexpression ist ein anderer Ansatz, um eine Funktion in JavaScript zu definieren. Im Gegensatz zur Funktionsdeklaration wird bei der Funktionsexpression eine Funktion in einer Variablen gespeichert.

Eine der Hauptunterschiede zwischen einer Funktionsdeklaration und einer Funktionsexpression besteht darin, dass bei einer Funktionsdeklaration die Funktion automatisch vom JavaScript-Interpreter gehostet wird, während bei einer Funktionsexpression die Funktion als Ausdruck behandelt wird und erst ausgeführt wird, wenn die Code-Zeile erreicht wird, die die Funktion aufruft.

Funktionsexpressionen werden oft als Funktionen höherer Ordnung verwendet, um Funktionen als Argumente an andere Funktionen zu übergeben oder um Funktionen als Rückgabewerte von anderen Funktionen zurückzugeben.

In der Praxis werden Funktionsexpressionen oft mit Arrow-Funktionen kombiniert, um den Code zu verkürzen und zu vereinfachen.

```javascript
const sum = function(number1, number2) {
     return number1 + number2
}

let total = sum(3, 5)
console.log(total) // 8
```

### Globaler und Block-Scope
In JavaScript gibt es zwei Arten von Scopes, nämlich den globalen Scope und den Block-Scope. Der Scope definiert den Bereich, in dem eine Variable oder eine Funktion sichtbar ist und verwendet werden kann.

#### Globaler Scope:
Der globale Scope bezieht sich auf den Scope, der im gesamten Code verfügbar ist. Variablen und Funktionen, die außerhalb einer Funktion definiert werden, gehören zum globalen Scope. Diese Variablen und Funktionen können von überall im Code aufgerufen und verwendet werden.

In diesem Beispiel wird die Variable name und die Funktion `helloWorld` im globalen Scope definiert. Die Funktion hat Zugriff auf die Variable `world`, die ebenfalls im globalen Scope definiert ist.
```javascript
const world = "World"

function helloWorld() {
  console.log(`Hello ${world}!`)
}

helloWorld() // 'Hello World!'
```

#### Block-Scope:
Block-Scope ist der Scope, der innerhalb eines Block-Statements wie z.B. `if`, `for`oder `while` definiert ist. Variablen, die innerhalb eines Block-Statements mit `let` oder `const definiert werden, gehören zum Block-Scope und sind nur innerhalb des Block-Statements sichtbar.

Funktionen können auch in Block-Statements definiert werden, aber der Scope einer Funktion hängt nicht davon ab, wo sie definiert wird, sondern wo sie aufgerufen wird. Wenn eine Funktion innerhalb eines Block-Statements definiert wird, kann sie nur innerhalb des Blocks aufgerufen werden, aber ihre Variablen und Parameter gehören zum Funktions-Scope und sind nicht Teil des Block-Scope.

Im Beispiel wird die Variable `name im globalen Scope definiert und innerhalb des if-Statements mit dem gleichen Namen neu definiert. Innerhalb des if-Statements hat die Variable name den Wert "Anna" und wird nur innerhalb des Blocks sichtbar sein. Außerhalb des Blocks wird die Variable name ihren ursprünglichen Wert "Max" behalten.
```javascript
const name = "Max"
const isBlockScope = true

if (isBlockScope) {
    const name = "Anna"
    console.log(`Hallo ${name}!`) // 'Hallo Anna!'
}

console.log(`Hallo ${name}!`) // 'Hallo Max!'
```