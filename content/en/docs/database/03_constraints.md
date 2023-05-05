---
title: "Constraints"
linkTitle: "Constraints"
weight: 3
---

## Inhalt
* [Inhalt](#inhalt)
* [Was ist ein Constraint?](#was-ist-ein-constraint)
* [Not Null](#not-null)
* [Unique](#unique)
* [Primary Key](#primary-key)
* [Foreign Key](#foreign-key)
* [Index](#index)




## Was ist ein Constraint?
Ein Constaint in SQL ist dazu da den Inhalt eines Attributs weiter zu beschränken. Theoretisch ist die Angabe des 
Datentyps bereits eine Art Constraint, da bestimmt wird was für ein Wertebereich eingefügt werden darf. Ein Constraint
kann entweder beim Erstellen der Tabelle oder mit einem `Alter` hinzugefügt werden.

## Not Null
Das `Not Null` Constraint legt fest, dass ein Attribut nicht Null, spricht **nicht leer** sein darf. Das kann
beispielsweise bei einer Id, die zum Verbinden von Tabellen verwendet wird, eingesetzt werden, damit es immer einen Wert
gibt. Hier ein Beispiel wie ein Not Null Constraint erstellt wird:

```sql
CREATE TABLE person(personen_id: number NOT NULL, vorname: varchar(255), nachname: varchar(255));
```

```sql
-- Funktioniert nicht, da die Id nicht null sein darf.
INSERT INTO person VALUES (null, null, null);

-- Funktioniert nicht, da keine Id hinzugefügt wird.
INSERT INTO person(vorname, nachname) VALUES ("Peter", "Fischer");

-- Funktioniert, da die Id angegeben wird und die anderen Attribute null sein dürfen.
INSERT INTO person VALUES (1, null, null);
```

## Unique
Das `Unique` Constraint bedingt, dass jeder eingefügte Wert einzigartig, also noch nicht in der Tabelle, ist. So können
beispielsweise duplikationen von Ids verhindert werden. Hier ein Beispiel zum `Unique` Constraint:

```sql
CREATE TABLE person(personen_id: number UNIQUE, vorname: varchar(255), nachname: varchar(255));
```

Beispieldaten Person:

| personen_id | vorname | nachname |
|-------------|---------|----------|
| 1           | Hans    | Peterson |
| 2           | Peter   | Fritschi |
| 3           | Fritz   | Hansen   |


```sql
-- Funktioniert nicht, da bereits eine Person mit der personen_id 2 besteht.
INSERT INTO person VALUES (2, "Ueli", "Mueli");

-- Funktioniert, da keine Person mit der personen_id 4 besteht.
INSERT INTO person VALUES (4, "Karl", "Karlsen");
```

## Primary Key
Das `Primary Key` Constraint kombiniert prinzipiell die Constraints `Unique` und `Not Null` zu einem. Gerade für Ids ist
dieses Constraint praktisch, da in eigentlich jedem Fall eine Id bestehen sollte und sie auch eindeutig sein sollte.
Hier ein beispiel zum `Primary Key`:

```sql
CREATE TABLE person(personen_id: number UNIQUE, vorname: varchar(255), nachname: varchar(255));
```

Beispieldaten Person:

| personen_id | vorname | nachname |
|-------------|---------|----------|
| 1           | Hans    | Peterson |
| 2           | Peter   | Fritschi |
| 3           | Fritz   | Hansen   |


```sql
-- Funktioniert nicht, da keine personen_id angegeben wurde.
INSERT INTO person VALUES (null, "Philippe", "Pfister");

-- Funktioniert nicht, da bereits eine Person mit der personen_id 2 besteht.
INSERT INTO person VALUES (2, "Ueli", "Mueli");

-- Funktioniert, da keine Person mit der personen_id 4 besteht.
INSERT INTO person VALUES (4, "Karl", "Karlsen");
```

## Foreign Key

## Index


