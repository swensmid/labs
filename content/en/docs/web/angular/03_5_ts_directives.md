---
title: "Directives"
type: docs
weight: 3
date: 2023-05-05
description: >

---
## Directives
Directives sind ein Mechanismus, um die Darstellung von HTML-Elementen und das Verhalten von Components zu manipulieren. Direktiven ermöglichen es, benutzerdefinierte HTML-Attribute oder -Elemente zu definieren, die spezielle Funktionalitäten bereitstellen, die nicht in HTML standardmässig verfügbar sind.

Es gibt drei Arten von Directives in Angular

### Components-Directives
Components-Directives sind die am häufigsten verwendeten Directives in Angular. Sie erweitern das HTML durch die Definition von benutzerdefinierten HTML-Elementen und enthalten zugehörige Templates und Logik. Components-Direktiven sind im Wesentlichen Angular-Components.

```html
<app-highlight [text]="'Dieser Text wird hervorgehoben!'" [color]="'yellow'"></app-highlight>
```

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  template: `
    <span [style.background-color]="color">{{ text }}</span>
  `
})
export class HighlightComponent {
  @Input() text: string;
  @Input() color: string;
}
```

### Struktur-Directives
Struktur-Directives sind Directives, die das DOM manipulieren und Elemente hinzufügen oder entfernen. Ein Beispiel für eine Struktur-Direktive ist `*ngIf`, die ein Element ausblendet, wenn eine Bedingung nicht erfüllt ist.
```html
<div>
  <h1 *ngIf="showTitle">Hello, World!</h1>
  <p *ngIf="showContent">This is some content.</p>
</div>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent {
  showTitle: boolean = true;
  showContent: boolean = false;
}
```

### Attribut-Directives
Attribut-Directives sind Directives, die das Verhalten von HTML-Elementen ändern, ohne sie zu ersetzen. Ein Beispiel für eine Attribut-Direktive ist ngClass, die es ermöglicht, CSS-Klassen basierend auf Bedingungen hinzuzufügen oder zu entfernen.

```html
<p highlight>Yellow Text</p>
```

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
    
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
```
