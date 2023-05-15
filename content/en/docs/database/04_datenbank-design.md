---
title: "Datenbank Design"
linkTitle: "Datenbank Design"
weight: 3
---

## Inhalt
* [Normalisierung](#normalisierung)
  * [Erste Normalform (1NF)](#erste-normalform-1nf)
  * [Zweite Normalform (2NF)](#zweite-normalform-2nf)
  * [Dritte Normalform (3NF)](#dritte-normalform-3nf)
* [Datenbankdesign](#datenbankdesign)
  * [Kardinalität](#kardinalität)


## Normalisierung
Die Normalisierung in SQL ist ein Prozess, bei dem Datenbanktabellen in bestimmte Normalformen gebracht werden, um die
Datenintegrität und -konsistenz sicherzustellen und die Redundanz zu minimieren. Ziel ist es, die Daten effizient und
konsistent zu speichern, zu verwalten und zu abzufragen.

### Erste Normalform (1NF)
Eine Tabelle ist in erster Normalform, wenn alle Spalten atomare Werte enthalten, d.h. keine
wiederholten oder gruppierten Werte aufweisen.

Beispiel: Eine Tabelle mit einer Spalte namens "Telefonnummern", die mehrere Telefonnummern durch Kommas oder Semikolons
getrennt enthält, ist nicht in erster Normalform. Stattdessen sollte jede Telefonnummer in einer separaten Zeile
aufgeführt werden.

### Zweite Normalform (2NF)
Eine Tabelle ist in zweiter Normalform, wenn alle Nicht-Schlüssel-Spalten voll funktional vom
Primärschlüssel abhängen, d.h. dass es keine Teilschlüsselabhängigkeiten gibt.

Beispiel: Eine Tabelle mit Bestellungen und Produkten, bei der jede Bestellung mehrere Produkte enthält und jede
Produktzeile die Bestellungs-ID enthält, ist nicht in zweiter Normalform. Stattdessen sollte eine separate Tabelle
für Bestellungen und eine separate Tabelle für Produkte erstellt werden, die über die Bestellungs-ID verknüpft sind.

### Dritte Normalform (3NF)
Eine Tabelle ist in dritter Normalform, wenn alle Nicht-Schlüssel-Spalten nicht-transitiv vom
Primärschlüssel abhängen, d.h. dass es keine transitiven Abhängigkeiten zwischen Nicht-Schlüssel-Spalten gibt.

Beispiel: Eine Tabelle mit Mitarbeitern und Abteilungen, bei der jede Zeile sowohl den Namen des Mitarbeiters als auch
den Namen der Abteilung enthält, ist nicht in dritter Normalform. Stattdessen sollte eine separate Tabelle für
Abteilungen erstellt werden, die über die Abteilungs-ID mit der Mitarbeiter-Tabelle verknüpft ist.

Es gibt auch höhere Normalformen wie die Boyce-Codd-Normalform (BCNF) und die Vierte Normalform (4NF), aber diese sind
für den Anfang weniger relevant und komplexer zu erklären.

## Datenbankdesign
In diesem Teil schauen wird uns hauptsächlich die beiden Begriffe ERM (Entity-Relationship-Modell) und ERD
(Entity-Relationship-Diagramm) an. Wichtig ist den Unterschied der beiden zu kennen.
Ein ERM ist eine Modellierungstechnik, die zur Abbildung der Beziehungen zwischen verschiedenen Entitäten in
einem System verwendet wird. Es besteht aus Rechtecken (Entitäten), Diamanten (Beziehungen) und Linien (Beziehungen zwischen Entitäten und
Attributen) und ermöglicht eine visuelle und intuitive Darstellung der Datenstruktur und -beziehungen in einer
Datenbank. 

Ein ERD ist eine grafische Darstellung eines ERM, die verwendet wird, um die Beziehungen
zwischen Entitäten und Attributen darzustellen. Es besteht aus Entitäten, Attributen und Beziehungen und bietet eine 
formale Möglichkeit, die Struktur und das Verhalten eines Systems darzustellen. In diesem Schritt wird hauptsächlich 
angeschaut, was in der Datenbank benötigt wird und so eine klare Struktur gefunden. Diese Struktur kann dann später in 
einem ERD dargestellt werden.

Es gibt viele verschiedene Zeichen-Softwares für das Erstellen von ERDs. Zu empfehlen ist draw.io, da es sich dabei um
eine Web-Applikation handelt, welche keinen Download benötigt. Auch das spätere Diagramm wurde mit draw.io erstellt. 
Wichtig beim Erstellen sind auch die Kardinalitäten, die für die Beziehungen benötigt werden. Schauen wir uns
diese also an.

### Kardinalität
Es gibt verschiedene Methode, um die Kardinalität einer Beziehung zu beschreiben. Wir verwenden hauptsächlich die 
[Chen-Notation](https://de.wikipedia.org/wiki/Chen-Notation). Alternativ kann auch die 
[Martin-Notation](https://de.wikipedia.org/wiki/Martin-Notation) verwendet werden. So funktioniert die Chen-Notation:

**1:1 (1 zu 1)**
* Jede Entität der ersten Entitätsmenge steht mit genau einer Entität der zweiten Entitätsmenge in Beziehung, und 
umgekehrt.

**1:c (1 zu [0 oder 1])**
* Jede Entität der ersten Entitätsmenge kann mit höchstens einer Entität der zweiten Entitätsmenge in Beziehung stehen. 
Jede Entität der zweiten Entitätsmenge steht mit genau einer Entität der ersten Entitätsmenge in Beziehung.

**1:m (1 zu [mindestens 1])**
* Jede Entität der ersten Entitätsmenge steht mit mindestens einer Entität der zweiten Entitätsmenge in Beziehung. 
Jede Entität der zweiten Entitätsmenge steht mit genau einer Entität der ersten Entitätsmenge in Beziehung.

**1:mc (1 zu [beliebig vielen])**
* Jede Entität der ersten Entitätsmenge kann mit beliebig vielen Entitäten der zweiten Entitätsmenge in Beziehung 
stehen. Jede Entität der zweiten Entitätsmenge steht mit genau einer Entität der ersten Entitätsmenge in Beziehung.

**c:c ([1 oder 0] zu [0 oder 1])**
* Jede Entität der ersten Entitätsmenge kann mit höchstens einer Entität der zweiten Entitätsmenge in Beziehung stehen, 
und umgekehrt.

**c:m ([0 oder 1] zu [mindestens 1])**
* Jede Entität der ersten Entitätsmenge steht mit mindestens einer Entität der zweiten Entitätsmenge in Beziehung. 
Jede Entität der zweiten Entitätsmenge kann mit höchstens einer Entität der ersten Entitätsmenge in Beziehung stehen.

**c:mc ([0 oder 1] zu [beliebig vielen])**
* Jede Entität der ersten Entitätsmenge kann mit beliebig vielen Entitäten der zweiten Entitätsmenge in Beziehung 
stehen. Jede Entität der zweiten Entitätsmenge kann mit höchstens einer Entität der ersten Entitätsmenge in Beziehung 
stehen.

**m:m ([mindestens 1] zu [mindestens 1])**
* Jede Entität der ersten Entitätsmenge steht mit mindestens einer Entität der zweiten Entitätsmenge in Beziehung, 
und umgekehrt.

**m:mc ([mindestens 1] zu [beliebig vielen])**
* Jede Entität der ersten Entitätsmenge kann mit beliebig vielen Entitäten der zweiten Entitätsmenge in Beziehung 
stehen. Jede Entität der zweiten Entitätsmenge steht mit mindestens einer Entität der ersten Entitätsmenge in Beziehung.

**mc:mc ([beliebig viele] zu [beliebig vielen])**
* Jede Entität der ersten Entitätsmenge kann mit beliebig vielen Entitäten der zweiten Entitätsmenge in Beziehung 
stehen, und umgekehrt.

Wenn wir also unser Wissen in einem ERM aufzeichnen, würde das ungefähr wie in diesem Diagramm aussehen:

![ERD](../images/ERD.jpg)

Hier wurde eine Zoodatenbank dargestellt, die Tiere, Angestellte und Nahrung hat.
> Hinweis: mehrere zu mehrere (m:m, mc:m, ...) benötigen normalerweise eine Zwischentabelle, da sonst keine eindeutige
> Verbindung zwischen den Tabellen hergestellt werden kann.