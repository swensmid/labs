---
title: "HashSet"
linkTitle: "HashSet"
weight: 3
description: >
Die gebräuchlichste Umsetzung eines Set: HashSet.
---

## java.util.Set

Eine [`Set`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html) verwendet man, um eine Menge von Elemente zu speichern.
Dabei werden keine Duplikate gespeichert.
Die [`java.util.HashSet`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/HashSet.html) ist die gebräuchlichste Implementierung eines Sets. 
Man könnte zum Beispiel in einem Set alle Wörter eines Texts speichern.
Tritt ein Wort mehrmals auf, so wird dieses Wort nur bei ersten Male gespeichert.
Im Set sind so alle auftretenden Wörter gespeichert und die `size()` Methode liefert die Anzahl unterschiedlicher Wörter zurück.

{{% alert title="Ein Set hat keine Duplikate!" color="primary" %}}
{{% /alert %}}

Dabei ist der Schlüssel immer eindeutig. Speichert man zwei Zuweisungen mit dem gleichen Schlüssel, so wird die erste Zuweisung überschrieben.

![list1](../../java-collections/set1.svg)

Die Benennung eines Sets sollte der Inhalt beschreiben.  
Zum Beispiel:
- `nameSet` --> ein **Set** mit **Namen**
- `names` --> mehrere Namen

```java
Set<String> nameSet = new HashSet<>();
nameSet.add("Peter");
nameSet.add("Anna");
nameSet.add("Kurt");
nameSet.add("Anna");
nameSet.add("Petra");

System.out.println(nameSet.size()); // Output: 4
System.out.println(nameSet.contains("Peter")); // Output: true
System.out.println(nameSet.remove("Emil")); // Output: false
System.out.println(nameSet.remove("Anna")); // Output: true
System.out.println(nameSet.size()); // Output: 3
nameSet.clear();
System.out.println(nameSet.isEmpty()); // Output: true

```

Die Elemente eines `Set` kann man mit den `Collection` Methoden abrufen:

- **iterator()**: Ein Iterator über die Elemente
- **stream()**: Ein sequentieller Stream über die Elemente
- **forEach()**: Führt eine bestimmte Aktion über alle Elemente aus

Die Reihenfolge der Elemente ist nicht garantiert.
Es existieren Implementierung wie das `SortedSet`, welche eine bestimmte Reihenfolge sicherstellt.

### Beispiele

Für die Beispiele verwenden wir die folgende initialisierte `HashMap`:

```java
Set<String> nameSet = new HashSet<>();
nameSet.add("Peter");
nameSet.add("Anna");
nameSet.add("Kurt");
nameSet.add("Anna");
nameSet.add("Petra");

```

#### Beispiel 1 - Set erstellen

```java
// mit Konstruktor
Set<String> nameSet = new HashSet<>();
nameSet.add("Peter");
nameSet.add("Emil");

// mit statischer of() Methode
Set<String> nameSet = Set.of("Peter", "Emil");
// of() liefert ein unmodifizierbares Set zurück. Kein HashSet! 

```


#### Beispiel 2 - Auslesen der Elemente

```java
// Abfrage der Elemente mit einem Iterator:
Iterator<String> iterator = nameSet.iterator();
while(iterator.hasNext()) {
System.out.println(iterator.next());
}

// Abfrage der Elemente mit einem Stream:
System.out.println("\nStream:");
nameSet.stream().forEach(name -> System.out.println(name));

// Abfrage der Elemente mit einem forEach:
System.out.println("\nStream:");
nameSet.forEach(name -> System.out.println(name));

```

{{% blocks/lead color="orange" %}}
Aufgaben
{{% /blocks/lead %}}

### Aufgabe 1
Schreibe ein Programm, welches die Personen von vier Vereine auswertet.

1. Pro Verein existiert ein `Set` mit allen Vereinsmitlieder (siehe Input).
2. Das Programm analysiert die Vereinsmitglieder und schreibt verschiedene Aussagen in die Konsole (siehe Ausgabe).

**Input:**

{{% details title="4 Sets" %}}
```java
Set<String> fussballVerein = Set.of(
    "Emil", "Hans", "Felix", "Fritz", "Patrick",
    "Hanne", "Anja", "Paula", "Petra", "Anna"
);

Set<String> schwimmVerein = Set.of(
    "Emil", "Klaus", "Paul", "Fritz", "Patrick",
    "Hanne", "Anina", "Nicole", "Petra", "Gerda"
);

Set<String> musikVerein = Set.of(
    "Kari", "Hans", "Max",
    "Karin", "Petra", "Anna"
);

Set<String> tanzVerein = Set.of(
    "Emil", "Hans", "Paul", "Felix", "Max",
    "Lara", "Anja", "Sabine", "Anna"
);

```
{{% /details %}}

**Ausgabe:**  
Die Ausgabe muss das folgende Format aufweisen: 
```text
- Wie viele Personen machen min. in einem Verein mit: 2: Maria,Xaver
- Alle Personen, welche im Fussball und Tanz Verein sind: 2: Maria,Xaver
- Alle Personen, welche im Fussball sind und nicht im Tanz oder Schwimm Verein: 2: Maria,Xaver

```
### Aufgabe 2
Wir programmieren eine eigene Set-Klasse `MySet`, welche noch kein Hash-Code verwendet.

1. Es dürfen keine Klassen aus dem Collection-Framework verwendet werden.
2. Die Klasse muss das Interface `MySetInterfaceSimple` implementieren.
3. Die Klasse weiss nicht, wie viele Elemente man speichern muss. Sie muss die Grösse des Arrays dynamische anpassen.
4. Die `toString()` der `java.lang.Object` Klasse soll von der `MySet` so überschrieben werden, dass die Elemente kommasepariert ausgegeben werden.

{{% details title="Inferface MySetInterfaceSimple" %}}

```java
package com.examples.list;

public interface MySetInterfaceSimple<E> {

    /**
     * AAdds the specified element to this set if it is not already present.
     * @param element element to be appended to this list
     * @return true if this set did not already contain the specified element
     */
    boolean add(E element);


    /**
     * Removes the specified element from this set if it is present.
     * @param object object to be removed from this set, if present
     * @return true if the set contained the specified element
     */
    boolean remove(Object object);

    /**
     * Returns true if this set contains the specified element.
     * @param object element whose presence in this set is to be tested
     * @return true if this set contains the specified element
     */
    public boolean contains(Object object);

    /**
     * Returns the number of elements in this set.
     * @return the number of elements in this set
     */
    int size();

    /**
     * Returns true if this set contains no elements.
     * @return true if this set contains no elements
     */
    boolean isEmpty();

    /**
     * Removes all the elements from this set. The set will be empty after this call returns.
     */
    void clear();
}


```

{{% /details %}}

### Aufgabe 3 (Optional)
Wir Kopieren unsere `MySet` Klasse zu der Klasse `MyHashSet` und erweitern diese, damit sie Hash Funktionalität verwendet:

1. Beim Hinzufügen von neuen Elementen wird deren Hash-Code berechnet und ebenfalls abgespeichert.
2. Die Suche nach bestehenden Elementen wird anschliessend über den gespeicherten Hash-Code durchgeführt statt über die Elemente selbst.
