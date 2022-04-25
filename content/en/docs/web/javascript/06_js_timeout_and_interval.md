---
title: "Timeouts und Intervalle"
type: docs
linkTitle: "Timeouts und Intervalle"
weight: 6
date: 2022-04-19
description: >
  Code verzögert ausführen.
---

## Code verzögert ausführen: setTimeout(...)
Manchmal muss eine Aktion verzögert ausgeführt werden. Dies kannst du ganz einfach mit der Funktion `setTimeout(callback, time)` realisieren:

```javascript
setTimeout(function(){
                console.log('Thanks for waiting :)');
            }, 5000);
```

Das erste Argument ist die Aktion/Funktion, die ausgeführt wird, sobald die Zeit abgelaufen ist. Das zweite Argument ist die Zeit in Millisekunden, die verstreichen muss, bis die übergebene Funktion ausgeführt wird.

## Code immer wieder ausführen: setInterval(...)
Folgender Code wird jede Sekunde ausgeführt:
```javascript
setInterval(function(){
    console.log('hey!');
}, 1000);
```

Vielleicht ist dir aufgefallen, dass `setTimeout(...)` und `setInterval(...)` eine Ganzzahl zurückgeben. Das ist die ID des Timeouts bzw. Intervalls. Es macht Sinn, diesen Wert zu merken, damit man das Intervall wieder beendet werden kann:

```javascript
const intervalId = setInterval(function(){}, 1000);
...

clearInterval(intervalId);
```

### Aufgabe: Uhr
![task1](/images/task.png) Schreibe ein HTML, das eine Uhrzeit visuell anzeigt.

    Deine Website soll zentriert eine Uhrzeit anzeigen.
    Es steht dir frei, ob du die Uhrzeit anolog oder digital anzeigen möchtest.

    Wenn du eine analoge Uhr rendern möchtest, dann könnten Vektorgrafiken (SVGs) oder Canvas weiterbringen.

    Du kannst es aber auch mit gewöhnlichen HTML-Elementen versuchen.


Hilfestellungen zu
* [SVG](https://www.w3schools.com/graphics/svg_intro.asp)
* [Canvas](https://www.w3schools.com/html/html5_canvas.asp)