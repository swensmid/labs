---
title: "Datentypen"
linkTitle: "Datentypen"
weight: 3
description: >
  Modul #J1
---


## Datentypen
In Java sind Variablen stark typisiert. Das heisst, dass alle Variablen bei ihrer Erstellung mit einem Datentyp versehen werden müssen.
Seit Java 10 gibt es Typinferenz für lokale Variablen, das heisst, eine lokale Variable kann deklariert und initialisiert werden (muss gleichzeitig geschehen), ohne dass ein Datentyp angegeben werden muss - anstelle des Datentyps kann _var_ verwendet werden:

```java
var sum = 20;
```

Es gibt zwei Arten von Datentypen: Primitive Datentypen und Referenztypen. Der grundlegende Unterschied besteht darin, dass eine primitive Variable den tatsächlichen Wert speichert, während eine Referenzvariable die Adresse des Objekts speichert, auf welches sie sich bezieht. Dies hat mit dem Java Memory Modell zu tun. Das nachfolgende Bild zeigt das Java Memory Modell als einfache Darstellung, es besteht grundsätzlich aus dem Stack Memory und dem Heap Space. Primitive Datentypen werden nur auf dem Stack angelegt. Objekte, wie das im Bild gezeigte Auto (Car), sind im Heap abgelegt. Die Referenz auf das Objekt wird auf dem Stack angelegt. Die Referenz "zeigt" also auf das Objekt im Heap.

![](../../java-grundlagen/Datentypen.png)

Dieser fundamentale Unterschied ist relevant beim Vergleich von Werten und Referenzen. Der Operator für den Vergleich ==, vergleicht stets die Werte auf dem Stack miteinander. Bei Referenzen wird dort also überprüft, ob sie auf dasselbe Objekt zeigen. Wenn der Inhalt von Objekten verglichen werden soll, so muss dies mit der Methode _equals_ gemacht werden.
