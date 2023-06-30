---
title: "Java Grundlagen"
linkTitle: "Java Grundlagen"
weight: 3
description: >
  Modul #J1
---


#### Ziele
* Ich weiss, was eine Klasse ist
* Ich weiss, was Variablen und Datentypen sind
* Ich kenne die primitiven Datentypen in Java: boolean, byte, short, int, long, double, float, char
* Ich kenne die Klasse String
* Ich kenne Arrays und kann diese instanzieren, ihnen Werte von Indexen entnehmen und Werte an Indexe zuweisen
* Ich kann eine Variable deklarieren und initialisieren
* Ich kenne den Unterschied zwischen statischen und nicht statischen Elementen
* Ich weiss, wann ich das Schlüsselwort static verwenden sollte und wann nicht
* Ich kenne den Zugriff auf statische und nicht statische Elemente
* Ich weiss, was eine statische Methode ist und kann sie aufrufen
* Ich weiss, was eine Utility-Klasse ist und kenne deren wichtigste Bestandteile
* Ich verstehe den Unterschied zwischen Methoden mit und ohne Rückgabewert
* Ich kann eine Methodensignatur für Methoden mit und ohne Rückgabewert richtig schreiben
* Ich kann Methoden schreiben, die Parameter entgegennehmen
* Ich weiss, dass jede Anweisung mit einem Strichpunkt abgeschlossen werden muss
* Ich weiss, dass geschweifte Klammern einen Block definieren und ich verwende sie in jeder Kontrollstruktur, um die Code-Blocks voneinander abzugrenzen (lieber zu viel klammern als zu wenig)
* Ich kenne die Main-Methode und weiß, warum eine Applikation nur EINE Main-Methode haben sollte
* Ich kenne die Methode 'System.out.println' und kann sie anwenden
* Ich kann eine Eingabe von der Konsole lesen und in einer Variablen speichern
* Ich kann arithmetische Ausdrücke schreiben: Addition, Subtraktion, Multiplikation, Division, Modulo (Rest einer Division)
* Ich kenne die relationalen Operatoren: ==, >=, <=, >, <, !=
* Ich kenne die booleschen Operatoren: && (AND), || (OR), ! (NOT), ^(XOR)
* Ich weiß, was eine bedingte Anweisung ist und kann sie korrekt anwenden
* Ich kann eine Schleife programmieren: for, foreach, while und do-while
* Ich kenne die switch-Anweisung

---

## Terminologie
| Begriff                           | Beschreibung                                                                                                                                                                                                                   |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Programm                          | Eine Folge von Anweisungen (engl. “statement”), welche nacheinander ausgeführt werden (von oben nach unten)                                                                                                                    |
| Anweisung (statement)             | Eine einzelne Aktion, wie zum Beispiel das Ausgeben eines Satzes auf der Konsole. Ein Statement wird mit einem Semikolon abgeschlossen                                                                                         |
| Block                             | Eine Gruppe von keiner, einer oder mehreren Anweisungen, die von geschweiften Klammern {...} umgeben ist                                                                                                                       |
| Methode                           | Was in anderen Programmiersprachen als «Funktion» bezeichnet wird, heißt in Java «Methode». Eine Methode ist eine Folge von Anweisungen, welche eine bestimmte Aufgabe ausführt (auch bekannt als Unterprogramm oder Prozedur) |
| Syntax                            | Eine Reihe von Regeln, die definieren wie ein Programm geschrieben werden muss, um gültig zu sein. Es handelt sich um eine Art Grammatik                                                                                       |
| Keyword                           | Ein Wort, welches in der Programmiersprache eine besondere Bedeutung hat (public, class und viele andere). Diese Wörter können nicht als Variablennamen verwendet werden                                                       |
| Bezeichner (identifier) oder Name | Ein Wort, das sich auf etwas in einem Programm bezieht (z. B. eine Variable oder einen Methodennamen)                                                                                                                          |
| Kommentar                         | Eine Erklärung dazu, was eine bestimmte Anweisung oder Methode macht. Einzeilige Java-Kommentare beginnen mit // und mehrzeilige sind von den Zeichen /* */ umgeben                                                            |
| Whitespace                        | Tabulator- oder Leerzeichen dienen lediglich der Lesbarkeit, vom Compiler werden sie ignoriert                                                                                                                                 |