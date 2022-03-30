---
title: "Components und Templates"
type: docs
linkTitle: "Components und Templates"
weight: 4
date: 2022-03-14
description: >
    Components sind wie Grundbausteine in einer Angular-Applikation. Componentswerden mit dem "@Component" Decorator definiert.

    Components sind TypeScript Klassen, die die Daten und Kontrollstrukturen zum Verhalten der Templates beinhalten.
    Metadaten teilen Angular mit, wie die Components verarbeitet werden sollen (selector, template, style).
    Ein Component hat einen von Angular verwalteten Lifecycle. Angular erstellt und rendert Components zusammen mit ihren Children,
    überprüft, wann sich ihre Properties ändern, und zerstört sie, bevor sie aus dem DOM entfernt werden.
    Angular bietet sogenannte Lifecycle-Hooks an, mit denen wir handeln können, sobald sie auftreten.
---

<img src="/images/angular/angular_components_description.png" alt="Components" style="width:60%"/>


Ein Angular Component setzt sich aus 4 Dateien zusammen:
- Template
- Unit Test File
- Stylesheet
- Component (Class)

<img src="/images/angular/componentDesc.png" alt="Components Description" style="width:50%"/>

## Templates
### Was ist ein Template?
- Templates definieren die Views der Components.
- Ein Template ist ein HTML Dokument, das Angular Elemente zum Rendern des Components enthält
- Dank Angular kann unser HTML Dokument anhand von Direktiven mehr Logik beinhalten. \
Beispielsweise können wir im Template eine if-Kontrollstruktur wie folgt anwenden:
```html
<div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
<ng-template #elseBlock>Content to render when condition is false.</ng-template>
```

Welche weiteren Direktiven es gibt, könnt ihr in der [offiziellen Dokumentation](https://angular.io/api/common) unter dem Abschnitt `Directives` nachlesen.