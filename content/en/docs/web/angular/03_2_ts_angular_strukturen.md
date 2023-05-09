---
title: "Angular Strukturen"
type: docs
weight: 3
date: 2023-05-04
description: >

---

## Grundlegende Struktur einer Angular-Anwendung
In Angular gibt es eine definierte Struktur, die von Entwicklern empfohlen wird, um eine konsistente und leicht verständliche Anwendungsentwicklung sicherzustellen.

Die grundlegende Struktur einer Angular-Anwendung besteht aus folgenden:

* [Module](./03_7_ts_modules): Ein Angular-Modul ist eine Sammlung von Components, Services, Directives und anderen Funktionen, die für eine bestimmte Funktionalität oder einen bestimmten Zweck zusammengefasst werden. Ein Modul wird in der Regel in einer separaten File deklariert und exportiert.

* [Component](./03_3_ts_components): Eine Angular-Component ist eine Klasse, die das Verhalten und das Aussehen einer Benutzeroberflächeneinheit definiert. Eine Component besteht aus TypeScript-Fie und einer Vorlage, die das HTML definiert, das die Benutzeroberfläche darstellt. Eine Component kann andere Component enthalten oder sich selbst in andere Component einbetten.

* [Services](./03_6_ts_services): Ein Angular-Service ist eine Klasse, die Funktionen und Daten bereitstellt, die von anderen Teilen der Anwendung verwendet werden können. Ein Services kann z.B. eine Datenbankabfrage durchführen, eine REST-API aufrufen oder Benutzerinformationen verwalten.
 
* [Directives](./03_5_ts_directives): Eine Angular-Directives ist eine Anweisung, die auf ein HTML-Element angewendet wird, um sein Verhalten oder Aussehen zu ändern. Eine Directives kann z.B. ein Attribut oder eine Struktur sein, die das Verhalten eines HTML-Elements steuert oder ein Template-Element sein, das dynamisch in die Benutzeroberfläche eingefügt wird.

* [Template](./03_4_ts_templates): Ein Template ist die HTML-Datei, die eine Component darstellt. Es kann auch spezielle Angular-Directives und -Syntax verwenden, um die Interaktivität und Funktionalität der Anwendung zu verbessern.

![Angular](../images/architektur.png)  

