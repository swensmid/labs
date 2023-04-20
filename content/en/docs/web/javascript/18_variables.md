---
title: "ES6: Variablen deklarieren"
type: docs
linkTitle: "ES6: Variablen deklarieren"
weight: 18
date: 2023-01-09
description: >
  Modul #F4 - JavaScript - Seit ES2015 (ES6) gibt es in JavaScript weitere neue Möglichkeiten, wie Variablen definiert werden können. Hier schauen wir uns einige davon an.
---

## Ziele
* Du weisst, wie du Variablen deklarierst.
* Du weisst, wann du eine Variable mit `var`, `let` oder `const` deklarierst.
* Du kannst das "Object Destructuring Assignment" anwenden


## Basics

In JavaScript deklarierst du Variablen mit dem `let`- oder `const`-Keyword - egal welcher Typ die Variable haben wird.

Das folgende Listing zeigt auf, wie du mit Variablen deklarieren und zuweisen ("assign") kannst:

```javascript
let a = "A";
const b = "B";
console.log(a);
>>> A

console.log(b)
>>> B

a = "AA"
console.log(a);
>>> AA

b = "BB"
>>> Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3
```

Wie du siehst, kannst du eine mit `let` deklarierte Variable verändern. Veränderst du eine `const`-Variable, wird ein Fehler geworfen.

> **Als Grundsatz gilt: Verwende immer `const`, ausser du willst später der Variable im gleichen Scope (nächster Abschnitt) einen anderen Wert zuweisen. Dann verwende `let`.**

Die Verwendung von `const` per Default hat die Vorteile, dass so Side-Effects vermieden werden können, welche auf Grund des Neu-Zuweisens von Variablen geschehen können.
Wenn du z.B. sehr viele Variablen in einer Funktion hast, müsstest du überprüfen, dass du zuerst sicherstellen, dass deine neue Variable keine bestehende Variable im gleichen Scope überschreibst. Verwendest du standardmässig `const`, wird dir ein Fehler geworfen, der dir dann direkt ins Auge sticht.

### Scope

#### Block-Scope

Variablen, die mit `const` oder `let` definiert wurden, sind in ihrem **Block**-Scope sichtbar und verwendbar.

Es ist sehr wichtig, dass du folgenden Code komplett verstehst und wieso es zum entsprechenden Resultat führt - und warum die Verwendung von `const` nicht zu einem Fehler führt:

```javascript
const a = "File";
console.log(1, a);

function myFunction(a="Argument") {
    console.log(2, a);
    if (true) {
        const a = "if";
        console.log(3, a);
    }
    console.log(4, a);
}

myFunction();

console.log(5, a);
```

Dies produziert folgenden Output:
```
1 File
2 Argument
3 if      
4 Argument
5 File  
```

#### Global Scope und Function Scope
Vor ES6 kannte JavaScript keinen Block-Scope, sondern nur einen globalen Scope und einen Function Scope.

Um das zu verstehen, lasse diesen Code einmal laufen:

```javascript
var a = 10;
console.log(a);


function myFunction(a = 20) {
    console.log(a);

    if (true) {
        var a = 21;
        console.log(a);
        
        for (var a = 30; a < 33; a++){
            console.log(a);
            for (var a = 40; a < 44; a++) {
                console.log(a);
            }
        }
        console.log(a);
    }
    console.log(a);
}

myFunction();

console.log(a);
var a = 11;
console.log(a);
```

Du solltest dann folgende Zahlen im Output erhalten:

```javascript
10, 20, 21, 30, 40, 41, 42, 43, 45, 45, 10, 11
```

Wie du siehst, haben alle Variablen, die innerhalb einer Funktion mit `var` deklariert werden, den gleichen Scope:
Das bedeutet, dass du z.B. eine `var`-Variable, die du ganz oben in der Funktion definierst, veränderst, wenn du eine gleichnamige später in einer `for`-Schleife mit `var` definierst.

Einen solchen Function Scope haben nur Variablen, die mit `var` definiert wurden. Variablen, die mit `let` oder `const` definiert wurden, haben einen Block-Scope und sind daher innerhalb ihres Blocks (`for`/`while`-Schlaufe, `if`/`else`-Block, Funktion, Datei) definiert und sichtbar.
In `Java` gilt der Block Scope immer.

![asset](/images/hint.png) Hierzu findest du eine [Aufgabe im Lab (Aufgabe 4)](../../../../labs/web/html_css/03_javascript#aufgabe-4---global-scope-function-scope-und-block-scope).


#### Wann `var` verwenden?
Folgender Grundsatz gilt: 

> __Verwende nie `var`, ausser du musst sicherstellen, dass der Code in Browser funktioniert, welche vor 2015 aktualisiert worden sind.__

Wenn du wissen willst, wieso `var` nicht mehr verwendet werden sollte, dann kannst du dein Wissen hier vertiefen: https://medium.com/@codingsam/awesome-javascript-no-more-var-working-title-999428999994.

### typeof Operator
`typeof` ist ein Operator, der den Datentyp eines Ausdrucks oder einer Variablen zurückgibt. Er kann verwendet werden, um zu überprüfen, ob eine Variable einen primitiven Datentyp (inkl. string) hat, bevor eine Operation durchgeführt wird, die nur für diesen Datentyp geeignet ist.

`typeof` gibt einen String zurück, der den Datentyp des Operanden darstellt. Die möglichen Rückgabewerte sind:
* `undefined` für undefined-Werte
* `boolean` für boolesche Werte
* `number` für Zahlen
* `string` für Zeichenketten
* `object` für Objekte (einschließlich Arrays und null-Werten)
* `function` für Funktionen

```javascript
typeof 42           // 'number'
typeof 'hello'      // 'string'
typeof true         // 'boolean'
typeof undefined    // 'undefined'
typeof null         // 'object'
typeof []           // 'object'
typeof {}           // 'object'
typeof function(){} // 'function'
```

Es ist wichtig zu beachten, dass typeof nicht immer genau den Datentyp zurückgibt, den man erwartet. Insbesondere gibt typeof null "object" zurück, obwohl null eigentlich kein Objekt ist. Es ist daher oft besser, zusätzlich zu typeof andere Überprüfungen durchzuführen, um sicherzustellen, dass eine Variable den erwarteten Datentyp hat.

### instanceof Operator
Auch der `instanceof` Operator wird verwendet, um festzustellen, ob ein Objekt von einem bestimmten Typ ist. Er gibt ein boolesches Ergebnis zurück, das angibt, ob das übergebene Objekt eine Instanz des angegebenen Typs ist.

Zu beachten ist das `instanceof` bei primitive Datentypen nicht geeignet, da sie keine Objekte sind, ist um festzustellen, ob die Variable von diesem Datentyp ist, dazu würde sich `typeof` besser eignen. 
```javascript
const numberVar = 1
const stringVar = 'abc'
const arrayVar = [1,2,3]
const objectVar = {name: 'Max', age: 20}

console.log(numberVar instanceof Number) // false
console.log(stringVar instanceof String) // false
console.log(arrayVar instanceof Array) // true
console.log(objectVar instanceof Object) // true
```

Man kann jedoch `instanceof` und `typeof` kombinieren um sicherstellen, dass die Variable sowohl den erwarteten Datentyp als auch den Wertebereich entspricht.
```javascript
const numberVar = 1
const stringVar = 'abc'
const arrayVar = [1,2,3]
const objectVar = {name: 'Max', age: 20}

console.log(numberVar instanceof Number || typeof numberVar === 'number') // true
console.log(stringVar instanceof String || typeof stringVar === 'string') // true
console.log(arrayVar instanceof Array) // true
console.log(objectVar instanceof Object) // true
```

### typeof vs. instanceof
`typeof` ist besser geeignet, um primitive Datentypen wie Strings, Numbers und Booleans zu überprüfen.

`instanceof` ist hingegen besser geeignet, um den Datentyp von Objekten zu überprüfen, einschließlich Arrays, Funktionen und benutzerdefinierten Objekten. Oder auch zum Prüfen ein Objekt von einer bestimmten Klasse erstellt wurde.

### Destructuring Assignment
In JavaScript siehst du sehr oft, dass mehrere Variablen auf einmal definiert werden.

Wie in anderen Programmiersprachen kannst du Variablen in einem einzigen Statement definieren (das ist kein Destructuring Assignment):

```javascript
const a = "A", b = "B";
```

Nun kommt es oft vor, dass du in einem einzigen Methodenaufruf mehrere Werte zurückbekommst - in Form eines Arrays/Liste oder in Form eines Objekts. Oft willst du dann die einzelnen Werte in eigene Variablen speichern. Wie du das machen kannst, wird in den nächsten zwei Unterkapitel behandelt:

#### Destructuring Arrays
Bekommst du ein Array und willst du z.B. den ersten und zweiten Wert aus einem Array je einer Variablen zuweisen, dann würdest du das normalerweise tun:

```javascript
const array = ['A', 'B'];
const a = array[0], b = array[1];
```

Diese Schreibweise kannst du mit folgender Syntax vereinfachen:
```javascript
const [a, b] = ['A', 'B'];
```

Ist z.B. das erste Element ein Index/Key/Zeilen- bzw. Spaltenname/... und der Rest das eigentliche Array, dann hilft dir vielleicht diese Schreibweise:

```javascript
const [name, ...values] = ["ColumnName", 1, 2, 3, 4];
```

Hier hat `name` den Wert "ColumnName" und `values` ist das Array `[1, 2, 3, 4]`.

#### Object Destructuring

Diese Schreibweise ist dir sicher schon einmal aufgefallen:

```javascript
const {a, b} = anotherObject;
```

Das ist auch ein ganz einfaches Prinzip. Wenn du nachfolgenden Code verstanden hast, dann weisst du alles, was du zu diesem Thema wissen musst:

```javascript
const object = {a: "A", b: "B", c: "C", d: "D"};

const {a: one, d, b} = object;

console.log(one, b, d);
>>> A B D
```

In diesem Beispiel haben wir den Wert für `a` in die Variable `one` kopiert.

Wie du siehst, spielt hier die Reihenfolge der Variablen __keine__ Rolle.

{{% details title="Schritt-für-Schritt-Erklärung zum Beispiel" %}}

Die ersten zwei Anweisungen könnten auch in einer zusammengefasst werden:

```javascript
const {a: one, d, b} = {a: "A", b: "B", c: "C", d: "D"};
```

Ignorieren wir zuerst die Variable `a` bzw. `one`.

* Auf der linken Seite deklarieren wir die Variablen `d` und `b`.
* Die Felder `d` und `b` aus dem Objekt auf der rechten Seite werden in die Variablen `d` und `b` auf der linken Seite kopiert.
    * Die Variablen auf der linken Seite müssen nicht zwingend in der gleichen Reihenfolge stehen wie auf der rechten Seite.
    * Sie müssen lediglich gleich heissen.
* Auf der linken Seite sieht `a: one` vielleicht noch verwirrend aus, vor allem wenn du bereits _TypeScript_ kennst.
    * Diese bedeutet nur, dass du die Variable `a` von der **rechten** Seite in eine Variable **mit einem anderen Namen** `one` kopierst.
    * Folglich hast du eine Variable `one` deklariert und zugewiesen.
    * Eine Variable `a` hast du hier **NICHT** deklariert.
* Anschliessend gibts du die Werte von `one`, `b` und `d` aus mit `console.log(one, b, d);`.
    * Hätten wir versucht, eine Variable `a` auszugeben, hätte das einen Fehler verursacht, weil keine solche Variable definiert wurde.
    * Das Gleiche mit `c`.



{{% /details %}}