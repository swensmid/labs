---
title: "Objekte"
type: docs
linkTitle: "Objekte"
weight: 11
date: 2023-04-04
description: >
    Modul #F4 - JavaScript - Objekte in JavaScript sind sehr wichtig und werden daher nun erklärt.
---

## Ziele
* Du weisst, wie man Objekte auf die verschiedenen Arten erstellt.
* Du weisst, wie du mit den unterschiedlichen Arten die Values eines Objektes getten kannst.
* Du weisst, wie man Objekte updaten und neue Eigenschaften hinzufügen kann.
* Du kennst, JSON und kannst solche codieren und decodieren.
* Du, weisst, wofür der Spread-Operator ist und wie man ihn anwenden kann.

## Objekte
Ein Objekt ist eine Sammlung von Eigenschaften, die eine Entität oder eine Variable repräsentieren können. Objekte können verschiedene Datentypen enthalten, einschließlich anderen Objekten, Arrays, Strings, Zahlen und booleschen Werten.
```javascript
const person = {
    name: 'Max', 
    age: 20,
    isStudent: true
}
```

### Objekt erstellen
Man kann Objekte auf zwei verschiedene Arten erstellen. Zum einen mit der Objektliteral-Syntax und zum anderen mit der Konstruktor-Syntax.

#### Objektliteral-Syntax

Die einfachere und auch gängigere Methode ist mit der Objektliteral-Syntax. Bei dieser Methode können Sie die Eigenschaften und Werte direkt innerhalb geschweifter Klammern angeben:
```javascript
const person = {
    name: 'Max',
    age: 20,
    isStudent: true
}
```

#### Konstruktor-Syntax.

Die andere Möglichkeit, ein neues Objekt zu erstellen, besteht darin, den Objekt-Konstruktor zu verwenden. Sie können den Konstruktor aufrufen und die Eigenschaften und Werte als Argumente übergeben:
```javascript
const person = new Object()
person.name = 'Max'
person.age = 20
person.isStudent = true
```

Man kann auch Methoden (Funktionen) innerhalb des Objekts hinzufügen, indem man sie als Eigenschaften definiert:
```javascript
const person = {
    name: 'Max',
    age: 20,
    isStudent: true,
    sayHello: function() {
        console.log('Hello, my name is ' + this.name)
    }
}
```

### Values von Objekten getten
Um die Eigenschaften eines Objekts abrufen gibt es drei verschiedene Arten. Mit der Punkt-Notation, der Klammern-Notation und der Verwendung von Variablen.

#### Punkt-Notation
```javascript
const person = {
    name: 'Max',
    age: 20,
    isStudent: true
}

console.log(person.name) // 'Max'
console.log(person.age) // 20
console.log(person.isStudent) // true
```

#### Klammern-Notation
```javascript
const person = {
    name: 'Max',
    age: 20,
    isStudent: true
}

console.log(person['name']) // 'Max'
console.log(person['age']) // 20
console.log(person['isStudent']) // true
```

#### Verwendung von Variablen
```javascript
let person = {
    name: 'Max',
    age: 20,
    isStudent: true
}

const propertyName = 'name'
const propertyAge = 'age'
const propertyIsStudent = 'isStudent'

console.log(person[propertyName]); // 'Max'
console.log(person[propertyAge]); // 'Max'
console.log(person[propertyIsStudent]); // 'Max'
```

Auch Methoden (Funktionen) innerhalb eines Objekts können über die Punkt-Notation oder Klammer-Notation aufrufen werden.

```javascript
let person = {
    name: 'Max',
    age: 20,
    isStudent: true,
    sayHello: function() {
        console.log('Hello, my name is ' + this.name)
    }
}

console.log(person.sayHello()) // 'Hello, my name is Max'
console.log(person['sayHello']()) // 'Hello, my name is Max'
```

### Objekte updaten
Objekte zu updaten kann man auch hier die Punkt-Notation oder Klammer-Notation verwenden. 
```javascript
let person = {
    name: 'Max',
    age: 20,
    isStudent: true,
    sayHello: function() {
        console.log('Hello, my name is ' + this.name)
    }
}

person.age = 30
console.log(person.age); // 30

person['age'] = 40
console.log(person.age); // 40

person.sayHello = function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
}
console.log(person.sayHello()) // 'Hello, my name is Max and I am 40 years old.'
```

### Hinzufügen neuer Eigenschaften
Um eine neue Eigenschaft zu einem Objekt hinzuzufügen, weisen Sie einfach einen Wert mit einem neuen Eigenschaftsnamen zu. Dazu kann man die die Punkt-Notation oder Klammer-Notation verwenden.
```javascript
let person = {
    name: 'Max',
    age: 20,
    isStudent: true,
    sayHello: function() {
        console.log('Hello, my name is ' + this.name)
    }
}

person.job = 'progarmmer'
console.log(person.job); // 'progarmmer

person['hobby'] = 'hockey'
console.log(person.hobby); // 'hockey

person.sayGoodbye = function() {
    console.log('Bye!');
}
console.log(person.sayGoodbye()) // 'Bye!'
```

### JSON
JSON (JavaScript Object Notation) ist ein Textformat zum Austausch von Daten. Es wird oft in der Webprogrammierung verwendet, um Daten zwischen einem Client und einem Server auszutauschen.

Objekte können mithilfe von JSON codiert und dekodiert werden. Ein JavaScript-Objekt ist im Wesentlichen eine Sammlung von Key-Value-Paaren. Ein JSON-Objekt ist eine Zeichenfolge, die diese Key-Value-Paare im JSON-Format enthält.

Es ist wichtig zu beachten, dass JSON nur bestimmte Datentypen unterstützt, darunter Zeichenfolgen, Zahlen, Booleans, null, Arrays und Objekte. Funktionen, Variablen oder undefinierte Werte können nicht in JSON codiert werden.

Um ein JavaScript-Objekt in JSON zu kodieren, kann die Methode `JSON.stringify() verwendet werden. Diese Methode nimmt das JavaScript-Objekt als Argument und gibt eine Zeichenfolge zurück, die das Objekt im JSON-Format darstellt.
```javascript
const person = {
    name: 'Max',
    age: 20,
    isStudent: true,
}

const jsonString = JSON.stringify(person)

console.log(jsonString) // '{"name":"Max","age":20,"isStudent":true}'
```

Um eine JSON-Zeichenfolge in ein JavaScript-Objekt zu dekodieren, kann die Methode `JSON.parse()` verwendet werden. Diese Methode nimmt die JSON-Zeichenfolge als Argument und gibt ein JavaScript-Objekt zurück, das den Inhalt der Zeichenfolge darstellt.
```javascript
const jsonString = '{"name":"Max","age":20,"isStudent":true}'

const person = JSON.parse(jsonString)

console.log(person.name) // 'Max'
console.log(person.age) // 20
console.log(person.isStudent) // true
```

### Spread Operator
Der Spread-Operator ist ein Operator in JavaScript, der es ermöglicht, ein Array oder einen Objekt-Literal-Ausdruck in eine Liste von Argumenten zu "entpacken". Der Operator wird durch drei Punkte (`...`) dargestellt.

Der Spread-Operator verwendet werden, um ein Array in eine Liste von Elementen zu "entpacken". Dadurch können Arrays einfach zusammengeführt oder kopiert werden.
```javascript
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const combinedArray = [...array1, ...array2]

console.log(combinedArray) // [1, 2, 3, 4, 5, 6]
```

Das Gleiche gilt auch für Objekte.
```javascript
const person = { name: 'Max', age: 20 }
const address = { city: 'New York', country: 'USA' }

const combinedObject = { ...person, ...address }

console.log(combinedObject) // { name: 'Max', age: 20, city: 'New York', country: 'USA' }
```

Der Operator kann auch zum Erstellen von Kopien von Arrays oder Objekten verwendet werden, anstatt sie zu ändern.
```javascript
const originalArray = [1, 2, 3]
const copiedArray = [...originalArray]

console.log(copiedArray) // [1, 2, 3]

copiedArray.push(4)

console.log(originalArray) // [1, 2, 3]
console.log(copiedArray) // [1, 2, 3, 4]
```

Er kann auch als Parameter in einem Funktionsaufruf verwendet werden. Dadurch können Argumente einer Funktion als einzelne Werte an die Funktion übergeben werden, anstatt als Array oder Objekt.

Wenn der Spread-Operator als Parameter verwendet wird, müssen die anderen Parameter vor ihm stehen, da er alle verbleibenden Argumente "entpackt".
```javascript
function sumNumbers(x, y, z) {
    return x + y + z
}

const numbers = [1, 2, 3]

const result = sumNumbers(...numbers)

console.log(result) // 6
```

Als Parameter ist besonders nützlich, wenn eine Funktion eine variable Anzahl von Argumenten akzeptieren soll.

Er kann auch in Kombination mit anderen Argumenten verwendet werden.
```javascript
function concatenateStrings(separator, ...strings) {
    return strings.join(separator)
}

const result = concatenateStrings('-', 'hello', 'world')

console.log(result) // 'hello-world'
```
