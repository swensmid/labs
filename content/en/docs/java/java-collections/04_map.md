---
title: "HashMap"
linkTitle: "HashMap"
weight: 4
description: >
  Die gebräuchlichste Umsetzung einer Map: HashMap.
---

## java.util.HashMap

Eine [`Map`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html) verwendet man, um Zuweisungen zu speichern.
Die [`java.util.HashMap`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/HashMap.html) ist die gebräuchlichste Map. 
Man könnte zum Beispiel ein Register mit Postleitzahlen (PLZ) und den dazugehörigen Orten speichern.
Die PLZ ist der Schlüssel und der Ort ist der zugewiesene Wert.

{{% alert title="Eine Zuweisung besteht aus einem Schlüssel (Key) und einem Wert (Value)." color="primary" %}}
{{% /alert %}}

Dabei ist der Schlüssel immer eindeutig. Speichert man zwei Zuweisungen mit dem gleichen Schlüssel, so wird die erste Zuweisung überschrieben.

![list1](../../java-collections/map1.svg)

Bei der Benennung eine Map versucht man die Zuweisung zu beschreiben:  
`plzToCityMap` --> **PLZ** zu **City** Zuweisung

```java
Map<Integer, String> plzToCityMap = new HashMap<>();
plzToCityMap.put(3000, "Zürich");
plzToCityMap.put(3000, "Bern");
plzToCityMap.put(3011, "Bern");
plzToCityMap.put(1234, "Vessy");
plzToCityMap.put(3920, "Zermatt");

System.out.println(plzToCityMap.size()); // Output: 4
System.out.println(plzToCityMap.get(3000)); // Output: Bern
System.out.println(plzToCityMap.containsKey(1234)); // Output: true
System.out.println(plzToCityMap.containsValue("Zürich")); // Output: false
System.out.println(plzToCityMap.containsValue("Zermatt")); // Output: true

```

Die `Map` offeriert drei Collection Ansichten auf den gespeicherten Inhalt:

- **keySet()**: Set auf alle Schlüssel
- **values()**: Collection auf alle Werte
- **entrySet()**: Set auf alle Schlüssel-Werte Zuweisungen
- **forEach()**: Führt eine bestimmte Aktion über alle Elemente aus

Die Reihenfolge des Inhalts hängt von der Implementierung der Iteratoren ab, welche eine konkrete Map Klasse für die einzelnen Collection-Ansichten verwendet. Manche Implementation wie die `TreeMap` garantiert eine bestimmte Reihenfolge, andere wie die `HashMap` keine. 

### Beispiele

Für die Beispiele verwenden wir folgende `HashMap`:

```java
Map<Integer, String> plzToCityMap = new HashMap<>();
plzToCityMap.put(3000, "Zürich");
plzToCityMap.put(3000, "Bern");
plzToCityMap.put(3011, "Bern");
plzToCityMap.put(1234, "Vessy");
plzToCityMap.put(3920, "Zermatt");

```

#### Beispiel 1 - Auslesen der Schlüssel, Werte und Zuweisungen

Mit der Methode `keySet()` kann man alle Schlüssel einer `Map` abfragen.
Der Rückgabewert ist ein `Set`, welches wir bestens kennen:

```java
// Abfrage der Schlüssel mit einem Iterator:
Iterator<Integer> plzIterator = plzToCityMap.keySet().iterator();
        while(plzIterator.hasNext()) {
        System.out.println(plzIterator.next());
        }

// Abfrage der Schlüssel mit einem Stream:
        plzToCityMap.keySet().stream()
        .forEach(plz -> System.out.println(plz));
        
```

Ebenso kann man die Werte der Zuweisungen mit der Methode `values()` abfragen.
Als Resultat erhält man eine `Collection`.

```java
// Abfrage der Werte mit einem Iterator:
Iterator<String> nameIterator = plzToCityMap.values().iterator();
        while(nameIterator.hasNext()) {
        System.out.println(nameIterator.next());
        }

// Abfrage der Werte mit einem Stream:
        plzToCityMap.values().stream()
        .forEach(name -> System.out.println(name));

```

Es besteht auch die Möglichkeit mit der Methode `entrySet()` die Zuweisungen mit Schlüssel und Wert abzufragen.
Man erhält wieder ein `Set`.

```java
// Abfrage der Zuweisungen mit einem Iterator:
Iterator<Map.Entry<Integer, String>> plzCityIterator = plzToCityMap.entrySet().iterator();
        while(plzCityIterator.hasNext()) {
        Map.Entry<Integer, String> entry = plzCityIterator.next();
        System.out.println(entry.getKey() + " : " + entry.getValue());
        }

// Abfrage der Zuweisungen mit einem Stream:
        plzToCityMap.entrySet().stream()
        .forEach(plzCity -> System.out.println(plzCity.getKey() + " : " + plzCity.getValue()));

// Abfrage der Zuweisungen mit einem forEach:
plzToCityMap.forEach((plz, city) -> System.out.println(plz + " : " + city));

```

{{% blocks/lead color="orange" %}}
Aufgaben 
{{% /blocks/lead %}}

### Aufgabe 1
Postleitzahlen einlesen und verarbeiten:

1. Schreibe ein Programm, welches Postleitzahlen aus einer CSV-Datei herausliest und in einer HashMap speichert.
2. Nach dem Speichern schreibt das Programm verschiedene Informationen zu den Daten in die Konsole (siehe Ausgabe).

**Input:**
- [PLZ (UTF8 Format)](/content/en/data/csv/Postleitzahlen_UTF8.csv)
- [PLZ (ISO-8859-1 Format)](/content/en/data/csv/Postleitzahlen_ISO-8859-1.csv)

**Ausgabe:**  
Die Ausgabe muss das folgende Format aufweisen:
```text
- Anzahl PLZ: 42
- kleinste PLZ mit Gemeinde: 4444 Bern
- grösste PLZ mit Gemeinde: 4444 Bern
- Anzahl Gemeinden mit mehr als 10 Buchstaben: 42
- Anzahl Gemeinden mit der Buchstabenfolge 'ent': 42
- Anzahl Buchstaben der kleinsten Gemeinden: 2
- Kleinsten Gemeinden: di, ri, ru
- Anzahl Buchstaben der grössten Gemeinden: 5
- Grössten Gemeinden: diwil, riwil, ruwil
```

### Aufgabe 2
Wir programmieren eine eigene Map-Klasse `MyMap`, welche noch keinen Hash-Code verwendet:

1. Es dürfen keine Klassen aus dem Collection-Framework verwendet werden.
2. Die Klasse muss das Interface `MyMapInterface` implementieren.
3. Die Klasse weiss nicht, wie viele Elemente man speichert. Sie muss die Grösse internen Datenstruktur dynamische anpassen.
4. Die `toString()` der `java.lang.Object` Klasse soll von der `MyMap` so überschrieben werden, dass die Elemente kommasepariert ausgegeben werden.

{{% details title="Inferface MyMapInterface" %}}

```java
package com.examples.list;

public interface MyMapInterface<K, V> {

    /**
     * Associates the specified value with the specified key in this map.
     * @param key key with which the specified value is to be associated
     * @param value value to be associated with the specified key
     * @return the previous value associated with {@code key}, or
     *         {@code null} if there was no mapping for {@code key}.
     */
    V put(K key, V value);

    /**
     * Returns the value to which the specified key is mapped,
     * or {@code null} if this map contains no mapping for the key.
     * @param key the key whose associated value is to be returned
     * @return the value to which the specified key is mapped, or
     *         {@code null} if this map contains no mapping for the key
     */
    V get(Object key);

    /**
     * Returns the number of key-value mappings in this map.
     * @return the number of key-value mappings in this map
     */
    int size();

    /**
     * Removes all the mappings from this map.
     * The map will be empty after this call returns.
     */
    void clear();

    /**
     * Removes the mapping for a key from this map if it is present.
     * @param key key whose mapping is to be removed from the map
     * @return the previous value associated with {@code key}, or
     *         {@code null} if there was no mapping for {@code key}.
     */
    V remove(Object key);

    /**
     * Returns {@code true} if this map contains a mapping for the specified
     * key.
     * @param key key whose presence in this map is to be tested
     * @return {@code true} if this map contains a mapping for the specified
     *         key
     */
    boolean containsKey(Object key);

    /**
     * Returns {@code true} if this map maps one or more keys to the
     * specified value.
     * @param value value whose presence in this map is to be tested
     * @return {@code true} if this map maps one or more keys to the
     *         specified value
     */
    boolean containsValue(Object value);
}

```

{{% /details %}}

### Aufgabe 3 (Optional)
Wir Kopieren unsere `MyMap` Klasse zu der Klasse `MyHashMap` und erweitern diese, damit sie Hash Funktionalität verwendet:

1. Beim Hinzufügen von Zuweisungen wird der Hash-Code vom Schlüssel berechnet und ebenfalls abgespeichert. 
2. Die Schlüsselsuche wird anschliessend über die gespeicherten Hash-Code der Schlüssel durchgeführt statt über die Schlüssel selbst.

