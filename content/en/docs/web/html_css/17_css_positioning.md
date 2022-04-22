---
title: "Positionierung"
type: docs
linkTitle: "Positionierung"
weight: 17
date: 2022-04-19
description: >
  HTML-Elemente auf der Seite positionieren.
---

Der Tag wird kommen, an dem du ein HTML-Element an einer bestimmten Position haben willst.

## relative Positionierung: Element ein bisschen verschieben
Angenommen, du hast z.B. ein Bild in einem Text:
```html
Are you a
<img src="	https://it-ninjas.ch/img/svg/Ninja%20Elements_kopf.svg" alt="" />?

<style>
    body {
        font-size: 5em;
    }
    img {
        height: 1em;
    }
</style>
```

Dann wird das Bild wahrscheinlich nicht perfekt im Text ausgerichtet sein. In diesem Beispiel wollen wir das Bild ein bisschen nach unten verschieben. Dann kannst du das wie folgt machen:
```css
img {
    position: relative;
    top: 0.2em;
    ...
}
```

Mit `position: relative` bewirken wir, dass CSS-Properties wie `top`, `bottom`, `left`und `right` beachtet werden. Dank der relativen Positionierung dürfen wir dann das Element verschieben, ohne dass es andere Elemente bzw. den Textfluss verändert. Wir haben hier `top` verwendet, um oben einen Abstand einzufügen. Würdest du `left` verwenden, so würde sich das Element entsprechend nach rechts verschieben.

### Auftrag relative Positionierung
Im Layouting-Kapitel hast du einen Auftrag gelöst, wo du eine Seite mit Header und Navigation erstellt hast.

![task1](/images/task.png) Adjustiere dort das Bild oben links.


## absolute Positionierung
Möchtest du ein Element auf einer bestimmten Position haben, dann hilft dir womöglich `position: absolute` weiter:

```html
Are you a
<img src="	https://it-ninjas.ch/img/svg/Ninja%20Elements_kopf.svg" alt="" />?

<style>
    img {
        position: absolute;
        top: 20em;
        right: 10em;

        height: 150px;
    }
</style>
```

Mache den Browser mal ein bisschen kleiner und schaue, wie sich die Positionierung verhält, wenn du scrollst.

Möchtest du, dass die Positionierung immer gleich - unabhängig vom Scrollen - ist? Dann versuche es einmal mit `position: fixed`.

### Auftrag: Info-Box
![task1](/images/task.png) Erstelle eine HTML-Seite (oder erweitere eine andere so, dass) die ganz unten eine Meldung anzeigt mit einem "OK"-Button. 

Inspiriere dich an den nervigen Cookie-Meldungen von anderen Seiten.

![exCookieBanner](../ex_pos_abs_cookie_banner.jpeg)
