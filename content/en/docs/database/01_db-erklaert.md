---
title: "Datenbank 101"
linkTitle: "Datenbank 101"
weight: 1
---

## Was ist eine Datenbank?
Grundsätzlich sagt der Name "Datenbank" bereits was sie ist. In einer Datenbank werden Daten gespeichert.
Ähnlich wie bei einer normalen Bank werden die Daten an einem klar definierten Ort abgespeichert.
Fast so wie bei deinem Bankkonto, wo jeweils der Lohn eingezahlt wird.

Eine Datenbank ist meist in Stufen aufgebaut, die wie folgt aussehen können:

Zu oberst ist die Datenbank an sich. Sie ist eigentlich das Gebäude der Bank wo schlussendlich die Infrastruktur,
sowie das Geld zu finden ist.

Die nächste Stufe ist das Schema. Dieses ist mit einem Raum zu vergleichen, der viele verschiedene
Aktenschränke beinhaltet.

Diese Aktenschränke wären in einer Datenbank die Tabellen. Die Tabellen beinhalten schlussendlich
die verschiedenen Daten, wie zum Beispiel dein erwähntes Bankkonto mit deinem Kontostand.

Schlussendlich sieht der Aufbau also so aus: *Datenbank* -> *Schema* -> *Tabelle*


## Arten von Datenbanken
In diesem Kapitel soll ein kleiner Überblick der verschiedenen Arten von Datenbanken und deren 
Vor- und Nachteile geklärt werden.

Die am meisten verwendeten Datenbank Arten sind Relationale *(SQL)* und NO-SQL Datenbanken.
Relationale *(SQL)* Datenbanken werden klar am häufigsten eingesetzt und sind auch am bekanntesten
> Bei den Übungen, sowie Exams werden ausschliesslich Relationale *(SQL)* Datenbanken verwendet.

### Relational *(SQL)*
Relationale Datenbanken sind ähnlich wie Excel Tabellen aufgebaut. Sie verwenden Tabellen, die jeweils eine Zeile und
eine Spalte haben *(auch Row und Column genannt)*. Pro Spalte *(Column)* kann ein Datentyp festgelegt werden, der in
dieser Spalte gespeichert werden kann. Beispiel: Eine Spalte mit dem Titel Alter hat einen Datentyp Nummer. Also können
ausschliesslich Zahlen in dieser Spalte eingegeben werden. Die Spalte heisst auch **Attribut**. 

Eine Reihe *(Row)* beinhaltet jeweils einen ganzen Datensatz, wie beispielsweise alle Benutzerdaten. Die Reihe wird auch
**Tupel** genannt.

![](../images/Begriffe_relationaler_Datenbanken.png)

*Quelle: https://de.wikipedia.org/wiki/Datenbanktabelle*

### NO-SQL
Im Gegensatz zu relationalen Datenbanken speichern NoSQL-Datenbanken Daten in Formaten wie Dokumenten, 
Schlüssel-Wert-Paaren, Spalten oder Graphen. Dies ermöglicht es, unstrukturierte Daten effektiver zu speichern und 
abzurufen. Außerdem sind NoSQL-Datenbanken horizontal skalierbar, was bedeutet, dass sie auf mehrere Server verteilt 
werden können, um die Leistung zu verbessern und die Belastung auf mehrere Maschinen zu verteilen.

Wie erklärt gibt es viele verschiedene Ansätze bei NO-SQL, deshalb gibt es auch keine gemeinsame Syntax wie es sie bei
SQL gibt. Bei den verschiedenen Anbietern kann also die Verwendung sehr unterscheiden. Auch wegen der verschiedenen 
Speicherarten ist keine NO-SQL Datenbank wie die andere,

![](../images/NoSQLDatabases.jpg)

*Quelle: https://www.geeksforgeeks.org/types-of-nosql-databases/*

## Datentypen
In diesem Teil werden kurz die wichtigsten Datentypen aufgelistet. Je nach Datenbank können die Namen der Datentypen 
abweichen, sollten jedoch von der Funktionalität gleich sein. In dieser Auflistung wurden die PostgreSQL Datentypen 
verwendet:

* INTEGER: speichert ganze Zahlen ohne Nachkommastellen, die in der Regel im Bereich von 
-2.147.483.648 bis 2.147.483.647 liegen.
* NUMERIC: speichert genaue Dezimalzahlen mit einer beliebigen Anzahl von Dezimalstellen. Dieser Datentyp wird häufig 
in der Finanz- und Buchhaltungsbranche verwendet.
* CHAR(n): speichert eine Zeichenkette mit fester Länge von n Zeichen. Wenn der Wert kürzer als n ist, wird er mit 
Leerzeichen aufgefüllt, um die feste Länge zu erreichen.
* VARCHAR(n): speichert eine Zeichenkette mit variabler Länge bis maximal n Zeichen. Dieser Datentyp wird häufig für 
Textfelder verwendet, die eine unterschiedliche Anzahl von Zeichen enthalten können.
* DATE: speichert Datumsangaben wie beispielsweise Geburt- oder Anstellungsdaten. Die unterstützten Datumsbereiche 
liegen zwischen 4713 v. Chr. und 5874897 n. Chr.
* TIME: speichert Zeitwerte wie beispielsweise Uhrzeiten. Dieser Datentyp unterstützt Zeiten zwischen 
00:00:00 und 24:00:00.
* TIMESTAMP: speichert sowohl Datum als auch Uhrzeit als ein einziges Datum/Zeit-Feld. Dieser Datentyp wird häufig in 
Anwendungen verwendet, die mit Zeitstempeln arbeiten, z.B. in der Logistik.
* BOOLEAN: speichert Wahrheitswerte, also entweder TRUE oder FALSE. Dieser Datentyp wird oft verwendet, 
um eine Ja/Nein-Entscheidung abzubilden.

Wenn du noch mehr über die einzelnen Datentypen erfahren möchtest, findest du unter diesem Link alle verfügbaren
Datentypen in PostgreSQL: [Liste aller Datentypen (PostgreSQL)](https://www.postgresql.org/docs/current/datatype.html#:~:text=The%20following%20types%20(or%20spellings,without%20time%20zone)%2C%20xml%20.)

