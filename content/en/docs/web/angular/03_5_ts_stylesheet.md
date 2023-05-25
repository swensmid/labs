---
title: "Stylesheet"
type: docs
linkTitle: "Stylesheet"
weight: 7
date: 2023-05-04
description: >
  In diesem Kapitel wird beschrieben wa genau das Stylesheet in Angular ist.
---
Zu jedem Angular Component gehört ein Stylesheet, diese ist jedoch nur für diesen Component zuständig, das heisst das HTML-File dieses Components. Erstellt man einen neuen Component über die CLI so wird das Stylesheet automatisch erzeugt.
Somit wir schon vorgegeben das die Styles ausgelagert werden sollten und nicht inline erfolgen. Man kann jedoch auch ein oder mehrere globale Stylesheets erstellen, diese gellten dann wie der name es schon sagt für das gesamte Projekt. Somit werden dort Styles definiert wie zum Beispiel das alle p-tags eine bestimmte Schriftgrösse, Schriftart, Schriftfarbe etc. haben.

Beim Erstellen eines Angular Projekts kann man sagen ob man CSS, SCSS, SASS oder LESS haben möchte, was SCSS genau ist, wird folgend noch erläutert.

![Angular Stylesheet](../images/angular-stylesheet.png)

## SCSS
SCSS (Sassy CSS) ist eine Erweiterung der CSS-Sprache, die zusätzliche Funktionen und Möglichkeiten bietet, um die Entwicklung von Stylesheets zu vereinfachen und effizienter zu gestalten. Die Files erhalten dann nicht mehr den Suffix .css sondern .scss.

Die wichtigsten Hauptfunktionen von SCSS sind:

### Variablen
Mit Sass kann man Variablen definieren und verwenden, um Werte wie Farben, Schriftarten etc. zu speichern und später im Stylesheet wiederverwenden zu können.

```scss
$primary-color: #007bff;

.button {
  color: $primary-color;
  background-color: lighten($primary-color, 20%);
}
```

### Verschachtelte Regeln
Mit Sass kann man verschachtelte Regeln schreiben, um die Lesbarkeit und Struktur des Stylesheets zu verbessern. Statt jedes Element separat zu selektieren, kann man die Struktur des HTML-Codes reflektieren.

```scss
.container {
  width: 100%;

  .heading {
    font-size: 24px;
  }

  .content {
    margin-top: 20px;
  }
}
```

### Mixins
Mixins ermöglichen es, Gruppen von CSS-Deklarationen zu definieren und sie an verschiedenen Stellen im Stylesheet wiederzuverwenden.

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.button {
  @include border-radius(4px);
}
```

### Vererbung
Sass ermöglicht es, Styles von einer Klasse zu einer anderen zu vererben, ähnlich wie bei der Vererbung in der objektorientierten Programmierung. Dies kann dazu beitragen, den Stylesheet-Code zu reduzieren und die Wartbarkeit zu verbessern.

```scss
.error {
  color: red;
}

.error-message {
  @extend .error;
  font-weight: bold;
}
```

### Partials & Importieren von Dateien
Mit Partials kann man Stylesheet-Dateien in kleinere Teile aufteilen und sie bei Bedarf in andere Stylesheets importieren. Partials werden in der Regel mit einem führenden Unterstrich `_` in ihrem Dateinamen gekennzeichnet, z.B. `_variables.scss`, `_mixins.scss` etc. Dies hilft, den Code besser zu organisieren denn man kann ihn in logische Module aufzuteilen. Dadurch wird der Code wiederverwendbar. Es ermöglicht, nur somit dann nur die benötigten Partials zu importieren.

```scss
// _variables.scss
$primary-color: #007bff;
$secondary-color: #ff9800;
```
```scss
@import 'variables';

.header {
  background-color: $primary-color;
  color: $secondary-color;
}
```
