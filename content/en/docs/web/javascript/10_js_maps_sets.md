---
title: "Maps und Sets"
type: docs
linkTitle: "Maps und Sets"
weight: 10
date: 2023-03-31
description: >
    Modul #F4 - JavaScript - In JavaScript 
---

## Ziele
*


### Map
Maps sind spezielle Objekte, die eine Zuordnung von Key zu Value ermöglichen. Der Key kann ein beliebiges Objekt sein, während der Value beliebig sein kann. Eine Map speichert keine Duplikate von Keys.

```javascript
const map = new Map()
```

#### set(key, value)
Mit der `set()` Methode wird ein neues Key-Value-Paar zur Map hinzugefügt. Der erste Parameter der Methode ist der Keyy und der zweite Parameter ist der Value, der mit dem Key assoziiert werden soll. Wenn die Map bereits einen Eintrag mit dem angegebenen Key enthält, wird der neue Value anstelle des alten Values gespeichert.

```javascript
const map = new Map()

map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

console.log(map) // Map {'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3'}

map.set('key1', 'value4')

console.log(map) // Map {'key1' => 'value4', 'key2' => 'value2', 'key3' => 'value3'}
```

#### get(key)
Die `get()` Methode gibt den Value zurück, der mit einem bestimmten Key in der Map assoziiert ist. Wenn der Key nicht vorhanden ist, gibt die Methode `undefined` zurück.

```javascript
const map = new Map()

map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

console.log(map.get('key1')) // 'value1' 
console.log(map.get('key4')) // undefined
```

#### has(key)
Die `has()` Methode ist dazu da, um zu überprüfen, ob ein Key in der Map vorhanden ist. Die Methode gibt einen booleschen Wert zurück je nachdem ob der Key gefunden wurde oder nicht.

```javascript
const map = new Map()

map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

console.log(map.has('key1')) // true 
console.log(map.has('key4')) // false
```

#### delete(key)
Die Methode `delete()` löscht den Key und den zugehörigen Value aus der Map. Wenn der Key in der Map vorhanden ist, wird er zusammen mit dem Value entfernt, und die Methode gibt "true" zurück. Wenn der Key nicht vorhanden ist, wird die Map unverändert belassen, und die Methode gibt "false" zurück.

```javascript
const map = new Map()

map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

console.log(map.delete('key1')) // true 
console.log(map.delete('key4')) // false
console.log(map.get('key1')) // undefined
```

#### clear()
Die `clear()` Methode kann verwendet werden, um alle Key-Value-Paare aus einer Map zu entfernen und somit diese auf eine leere Map zurückzusetzen.

```javascript
const map = new Map()

map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

console.log(map.get('key1')) // 'value1'
console.log(map.get('key2')) // 'value2'
console.log(map.get('key3')) // 'value2'

map.clear()

console.log(map.get('key1')) // undefined
console.log(map.get('key2')) // undefined
console.log(map.get('key3')) // undefined
```

#### size
Die `size` Methode einer Map gibt die Anzahl der Key-Value-Paare in der Map zurück.

```javascript
const map = new Map()

map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

console.log(map.size) // 3

map.delete('key1')

console.log(map.size) // 2


map.clear()

console.log(map.size) // 0
```

### Map Iteratoren
Iteratoren sind Objekte, die eine Möglichkeit bereitstellen, auf die Elemente einer Sammlung nacheinander zuzugreifen. Ein Iterator bietet also eine sequenzielle Schnittstelle, die es einem ermöglicht, die Elemente einer Sammlung in einer bestimmten Reihenfolge abzurufen.

Iteratoren verwenden das Iterator-Protokoll, das aus zwei Methoden besteht:
* Die `next()`-Methode gibt das nächste Element in der Sequenz zurück.
* Die `return()`-Methode wird aufgerufen, um die Sequenz zu beenden.

Die `next()`-Methode gibt ein Objekt zurück, das zwei Eigenschaften hat:
* `value`: Das nächste Element in der Sequenz.
* `done`: Ein Boolean, der angibt, ob das Ende der Sequenz erreicht wurde.

#### entries()
Die `entries()` Methode gibt einen Iterator zurück, der alle Key-Value-Paare der Map in der Reihenfolge ihrer Hinzufügung enthält. Jedes Element des Iterators ist ein Array mit zwei Elementen, dem Key und dem zugehörigen Value.

```javascript
const map = new Map()

map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

const entriesIterator = map.entries()

console.log(entriesIterator.next().value) // ['key1', 'value1']
console.log(entriesIterator.next().value) // ['key2', 'value2']
console.log(entriesIterator.next().value) // ['key3', 'value3']
console.log(entriesIterator.next().value) // undefined (da alle Elemente durchlaufen wurden)
```

#### keys()
Die Methode `keys()` gibt einen Iterator zurück, der nur die Keys der Map enthält.

```javascript
const map = new Map()

map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

const entriesIterator = map.keys()

console.log(entriesIterator.next().value) // 'key1'
console.log(entriesIterator.next().value) // 'key2'
console.log(entriesIterator.next().value) // 'key3'
console.log(entriesIterator.next().value) // undefined (da alle Elemente durchlaufen wurden)
```

#### values()
Die Methode `values()` gibt einen Iterator zurück, der im Gegensatz zu der Methode `keys()`nur die Values der Map enthält.

```javascript
const map = new Map()

map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

const entriesIterator = map.values()

console.log(entriesIterator.next().value) // 'value1'
console.log(entriesIterator.next().value) // 'value2'
console.log(entriesIterator.next().value) // 'value3'
console.log(entriesIterator.next().value) // undefined (da alle Elemente durchlaufen wurden)
```


### Set
Ein Set ist eine Datenstruktur, die eine Sammlung von eindeutigen Values speichert. Das bedeutet, dass ein Set keine Duplikate von Values enthält, egal welchen Datentyps sie haben. Somit unterscheidet sich das Set vom Map daher das im Map keine Duplikaten Keys besitzen kann dafür aber Values.

```javascript
const set = new Set();
```

#### add(value)
Die `add()` Methode fügt einen neuen Value zum Set hinzu. Wenn der Value bereits im Set vorhanden ist, wird er nicht hinzugefügt.

```javascript
const set = new Set()

set.add('value1')
set.add('value2')
set.add('value3')

console.log(set) // Set {'value1', 'value2', 'value3'} 

set.add('value2')
set.add('value4')

console.log(set) // Set {'value1', 'value2', 'value3', 'value4'} 
```

#### delete(value)
Die Methode `delete()` löscht den angegebenen Value aus dem Set, wenn dieser enthalten ist und gibt "true" zurück, wenn der Value aus dem Set gelöscht wurde. Wenn der Value nicht im Set enthalten war, gibt es "false" zurück.

```javascript
const set = new Set()

set.add('value1')
set.add('value2')
set.add('value3')

console.log(set.delete('value1')) // true
console.log(set.delete('value1')) // false
```

#### has(value)
Die `has()` Methode gibt zurück, ob der angegebene Value im Set enthalten ist oder nicht. Die Methode gibt "true" zurück, wenn der Value im Set vorhanden ist, andernfalls gibt sie "false" zurück.

```javascript
const set = new Set()

set.add('value1')
set.add('value2')
set.add('value3')

console.log(set.has('value1')) // true
console.log(set.has('value4')) // false
```

#### clear()
ie `clear()`Methode löscht alle Elemente aus dem Set.

```javascript
const set = new Set()

set.add('value1')
set.add('value2')
set.add('value3')

console.log(set.has('value1')) // true
console.log(set.has('value2')) // true
console.log(set.has('value2')) // true

set.clear()

console.log(set.has('value1')) // false
console.log(set.has('value2')) // false
console.log(set.has('value3')) // false
```

#### size
Die Methode `size` gibt die Anzahl der Elemente im Set zurück.

```javascript
const set = new Set()

set.add('value1')
set.add('value2')
set.add('value3')

console.log(set.size) // 3

set.clear()

console.log(set.size) // 0
```

### Set Iteratoren
Im Set existieren im Grunde fast die gleichen Iteratoren wie bei einer Map. Jedoch gibt es bei `keys()` und `entries()` Unterschiede, diese sind nachfolgend nachzulesen.

#### values()
`values()` gibt einen Iterator zurück, der die Values des Sets in der Reihenfolge ihres Einfügens zurückgibt.

```javascript
const set = new Set()

set.add('value1')
set.add('value2')
set.add('value3')

const valuesIterator = set.values();

console.log(valuesIterator.next().value) // 'value1'
console.log(valuesIterator.next().value) // 'value2'
console.log(valuesIterator.next().value) // 'value3'
console.log(valuesIterator.next().value) // undefined (da alle Elemente durchlaufen wurden)
```

#### keys()
`keys()` gibt einen Iterator zurück, der dieselben Value wie der `values()`Iterator zurückgibt. Der `keys()`Iterator ist jedoch nur aus Gründen der Kompatibilität mit der Map-Datenstruktur verfügbar und existiert für Sets nur, weil Sets auf der gleichen Grundlage wie Maps implementiert sind.

```javascript
const set = new Set()

set.add('value1')
set.add('value2')
set.add('value3')

const keysIterator = set.keys();

console.log(keysIterator.next().value) // 'value1'
console.log(keysIterator.next().value) // 'value2'
console.log(keysIterator.next().value) // 'value3'
console.log(keysIterator.next().value) // undefined (da alle Elemente durchlaufen wurden)
```

#### entries()
`entries()` gibt einen Iterator zurück, der für jedes Element im Set ein Array mit zwei Elementen zurückgibt. Das erste Element ist der Value des Elements, und das zweite Element ist der gleiche Value.

```javascript
const set = new Set()

set.add('value1')
set.add('value2')
set.add('value3')

const entriesIterator = set.entries();

console.log(entriesIterator.next().value) // ['value1', 'value1']
console.log(entriesIterator.next().value) // ['value2', 'value2']
console.log(entriesIterator.next().value) // ['value3', 'value3']
console.log(entriesIterator.next().value) // undefined (da alle Elemente durchlaufen wurden)
```