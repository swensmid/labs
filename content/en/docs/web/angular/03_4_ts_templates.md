---
title: "Templates"
type: docs
weight: 6
date: 2023-05-04
description: >

---

### Was ist ein Template?
In Angular ist das Template der Teil eines Components, der die Benutzeroberfläche definiert. Es ist im Wesentlichen das HTML, das vom Component angezeigt wird und mit der Benutzer interagieren kann.

Das Template kann jedoch mehr als nur HTML enthalten. Es kann auch Angularspezifische Syntax wie Directives, Pipes, Interpolationen, Bindings enthalten, die die Funktionalität und das Verhalten des Components bestimmen.

Beispielsweise können wir im Template eine if-Kontrollstruktur wie folgt anwenden:
```html
<div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
<ng-template #elseBlock>Content to render when condition is false.</ng-template>
```

