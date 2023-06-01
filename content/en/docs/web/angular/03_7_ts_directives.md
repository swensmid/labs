---
title: "Directives"
type: docs
linkTitle: "Directives"
weight: 9
date: 2023-05-05
description: >
    Was Directives genau sind findet man in diesem Kapitel.
---
## Directives
Directives sind ein Mechanismus, um die Darstellung von HTML-Elementen und das Verhalten von Components zu manipulieren. Direktiven ermöglichen es, benutzerdefinierte HTML-Attribute oder -Elemente zu definieren, die spezielle Funktionalitäten bereitstellen, die standardmässig nicht in HTML verfügbar sind.

Es gibt drei Arten von Directives in Angular

## Components-Directives
Components-Directives sind die am häufigsten verwendeten Directives in Angular. Sie erweitern das HTML durch die Definition von benutzerdefinierten HTML-Elementen und enthalten zugehörige Templates und Logik. Components-Direktiven sind im Wesentlichen Angular-Components.

```html
<app-highlight [text]="'This text is highlighted!'" [color]="'yellow'"></app-highlight>
```

```typescript
import { Component, Input } from '@angular/core';

@Component({
    // ..
})
export class HighlightComponent {
    @Input() text: string;
    @Input() color: string;
}
```
```html
<!--app-highlight.html-->
<span [style.background-color]="color">{{ text }}</span>
```

### Struktur-Directives
Struktur-Directives sind Directives, die das DOM manipulieren und Elemente hinzufügen oder entfernen. Ein Beispiel für eine Struktur-Directive ist `*ngIf`, das ein Element ausblendet, wenn eine Bedingung nicht erfüllt ist.
```html
<div>
  <h1 *ngIf="showTitle">Hello, World!</h1>
  <p *ngIf="showContent">This is some content.</p>
</div>
```

```typescript
import { Component } from '@angular/core';

@Component({
    // ..
})
export class ExampleComponent {
    showTitle: boolean = true;
    showContent: boolean = false;
}
```

## Attribut-Directives
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

Die zwei wichtigsten Attribut-Directives sind `*ngIf` und `*ngFor`, welche folgend genauer erläutert werden.

### *ngIf
Die `*ngIf`-Direktive wird verwendet, um im Template eines Components Bedingungen zu überprüfen und den darin enthaltenen HTML-Code nur dann anzuzeigen, wenn die Bedingung erfüllt ist. Wenn die Bedingung nicht erfüllt ist, wird der entsprechende HTML-Code aus der gerenderten View entfernt.

Die Verwendung von `*ngIf` ermöglicht es, dynamisch Elemente in der View zu steuern.

```typescript
import { Component } from '@angular/core';

@Component({
    // ..
})
export class BaseComponent {
    showContent = true;

    toggleContent() {
        this.showContent = !this.showContent;
    }
}
```
```html
<div *ngIf="showContent">This content will be displayed if showContent is true.</div>
<button (click)="toggleContent()">Toggle Content</button>
```

### *ngFor
Die `*ngFor`-Direktive wird verwendet, um eine Liste von Elementen im Template eines Components zu rendern. Mit `*ngFor` kann man über eine Datenquelle iterieren und für jedes Element den entsprechenden Code im Template generieren. Es ist besonders nützlich wenn man Kachel anzeigen möchte oder eine eine Liste mit User Objekten anzeigen möchte.

```typescript
import { Component } from '@angular/core';

@Component({
    // ..
})
export class MyComponent {
    users = [
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
        { name: 'Bob Johnson', email: 'bob@example.com' },
    ];
}
```
```html
<ul>
  <li *ngFor="let user of users">
    {{ user.name }} ({{ user.email }})
  </li>
</ul>
```

Wenn man den Index bei einem `*ngFor` benötigt kann dieser sehr einfach angegeben werden. Dazu muss man nach dem `*ngFor` den Code `; let i = index` hinzufügen. Nun kann man in den Elementen innerhalb des `*ngFor` auf den Index der Elemente zu greifen.
```typescript
import { Component } from '@angular/core';

@Component({
    // ..
})
export class MyComponent {
    users = [
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' },
        { name: 'Bob Johnson', email: 'bob@example.com' },
    ];
}
```
```html
<ul>
  <li *ngFor="let user of users; let i = index">
    {{ user.name }} ({{ user.email }}) ('index': {{ i }})
  </li>
</ul>
```

### *ngSwitch
Das `ngSwitch`-Directive ermöglicht das bedingte Rendern von Inhalten auf der Grundlage eines Ausdrucks mit mehreren möglichen Werten. Es funktioniert ähnlich wie ein `switch` in anderen Programmiersprachen.

```html
<div [ngSwitch]="selectedOption">
  <ng-container *ngSwitchCase="'option1'">
    <p>Option 1 ausgewählt</p>
  </ng-container>
  <ng-container *ngSwitchCase="'option2'">
    <p>Option 2 ausgewählt</p>
  </ng-container>
  <ng-container *ngSwitchDefault>
    <p>Keine Option ausgewählt</p>
  </ng-container>
</div>
```

### ngClass
Die Direktive `ngClass` wird verwendet, um dynamisch CSS/(SCSS)-Klassen auf ein HTML-Element anzuwenden. Sie ermöglicht es, CSS/(SCSS)-Klassen basierend auf Bedingungen oder Ausdrücken hinzuzufügen oder zu entfernen.

Es gibt zwei verschiedene Arten wie `ngClass` meistens verwendet wird.

#### **Variante 1**:
Bei der ersten Variante gibt man zuerst die Klasse an und nach einem Doppelpunkt dann die Bedingung. Bei der Bedingung kann wieder mit Booleans oder Operatoren gearbeitet werden.
```typescript
import { Component } from '@angular/core';

@Component({
    // ..
})
export class AppComponent {
  color: string = 'red';
  colorCode: number = 10;
}
```
```html
<div [ngClass]="{'red': color === 'red'}">Text</div>
```
```scss
.red {
  color: red;
}
```

Man kann jedoch diese Variante auch für mehrere Klassen machen indem man diese aneinander reiht und mit einem Komma trennt.
```typescript
import { Component } from '@angular/core';

@Component({
    // ..
})
export class AppComponent {
  color: string = 'red';
  colorCode: number = 10;
}
```
```html
<div [ngClass]="{'red': color === 'red', 'blue' : colorCode === 10 }">Text</div>
```
```scss
.red {
  color: red;
}

.blue {
  color: blue;
}
```

#### **Variante 2**:
Bei der zweiten Variante arbeitet man mit dem [ternary Operator](../../javascript/06_js_operators#ternary-operator-), um zu prüfen ist eine Bedingung `true`, wenn ja verwende die erste angegebene Klasse. Ist die Bedingung jedoch `false` so verwende die zweite Klasse.
```typescript
import { Component } from '@angular/core';

@Component({
    // ..
})
export class AppComponent {
  colorCode: number = 10;
}
```
```html
<div [ngClass]="colorCode === 10 ? 'red' : 'blue'">Text</div>
```
```scss
.red {
  color: red;
}

.blue {
  color: blue;
}
```
