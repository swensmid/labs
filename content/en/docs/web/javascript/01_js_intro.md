---
title: "JavaScript: Einführung"
type: docs
linkTitle: "Intro"
weight: 1
date: 2022-04-19
description: >
  Modul #F4 - JavaScript - Code im Browser auführen
---

Jetzt wird es Zeit, dass du auch Programm-Logik auf deiner Website einbauen kannst. Dafür lernst du gleich die Programmiersprache JavaScript kennen, die von praktisch allen bekannten Browsern unterstützt wird.

Damit du eine Übersicht über die Programmiersprache bekommst, kannst du z.B. [dieses Video](https://www.youtube.com/watch?v=DHjqpvDnNGE) schauen, ohne dass du den ersten Satz verstehen musst.

## Motivation für JavaScript
JavaScript hat sehr viele Verwendungen im Browser. Einerseits können Funktionen ähnlich wie mit Java programmiert werden, sodass z.B. Berechnungen ausgeführt werden können. Zudem kann aber auch direkt mit dem angezeigten Inhalt interagiert werden. So können Validierungen oder auch Animationen ausgeführt werden. Wenn du mal sehen willst, wie eine Website aussieht ohne JS kannst du dir [hier](https://chrome.google.com/webstore/detail/disable-javascript/jfpdlihdedhlmhlbgooailmfhahieoem?hl=en) eine Chrome extension herunterladen mit welcher du JS komplett ausschalten kannst.

Nun beginnen wir aber zuerst klein: Mit einem Button, der beim Klick eine MessageBox anzeigt.

```html
<button onclick="onClickMeClick()" type="button">Klick mich</button>

<script>
    function onClickMeClick() {
        alert('Klick mich nicht an!!');
    }
</script>
```

Versuche zuerst, dieses Beispiel ohne Erläuterung zu verstehen.

<details>

<summary>Erläuterung (click to expand)</summary>
Zuerst hast du im HTML einen Button erstellt mit dem Text "Klick mich". 

Weiter unten siehts du ein `<script>`-Element. Dort drin ist eine Funktion namens `onClickMeClick()` definiert. Die Funktion ruft `alert(message: string)` auf. Diese `alert`-Funktion öffnet eine MessageBox mit der übergebenen Nachricht.

Wie du siehst, wird die selbst definierte Funktion beim Klick auf den Button aufgerufen. Dies passiert, weil du diesen Aufruf im `onclick`-Attribut des `<button>`s definiert hast. Beachte in diesem Beispiel, dass nicht die Funktion sondern deren Aufruf drin steht. Im Prinzip wird beim Button-Klick der Wert des `onclick`-Attributs ausgeführt. Theoretisch könntest du auch direkt `onclick="alert('Klick mich nicht an!!')"` schreiben.
</details>

## JavaScript ist Prototyp-basierende Programmiersprache
JavaScript ist eine prototype-basierte Programmiersprache, was bedeutet, dass die Vererbung und die Erstellung von Objekten auf Prototypen basieren.

Ein Prototyp ist ein vordefiniertes Objekt, das als Vorlage für die Erstellung neuer Objekte dient. Wenn ein neues Objekt erstellt wird, erbt es automatisch Eigenschaften und Methoden von seinem Prototypen.

```javascript
// create Object-Prototyp
var personProto = {
  name: '',
  age: 0,

  speak: function() {
    console.log('Hello World!');
  }
}

// create new object based on prototyp
let person1 = Object.create(personProto)
person1.name = 'John'
person1.age = 30

// Erstellen eines weiteren Objekts basierend auf dem Prototypen
let person2 = Object.create(personProto)
person2.name = 'Jane'
person2.age = 25

console.log(person1) // { name: "John", age: 30 }
console.log(person2) // { name: "Jane", age: 25 }
person1.speak() //'Hello World!'
```

## JavaScript besitzt keine Typisierung
JavaScript ist eine dynamisch typisierte Sprache, was bedeutet, dass die Typen der Variablen und Ausdrücke erst zur Laufzeit und nicht zur Kompilierungszeit festgelegt werden. Im Gegensatz dazu haben andere Sprachen wie Java, C++ und Python eine statische Typisierung, bei der der Typ einer Variablen oder eines Ausdrucks zur Kompilierungszeit festgelegt wird.

In JS können Variablen während der Laufzeit ohne Einschränkungen ihren Typ ändern. Beispielsweise kann eine Variable zunächst als String initialisiert werden und später im Code auf einen numerischen Wert aktualisiert werden. Dies liegt daran, dass JS die Datentypen von Variablen dynamisch zuweist und ihnen erlaubt, sich während der Laufzeit zu ändern.

Obwohl diese Flexibilität ein Vorteil von JS ist, kann sie auch zu unerwarteten Verhaltensweisen führen, wenn der Entwickler nicht aufpasst. In der Tat kann die mangelnde Typsicherheit in JS ein Nachteil sein, da sie dazu führen kann, dass sich Fehler erst zur Laufzeit manifestieren, anstatt dass sie bereits beim Kompilieren erkannt werden.

Allerdings gibt es in modernen Versionen von JS (z.B. ab ES6) die Möglichkeit, Optionale Typisierung durch das Verwenden von Typ-Annotationen oder TypeScript zu implementieren, welche eine statische Typisierung einführen. Dies kann helfen, die Lesbarkeit und die Sicherheit von Code zu erhöhen.

## JavaScript einbinden

Wie du im oberen Beispiel gesehen hast, wird Javascript via `<script>`-Tag eingebunden. Dein Code kann direkt im `<script>`-Tag geschrieben werden:

```html
<script>
  console.log('my Js Code');
</script>
```

Du kannst aber dein Code auch in einem separatem .js File haben und via Script Tag referenzieren:

**index.html**
```html
<script src="mycode.js"></script>

```
**mycode.js**
```js
console.log('my Js Code');
```

Die zweite Variante ist meist sauberer, da Code und HTML sauber aufgeteilt wird. Bei unseren Übungen wirst du aber meist direkt im `<script>`-Tag arbeite können ohne separates JS File.