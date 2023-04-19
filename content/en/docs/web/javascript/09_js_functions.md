---
title: "Functions"
type: docs
linkTitle: "Functions"
weight: 9
date: 2023-03-28
description: >
    Modul #F4 - JavaScript - Verschiedene Arten von Funktionen.
---

## Ziele
* Du weisst, wie eine Funktions-Definition aussieht sowie deren Aufruf.
* Du weisst, was Default-Parameter sind und wie man sie verwendet.
* Du weisst, was Arrow-Functions sind und wie mit dieser Schreibweise Funktionen geschrieben werden.
* Du kennst den Unterschied von Funktionen und Funktions Expressions.
* Du weisst, was Globaler-Scope und Block-Scope bedeutet.


### Funktions-Definition und Aufruf
Eine Funktions-Definition in JavaScript ist eine Möglichkeit, einen Code-Block zu erstellen und diesen zu benennen, der eine bestimmte Aufgabe ausführt.

```javascript
function sum(number1, number2) {
    return number1 + number2;
}
```

Um die Funktion aufzurufen, können wir den Funktionsnamen gefolgt von Runden klammern verwenden und die Argumente innerhalb dieser übergeben:
```javascript
let total = sum(3, 5);
console.log(total); // 8
```

Man kann auch Funktionen ohne Argumente aufrufen, indem man einfach die Klammern leer lässt:
```javascript
function sayHello() {
    console.log('Hello!');
}

sayHello(); // 'Hello!'
```

### Arrow Functions
Arrow-Funktionen sind eine kompakte und prägnante Möglichkeit, Funktionen in JavaScript zu definieren. Im Gegensatz zu herkömmlichen Funktionsdefinitionen haben Arrow-Funktionen einen kürzeren und einfacheren Syntax. Dies ist besonders nützlich, um den Code zu vereinfachen und die Lesbarkeit zu erhöhen. Arrow-Funktionen haben auch eine andere `this`-Binding-Regel im Vergleich zu herkömmlichen Funktionen. In Arrow-Funktionen wird `this` an das `this`-Objekt des äußeren Kontexts gebunden, während bei herkömmlichen Funktionen `this` an das Objekt des Aufrufers gebunden wird.

Im Gegensatz zu herkömmlichen Funktionsdefinition wird der Funktionsname weggelassen und durch einen Pfeil (`=>`) ersetzt.

```javascript
const sum = (number1, number2) => {
     return number1 + number2;
}

let total = sum(3, 5);
console.log(total); // 8
```

Wenn die Funktion nur einen Ausdruck hat, kann sie noch kürzer geschrieben werden, indem die geschweiften Klammern und das return-Schlüsselwort weggelassen werden. Diese Syntax nennt man auch "implizite Rückgabe".
```javascript
const sum = (number1, number2) => number1 + number2;
```

### Function Expressions
Eine Funktionsexpression ist ein anderer Ansatz, um eine Funktion in JavaScript zu definieren. Im Gegensatz zur Funktionsdeklaration wird bei der Funktionsexpression eine Funktion in einer Variablen gespeichert.

Eine der Hauptunterschiede zwischen einer Funktionsdeklaration und einer Funktionsexpression besteht darin, dass bei einer Funktionsdeklaration die Funktion automatisch vom JavaScript-Interpreter gehostet wird, während bei einer Funktionsexpression die Funktion als Ausdruck behandelt wird und erst ausgeführt wird, wenn die Code-Zeile erreicht wird, die die Funktion aufruft.

Funktionsexpressionen werden oft als Funktionen höherer Ordnung verwendet, um Funktionen als Argumente an andere Funktionen zu übergeben oder um Funktionen als Rückgabewerte von anderen Funktionen zurückzugeben.

In der Praxis werden Funktionsexpressionen oft mit Arrow-Funktionen kombiniert, um den Code zu verkürzen und zu vereinfachen.

```javascript
const sum = function(number1, number2) {
     return number1 + number2;
}

let total = sum(3, 5);
console.log(total); // 8
```