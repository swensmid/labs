---
title: "HTML Formulare"
type: docs
linkTitle: "HTML Formulare"
weight: 5
date: 2022-04-14
description: >
    Formular-Daten mit HTML verschicken.
---

## Wieso HTML-Formulare?
Die Benutzer deiner Webseite möchten oder sollen Daten eingeben können, z.B. für ein Kontakt-Formular oder eine Login-Seite. HTML-Formulare ermöglichen genau das, auch ohne JavaScript.

## HTML-Input-Element
Bevor wir uns HTML-Formulare genauer anschauen, wollen wir zuerst einen Blick auf Input-Elemente werfen, die das Eingeben von Daten überhaupt ermöglichen.

Beginnen wir mit einer ganz einfachen TextBox:

```html
Was ist dein Vorname?
<input type="text" name="firstname"/>
```
Probiere alle Beispiele immer selbst aus. Du hast gesehen, wie einfach eine TextBox in HTML eingebunden werden kann.

Das `type`-Attribut definiert, um was für eine Art von Input-Element es sich handelt. `text` steht für eine ganz gewöhnliche TextBox. Das zweite Attribut kannst du im Moment noch ignorieren.

## Label für Input-Elemente
Vor der TextBox haben wir einen Text ("Was ist dein Vorname"). Dieser Text wird auch "Label" genannt. Bei einer guten Webseite wird zudem die TextBox ausgewählt, wenn der User auf den Label klickt (nicht nur beim Klick auf die TextBox). Diese Funktionalität wollen wir hinzufügen:

```html
<label>Was ist dein Vorname?<input type="text" name="firstname" /></label>
```

Nun haben wir die gewünschte Funktionalität hinzufügen können. Aber was genau haben wir hier gemacht?

Wir haben den Label als Label definiert (da im `label`-Element). Wenn wir ein Input-Element in einem Label hinzufügen, dann wird bei einem Klick auf diesen Label automatisch dieses Input-Element fokusiert.

Nun sieht das noch ein bisschen unübersichtlich aus. Das können wir besser! Zum Beispiel so:

```html
<label for="firstname">Was ist dein Vorname?</label>
<input id="firstname" type="text" name="firstname" />
```

Abgesehen davon, dass das Input-Element nicht mehr im Label ist, ist der grosse Unterschied:
* dass das Input-Element nun ein `id`-Attribut hat
* und dass der Label mit dem `for`-Attribut darauf referenziert.

Fassen wir zusammen, weshalb wir das `label`-Element verwenden:
* Beim Klick auf den Label wird das entsprechende Input-Element ausgewählt.
* Beim Klick in das entsprechende Input-Element würde ein Screen-Reader den Namen des Labels laut vorlesen, (falls verwendet).
* Und ausserdem kann man später die Labels so einfacher stylen mit CSS.

## Weitere Input-Elemente
In HTML gibt es sehr viele weitere Input-Elemente. Eine grössere Liste findest du hier: https://www.w3schools.com/html/html_form_input_types.asp

