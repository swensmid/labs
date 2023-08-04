---
title: "Arrays"
linkTitle: "Arrays"
weight: 7
description: >
  Modul #J1
---

## Ziele
* Ich kenne Arrays und kann diese instantiieren, ihnen Werte von Indexen entnehmen und Werte an Indexe zuweisen.


## Arrays

### Definition
Häufig benötigen Software-Entwickler mehrere zusammengehörige Variablen desselben Datentyps, die logisch oder verwaltungstechnisch zusammengehören. Es wäre aber sehr aufwendig, diese Variablen alle einzeln zu deklarieren und zu verarbeiten. Zudem ist es möglich, dass die Anzahl an Objekten noch unbekannt ist und erst bei der Ausführung des Programms definiert wird. Deswegen wird in Java, wie in anderen Programmiersprachen auch, die Verwendung von Arrays unterstützt. In Arrays lassen sich beliebige primitive Datentypen und Objekte speichern und systematisch bearbeiten. Alle Variablen haben einen gemeinsamen Namen, werden aber über unterschiedliche Indizes angesprochen.

### Deklaration
Die Deklaration eines Arrays enthält folgende Bestandteile:
| Reihenfolge | Bedeutung | Beispiel |
| --- | --- | --- |
| 1. | Typ | ```String, int, double, char, ...``` |
| 2. | Eckige Klammern | ```[]``` |
| 3. | Bezeichner / Namen | ```words, numbers, values, letters...``` |

```java
String[] words;
```

### Länge eines Arrays
Die Anzahl der Elemente in einem Array wird als Länge eines Arrays bezeichnet. Diese Länge wird zum Zeitpunkt der Erstellung eines Arrays einmal festgelegt. Sie kann später in einem Programm nur durch Definition eines neuen Arrays und dem Kopieren von Werten geändert werden.

Wir können die Länge eines Arrays mithilfe einer in Java integrierten Funktionalität überprüfen:
```java
words.length
```

### Indizierung
Die Indizes in einem Array reichen immer von 0 bis length-1. Ein Array mit den ersten 100 natürlichen Zahlen hat beispielsweise eine Länge von 100 und Indizes von 0 bis 99.

### Syntax
In Java müssen wir zum Zeitpunkt der Deklaration eines Arrays folgendes angeben:
* den Datentyp
* den Namen

und zum Zeitpunkt der Initialisierung:
* die Grösse

Syntaktisch können wir ein Array eines ganzzahligen Datentyps auf folgende Weise deklarieren:
```java
String[] words;
String words[];
```
Die zweite Form wird bei uns nicht verwendet.

Dieser Code deklariert die Variable _words_, erstellt das Array-Objekt jedoch noch nicht. Der Operator _new_ wird in Java zum Erstellen von neuen Objekten verwendet.
```java
String[] words = new String[5];
```
Damit wird ein Array-Objekt der Länge 5 instantiiert. Die fünf Elemente dieses Arrays wurden mit Standardwerten initialisiert. Bei einem Array des Datentyps String ist der Default-Wert null. Alle Werte im Array werden also mit null aufgefüllt.

Wir können auch direkt die Werte der Array-Elemente angeben:
```java
String[] words = { "Hai", "Oktopus", "Rochen", "Wal", "Fisch" };
```
Es wird also ein Array mit der Grösse 5 und den angegebenen Werten erstellt.

### Zugriff auf Elemente
Wenn wir den Wert eines Elements in unserem Array verändern möchten, geschieht dies folgendermassen:
```java
words[index] = value;
```

Wenn wir den Wert eines Array-Elements in einer Variablen ausserhalb des Arrays speichern wollen:
```java
String value = words[index];
```
