---
title: "Variablen in Java"
linkTitle: "Variablen"
weight: 2
description: >
  Modul #J1
---

## Ziele
* Ich weiss, was Variablen sind.
* Ich kann eine Variable deklarieren und initialisieren.


## Variablen

#### Namensgebung
Variablen dienen dazu Werte aufzunehmen. Je nach _Scope_ leben diese Variablen unterschiedlich lang. Zur Benennung von Variablen gibt es vier Regeln:
* Variablennamen beginnen mit einem Kleinbuchstaben
* Ein Variablenname darf die Buchstaben A-Z und a-z enthalten
* Ein Variablenname darf beliebige Zahlen von 0-9 enthalten
* Ein Variablenname darf die Sonderzeichen $ und _ enthalten

#### Best Practices
Der Name einer Variable sollte so gewählt werden, dass klar ist, welcher Wert darin gespeichert wird. Als Beispiel wählen wir den Namen _sum_ für eine Variable, welche das Resultat einer Addition enthält.

#### Deklaration
Unter der Deklaration einer Variable versteht man das erste "Erwähnen" einer Variable. In einer statisch typisierten Sprache wie Java bedeutet dies, dass der Typ der Variable festgelegt wird. Der Wert selbst muss bei der Deklaration je nach _Scope_ nicht festgelegt werden. Zur Laufzeit wird für die Variable ein Bereich im Arbeitsspeicher reserviert. Hier werden später Werte, die der Variablen zugewiesen werden, gespeichert. Die Größe des Speicherbereichs hängt vom Typ der Variable ab.

Formal gilt:
```
<variable type> <variable identifier>;
```
Wir geben also den Datentyp und den Namen der Variable an.

#### Initialisierung
Unter dem Begriff Initialisierung wird die direkte Zuweisen eines Wertes bei der Deklaration einer Variablen verstanden.
Lokale Variablen (Variablen, die lediglich innerhalb einer Methode gültig sind) müssen initialisiert werden, bevor sie verwendet werden können.

Beispiel:
```java
public static void main(String[] args) {
	int firstSummand = 2;
	int secondSummand;
	int sum = firstSummand + secondSummand;
}
```
Die Variable **secondSummand** wurde nicht initialisiert. Die Zuweisung **int sum = firstSummand + secondSummand** wird also nicht funktionieren.

#### Deklaration mit Initialisierung
Wir können eine Variable nacheinander deklarieren und dann initialisieren oder beides zusammen:
```java
int number;     // 1. Deklaration
number = 2;     // 2. Initialisierung

int number = 2; // beides in einer Zeile
```

Formal:
```
<variable type> <variable identifier> = <initial value>;
```

---
