---
title: "Einführung in TypeScript"
type: docs
weight: 2
date: 2022-02-16
description: >
    JavaScript mit Typen.
---

## Was ist TypeScript
Die Programmiersprache wurde von Microsoft entwickelt und wurde im Jahr 2012 mit der ersten Version veröffentlicht.
Seitdem wird die Programmiersprache kontinuierlich weiterentwickelt. Zahlreiche JavaScript-Frameworks setzen heute auf die Verwendung von TypeScript.
Dazu gehören zum Beispiel Angular 2+ und React.

TypeScript bildet eine Obermenge von JavaScript, erweitert also JavaScript um bestimmte Features.
Es handelt sich dabei also um ein sogenanntes Superset von JavaScript.

Da Quellcode geschrieben in TypeScript zu JavaScript transpiliert wird, ist der Code in jedem Browser lauffähig.


## Vorteile von TypeScript
- TypeScript hebt Fehler während der Kompilierung hervor, während JavaScript - zur Laufzeit.
- TypeScript unterstützt statische Typisierung.
- Ermöglicht bessere Code-Strukturierung und Objekt-Orientierte Programmiertechniken.
- TypeScript ist in jedem Browser oder JS Engine lauffähig.
- Hervorragendes "Tooling" mit IntelliSense, das beim Hinzufügen des Codes aktive Hinweise liefert.


## Grundlegende Syntax
Da es sich bei TypeScript um ein Superset von JavaScript handelt, ist JavaScript-Code auch gültiger TypeScript-Code. Jedoch fügt TypeScript darüber hinaus viele neue Funktionen hinzu.

Mit TypeScript wird JavaScript mehr wie eine stark typisierte, objektorientierte Sprache, die C# und Java ähnelt. Dies bedeutet, dass TypeScript-Code für grosse Projekte leichter zu verwenden ist und dass Code leichter zu verstehen und zu verwalten ist. Die starke Typisierung bedeutet auch, dass die Sprache vorkompiliert werden kann und dass Variablen keine Werte zugewiesen werden können, die ausserhalb ihres angegebenen Bereichs liegen. Wenn zum Beispiel eine TypeScript-Variable als Zahl deklariert ist, kann man dieser Variable keinen Textwert zuweisen.


## Typanmeldungen
Typdeklarationen können zu Variablen, Funktionsparametern und Funktionsrückgabetypen hinzugefügt werden.
Der Typ folgt jeweils nach einem Doppelpunkt hinter dem Variablennamen:
```typescript
    const num: number = 1;
```
Der Compiler überprüft dann die Typen während des Kompilierens und meldet allfällige Typfehler.

Die verschiedenen Grundtypen von TypeScript sind [hier](https://www.typescriptlang.org/docs/handbook/basic-types.html) ersichtlich.

### Type Any
Der Typ `any` ein spezieller Typ, der es ermöglicht, Variablen, Funktionen und andere Objekte ohne explizite Typisierung zu deklarieren. Wenn eine Variable oder ein Objekt mit `any` deklariert wird, bedeutet dies, dass der Typ nicht eingeschränkt ist und dass alle Arten von Werten diesem Typ zugewiesen werden können, ohne dass eine Typüberprüfung durchgeführt wird. Bedeutet das man so die gesamte Typisierung umgehen kann und dann wie bei JavaScript Typfehler erst während der Laufzeit sehen würde.

Beispiel mit `any`, welches zu Laufzeitfehler führt:
```typescript
function add(a: any, b: any) {
  return a + b;
}

const result = add("3", 5);
console.log(result);
```

## Der Objektorientierte Ansatz
Bei der objektorientierten Programmierung handelt es sich um einen Programmierstil / eine Denkweise.

Man kann sich das so vorstellen, dass alles in der objektorientierten Programmierung durch Objekte abgebildet wird.
Jedes "Teil" eines Programmes wird durch ein Objekt beschrieben.

Ein Beispiel:
> In einer Spielewelt gibt es einen frei herumlaufenden Hund. 
Dann wäre dieser Hund nichts anderes als ein Objekt.
    Nun könnte man sich fragen, wie man diesen Hund wahrnimmt, denn nicht jeder Hund ist gleich. 
    Sie könnten sich in Rasse, Gattung etc. unterscheiden. Ein Objekt kann also verschiedene Eigenschaften besitzen,
    diese werden auch Attribute genannt.

Nun kann sich unser Hund von Anderen unterscheiden, jedoch kann er noch nicht bellen. Deshalb haben
Objekte auch Funktionen (Methoden). In unserem Beispiel könnte der Hund z.B. über die Methode "bark()" verfügen,
welche ihm erlaubt zu bellen.

In unserem Beispiel handelt es sich bei dem Hund um eine Klasse. Klassen sind also wie Baupläne für Objekte.

Nun sagen wir, dass es in unserer Spielwelt auch Katzen gibt.
An dieser Stelle kommt dann die Vererbung ins Spiel.

Hunde sowie Katzen sind beides Tiere. In der Objektorientierten Programmierung würde man dazu also eine Klasse "Animal" erstellen.
Die beiden Klassen "Cat" und "Dog" würden dann die Klasse "Animal" erben. Dies Bedeutet, dass sie die Eigenschaften der Klasse "Animal" übernehmen
und durch ihre eigenen Eigenschaften erweitern. 

Da sich beide Tiere fortbewegen, könnte man also der Klasse "Animal" die Funktion "move()" geben, welche dann von den beiden anderen Klassen geerbt werden würde.
Dadurch hat man verhindert, dass sich die Funktion zum bewegen mehrmals im Quellcode befindet.

![Vererbung](../images/Vererbung.png "Vererbung")


## Klassen
Ein einfaches Beispiel einer Klasse:
```javascript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

In diesem Beispiel wird eine neue Klasse "Greeter" deklariert. Die Klasse enthält 3 Member:

- Das Property "greeting"
- Den Konstruktor
- Die Methode "greet"

Wenn wir in einer Klasse auf ein Member innerhalb der Klasse referenzieren, verwenden wir `this.`. 

Auf der letzten Zeile erstellen wir eine neue Instanz der Klasse `Greeter` mit `new`. 

### Vererbung
In TypeScript können wir allgemeine objektorientierte Muster verwenden. Eines der grundlegendsten Muster in der klassenbasierten Programmierung ist die Möglichkeit, vorhandene Klassen durch Vererbung zu erweitern, um neue Klassen zu erstellen.

```typescript
class Animal {
    move(distanceInMeters: number = 0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark(){
        console.log("Woof!");
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```
Dieses Beispiel zeigt die grundlegendste Vererbungsfunktion: Klassen erben Eigenschaften und Methoden von Basisklassen. `Dog` ist hier eine abgeleitete Klasse, die mit dem Schlüsselwort `extends` von der Basisklasse Animal abgeleitet wird. Abgeleitete Klassen werden häufig als Unterklassen bezeichnet, und Basisklassen als Superklassen.

Da `Dog` die Funktionalität von `Animal` erweitert, konnten wir eine Instanz von `Dog` erstellen, die sowohl `bark()` als auch `move()` ausführen konnte.

**Ein komplexeres Beispiel zur Vertiefung:**
```typescript
class Animal {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    move(distanceInMeters: number = 0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string){
        super(name);
    }
    move(distanceInMeters: number = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string){
        super(name);
    }
    move(distanceInMeters: number = 45){
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sammy = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tom the Palomino");

sammy.move();
tom.move(35);
```
In diesem Beispiel werden 2 neue Subklassen von `Animal` erstellt: `Horse` und `Snake`.

Ein Unterschied zum vorherigen Beispiel besteht darin, dass jede abgeleitete Klasse, die eine Konstruktorfunktion enthält, `super()` aufrufen muss, wodurch der Konstruktor der Basisklasse ausgeführt wird. Ausserdem müssen wir `super()` aufrufen, damit wir im Konstruktorkörper auf `name` mit `this` zugreifen können.

Konsolenausgabe des Beispiels:
```
Slithering...
Sammy the Python moved 5m.
Galloping...
Tom the Palomino moved 34m.
```

### Public
In den gezeigten Beispielen konnten wir frei auf die Eigenschaften und Methoden einer Klasse (Member) zugreifen, die wir deklariert hatten. Jedoch mussten wir dazu `public` nie verwenden. Dies liegt daran, dass in TypeScript jedes Member stantardmässig `public` ist. 

Ein Member können wir trotzdem als `public` markieren. Wir hätten die Klasse `Animal` aus dem vorherigen Abschnitt folgendermassen schreiben können:
```typescript
class Animal {
    public name: string;
    public constructor(theName: string){
        this.name = theName;
    }
    public move(distanceInMeters: number = 0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
```

### Private
Wenn ein Member einer Klasse als `private` markiert ist, kann von ausserhalb der Klasse nicht darauf zugegriffen werden.
```typescript
class Animal {
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
}
new Animal("Cat").name; // Error: 'name' is privae;
```

### Protected
Der Modifikator `protected` verhält sich ähnlich wie der Modifikator `private`, mit der Ausnahme, dass auf als `protected` deklarierte Member auch innerhalb von abgeleiteten Klassen zugegriffen werden kann. 

```typescript
class Person {
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
}
class Employee extends Person {
    private departement: string;
    constructor(name: string, departement: string){
        super(name);
        this.departement = departement;
    }
    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.departement}.`;
    }
}

let john = new Employee("Howard", "Sales");
console.log(john.getElevatorPitch());
console.log(john.name); // Error
```
`name` können wir ausserhalb von `Person` nicht verwenden, jedoch innerhalb einer Instanzmethode von `Employee`. Dies funktioniert, da `Employee` von `Person` abgeleitet ist.

### Readonly
Mit `readonly` können wir Eigenschaften schreibgeschützt machen. Schreibgeschützte Eigenschaften müssen bei ihrer Deklaration oder im Konstruktor initialisiert werden.
```typescript
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(name: string){
        this.name = name;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // Error: name is readonly
```

## Async / Await
Diese Themen wurden schon bei JavaScript angeschaut und können [hier](../../../docs/web/javascript) nachgelesen werden. Jedoch sind folgend ein paar Auffrischer:

### Arrow Functions
Die ES6-Version von TypeScript bietet eine arrow-function, die die Kurzform für die Definition der anonymen Funktion darstellt.
In anderen Sprachen auch bekannt als Lambda-Function.


Wieso werden Arrow-Functions benutzt?
- Man muss nicht ständig "function" schreiben
- Es erfasst die Bedeutung des Schlüsselworts "this"
- Es erfasst die Bedeutung von Argumenten


Eine Arrow Function können wir in 3 Teile aufteilen:

- Parameter
- Die arrow-notation `=>`
- Statements


Schauen wir uns ein Beispiel an:
```typescript
// ES5: Without arrow function
var getResult = function(unsername, points){
    return username + 'scored' + points + ' points!';
}

// ES6: With arrow function
var getResult = (unsername: string, points: number): string => {
    return `${username} scored ${points} points!'`;
}
```
Arrow-functions benötigen natürlich nicht unbedingt Parameter.
Ein Beispiel mit Parameter würde so aussehen:
```typescript
let sum = (a:number, b: number): number => {
    return a + b;
}
console.log(sum(20,30)); // returns 50
```
Ein Beispiel ohne Parameter:
```typescript
let Print = () => console.log("Hello TypeScript");
Print() // returns "Hello TypeScript"
```


### Async Requests
'Asynchronität' in der Computerwelt bedeutet, dass der Programmfluss unabhängig erfolgt. Es wird nicht darauf gewartet, dass eine Aufgabe erledigt wird, sondern der nächste Task wird ausgeführt.

Doch was passiert mit der Aufgabe, die noch nicht abgeschlossen ist? Stellt euch vor ein Mitarbeiter erledigt die noch nicht erledigten Aufgaben 
im Hintergrund und sendet die Daten zurück, sobald sie erledigt sind.

Nun ergibt sich die Frage, wie wir mit den zurückgegebenen Daten umgehen. Die Antwort lautet: Promises, Observables, Callbacks und weitere.
Bei einer asynchronen Anforderung wartet der Client nicht auf die Antwort. Nichts ist blockiert. Schauen wir uns dieses Konzept anhand eines häufigen Szenarios an.

In der Web-Welt wird häufig auf den Server zugegriffen, um Daten wie die Details eines Benutzers, eine Liste usw. abzurufen. Wir wissen, dass dieses Szenario einige Zeit dauern kann.
In diesem Fall werden die Daten nicht abgewartet, sondern asynchron verarbeitet (kein Warten), damit unsere Anwendung nicht blockiert wird. Solche Anfragen sind asynchrone Anfragen.

Schauen wir uns also an, wie wir mit diesen asynchronen Anforderungen umgehen können.

### Callbacks
Callback-Funktionen werden aufgerufen wenn die Anforderung abgeschlossen ist und die Daten oder einen Error zurückgegeben wird. Code zum besseren Verständnis:
```typescript
const request = require("request");
request("https://www.example.com", function(err, response, body){
    if(error){
        // Error handling
    }
    else{
        // Success
    }
});
```
In diesem Beispiel wird nun ein Request verarbeitet. Wie sieht es jedoch aus, falls wir nach dem erfolgreichen Erhalten von Daten nochmals einen Request durchführen wollen?
Bevor Promises in JavaScript integriert wurden, war dies ein mühseliges Problem. [Callback-hell Beispiel](https://hsto.org/getpro/habr/post_images/ad5/c3f/e3b/ad5c3fe3bf0f7a68a4d3444614c3133e.png).

### Promises
Im Wesentlichen ist ein `Promise` in JavaScript einem Versprechen im wirklichen Leben sehr ähnlich. Versprechen werden im wirklichen Leben entweder eingehalten oder gebrochen werden, in JavaScript werden `Promises` entweder aufgelöst oder abgelehnt.

Als Beispiel schauen wir, wie ein kleines Kind, das seinen Eltern verspricht, sein Zimmer zu reinigen, in JavaScript aussieht.
```typescript
let promiseToCleanTheRoom = new Promise((resolve, reject) => {
    let isClean = true
    if(isClean){
        resolve("Clean");
    }
    else{
        reject("not Clean");
    }
});
```
In JavaScript werden in einem Promise zwei Rückrufe berücksichtigt: `resolve` und `reject`. Wenn wir den obigen Code durchlesen, ist es offensichtlich, dass unser kleines Kind sein Versprechen, sein Zimmer zu
putzen, erfüllt hat. Daher wird unser Promise-Objekt hier - sobald es aufgerufen wurde - als Antwort `Clean` zurückzugeben. Nehmen wir an, unser Kind hat es nicht geschafft, das Schnäppchen zu machen, dann würde `isClean` auf `false` gesetzt. Dann wird unser Versprechen hier abgelehnt und als Antwort `not Clean` zurückgegeben.

Wir können jetzt unsere Funktion `promiseToCleanTheRoom` ausführen, indem wir Folgendes schreiben:
```typescript
promiseToCleanTheRoom.then((result) => {
    console.log("the room is " + result);
}).catch(function(result){
    console.log("the room is " + result);
}) 
```
Sobald  `promiseToCleanTheRoom` ausgeführt wird, wird unsere then-Funktion nur dann ausgelöst, wenn das Promise resolved wird.
Ebenso wird unsere catch-Funktion nur ausgelöst, wenn das Promise rejected wird.
