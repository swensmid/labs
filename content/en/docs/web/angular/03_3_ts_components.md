---
title: "Components"
type: docs
weight: 5
date: 2023-05-04
description: >
  Components sind wie Grundbausteine in einer Angular-Applikation
---
## Components
Components sind wie Grundbausteine in einer Angular-Applikation. Components werden mit dem `@Component` Decorator definiert.

Components sind TypeScript Klassen, die die Daten und Kontrollstrukturen zum Verhalten der Templates beinhalten.
Metadaten teilen Angular mit, wie die Components verarbeitet werden sollen (selector, template, style).
Ein Component hat einen von Angular verwalteten Lifecycle. Angular erstellt und rendert Components zusammen mit ihren Children,
überprüft, wann sich ihre Properties ändern, und zerstört sie, bevor sie aus dem DOM entfernt werden.
Angular bietet sogenannte Lifecycle-Hooks an, mit denen wir handeln können, sobald sie auftreten.

![Components](../images/angular_components_description.png)


Ein Angular Component setzt sich aus 4 Dateien zusammen:
* [Template](/03_4_ts_templates)
* Unit Test File
* Stylesheet
* Component (Class)

![Components Description](../images/component-desc.png)

### Components im Template aufrufen
In Angular kann man Components im Template aufrufen, indem man ihren Selektor verwenden.

Durch das Aufrufen von Components im Template kann man wiederverwendbare Teile der Benutzeroberfläche erstellen und sie in verschiedenen Teilen der Anwendung verwenden, um Code-Duplikation zu vermeiden aber auch die Lesbarkeit und Wartbarkeit des Codes zu verbessern.

Als erstes muss man den Component erstellen:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: '<h1>Hello, {{ name }}!</h1>'
})
export class GreetingComponent {
  name: string = 'John';
}
```

Nachdem man den Component erstellt hat, kann man ihn im Template eines anderen Components aufrufen, dazu kann man den Selektor verwenden.
```html
<div>
  <app-greeting></app-greeting>
</div>
```

Das Ergebnis ist, dass die `<app-greeting></app-greeting>` Tags durch das gerenderte Template des `GreetingComponent` ersetzt werden. In diesem Fall wird eine Überschrift "Hello, John!" angezeigt, weil `name` im Typescript auf "John" gesetzt ist.
