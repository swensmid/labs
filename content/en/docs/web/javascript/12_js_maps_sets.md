---
title: "Maps und Sets"
type: docs
linkTitle: "Maps und Sets"
weight: 12
date: 2023-03-31
description: >
    Modul #F4 - JavaScript - Maps und Sets.
---

## Ziele
* Du kennst den Unterschied zwischen Maps und Sets.
* Du kannst Maps und Sets erstellen, bearbeiten und Daten abrufen.
* Du kannst Map- und Set-Iteratoren erklären.


## Map
Maps sind spezielle Objekte, die eine Zuordnung von Key zu Value ermöglichen. Der Key kann ein beliebiges Objekt sein, während der Value beliebig sein kann. Eine Map speichert keine Duplikate von Keys.

```javascript
const map = new Map();
```

### Eintrag hinzufügen
Mit der `set()` Methode wird ein neues Key-Value-Paar zur Map hinzugefügt. Der erste Parameter der Methode ist der Key und der zweite Parameter ist der Value, der mit dem Key assoziiert werden soll. Wenn die Map bereits einen Eintrag mit dem angegebenen Key enthält, wird der neue Value anstelle des alten Values gespeichert.

```javascript
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map); // Map {'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3'}

map.set('key1', 'value4');

console.log(map); // Map {'key1' => 'value4', 'key2' => 'value2', 'key3' => 'value3'}
```

### Wert (value) für Key ermitteln
Die `get(key)` Methode gibt den Value zurück, der mit einem bestimmten Key in der Map assoziiert ist. Wenn der Key nicht vorhanden ist, gibt die Methode `undefined` zurück.

```javascript
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map.get('key1')); // 'value1' 
console.log(map.get('key4')); // undefined
```

### Prüfen, ob Key vorhanden ist
Die `has(key)` Methode ist dazu da, um zu überprüfen, ob ein Key in der Map vorhanden ist. Die Methode gibt einen booleschen Wert zurück je nachdem ob der Key gefunden wurde oder nicht.

```javascript
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map.has('key1')); // true 
console.log(map.has('key4')); // false
```

### Eintrag löschen
Die Methode `delete(key)` löscht den Key und den zugehörigen Value aus der Map. Wenn der Key in der Map vorhanden ist, wird er zusammen mit dem Value entfernt, und die Methode gibt "true" zurück. Wenn der Key nicht vorhanden ist, wird die Map unverändert belassen, und die Methode gibt "false" zurück.

```javascript
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map.delete('key1')); // true 
console.log(map.delete('key4')); // false
console.log(map.get('key1')); // undefined
```

### Map zurücksetzen
Die `clear()` Methode kann verwendet werden, um alle Key-Value-Paare aus einer Map zu entfernen und somit diese auf eine leere Map zurückzusetzen.

```javascript
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map.get('key1')); // 'value1'
console.log(map.get('key2')); // 'value2'
console.log(map.get('key3')); // 'value2'

map.clear()

console.log(map.get('key1')); // undefined
console.log(map.get('key2')); // undefined
console.log(map.get('key3')); // undefined
```

### Anzahl Elemente
Die `size` Methode einer Map gibt die Anzahl der Key-Value-Paare in der Map zurück.

```javascript
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map.size); // 3

map.delete('key1');

console.log(map.size); // 2


map.clear();

console.log(map.size); // 0
```

## Map Iteratoren
Iteratoren sind Objekte, die eine Möglichkeit bereitstellen, auf die Elemente einer Sammlung nacheinander zuzugreifen. Ein Iterator bietet also eine sequenzielle Schnittstelle, die es einem ermöglicht, die Elemente einer Sammlung in einer bestimmten Reihenfolge abzurufen.

### entries()
Die `entries()` Methode gibt einen Iterator zurück, der alle Key-Value-Paare der Map in der Reihenfolge ihrer Hinzufügung enthält. Jedes Element des Iterators ist ein Array mit zwei Elementen, dem Key und dem zugehörigen Value.

```javascript
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

for (const [key, value] of map.entries()){
    console.log([key, value]);
} 

// Array [ "key1", "value1" ]
// Array [ "key2", "value2" ]
// Array [ "key3", "value3" ]
```

### keys()
Die Methode `keys()` gibt einen Iterator zurück, der nur die Keys der Map enthält.

```javascript
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

for (const key of map.keys()){
    console.log(key);
}

// key1
// key2
// key3
```

### values()
Die Methode `values()` gibt einen Iterator zurück, der im Gegensatz zu der Methode `keys()`nur die Values der Map enthält.

```javascript
const map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

for (const value of map.values()){
    console.log(value);
}

// value1
// value2
// value3
```


## Set
Oft möchte man eine Liste haben, in der klar ist, dass jedes Element nur 1x vorkommen kann.

Genau diesen Zweck erfüllt die `Set`.

```javascript
const set = new Set();
```

### Wert hinzufügen
Die `add(value)` Methode fügt einen Wert zur Set hinzu.

Wenn der Wert bereits in der Set vorkommt, wird der Wert kein weiteres Mal hinzugefügt, siehe:

```javascript
const set = new Set();

set.add('value1');
set.add('value2');
set.add('value3');

console.log(set); // Set {'value1', 'value2', 'value3'} 

set.add('value2');
set.add('value4');

console.log(set); // Set {'value1', 'value2', 'value3', 'value4'} 
```

### Wert löschen
Die Methode `delete()` löscht den angegebenen Wert aus der Set, wenn dieser enthalten ist und gibt `true` zurück. Ansonsten `false`.

```javascript
const set = new Set();

set.add('value1');
set.add('value2');
set.add('value3');

console.log(set.delete('value1')); // true
console.log(set.delete('value1')); // false
```

### Prüfen, ob Wert vorhanden ist
Die `has()` Methode gibt zurück, ob der angegebene Value im Set enthalten ist oder nicht. Die Methode gibt "true" zurück, wenn der Value im Set vorhanden ist, andernfalls gibt sie "false" zurück.

```javascript
const set = new Set();

set.add('value1');
set.add('value2');
set.add('value3');

console.log(set.has('value1')); // true
console.log(set.has('value4')); // false
```

### Set zurücksetzen
Die `clear()`-Methode löscht alle Elemente aus der Set.

```javascript
const set = new Set();

set.add('value1');
set.add('value2');
set.add('value3');

console.log(set.has('value1')); // true
console.log(set.has('value2')); // true
console.log(set.has('value2')); // true

set.clear();

console.log(set.has('value1')); // false
console.log(set.has('value2')); // false
console.log(set.has('value3')); // false
```

### Anzahl Elemente
Die Methode `size()` gibt die Anzahl der Elemente im Set zurück.

```javascript
const set = new Set();

set.add('value1');
set.add('value2');
set.add('value3');

console.log(set.size); // 3

set.clear();

console.log(set.size); // 0
```

## Set Iteratoren
Im Set existieren im Grunde fast die gleichen Iteratoren wie bei einer Map. Jedoch gibt es bei `keys()` und `entries()` Unterschiede, diese sind nachfolgend nachzulesen.

### values()
`values()` gibt einen Iterator zurück, der die Werte des Sets in der Reihenfolge des Einfügens zurück gibt:

```javascript
const set = new Set()

set.add('value1')
set.add('value2')
set.add('value3')

for (const value of set.values()){
    console.log(value);
}

// value1
// value2
// value3
```

### keys() und entries()
`keys()` gibt einen Iterator zurück, der dieselben Value wie der `values()`-Iterator zurück gibt. Der `keys()`-Iterator ist jedoch nur aus Gründen der Kompatibilität mit der Map-Datenstruktur verfügbar und existiert für Sets nur, weil Sets auf der gleichen Grundlage wie Maps implementiert sind.

Dasselbe gilt auch für die `entries()`-Methode.