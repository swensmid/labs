---
title: "Java Collections"
linkTitle: "Java Collections"
weight: 98
description: >
  Java Collections
---

#### Ziele

* Ich kann erklären, was Collections sind.
* Ich kenne grob den Aufbau des Collection Frameworks.
* Ich kenne die wichtigsten Collection-Interfaces und ihre Merkmale: Lists, Sets, Queues, Maps.
* Ich kenne die wichtigsten Collections und ihre Merkmale: ArrayLists, ...
* Ich kenne die wichtigsten Algorithmen und Methoden zu den Collections.
* Ich weiss, wann und wofür ich welche Collections benutzen kann.

#### Änderungskontrolle

| Autor           | Version | Datum | Änderungen                       |
|-----------------|---------|-------|----------------------------------|
| Berivan Kürekci | 0.1     |       | * Initiale Version erstellt      |
|                 | 0.2     |       | * Initiale Version abgeschlossen |

#### Voraussetzungen

* Gute Grundlagenkenntnisse von Java-Anwendungen

---

## Einleitung

Beim Programmieren müssen wir oft Daten speichern beziehungsweise Informationen verwalten, um gewisse Probleme lösen zu
können. In diesem Modul werden wir das Java Collection Framework anschauen, weil dieses Framework uns die Werkzeuge zum
effizienten Verwalten von Informationen liefert.

Eine *Collection* ist ein Objekt, dass eine Sammlung von Objekten darstellt, d.h. mehrere Elemente zu einer Einheit
zusammenfasst. In der Regel enthält eine Collection Datenelemente, die zusammen eine natürliche Gruppe bilden, wie z.B.
eine Fussballmannschaft, die eine "Sammlung" von Fussballspielern ist, d.h. Fussballspieler enthält. Collections bieten
uns im Allgemeinen die Möglichkeit neue Elemente hinzuzufügen, Elemente zu löschen und sonst die Elemente zu verwalten.

Ein bekanntes Beispiel für eine Collection ist die ArrayList Klasse, wobei eine ArrayList eine Liste von Objekten
darstellt, welche skalierbar ist. Die ArrayList Klasse liefert uns beispielsweise die Methode `add`, mit welcher
Elemente an das Ende einer Liste angefügt werden kann:

```java
List<String> farben=new ArrayList<String>();
farben.add("rot");
farben.add("blau");
farben.add("gelb");
farben.add("orange");
``` 

Oder sie liefert uns die Methode `remove`, welche Elemente aus der Liste entfernt:

```java
List<String> farben=new ArrayList<String>();
farben.add("rot");
farben.add("blau");
farben.add("gelb");
farben.remove("blau");
``` 

Wir werden die ArrayList Klasse später noch genauer anschauen.

Das *Java Collection Framework*  ist eine Menge von Interfaces und Klassen, die allgemein wiederverwendbare
Collection-Datenstrukturen liefern. Es bietet uns also sowohl Interfaces, die Collection-Typen definieren, als auch
Klassen, die diese implementieren an. Obwohl es als Framework bezeichnet wird, funktioniert es im Grunde wie eine
Library.

Das Java Collections Frameworks, stellt für uns Hochleistungsimplementierungen von Datenstrukturen und Algorithmen
bereit, um Sammlungen von Objekten beliebiger Datentypen darzustellen. Da wir diese Funktionalität nicht immer selber 
programmieren müssen, reduziert sich für uns der Programmieraufwand markant.

Das Java Collection Framework befindet sich im Paket java.util.

Wir haben die ArrayList Klasse (java.util.ArrayList) als Beispiel für eine Collection gesehen. Die ArrayList Klasse
repräsentiert eine Collection vom Typ *List* (implementiert also das Interface java.util.List) und wird mithilfe von
zugrunde liegenden Arrays implementiert, deshalb auch der Name ArrayList. Es gibt aber auch andere Klassen, welche
Collections vom Typ List darstellen: Wir werden später einige davon noch sehen.

![list0](../../java-collections/list0.png)

## Theorie

---

Das Java Collection Framework ist eine einheitliche Architektur zur Darstellung und Bearbeitung von Collections welche
folgendes enthält:

* Interfaces: Dies sind abstrakte Datentypen, welche verschiedene Collections darstellen. Mithilfe von Interfaces können
  Collections unabhängig von den Details ihrer Darstellung bearbeitet werden. Die Interfaces bilden in Java die
  Hierarchie aller Collections.

* Implementierungen/ Klassen: Dies sind die konkreten Implementierungen der Collection-Interfaces. Im Grunde handelt es
  sich um wiederverwendbare Datenstrukturen, mit konkreten Implementierungen.

* Algorithmen/ Methoden: Dies sind die Methoden, die nützliche Algorithmen, wie z. B. Hinzufügen, Löschen, Suchen und
  Sortieren, von Objekten in Collections durchführen. Viele Methoden und Algorithmen sind für verschiedene Arten der
  Collections wiederverwendbar.

![hierarchy3](../../java-collections/hierarchy3.png)

Die Interfaces in der Abbildung (Collections, Set, List, Queue, Deque, Map ...)
bilden die Grundlage des Collection Frameworks. Durch diese grundlegenden Interfaces bildet sich eine Hierarchie
innerhalb des Collection Frameworks.

Beispiel:

* Sets sind spezielle Typen von Collections. SortedSets sind spezielle Typen von Sets.
* Lists sind spezielle Typen von Collections. ArrayLists sind spezielle Typen von Lists.

In der Abbildung sieht man zu dem, dass das Collection Framework aus zwei verschiedenen Teilen besteht:
Zum einen die Collections und zum anderen die Maps. Maps stellen somit keine "echten" Collections dar. Maps sind
trotzdem Datenstrukturen zur Darstellung von Sammlungen von Objekten als eine Einheit.

Im Folgenden werden wir die wichtigsten Collections, die Unterschiede und Gemeinsamkeiten zueinander diskutieren...

---

## java.util.Collections

Das Collection-Interface ist in der Hierarchie zu oberst. Collections liefern Methoden, um Elemente hinzuzufügen, um
Elemente zu löschen und zur weiteren Verwaltung der Elemente.

```java
public interface Collection<E> extends Iterable<E>
```

Das `E` in `Collection<E>` bedeutet, dass die Elemente in der Collection den Typ *E* haben.
*E* steht hierbei für *Element*, was ein generischer Typ repräsentieren soll. Dieser generische Typ der Collection wird
beim Erstellen der Collection bestimmt.

Beispiele generischer Typ:

```java
ArrayList<String> strings = new ArrayList<String>();
ArrayList<Integer> integers = new ArrayList<Integer>();
```

### Einige Methoden vom Interface java.util.Collections

Einige Methoden des Collection-Interfaces sind im Folgenden aufgelistet, wobei die Auflistung der Methoden nicht
vollständig ist.

```java
/**
 * Gibt die Anzahl der Elemente in dieser Collection zurück.
 */
int size();

/**
 * Gibt true zurück, wenn diese Collection keine Elemente enthält.
 */
boolean isEmpty();

/**
 * Gibt true zurück, wenn diese Collection das angegebene Element enthält.
 */
boolean contains(Object o);

/**
 * Stellt sicher, dass diese Sammlung das angegebene Element enthält - 
 * Fügt das Element zur Collection hinzu.
 * Gibt true zurück, wenn sich diese Collection durch den Aufruf geändert hat.
 * (Gibt false zurück, wenn diese Collection keine Duplikate zulässt und das angegebene Element bereits enthält.)
 */
boolean add(E e);

/**
 * Entfernt das angegebene Element aus dieser Collection.
 * Gibt true zurück, wenn diese Sammlung das angegebene Element enthielt
 * (oder wenn sich die Sammlung infolge des Aufrufs geändert hat).
 */
boolean remove(Object o);

/**
 * Entfernt alle Elemente aus dieser Collection.
 */
void clear();
```

Jede konkrete Collection-Klasse implementiert diese Methoden auf unterschiedliche Art und Weisen, wobei diese
Implementierungen den jeweiligen Datenstrukturen abgestimmt sind.

## java.util.List

Listen sind geordnete Collections, denn sie enthalten beliebige Objekte in einer bestimmten Reihenfolge. In Listen
werden eine Menge von Elemente (genauer genommen Referenzen auf Objekte)
abgespeichert, wobei die Menge geordnet ist, da jedes Element an einer bestimmten Position zu finden ist:

![list1](../../java-collections/list1.png)

Beachte, dass wir bei den Listen, die Indexierung der Positionen bei 0 beginnt, genauso wie bei dem primitiven Datentyp
Array.

Listen haben eine dynamische Grösse, d.h. die Grösse der Liste muss bei der Erstellung nicht bekannt sein und die Anzahl
der enthaltenen Elemente kann sich während der Laufzeit ändern. Daher ist es möglich fortlaufend Elemente zur Liste
hinzuzufügen oder aus der Liste zu entfernen. Hierbei entstehen nie Lücken:
Fügt man ein Element an einer bestimmten Position zur Liste hinzu, dann rutschen alle nachfolgenden Elemente eine
Position nach. Entfernt man ein Element an einer bestimmten Position, so rutschen alle nachfolgen Elemente eine Position
nach oben.

Man kann auf Elemente über ihren ganzzahligen Index (Position in der Liste) zugreifen und nach Elementen in der Liste
suchen.

![list2](../../java-collections/list2.png)

Ein Element aus einer Liste entfernen:

![list3](../../java-collections/list3.png)

Wie zu Beginn erwähnt, enthalten Lists Referenzen auf Objekte. Deshalb ist es nicht möglich Listen zu erstellen, welche
primitive Datentypen als Elemente enthalten (int, double, boolean, char, ...). Dafür müssen die sogenannten
Wrapper-Klassen verwendet werden. Wrapper-Klassen bieten eine Möglichkeit, primitive Datentypen (int, double, boolean,
char, ...) als Objekte zu verwenden:
java.lang.Integer, java.lang.Double, java.lang.Boolean, java.lang.Character,..

Schauen wir uns die folgenden Beispiele an, wo wir einer Liste mit Elementen vom Typ Integer das Element 3 hinzufügen:
```java
List<Integer> integerList = new ArrayList<>();
integerList.add(Integer.valueOf(3));
```
Hier fügen wir der Liste das Integer-Objekt 3 hinzu, was gemäss der obigen Aussage korrekt ist.

```java
List<Integer> integerList = new ArrayList<>();
integerList.add(3);
```

Hier fügen wir der Liste den int-Wert 3 als primitiven Datentyp hinzu.
Obwohl wir den int-Wert 3 als primitiver Datentypen und nicht als Integer-Objekte zur Liste
*integerList* hinzufügen, kompiliert dieser Code genau so ohne Fehler.
*integerList* ist jedoch eine Liste von Integer-Objekten und nicht eine Liste von int-Werten,
warum wir dann kein Fehler ausgegeben beim Kompilieren dieses Codes gemäss der obigen Aussage?

Der Copmiler konvertiert den int-Wert zu einem Integer-Objekt und fügt dieses dann zur Liste *integerList* hinzu.
Diese Konvertierung nennt man Autoboxing.
Autoboxing ist die automatische Konvertierung zwischen den primitiven Datentypen zu Objekten ihrer entsprechenden Wrapper-Klassen, die der Java Compiler durchführt
(beispielsweise int zu Integer, double zu Double, ect.).
Wenn die Konvertierung in die andere Richtung erfolgt, nennt man dies Unboxing.

Somit ist es nicht mehr nötig, dass wir dieses Autoboxing, wie im ersten Beispiel selber durchführen müssen.

### Einige Methoden vom Interface java.util.List

```java
/*
 * Gibt die Anzahl der Elemente in dieser Liste zurück.
 */
int size();

/*
 * Gibt true zurück, wenn diese Liste keine Elemente enthält.
 */
boolean isEmpty();

/*
 * Gibt true zurück, wenn diese Liste das angegebene Element enthält.
 */
boolean contains(Object o);

/*
 * Gibt das Element an der angegebenen Position in dieser Liste zurück.
 */
E get(int index);

/*
 * Ersetzt das Element an der angegebenen Position in dieser Liste durch das angegebene Element.
 */
E set(int index,E element);

/*
 * Gibt den Index des ersten Auftretens des angegebenen Elements in dieser Liste zurück,
 * oder -1, wenn diese Liste das Element nicht enthält.
 */
int indexOf(Object o);


/*
 * Hängt das angegebene Element an das Ende der Liste an
 */
boolean add(E e);

/*
 * Fügt das angegebene Element an der angegebenen Position in dieser Liste ein.
 * Verschiebt das Element, das sich derzeit an dieser Position befindet (falls vorhanden),
 * und alle nachfolgenden Elemente.
*/
void add(int index,E element);

/*
 * Entfernt das erste Vorkommen des angegebenen Elements aus dieser Liste,
 * sofern es vorhanden ist.  Wenn diese Liste das Element nicht enthält,
 * bleibt sie unverändert.
 */
boolean remove(Object o);

/*
 * Entfernt das Element an der angegebenen Position in dieser Liste.
 */
E remove(int index);

/*
* Entfernt alle Elemente aus dieser Liste.
/*
void clear();

...
```

Das Interface java.util.List im Collection Framework ist der Datentyp der Listen, wobei in der abstrakten Klasse
java.util.AbstractList die grundlegenden Funktionalitäten implementiert sind, sodass diese den verschiedenen konkreten
Listen-Implementierungen weiter geerbt werden können.

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

### IndexOutOfBoundsException

Die IndexOutOfBoundException wird geworfen, wenn versucht wird auf einen ungültigen Index innerhalb einer Collection
zuzugreifen. Nehmen wir das Beispiel einer Liste mit der Grösse x. Dann sind die gültigen Indizes, um auf Elemente
zuzugreifen 0, 1, 2, ..., x-1 und die Indizes x, x+1, x+2, ... wären ungültig.

Diese Exception kann bei den folgenden Methoden von oben geworfen werden:
(Diese Liste hier ist genau so nicht vollständig, wie die oben.)

* public void add(int index, E element)
* public E remove(int index);
* public E get(int index)

### Beispiele

#### Beispiel 1

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

Output:
```
[]
[Cat, Hamster, Dog, Goldfish]
[Cat, Hamster, Guinea pigs, Dog, Goldfish]
[Cat, Hamster, Dog, Goldfish]
[Cat, Hamster, Goldfish]
[]

```

#### Beispiel 2 (IndexOutOfBoundsException)

Dieses Beispiel soll zeigen wie das Werfen einer `java.lang.IndexOutOfBoundsException` verursacht werden könnte.

```java
import java.util.ArrayList;

public class Hands {
    public static void main(String[] args) {
        {
            ArrayList<String> handlist = new ArrayList<>();
            handlist.add("left hand");
            handlist.add("right hand");

            System.out.println(handlist.get(2)); // Exception in thread "main" java.lang.IndexOutOfBoundsException: Index 2 out of bounds for length 2
        }
    }
}
```


Output:
```
Exception in thread "main" java.lang.IndexOutOfBoundsException: Index 2 out of bounds for length 2
	at java.base/jdk.internal.util.Preconditions.outOfBounds(Preconditions.java:64)
	at java.base/jdk.internal.util.Preconditions.outOfBoundsCheckIndex(Preconditions.java:70)
	at java.base/jdk.internal.util.Preconditions.checkIndex(Preconditions.java:248)
	at java.base/java.util.Objects.checkIndex(Objects.java:372)
	at java.base/java.util.ArrayList.get(ArrayList.java:459)
	at ch.puzzle.arraylist.Hands.main(Hands.java:12)
```

#### Beispiel 3 (Iteration `for`-Schleife)

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

#### Beispiel 4 (Iteration `while`-Schleife)

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

## java.util.Stack

java.util.Stack ist eine weitere Datenstruktur, bei der Elemente eingefügt und wieder entfernt werden können, wobei bei
Stacks immer nur auf dasjenige Element zugegriffen werden kann, das zuletzt eingefügt wurde (Last-In-First-Out = LIFO).
Auf Deutsch könnte man Stack als "Stapel" übersetzen.

![stack1](../../java-collections/stack1.png)

Ein Stack kann leer sein oder kann beliebig wachsen. Mit der Methode `push(E item)` legt man das Element *item* auf den
Stack, d.h. man fügt es zu oberst hinzu.
`pop()` entfernt das oberste Element vom Stack und gibt es zurück.

![stack2](../../java-collections/stack2.png)

Die Methode `peek()` gibt das Element zu oberst auf dem Stack zurück, ohne den Stack zu verändern.

Falls der Stack leer ist und man die Methode `pop()` oder `peek()` aufruft, wird die Exception `EmptyStackException`
geworfen.

Mit der Methode `search(Object o)` kann man ein Element im Stack suchen, wobei die Position des Elements zurückgegeben
wird. Bei den Stacks hat das oberste Element des Stacks die Position 1 und das Element darunter die Position 2, das
Element darunter die Position 3, ect. Das heisst anders als bei den ArrayLists fangen wir nicht bei 0 an die Elemente zu
indexieren, sondern bei 1.

### Alle Methoden der Klasse java.util.Stack

```java
/*
 * Konstruktor: Erstellt einen leeren Stack
 */
public Stack()

/*
 * Fügt ein Element an die oberste Stelle dieses Stacks hinzu.
 */
public E push(E item)

/*
 * Entfernt das Element an der obersten Stellen und gibt dieses Element
 * als Wert dieser Funktion zurück.
 */
public E pop()

/*
 * Gibt das Element an der obersten Stelle des Stacks zurück,
 * ohne es vom Stack zu entfernen.
 */
public E peek()

/*
 * Gibt true zurück, wenn der Stack keine Elemente enthält.
 */
public boolean empty()

/*
 * Gibt die 1-basierte Position vom oberen Ende des Stapels zurück,
 * an der sich das Objekt befindet; der Rückgabewert -1 bedeutet,
 * dass sich das Objekt nicht auf dem Stapel befindet.
 */
public int search(Object o)

```

### Beispiel

#### Beispiel 1

Im folgenden Beispiel erstellen wir zunächst ein leeres Stack mit Elementen vom Typ String und wenden die Methoden der
Stack-Klasse an und sehen, wie diese funktionieren.

```java
import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<String> colors = new Stack<>();
        colors.push("blue");
        colors.push("yellow");
        colors.push("green");
        colors.push("orange");

        System.out.println(colors); // Output: [blue, yellow, green, orange]

        System.out.println("Color on top: " + colors.peek()); // Output: Color on top: orange
        System.out.println(colors); // Output: [blue, yellow, green, orange]

        System.out.println("Color on top: " + colors.pop()); // Output: Color on top: orange
        System.out.println(colors); // Output: [blue, yellow, green]

        System.out.println("Is stack empty? " + colors.empty()); // Output: Is stack empty? false
        System.out.println("Size of stack: " + colors.size()); // Output: Size of stack: 3

        System.out.println("Position of element blue: " + colors.search("blue")); // Output: Position of element blue: 3
        System.out.println("Position of element yellow: " + colors.search("yellow")); // Output: Position of element yellow: 2
        System.out.println("Position of element green: " + colors.search("green")); // Output: Position of element green: 1

    }
}
```

Output:
```
[blue, yellow, green, orange]
Color on top: orange
[blue, yellow, green, orange]
Color on top: orange
[blue, yellow, green]
Is stack empty? false
Size of stack: 3
Position of element blue: 3
Position of element yellow: 2
Position of element green: 1

```

Im oberen Beispiel verwenden wir die Methode *size()*. Diese Methode ist nicht in der java.util.Stack-Klasse
implementiert, wird jedoch von der Vector-Mutterklasse geerbt. Diese Vector-Klasse implementiert zusätzlich weitere
Methoden des List-Interfaces, weshalb diese auch für Stacks verwendet werden können. Ein Stack bzw. die Datenstruktur des
Stacks wird jedoch durch die oben aufgeführten Methoden ausgemacht.

#### Beispiel 2 (EmptyStackException)

```java
import java.util.Stack;

public class StackExampleEmtpyStackExceptionA {
    public static void main(String[] args) {
        Stack<String> colors = new Stack<>();
        colors.pop(); // Throws: Exception in thread "main" java.util.EmptyStackException
    }
}
```

Output:
```
Exception in thread "main" java.util.EmptyStackException
	at java.base/java.util.Stack.peek(Stack.java:102)
	at java.base/java.util.Stack.pop(Stack.java:84)
	at ch.puzzle.stack.StackExampleEmtpyStackExceptionA.main(StackExampleEmtpyStackExceptionA.java:8)

```

```java
import java.util.Stack;

public class StackExampleEmtpyStackExceptionB {
    public static void main(String[] args) {
        Stack<String> colors = new Stack<>();
        colors.peek(); // Throws: Exception in thread "main" java.util.EmptyStackException
    }
}
```

Output:
```
Exception in thread "main" java.util.EmptyStackException
	at java.base/java.util.Stack.peek(Stack.java:102)
	at ch.puzzle.stack.StackExampleEmtpyStackExceptionB.main(StackExampleEmtpyStackExceptionB.java:8)

```

### Übungen

#### Aufgabe 1

Versuche eine eigene Stack-Klasse (`MyStack<E>`) zu implementieren mithilfe von Arrays und verwende dabei keine anderen
Collections-Klassen.

Die MyStack Klasse sollte eine dynamische Grösse haben, d.h. sie der Stack sollte beliebig wachsen können. Da der Stack
mithilfe von Arrays implementiert werden soll, muss also in deiner Klasse die Kapazität des Stacks sichergestellt
werden.

Implementiere die folgenden Methoden:

* `public E push(E item)`
* `public E pop( )` (soll EmptyStackException werfen)
* `public E peek() ` (soll EmptyStackException werfen)
* `int size()`
* `public boolean empty()`

Beachte, dass du die `toString()` Methode anpasst, sodass die MyStack-Stacks beim printen übersichtlich dargestellt
werden, wie im Beispiel oben: [blue, yellow, green, orange]

#### Aufgabe 2

Erweitere deine MyStack Klasse. Implementiere zusätzlich die folgende Methode:

* `public int search(Object o)`

## java.util.Queue
Eine Queue ist ähnlich einem Stack ein Behälter, in den Elemente eingefügt und nur in einer bestimmten Reihenfolge
wieder entnommen werden können. Bei den Queues gilt das _First In First Out_ (=FIFO) Prinzip:
Das Einfügen eines Elements erfolgt an einem Ende und heisst _EnQueue_. Die Entfernung eines Elements erfolgt dann am
anderen Ende und heisst _DeQueue_. Das heisst also, das erste Elemente, das einer Queue eingefügt wird, ist das Element
das zuerst der Queue entnommen werden kann.
Queues können in ihrer Grösse beschränkt oder unbeschränkt sein.

![queue2](../../java-collections/queue2.png)

Auf Deutsch könnte man Queues als "Warteschlangen" bezeichnen.
Wir kennen Warteschlangen von unserem Alltag:
Beispielsweise vom Einkaufen, wo es eine Schlange von Kunden gibt, die an der Kasse auf einen Kassierer warten.
Ein Kunde stellt sich zu hinterst an  und rückt "in der Warteschlange" vor, wenn vorherigen Kunden bedient wurden.

![queue1](../../java-collections/queue1.png)

### Alle Methoden vom Interface java.util.Queue

```java
/*
 * Fügt das angegebene Element in diese Queue ein,
 * wenn dies  möglich ist, ohne Kapazitätsbeschränkungen zu verletzen.
 * Bei Erfolg wird true zurückgegeben und eine IllegalStateException ausgelöst wird, wenn derzeit
 * kein Platz verfügbar ist.
 */
boolean add(E e);

/*
 * Fügt das angegebene Element in diese Queue ein,
 * wenn dies  möglich ist, ohne Kapazitätsbeschränkungen zu verletzen.
 * Bei Erfolg wird true zurückgegeben und sonst wird fals zurückgegeben.
 *
 * Bei der Verwendung einer Queue mit Kapazitätsbeschränkungen ist diese Methode in der Regel add(E e) vorzuziehen, 
 * da bei Verletzung der Kapazitätsbeschränkungen keine Exception geworfen wird, sondern false zurückgegeben wird.
 * 
 */
boolean offer(E e);

/*
 * Gibt das Element am Anfang des Queues zurück und entfernt es in der Queue.
 * Falls die Queue leer ist, dann wird null zurückgegeben.
 */
E poll();

/*
 * Gibt das Element am Anfang des Queues zurück und entfernt es in der Queue.
 * Diese Methode unterscheidet sich von poll() nur darin, dass sie eine Exception auslöst, wenn die Queue leer ist.
 */
E remove();

/*
 * Gibt das Element am Anfang des Queues zurück, entfernt es aber nicht.
 * Gibt null zurück, wenn die Queue leer ist.
 */
E peek();

/*
 * Gibt das Element am Anfang des Queues zurück, entfernt es aber nicht.
 * Diese Methode unterscheidet sich von peek() nur darin, dass sie eine Exception auslöst, wenn die Queue leer ist.
 */
E element();
```
## java.util.Deque
Die Deque ist eine Queue mit zwei Enden, und Datenelemente können an beiden Enden hinzugefügt oder entfernt
werden. Die Deque in Java wird über die das Interface java.util.Deque implementiert, die ein
Subtyp des Interface java.util.Queue ist.

![deque1](../../java-collections/deque1.png)


### Alle Methoden vom Interface java.util.Deque

```java

/*
 * Fügt das angegebene Element an den Anfang dieser Deque ein,
 * wenn dies  möglich ist, ohne Kapazitätsbeschränkungen zu verletzen 
 * und löst eine IllegalStateException aus, wenn derzeit kein Platz verfügbar ist.
 */
void addFirst(E e);

/*
 * Fügt das angegebene Element an das Ende dieser Deque ein,
 * wenn dies  möglich ist, ohne Kapazitätsbeschränkungen zu verletzen
 * und löst eine IllegalStateException aus, wenn derzeit kein Platz verfügbar ist.
 */
void addLast(E e);

/*
 * Fügt das angegebene Element an den Anfang dieser Deque ein,
 * wenn dies  möglich ist, ohne Kapazitätsbeschränkungen zu verletzen.
 * Bei Erfolg wird true zurückgegeben und sonst wird fals zurückgegeben.
 *
 * Bei der Verwendung einer Deque mit Kapazitätsbeschränkungen ist diese Methode in der Regel addFirst(E e) vorzuziehen, 
 * da bei Verletzung der Kapazitätsbeschränkungen keine Exception geworfen wird, sondern false zurückgegeben wird.
 * 
 */
boolean offerFirst(E e);

/*
 * Fügt das angegebene Element an das Ende dieser Deque ein,
 * wenn dies  möglich ist, ohne Kapazitätsbeschränkungen zu verletzen.
 * Bei Erfolg wird true zurückgegeben und sonst wird fals zurückgegeben.
 *
 * Bei der Verwendung einer Deque mit Kapazitätsbeschränkungen ist diese Methode in der Regel addLast(E e) vorzuziehen,
 * da bei Verletzung der Kapazitätsbeschränkungen keine Exception geworfen wird, sondern false zurückgegeben wird.
 *
 */
boolean offerLast(E e);

/*
 * Gibt das Element am Anfang des Deques zurück und entfernt es in der Deque.
 * Falls die Deque leer ist, dann wird null zurückgegeben.
 */
E pollFirst();

/*
 * Gibt das Element am Ende des Deques zurück und entfernt es in der Deque.
 * Falls die Deque leer ist, dann wird null zurückgegeben.
 */
E pollLast();

/*
 * Gibt das Element am Anfang des Deques zurück und entfernt es in der Deque.
 * Diese Methode unterscheidet sich von pollFirst() nur darin, dass sie eine Exception auslöst, wenn die Deque leer ist.
 */
E removeFirst();

/*
 * Gibt das Element am Ende des Deques zurück und entfernt es in der Deque.
 * Diese Methode unterscheidet sich von pollLast() nur darin, dass sie eine Exception auslöst, wenn die Deque leer ist.
 */
E removeLast();

/*
 * Gibt das Element am Anfang des Deques zurück, entfernt es aber nicht.
 * Gibt null zurück, wenn die Deque leer ist.
 */
E peekFirst();

/*
 * Gibt das Element am Ende des Deques zurück, entfernt es aber nicht.
 * Gibt null zurück, wenn die Deque leer ist.
 */
E peekLast();

/*
 * Gibt das Element am Anfang des Deques zurück, entfernt es aber nicht.
 * Diese Methode unterscheidet sich von peekFirst() nur darin, dass sie eine Exception auslöst, wenn die Deque leer ist.
 */
E getFirst();

/*
 * Gibt das Element am Ende des Deques zurück, entfernt es aber nicht.
 * Diese Methode unterscheidet sich von peekLast() nur darin, dass sie eine Exception auslöst, wenn die Deque leer ist.
 */
E getLast();

/*
 * Entfernt das erste Vorkommen des angegebenen Elements aus dieser Deque,
 * sofern es vorhanden ist.  Wenn diese Deque das Element nicht enthält,
 * bleibt sie unverändert.
 */
boolean removeFirstOccurrence(Object o);

/*
 * Entfernt das letzte Vorkommen des angegebenen Elements aus dieser Deque,
 * sofern es vorhanden ist.  Wenn diese Deque das Element nicht enthält,
 * bleibt sie unverändert.
 */
boolean removeLastOccurrence(Object o);

// *** Queue methods ***
...
// *** Stack methods ***
...

```

Im Interface java.util.Deque sind Queue und Stack Methoden ebenfalls deklariert.
Deques, bei denen Elemente nur an einem Ende eingefügt und am nur anderen Ende entnommen werden,
stellen wiederum Queues dar.
Deques, bei denen Elemente an einem Ende eingefügt und am gleichen Ende entnommen werden,
stellen Stacks dar.


## java.util.LinkedList

LinkedLists sind verkettete Listen. D.h. die Elemnte der Listen sind zu einander verkettet
und nicht wie bei einer ArrayList an bestimmten Positionen platziert.

java.util.LinkedList implementiert zwei Collection-Interfaces: java.util.List und java.util.Deque.
Das bedeutet grundsätzlich, dass sie sowohl die Methoden des List-Interfaces implementiert, als auch die des Deque-Interfaces.

Grundsätzlich gibt es zwei Arten von verketteten Listen: Einfach verkettete Listen und doppelt verkettete Liste.
Wir werden beide anschauen, wie sie im Allgeimeinen aussehen.
Die java.util.LinkedList ist die Implementierung einer doppelt verketteten Liste..

### Einfach verkettete Listen

Verkettete Listen bestehen aus Knoten (Nodes).
Jeder Knoten enthält ein Element und eine Referenz auf einen weiteren Knoten, falls dieser vorhanden ist.
Die Knoten sind somit über eine Referenz auf jeweils den nächsten Knoten miteinander verkettet.
Die verkettete Liste enthält schlussendlich eine Referenz auf den ersten Knoten in der Liste.
Der letzte Knoten enthält eine Referenz auf `null`.

![linkedlist1](../../java-collections/linkedlist1.png)


#### Element zu einer einfach verketten Liste hinzufügen

Wird ein Knoten zu einer einfach verketteten Liste hinzugefügt, dann muss die Referenz des Knotens davor
auf dieses Element zeigen und die Referenz des Elements, das hinzugefügt wird, muss auf den nächsten Knoten zeigen.
So wird ein neuer Knoten zwischen zwei Knoten eingeschoben.

![linkedlist2](../../java-collections/linkedlist2.png)

#### Element zu aus einer einfach verketten Liste löschen

Wird ein Knoten aus einer einfach verketteten Liste gelöscht, dann muss die Referenz des Knotens davor
auf das zu löschende Element gelöscht werden und ersetzt werden mit der Referenz auf das nächste Element.
Die Referenz des Elements, das gelöscht wird, auf das nächste Element muss auch gelöscht werden.
So wird ein bestehender Knoten zwischen zwei Knoten entfernt.

![linkedlist3](../../java-collections/linkedlist3.png)

### Doppelt verkettete Listen

In einer doppelt verketteten Liste haben die Knoten nicht nur eine Referenz auf den nächsten Knoten, sondern
auch eine Referenzen auf den vorherigen Knoten.
Eine mögliche Implementierung einder doppelt verketteten Liste könnte sein, dass der letzte Knoten,
wie auch schon bei einer einfach verketteten Liste eine Referenz auf `null` hat als nächsten Knoten
und der erste Knoten in einer doppelt verketteten Liste eine Referenz auf `null` hat als vorherigen Knoten.
Zusätzlich hat man eine Referenz auf den Kopf der Liste, d.h. auf den ersten Knoten
und eine Referenze auf den letzten Knoten der Liste.

![linkedlist4](../../java-collections/linkedlist4.png)

Das Einfügen und Entfernen funktioniert analog zu einer einfach verketteten Liste.

#### Ein Element aus einer (einfach oder doppelt) verketteten Liste auslesen
Wenn man ein Element in einer einfach verketteten Liste auslesen möchte, dann muss man vom ersten Knoten
anfangen und ein Knoten nach dem anderen die Liste durchlaufen bis zu diesem Element. Im "schlimmsten" Fall
muss über alle Knoten iteriert werden, wenn das Element, das mun sucht, im letzten Knoten ist.

#### ArrayList vs. LinkedList

Der Vorteil von LinkedLists besteht darin, dass Elemente schneller hinzugefügt und schneller aus der Liste
gelöscht werden können im Vergleich zu ArrayLists.
Bei einer LinkedList müssen nur die Referenzen zum "Vorgänger" und "Nachfolgen" angepasst werden, wenn man ein Element
einfügen oder löschen möchte.
Der Nachteil jedoch besteht darin, dass der Zugriff auf Elementen der Liste an einer bestimmten Position
im Vergleich zu ArrayLists langsamer ist, da in diesem Fall die Liste bis zu dem entsprechenden Element
durchlaufen werden muss.
Die Entscheidung für einen bestimmten Listen-Typ ist also  abhängig von der Art und Anzahl
der Zugriffe.

### LinkedList-Klasse im Java
Die LinkedList-Klasse im Java (java.util.LinkedList) implementiert eine doppelt verkettete Liste.
Sie ist so implementiert, dass sie zwei Referenzen enthält, zum einen die Referenz
zum ersten Knoten und zum anderen die Referenz zum zweiten Knoten:

```java
public class LinkedList<E>  extends AbstractSequentialList<E>  implements List<E>, Deque<E>, Cloneable, java.io.Serializable {
  transient int size = 0;

  /**
   * Pointer to first node.
   */
  transient Node<E> first;

  /**
   * Pointer to last node.
   */
  transient Node<E> last;
  
  ...
}

```

Ein Knoten also das Objekt _Node_ enthält das Element, welches einen generischen Typ hat (deshalb `Node<E>`),
die Referenz auf den vorherigen Knoten, also auf ein Node-Objekt und eine Referenz auf den nächsten Knoten.
Die statische Klasse `Node<E>` ist innerhalb der Klasse java.util.LinkedList definiert:

```java
    private static class Node<E> {
        E item;
        Node<E> next;
        Node<E> prev;

        Node(Node<E> prev, E element, Node<E> next) {
            this.item = element;
            this.next = next;
            this.prev = prev;
        }
    }

```
### Einige Methoden der Klasse java.util.LinkedList

```java
/*
 * Konstruktor: Erstellt eine initial leere Liste
 */
public LinkedList()

/*
 * Gibt das erste Element der Liste zurück.
 */
public E getFirst()

/*
 * Gibt das letzte Element der Liste zurück.
 */
public E getLast()

/*
 * Entfernt das erste Element der Liste und gibt es zurück.
 */
public E removeFirst()

/*
 * Entfernt das letzte Element der Liste und gibt es zurück.
 */
public E removeLast()

/*
 * Fügt das angegeben Element an den Anfang der Liste ein.
 */
public void addFirst(E e)

/*
 * Fügt das angegebene Element an das Ende der Liste an.
 */
public void addLast(E e)
...
        
// *** Queue and Deque methods ***
        ...
// *** Stack methods ***
        ...
// *** List methods ***
        ...


```

### Beispiele

Beispiele kommen noch

### Übungen

Übungen kommen noch



Fortsetzung folgt...
