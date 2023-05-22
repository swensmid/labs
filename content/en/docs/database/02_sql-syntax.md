---
title: "SQL Syntax"
linkTitle: "SQL Syntax"
weight: 3
---

## Inhalt

* [Statements](#statements)
  * [Was ist ein SQL Statement?](#was-ist-ein-sql-statement)
  * [SELECT](#select)
  * [INSERT](#insert)
  * [CREATE](#create)
  * [WHERE](#where)
  * [UPDATE](#update)
  * [DELETE](#delete)
* [Join](#join)
  * [Inner Join (*join*)](#inner-join-join)
  * [Right und Left Join](#right-und-left-join)
    * [Right Join](#right-join)
    * [Left Join](#left-join)
  * [Full Join](#full-join)
* [Aggregationen & Keywords](#aggregationen--weiteres)
  * [Count](#count)
  * [Max/Min](#maxmin)
  * [Sum](#sum)
  * [Avg](#avg)

## Statements
### Was ist ein SQL Statement?
Ganz einfach gesagt ist ein Statement ein Befehl, der an die Datenbank geschickt und dort ausgeführt wird. Es gibt 
viele verschiedene Statements, die teilweise kombiniert werden können, um den gewünschten Effekt auf der Datenbank zu
erzielen. 

### SELECT
Das Select Statement wird verwendet, um Daten aus bestimmten Tabellen auszuwählen. Ein SELECT ist grundsätzlich wie
 folgt aufgebaut:

``` sql
SELECT * FROM benutzer;
```

Als Erstes kommt immer das "SELECT" gefolgt von den gewünschten Attribute. In diesem Statement wird ein Stern verwendet,
dieser steht für alle Attribute. Dementsprechend werden alle Attribute, die in der Tabelle vorhanden sind, zurückgegeben.
Auf die Attribute folgt das FROM, auf dieses folgt jeweils eine Tabelle, von welcher die Werte gewünscht sind.
Im Beispiel ist es die Tabelle "benutzer". Das Resultat dieses Statements würde schlussendlich ungefähr so aussehen:

| vorname | nachname  | alter | beruf              |
|---------|-----------|-------|--------------------|
| Anja    | Ackermann | 13    | Schüler/in         |
| Fritz   | Fischer   | 26    | Pilot/in           |
| Hans    | Hansen    | 52    | Hochbauzeichner/in |

### INSERT

Das Insert Statement wird verwendet, um Daten in eine bestimmte Tabelle einzufügen. Ein INSERT ist grundsätzlich wie
folgt aufgebaut:

````sql
INSERT INTO table VALUES (..., ...), (..., ...);
````
Als Erstes kommt immer das "INSERT" gefolgt von der betroffenen Tabelle. Schlussendlich wird mit VALUES angegeben, dass
ein oder mehrere Tupel eingefügt werden. In den Klammern können jeweils die Inhalte angegeben werden.

Ein konkretes Beispiel würde mit dieser Tabelle beginnen:

| vorname | nachname  | alter | beruf              |
|---------|-----------|-------|--------------------|
| Anja    | Ackermann | 13    | Schüler/in         |
| Fritz   | Fischer   | 26    | Pilot/in           |
| Hans    | Hansen    | 52    | Hochbauzeichner/in |

Dann wird dieses INSERT Statement ausgeführt:
``` sql
INSERT INTO benutzer VALUES ("Max", "Mustermann", 16, "Maurer/in");
```

Nach dem Statement ist der neue Benutzer Max in der Tabelle zu finden:

| vorname | nachname     | alter | beruf              |
|---------|--------------|-------|--------------------|
| Anja    | Ackermann    | 13    | Schüler/in         |
| Fritz   | Fischer      | 26    | Pilot/in           |
| Hans    | Hansen       | 52    | Hochbauzeichner/in |
| *Max*   | *Mustermann* | *16*  | *Maurer/in*        |

Alternativ zum vorherigen Statement können auch nur bestimmte Daten eingefügt werden. In unserem Beispiel könnte ein
Benutzer auch Arbeitslos sein, dementsprechend hätte er keinen Beruf. Wenn wir also so einen Benutzer hinzufügen möchten
würden wir das wie folgt machen:

```sql
INSERT INTO benutzer(vorname, nachname, alter) VALUES ("Peter", "Piccolo", 37);
```
In den Klammern nach der Tabelle können wir also die Attribute auswählen, die wir hinzufügen möchten. In der Tabelle 
würde es so aussehen:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 16    | Maurer/in          |
| *Peter* | *Piccolo*  | *37*  | **`null`**         |

Der Beruf wurde automatisch auf `null` gesetzt und ist dementsprechend leer.


### CREATE
Das Create Statement wird verwendet, um Tabellen, Datenbanken, usw. zu erstellen. Ein CREATE Statement ist grundsätzlich
wie folgt aufgebaut:

``` sql
CREATE TABLE benutzer (vorname varchar(255),
       nachname varchar(255),
       alter number, 
       beruf varchar(255));
```
Als Erstes kommt immer das "CREATE" gefolgt dem zu erstellenden Objekt, in diesem Fall eine Tabelle. Schlussendlich wird
noch ein Name (benutzer) festgelegt, gefolgt von den gewünschten Attributen der Tabelle und dem entsprechenden Datentyp.

Das Resultat dieses Statements würde schliesslich so aussehen:

| vorname | nachname | alter | beruf |
|---------|----------|-------|-------|
|         |          |       |       |

### WHERE
Das WHERE ist im Vergleich zu den anderen kein echtes Statement, sondern eine Ergänzung dazu. Mit dem Where kann
spezifiziert werden, welche Daten für das Statement verwendet werden sollen. Mehrere Bedingungen können mit den Keywords
`AND` und `OR` aneinandergereiht werden. Hier ein Beispiel dazu:

Ausgangstabelle:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 16    | Maurer/in          |

Dieses Statement schränkt das Alter zwischen 15 und 30 Jahren ein.
``` sql
SELECT * FROM benutzer WHERE alter > 15 AND alter < 30;
```
Das Statement gibt schliesslich alle Werte zurück, die die Bedingung erfüllen:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Fritz   | Fischer    | 26    | Pilot/in           |
| Max     | Mustermann | 16    | Maurer/in          |

Zusätzlich gibt es bei Texten die Möglichkeit eine Teilüberprüfung mit `Like` zu machen. Damit können beispielsweise
Alle Adressen gesucht werden, die mit "Strasse" enden. Dazu muss beim `Like` angegeben werden, wo sich der Rest des 
Textes befinden. Das funktioniert mit dem % Zeichen. Wenn der restliche Text vor dem Suchtext ist, wird das % vor diesem
platziert. Dasselbe funktioniert natürlich auch umgekehrt. Weiter kann auch auf beiden Seiten ein % verwendet werden, so
ist es egal wo sich der Suchtext befinden. Hier ein Beispiel-Query dazu:

Ausgangstabelle:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 16    | Maurer/in          |

```sql
SELECT * FROM person WHERE nachname like '%mann'
```

Resultat:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Max     | Mustermann | 16    | Maurer/in          |

### UPDATE
Das Update Statement wird verwendet, um Inhalte (Tabelle, Datenbank, Constraints, etc.) zu ändern. Ein UPDATE 
Statement ist grundsätzlich wie folgt aufgebaut:

``` sql
UPDATE tabelle
SET attribut = wert
WHERE attribut2 = wert2; 
```
Als Erstes kommt immer das "UPDATE" gefolgt von dem zu aktualisierenden Objekt, in diesem Fall eine Tabelle. 
Anschliessend wird ein SET durchgeführt, wo die gewünschte Änderung gemacht wird. Dabei können auch mehrere Attribute 
gleichzeitig geändert werden. Dazu kann hinter dem Wert ein Komma hinzugefügt werden und eine weitere Änderung angegeben
werden. Nach dem SET kann optional ein WHERE hinzugefügt werden, wenn die aktualisierung nicht für alle Werte
durchgeführt werden soll. Hier ein konkretes Beispiel dazu:

Ausgangstabelle:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 16    | Maurer/in          |

Dieses Statement setzt das Alter aller Benutzer mit dem Vornamen "Max" auf 18 und ändert den Beruf zu "Lehrer/in"
``` sql
UPDATE benutzer
SET alter = 18, beruf = "Lehrer/in"
WHERE name = "Max";
```

Resultat:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 18    | Lehrer/in          |

### DELETE
Wie es der Name schon sagt, wird das Delete Statement zum Löschen von Daten verwendet. Ein DELETE Statement ist
grundsätzlich wie folgt aufgebaut:

```sql
DELETE FROM table WHERE attribut = wert;
```

Als Erstes kommt immer das "DELETE" gefolgt von FROM und der betroffenen Tabelle. Ein Delete sollte immer mit einem
Where verwendet werden, da sonst alle Daten aus gelöscht werden. Hier ein konkretes Beispiel dazu:

Ausgangstabelle:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 18    | Maurer/in          |

Dieses Statement löscht alle Benutzer mit dem Vornamen "Max". 

``` sql
DELETE FROM benutzer WHERE vorname = "Max";
```

Resultat:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |

## Join
Ähnlich wie Where ist Join kein eigenes Statement, sondern eine Erweiterung. Mit dem Join Keyword werden in einem
Select mehrere Tabellen miteinander verbunden. Das wird zum Beispiel benötigt, wenn die Personalien und die Adresse
einer Person in verschiedenen Tabellen gespeichert wird. Ein Join funktioniert eigentlich immer gleich, es gibt jeweils
eine Tabelle A die mit der Tabelle B verbunden wird. Dazu wird jeweils eine Id oder zumindest ein Attribut verwendet, 
welches in beiden Tabellen vertreten ist. So wird dann die Verbindung hergestellt.

Bei Joins gibt es viele verschiedene und teilweise sehr
komplexe Varianten, welche auch dementsprechend selten benutzt werden. Wir schauen uns hier die vier wichtigsten an. 

### Inner Join (*join*)
Der Inner Join oder auch nur Join (je nach Datenbank) ist der wichtigste und am meisten benötigte Join. Der Inner Join
verbindet die Tabellen und gibt nur die Schnittmenge zurück. Also alle Werte, die auch ein Gegenstück haben. Grafisch 
dargestellt würde dieser Join so aus sehen:

![Inner Join](../images/inner-join.png)

*Quelle: https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/*

Das dazugehörige Statement würde so aussehen:

``` sql
SELECT * FROM tabelle_a INNER JOIN tabelle_b ON tabelle_a.id = tabelle_b.id;
```

### Right und Left Join
Im Vergleich zum Inner Join wird beim Right und Left Join nicht nur die Schnittmenge, sondern auch noch eine äussere
Menge zurückgegeben. Grafisch würde das so aussehen:

#### Right Join
![Right Join](../images/right-join.png)

*Quelle: https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/*

#### Left Join
![Left Join](../images/left-join.png)

*Quelle: https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/*

Die äussere Menge ist jeweils eine der beiden angegebenen Tabellen. Welche Tabelle das verwendet wird, ist dabei
abhängig vom Statement und welches Keyword verwendet wird. Schauen wir und das in einem Beispiel an.

``` sql
SELECT * FROM tabelle_a RIGHT JOIN tabelle_b ON tabelle_a.id = tabelle_b.id;
```
In diesem Query wird das Keyword RIGHT verwendet. Das bedeutet, dass die **rechte** Tabelle verwendet wird. Was
definiert jetzt aber welches die rechte Tabelle ist? In diesem Fall ist tabelle_b die rechte Tabelle, da sie rechts 
vom JOIN steht. Dieser Logik entsprechend ist im unteren Beispiel tabelle_a die linke Tabelle, die also komplett 
zurückgegeben wird.

``` sql
SELECT * FROM tabelle_a LEFT JOIN tabelle_b ON tabelle_a.id = tabelle_b.id;
```
Was jedoch bei einem Right und Left Join zu beachten ist, dass `null` Werte entstehen können. Bei allen Werten, die kein
Gegenstück haben, werden die Attribute dieser Tabelle `null` sein. So würde das Resultat eines Left Joins aussehen:

Person:

| vorname | nachname | alter | beruf_id |
|---------|----------|-------|----------|
| Rolf    | Ringer   | 30    | 1        |
| Loris   | Liechti  | 21    | 40       |

Beruf:

| beruf_id | berufsbezeichnung |
|----------|-------------------|
| 1        | Lehrer/in         |
| 2        | Informatiker/in   |

Resultat:

| vorname | nachname | alter | beruf_id | beruf_id | berufsbezeichnung |
|---------|----------|-------|----------|----------|-------------------|
| Rolf    | Ringer   | 30    | 1        | 1        | Lehrer/in         |
| Loris   | Liechti  | 21    | 40       | `null`   | `null`            |

> beruf_id ist doppelt, da es in beiden Tabellen ein Attribut mit diesem Namen gibt. Könnte mit der Auswahl im Select
> auch ausgeblendet werden.

Hier noch das Statement dazu:

```sql
SELECT * FROM person LEFT JOIN beruf ON person.beruf_id = beruf.beruf_id;
```

Umgekehrt würde das ganze so aussehen:

Resultat:

| vorname | nachname | alter  | beruf_id | beruf_id | berufsbezeichnung |
|---------|----------|--------|----------|----------|-------------------|
| Rolf    | Ringer   | 30     | 1        | 1        | Lehrer/in         |
| `null`  | `null`   | `null` | `null`   | 2        | Informatiker/in   |
> beruf_id ist doppelt, da es in beiden Tabellen ein Attribut mit diesem Namen gibt. Könnte mit der Auswahl im Select
> auch ausgeblendet werden.

Statement:

```sql
SELECT * FROM person RIGHT JOIN beruf ON person.beruf_id = beruf.beruf_id;
```


### Full Join
Der Full Join ist sehr eng mit dem Left und Right Join verwandt. Jetzt werden jedoch alle Werte zurückgegeben. Wenn kein
Gegenstück zu einem Wert vorhanden ist, werden diese gleich wie beim Left und Right Join mit `null` angegeben. Grafisch
sieht das ganze so aus:

![Full Join](../images/full-join.png)

*Quelle: https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/*

Das Statement würde schlussendlich so aussehen:

``` sql
SELECT * FROM tabelle_a FULL JOIN tabelle_b ON tabelle_a.id = tabelle_b.id;
```
Mit dem vorherigen Beispiel würde das Resultat so aussehen:

Person:

| vorname | nachname | alter | beruf_id |
|---------|----------|-------|----------|
| Rolf    | Ringer   | 30    | 1        |
| Loris   | Liechti  | 21    | 40       |

Beruf:

| beruf_id | berufsbezeichnung |
|----------|-------------------|
| 1        | Lehrer/in         |
| 2        | Informatiker/in   |

Resultat:

| vorname | nachname | alter  | beruf_id | beruf_id | berufsbezeichnung |
|---------|----------|--------|----------|----------|-------------------|
| Rolf    | Ringer   | 30     | 1        | 1        | Lehrer/in         |
| `null`  | `null`   | `null` | `null`   | 2        | Informatiker/in   |
| Loris   | Liechti  | 21     | 40       | `null`   | `null`            |
> beruf_id ist doppelt, da es in beiden Tabellen ein Attribut mit diesem Namen gibt. Könnte mit der Auswahl im Select
> auch ausgeblendet werden.

## Aggregationen & weiteres
In diesem Abschnitt gehen wird auf Aggregationen und weitere wichtige Syntax-Elemente ein. Aggregationen in SQL sind 
Funktionen, die verwendet werden, um zusammengefasste Informationen aus großen Datenmengen zu erhalten. 
Dadurch wird es einfacher, die Daten zu analysieren und Muster oder Trends zu erkennen.

### Count
Die Aggregation Count zählt die wie viele Resultate das beim Query zurückgegeben werden. Count funktioniert bei allen
Datentypen gleich und muss nicht angepasst werden. Hier ein Beispiel zu Count:

Ausgangstabelle Person:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 18    | Maurer/in          |
| Leo     | Leonidas   | 35    | `null`             |

Statement:
```sql
SELECT COUNT(*), COUNT(beruf) FROM person; 
```
Resultat:

| count(*) | count(beruf) |
|----------|--------------|
| 5        | 4            |

Aus dem Resultat lässt sich schliessen, dass nur nicht null Werte im Count beachtet werden. 

### Max/Min
Die Aggregationen Max und Min sind logischerweise zum Finden des grössten und kleinsten Wertes. Beide funktionieren
bei allen Datentypen, jedoch haben sie beispielsweise bei einem String einen anderen Weg das Maximum und Minimum zu 
finden. Dort wird anhand einer Collation (Sortierungsregel) das Maximum und Minimum bestimmt. Bei normalen Zahlen sieht
es ungefähr so aus:

Ausgangstabelle Person:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 18    | Maurer/in          |
| Leo     | Leonidas   | 35    | `null`             |

Statement:
```sql
SELECT MAX(alter), MIN(alter) FROM person; 
```

Resultat:

| max(alter) | min(alter) |
|------------|------------|
| 52         | 13         |


### Sum
Sum summiert die Werte einer Spalte. Im Gegensatz zu den vorherigen Aggregationen funktioniert Sum nur mit Zahlenwerten.
Bei Strings oder ähnlichem wird ein Fehler zurückgegeben. Hier ein Beispiel zur Verwendung von Sum:

Ausgangstabelle Person:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 18    | Maurer/in          |
| Leo     | Leonidas   | 35    | `null`             |

Statement:
```sql
SELECT SUM(alter) FROM person; 
```

Resultat:

| sum(alter) |
|------------|
| 144        |

### Avg
Um den Durchschnitt von Zahlen zu finden wird die Funktion AVG verwendet. Gleich wie Sum funktioniert Avg nur mit Zahlen.
Hier ein Beispiel zu avg:

Ausgangstabelle Person:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 18    | Maurer/in          |
| Leo     | Leonidas   | 35    | `null`             |

Statement:
```sql
SELECT AVG(alter) FROM person; 
```

Resultat:

| avg(alter) |
|------------|
| 28.8       |

### Order By
Das Keyword Order By ist zum Sortieren des Resultats sehr nützlich. Zusammen mit ASC (=Ascending, Aufsteigend) und DESC
(=Descending, Absteigend) kann das Resultat auf verschiedenste Weisen nach einem oder mehreren Attributen sortiert
werden. Standardmässig verwendet Order By ASC, daher kann das ASC im Query auch weggelassen werden. Beispiel zu Order By:

Ausgangstabelle Person:

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Schüler/in         |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 18    | Maurer/in          |
| Leo     | Leonidas   | 35    | `null`             |

Statement ASC:
```sql
SELECT vorname, alter FROM person ORDER BY alter ASC; 
```

Resultat:

| vorname | alter |
|---------|-------|
| Anja    | 13    |
| Max     | 18    |
| Fritz   | 26    |
| Leo     | 35    |
| Hans    | 52    |


Statement DESC:
```sql
SELECT vorname, alter FROM person ORDER BY alter DESC; 
```

Resultat:

| vorname | alter |
|---------|-------|
| Hans    | 52    |
| Leo     | 35    |
| Fritz   | 26    |
| Max     | 18    |
| Anja    | 13    |

### Group By
Mit Group By können Tupel mit gleichen Werten bei einem Attribut zusammen geführt werden, um beispielsweise in einem
Count gezählt zu werden. Wie bei Order By kann ein Resultat mehrfach gruppiert werden. Hier ein einfaches Beispiel zu
Order By:

Ausgangstabelle Person: 

| vorname | nachname   | alter | beruf              |
|---------|------------|-------|--------------------|
| Anja    | Ackermann  | 13    | Hochbauzeichner/in |
| Fritz   | Fischer    | 26    | Pilot/in           |
| Hans    | Hansen     | 52    | Hochbauzeichner/in |
| Max     | Mustermann | 18    | Pilot/in           |
| Leo     | Leonidas   | 35    | Pilot/in           |

Statement:
```sql
SELECT COUNT(*), beruf FROM person GROUP BY beruf;
```

Resultat:

| count(*) | beruf              |
|----------|--------------------|
| 2        | Hochbauzeichner/in |
| 3        | Pilot/in           |



