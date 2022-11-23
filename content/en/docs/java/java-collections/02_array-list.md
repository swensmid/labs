---
title: "ArrayList"
linkTitle: "ArrayList"
weight: 2
description: >
  Eine konkrete Umsetzung einer List: Die ArrayList.
---

## java.util.ArrayList

java.util.ArrayList erbt von der abstrakten Klasse java.util.AbstractList und liefert eine konkrete Implementierung für
das Interface java.util.List. Die ArrayList Klasse implementiert alle Methoden des Interface java.util.List. Der
Implementierung der ArrayList Klasse liegen Arrays zugrunde, weshalb diese konkrete Klasse auch *Array*List heisst.
Die Klasse ArrayList enthält also ein normales Array. Wenn ein Element hinzugefügt wird, wird es in dieses Array eingefügt.
Wenn das Array nicht groß genug ist, wird ein neues, größeres Array erstellt, um das alte zu ersetzen, d.h. die Kapazität
des Arrays wird fortlaufend angepasst.

### Einige Methoden der Klasse java.util.ArrayList

```java
/*
 * Konstruktor: Erstellt eine initial leere Liste
 */
public ArrayList<E>()

/*
 * Appends the specified element to the end of this list.
 */
public boolean add(E e)

/*
 * Fügt das angegebene Element an der angegebenen Position in diese Liste ein.
 */
public void add(int index,E element)

/*
 * Entfernt alle Elemente aus dieser Liste.
 */
public void clear()

/*
 * Entfernt das Element an der angegebenen Position in dieser Liste.
 */
public E remove(int index)

/*
 * Gibt das Element an der angegebenen Position in dieser Liste zurück.
 */
public E get(int index)

/*
 * Gibt den Index des ersten Auftretens des angegebenen Elements in dieser Liste zurück,
 * oder -1, wenn diese Liste das Element nicht enthält.
 */
public int indexOf(Object o)

/*
 * Gibt die Anzahl der Elemente in dieser Liste zurück.
 */
public int size()

/*
 * Gibt true zurück, wenn diese Liste keine Elemente enthält.
 */
public boolean isEmpty()

/*
 * Gibt true zurück, wenn diese Liste das angegebene Element enthält.
 */
public boolean contains(Object o)
```

### Beispiele
#### Beispiel 1 - Verwendung einer ArrayList.

Im folgenden Beispiel erstellen wir zunächst eine leere ArrayList mit Elementen vom Typ String und wenden einige
einfache ArrayList Methoden an und sehen, wie diese funktionieren (Das Hinzufügen von Elementen, das Entfernen von
Elementen, ...),

```java

import java.util.ArrayList;
import java.util.List;

public class Pets {

    public static void main(String[] args) {
        // Creating an ArrayList of String
        List<String> pets = new ArrayList<>();

        System.out.println(pets); // Output: []

        // Adding new elements to the ArrayList
        pets.add("Cat");
        pets.add("Hamster");
        pets.add("Dog");
        pets.add("Goldfish");

        System.out.println(pets); // Output: [Cat, Hamster, Dog, Goldfish]

        // Adding an element at a particular index in an ArrayList
        pets.add(2, "Guinea pigs");

        System.out.println(pets); // Output: [Cat, Hamster, Guinea pigs, Dog, Goldfish]

        pets.remove(2);

        System.out.println(pets); // Output: [Cat, Hamster, Dog, Goldfish]

        pets.remove("Dog");

        System.out.println(pets); // Output: [Cat, Hamster, Goldfish]

        pets.clear();

        System.out.println(pets); // Output: []
    }
}

```


#### Beispiel 2 (Iteration `for`-Schleife)

Dieses Beispiel zeigt auf wie mit einer `for`-Schleife über die Elemente einer Liste iteriert werden kann.

```java
import java.util.ArrayList;

class ListSum {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(1000);
        numbers.add(2500);
        numbers.add(3750);
        numbers.add(625);

        int listSum = 0;

        for (Integer e : numbers) {
            listSum += e;
        }

        System.out.println("Die Summe der Elemente beträgt " + listSum);
    }
}
```
Output:
```
Die Summe der Elemente beträgt 7875

```



#### Beispiel 3 (Iteration `while`-Schleife)

Dieses Beispiel zeigt auf wie mit einer `while`-Schleife über die Elemente einer Liste iteriert werden kann.

```java
import java.util.Arrays;
import java.util.List;

public class WhileLoopExample {

  public static void main(String[] args) {
    String[] namesArray = { "Anna", "Simon", "Jan", "Nicole"};

    // convert array to list
    List<String> namesArrayList = Arrays.asList(namesArray);

    int i = 0;
    while (i < namesArrayList.size()) {
      System.out.println(namesArrayList.get(i));
      i++;
    }
  }
}
```

Output:
```
Anna
Simon
Jan
Nicole

```


### IndexOutOfBoundsException

Eine der häufigsten Exceptions, die im Zusammenhang mit Listen auftritt, ist folgende: 
Es wird versucht, auf ein Element mit einem Index zuzugreifen, wobei der Index grösser als (oder gleich wie) die Länge der Liste ist. Dann wird die `IndexOutOfBoundsException` geworfen:

```java
List<String> list = new ArrayList<>();
list.add("uno");
list.add("dos");
list.add("tres");

System.out.println(list.get(3));
```

Hier wird dann diese Meldung angezeigt:
```
"java.lang.IndexOutOfBoundsException: Index 3 out of bounds for length 3"
```

Der Fehler war hier, dass die Liste 3 Elemente enthielt, und versucht wird, auf das 4. Element (also Index 3) zuzugreifen. Weil das 4. Element in dieser Liste nicht existiert, wird eine Exception geworfen.

Ganz generell wird die `IndexOutOfBoundException` geworfen, wenn versucht wird, auf einen ungültigen Index innerhalb einer Collection
zuzugreifen. Hat eine Liste die Grösse x:
* dann sind die gültigen Indizes, um auf Elemente zuzugreifen 0, 1, 2, ..., x-1
* und die Indizes x, x+1, x+2, ... wären ungültig.

Diese Exception kann bei den folgenden Methoden von oben geworfen werden:
(Diese Liste hier ist genau so nicht vollständig, wie die oben.)

* `public void add(int index, E element)` (beachte das Argument `index`.)
* `public E remove(int index)`
* `public E get(int index)`


### Übungen

#### Aufgabe 1

Versuche eine eigene ArrayList-Klasse (`MyArrayList<E>`) zu implementieren mithilfe von Arrays und verwende dabei keine
anderen Collections-Klassen.

Die MyArrayList sollte eine dynamische Grösse haben. Da die Liste mithilfe von Arrays implementiert werden soll, muss
also in deiner Klasse die Kapazität der Liste sichergestellt werden.

Implementiere die folgenden Methoden:

* `void add(E e)`
* `E get(int i)` (soll IndexOutOfBoundsException werfen)
* `E remove(int i)` (soll IndexOutOfBoundsException werfen)
* `int size()`
* `boolean isEmpty()`

Beachte, dass du die `toString()` Methode anpasst, sodass die MyArrayList-Listen beim printen übersichtlich
dargestellt werden, wie im Beispiel oben: [Cat, Hamster, Dog, Goldfish]

#### Aufgabe 2

Erweitere deine MyArrayList Klasse. Implementiere zusätzlich die folgenden Methoden:

* `void add(int index, E element)` (soll IndexOutOfBoundsException werfen)
* `boolean contains(Object o)`
* `int indexOf(Object o)`
* `E set(int index, E element)`
* `boolean equals(Object o)`
* `boolean remove(Object o)`

#### Aufgabe 3

Erstelle ein Programm, welches ein Zeugnis bestehend aus Modulen und deren Schlussnoten generiert und in der Konsole
ausgibt.

Dazu sollen die Klassen `Modul` und `LBV` (Prüfung) erstellt werden. Zur weiteren Hilfe soll
die `ModulNotGradeableException` dienen.

Anforderungen an die `LBV`-Klasse:

- Die Note der LBV ist als Float-Attribut gespeichert
- Die Gewichtung der LBV ist ebenfalls als Float-Attribut gespeichert

Anforderungen an die `Modul`-Klasse:

- Ein Modul hat den Modulnamen als Attribut.
- Alle LBVs des Moduls, werden in einer ArrayList gespeichert.
- LBVs werden dem Modul über die `addLBV(LBV exam)` Methode hinzugefügt.
- Der Moduldurchschnitt, soll von der Methode `getFinalModuleGrade()` als `float` zurückgegeben werden.
- Das Modul kann nur bewertet werden, wenn die Gewichtung aller LBVs genau 1 ergib. Ansonsten soll
  eine `ModulNotGradeableException` geworfen werden.
- Die Methode `printReportEntry()` soll den Zeugnis-Eintrag des Moduls generieren und ausgeben. Dieser ist im Format *<
  MODUL_NAME>* : *<MODUL_SCHLUSSNOTE>* auszugeben.
