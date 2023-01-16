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

#### Voraussetzungen

* Gute Grundlagenkenntnisse von Java-Anwendungen

---

## Einleitung

Beim Programmieren müssen wir oft Daten speichern bzw. Informationen verwalten, um gewisse Probleme zu lösen.
In diesem Modul werden wir das Java Collection Framework anschauen, weil dieses Framework uns die Werkzeuge zum
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

Das Java Collections Frameworks stellt für uns Hochleistungsimplementierungen von Datenstrukturen und Algorithmen
bereit, um Sammlungen von Objekten beliebiger Datentypen darzustellen. Da wir diese Funktionalität nicht immer selber 
programmieren müssen, reduziert sich für uns der Programmieraufwand markant.

Das Java Collection Framework befindet sich im Paket java.util.

Wir haben die ArrayList Klasse (java.util.ArrayList) als Beispiel für eine Collection gesehen. Die ArrayList Klasse
repräsentiert eine Collection vom Typ *List* (implementiert also das Interface java.util.List) und wird mithilfe von
zugrunde liegenden Arrays implementiert, deshalb auch der Name ArrayList. Es gibt aber auch andere Klassen, welche
Collections vom Typ List darstellen: Wir werden später einige davon noch sehen.

![list0](../java-collections/list0.png)

## Theorie

---

Das Java Collection Framework ist eine einheitliche Architektur zur Darstellung und Bearbeitung von Collections, welche
folgendes enthält:

* Interfaces: Dies sind abstrakte Datentypen, welche verschiedene Collections darstellen. Mithilfe von Interfaces können
  Collections unabhängig von den Details ihrer Darstellung bearbeitet werden. Die Interfaces bilden in Java die
  Hierarchie aller Collections.

* Implementierungen/Klassen: Dies sind die konkreten Implementierungen der Collection-Interfaces. Im Grunde handelt es
  sich um wiederverwendbare Datenstrukturen, mit konkreten Implementierungen.

* Algorithmen/Methoden: Dies sind die Methoden, die nützliche Algorithmen, wie z. B. Hinzufügen, Löschen, Suchen und
  Sortieren, von Objekten in Collections durchführen. Viele Methoden und Algorithmen sind für verschiedene Arten der
  Collections wiederverwendbar.

Die Interfaces in der folgenden Abbildung (Collections, Set, List, Queue, Deque, Map ...)
bilden die Grundlage des Collection Frameworks. Durch diese grundlegenden Interfaces bildet sich eine Hierarchie
innerhalb des Collection Frameworks:

![hierarchy3](../java-collections/hierarchy3.png)

Auf dieser Grafik ist sichtbar, dass zum Beispiel:

* Sets spezielle Typen von Collections sind. SortedSets wiederum sind spezielle Typen von Sets.
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
*E* steht hierbei für *Element*, was ein generischer Typ repräsentiert. Dieser generische Typ der Collection wird
beim Erstellen der Collection bestimmt.

Beispiele generischer Typ:

```java
ArrayList<String> strings = new ArrayList<String>();
ArrayList<Integer> integers = new ArrayList<Integer>();
```

In diesem Beispiel haben wir zuerst eine Liste mit Strings als Elemente erstellt, dann eine Liste mit Integers.

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