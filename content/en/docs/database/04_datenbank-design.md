---
title: "Datenbank Design"
linkTitle: "Datenbank Design"
weight: 4
---

## Ziele
* Du weisst was Normalisierung ist und wieso sie wichtig ist
* Du kannst die ersten drei Normalformen in eigenen Worten erklären
* Du kennst den Unterschied zwischen den Begriffen ERM und ERD
* Du kennst die verschiedenen Beziehungstypen im Bereich der Kardinalität

## Normalisierung
Die Normalisierung in SQL ist ein Prozess, bei dem Datenbanktabellen in bestimmte Normalformen gebracht werden, um die
Datenintegrität und -konsistenz sicherzustellen und die Redundanz zu minimieren. Ziel ist es, die Daten effizient und
konsistent zu speichern, zu verwalten und zu abzufragen.

Es gibt verschiedene Ausmasse, in denen ein Datenbankschema gegen Anomalien (wie z.B Inkonsistenz) geschützt werden 
kann. Diese unterschiedliche Ausmasse werden in diesem Zusammenhang Normalformen genannt. In den nächsten Abschnitten, 
wirst du die erste, zweite und dritte Normalformen kennenlernen.

### Erste Normalform (1NF)
Eine Tabelle ist in erster Normalform, wenn alle Spalten atomare Werte enthalten, d.h. keine
wiederholten oder gruppierten Werte aufweisen.

Beispiel: Eine Tabelle mit einer Spalte namens "Bankverbindung", die mehrere Informationen durch Kommas oder Semikolons
getrennt enthält, ist nicht in erster Normalform. Stattdessen sollte jede Information in einer separaten Spalte
aufgeführt werden.

![](../images/1.Normalform.png)

### Zweite Normalform (2NF)
Die Zweite Normalform hilft dabei, Daten besser zu organisieren und Redundanzen zu vermeiden. Sie stellt sicher, 
dass jedes Nichtschlüsselattribut in einer Tabelle vom gesamten Primärschlüssel abhängt und keine Abhängigkeiten 
zwischen Nichtschlüsselattributen bestehen.

Die Anwendung der 2NF ist wichtig, um Datenkonsistenz und -integrität sicherzustellen, Daten effizient zu verwalten und 
Aktualisierungsprobleme zu vermeiden. Durch die Vermeidung von Redundanzen werden Daten logisch und effizient 
organisiert, was zu einer besseren Datenbankleistung führt.

Beispiel: Eine Tabelle mit Bestellungen und Produkten, bei der jede Bestellung mehrere Produkte enthält und jede
Produktzeile die Bestellungs-ID enthält, ist nicht in zweiter Normalform. Stattdessen sollte eine separate Tabelle
für Bestellungen und eine separate Tabelle für Produkte erstellt werden, die über die Bestellungs-ID verknüpft sind.

![](../images/2.Normalform.png)

### Dritte Normalform (3NF)
Die Dritte Normalform (3NF) in der Datenbanknormalisierung hilft dabei, Daten weiter zu strukturieren und Redundanzen zu
minimieren. Sie stellt sicher, dass keine Abhängigkeiten zwischen Nichtschlüsselattributen bestehen und keine 
transitiven Abhängigkeiten vorhanden sind. Transitive Abhängigkeiten treten auf, wenn ein Nichtschlüsselattribut von 
einem anderen Nichtschlüsselattribut abhängig ist, anstatt direkt vom Primärschlüssel.

Die Anwendung der 3NF ist wichtig, um Datenkonsistenz und -integrität sicherzustellen, Daten effizient zu verwalten und 
Anomalien zu vermeiden. Durch die Beseitigung von transitive Abhängigkeiten werden Daten logisch und effizient 
organisiert, was zu einer besseren Datenbankleistung führt.

Beispiel: Eine Tabelle mit Mitarbeitern und Abteilungen, bei der jede Zeile sowohl den Namen des Mitarbeiters als auch
den Namen der Abteilung enthält, ist nicht in dritter Normalform. Stattdessen sollte eine separate Tabelle für
Abteilungen erstellt werden, die über die Abteilungs-ID mit der Mitarbeiter-Tabelle verknüpft ist.

![](../images/3.Normalform.png)

Es gibt auch höhere Normalformen wie die Boyce-Codd-Normalform (BCNF) und die Vierte Normalform (4NF), aber diese sind
für den Anfang weniger relevant und komplexer zu erklären.

## Datenbankdesign
In diesem Teil schauen wird uns hauptsächlich die beiden Begriffe ERM (Entity-Relationship-Modell) und ERD
(Entity-Relationship-Diagramm) an. Wichtig ist den Unterschied der beiden zu kennen.
Ein ERM ist eine Modellierungstechnik, die zur Abbildung der Beziehungen zwischen verschiedenen Entitäten in
einem System verwendet wird. Mit Text wird versucht die Datenbank so einfach und klar wie möglich zu beschreiben, um 
später ein ERD dazu erstellen zu können. Es werden jeweils die Entitäten (Tabellen) und Beziehungen aufgefasst.
Hier ein Beispiel eines einfachen ERMs:

Entitäten:

| Entität-Name | Beschreibung                                                                                                   |
|--------------|----------------------------------------------------------------------------------------------------------------|
| Student      | Jeder Student hat eine eindeutige ID, einen Namen, ein Geburtsdatum und Kontaktdaten.                          |
| Kurs         | Jeder Kurs hat eine eindeutige ID, einen Titel, eine Anzahl von Kreditpunkten und einen zugeordneten Dozenten. |

Beziehungen:

| Beziehungs-Name | Beschreibung                                                                                                                                                                                 |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Einschreibung   | Diese Beziehung zeigt die Verbindung zwischen Studenten und Kursen an. Jede Einschreibung hat eine eindeutige ID und ist mit einem bestimmten Studenten und einem bestimmten Kurs verknüpft. |

Ein ERD ist eine grafische Darstellung eines ERM, die verwendet wird, um die Beziehungen
zwischen Entitäten und Attributen darzustellen. Es besteht aus Entitäten, Attributen und Beziehungen und bietet eine 
formale Möglichkeit, die Struktur und das Verhalten eines Systems darzustellen. In diesem Schritt wird hauptsächlich 
angeschaut, was in der Datenbank benötigt wird und so eine klare Struktur gefunden. Diese Struktur kann dann später in 
einem ERD dargestellt werden.

Es gibt viele verschiedene Zeichen-Softwares für das Erstellen von ERDs. Zu empfehlen ist [draw.io](https://draw.io), 
da es sich dabei um eine Web-Applikation handelt, welche keinen Download benötigt. Auch das spätere Diagramm wurde mit 
draw.io erstellt. Wichtig beim Erstellen sind auch die Kardinalitäten, die für die Beziehungen benötigt werden. 
Schauen wir uns diese also an.

### Kardinalität

Die Kardinalität in einem Entity-Relationship-Modell (ERM) beschreibt die Beziehung zwischen zwei Entitäten und gibt an,
wie viele Instanzen einer Entität mit einer oder mehreren Instanzen einer anderen Entität verbunden sein können. 
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