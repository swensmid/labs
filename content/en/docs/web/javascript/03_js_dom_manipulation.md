---
title: "Mit JavaScript das DOM verändern"
type: docs
linkTitle: "DOM-Manipulation"
weight: 3
date: 2022-04-19
description: >
  Die Website mit Hilfe von JavaScript verändern.
---

## Auf DOM-Elemente zugreifen
Eines der häufigsten Anwendungszwecke von JavaScript ist es, Elemente auf einer Website zu verändern.

Nehmen wir für ein Beispiel diese Seite:
```html
<div id="message-div"></div>

<p>This page has <span id="likes-count">0</span> likes.</p>
<button type="button">+1</button>
```

Mit JavaScript möchten wir, dass sich die Zahl erhöht im `<span>`. In einem ersten Schritt versuchen wir, auf das `<span>`-Element zuzugreifen und eine andere Zahl reinzuschreiben. Das probieren wir direkt in der Konsole des Browsers aus:

```javascript
let span = document.getElementById('likes-count');
span.textContent = 999;
```

Du wirst sehen, dass sich die Zahl im `<span>` sich tatsächlich verändert hat. Probieren wir aber zuerst, den Code zu verstehen!
* `document` ist ein Objekt, das es im Browser einfach so gibt. Dieses Objekt repräsentiert so zu sagen das DOM. Mit diesem `document`-Objekt können wir auf die Elemente im Browser zugreifen.
* `getElementById(...)` ist eine Methode auf diesem `document`-Objekt. Diese Methode sucht auf der aktuellen Seite dann ein Element, das die übergebene `id` besitzt.
* Das gefundene Element möchten wir in einer Variable namens `span` zwischenspeichern.
* `textContent` ist ein Feld (= eine Variable) auf diesem Element, das den Inhalt des Elements (als Text) repräsentiert. Diesen Wert können wir einfach so kopieren.


Mit diesem Code konnten wir die Anzahl Likes auf eine bestimmte andere Zahl setzen. Nun möchten wir aber, dass sich diese Anzahl um genau 1 erhöht. Dafür benötigen wir noch zwei Zwischenschritte:
1. Die aktuelle Zahl auslesen
2. Diese Zahl von einem String in eine Nummer konvertieren
3. Und die erhöhte Zahl ins `<span>` schreiben.

Das könnte ungefähr so aussehen:
```javascript
let span = document.getElementById('likes-count');
let likes = parseInt(span.textContent);
likes++;
span.textContent = likes;
```

Neu dazugekommen ist
* der Aufruf von `parseInt(...)`. Diese Methode schwebt in JavaScript auch einfach so herum und kann einfach so verwendet werden. Diese Methode versucht, den übergeben Wert in eine Ganzzahl (Integer) zu konvertieren.
* `likes++` bedeutet gleich viel wie `likes = likes + 1`. Damit erhöhen wir die `likes`-Variable also um 1.
* Mit `span.textContent = likes` setzen wir den Text des `span`s neu. Eine Umwandlung in String ist nicht notwendig.

### Manipulation beim Button-Klick ausführen lassen
Nun wollen wir noch, dass das, was wir vorher programmiert haben, dann passiert, wenn der User auf den Button klickt. Ändere die HTML-Seite wie folgt ab:

```html
...
<button type="button" onclick="onLikeClick()">+1</button>

<script>
    function onLikeClick() {
        let span = document.getElementById('likes-count');
        let likes = parseInt(span.textContent);
        likes++;
        span.textContent = likes;
    }
</script>
...
```

## Ein neues Element hinzufügen
Manchmal möchtes du ein neues Element auf der Website generieren lassen.

Im kommenden Beispiel möchten wir so viele Bilder von "Thumbs Ups" (also 👍) wie Likes anzeigen.

Um das zu erzielen, kannst du die `onLikeClick`-Funktion wie folgt erweitern:
```javascript
// draw a thumb up for every like:
const imgHtml = '<img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Emoji_u1f44d.svg" alt="like" height="25">';
let insertHtml = '';
for (let i = 0; i < likes; i++) {
    insertHtml += imgHtml;
}
const messageDiv = document.querySelector('div#message-div');
messageDiv.innerHTML = insertHtml;
```

Dieser Code macht folgendes:
* für jedes Like, wird im `<div id="message-div">` folgendes Element/Bild hinzugefügt: `<img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Emoji_u1f44d.svg" alt="like" height="25">`
* Das HTML für dieses Bild haben wir zuerst in einer Konstante (`const`) gespeichert. `const` ist das Gleiche wie `let` mit dem Unterschied, dass sich dieser Wert nie verändern darf innerhalt dieser Methode. Wenn sich eine Variable nie im definierten Block verändert, so wird empfohlen, `const` statt `let` zu verwenden.
* Die String-Variable `insertHtml` brauchen wir als Zwischenspeicher, wo wir alle Elemente reinkopieren, die wir später im HTML/DOM haben möchten.
* Die `for`-Schlaufe wird so oft durchlaufen wie es Likes gab. Das bedutet, dass pro Like ein Bild ins `insertHtml` kopiert wird.
* Anschliessend holen wir uns das `<div id="message-div">` via JavaScript. Wir hätten hier auch `document.getElementById('message-div')` verwenden können. Aber `querySelector` funktioniert hier auch. Die `querySelector`-Methode akzeptiert ein CSS-Selektor und gibt dann das Element zurück, das damit angesprochen wird. In diesem Beispiel war `div#message-div` ein möglicher CSS-Selektor (wie `#message-div` eigentlich auch), der das `<div id="message-div"` anspricht.
* Als letztes verändern wir das HTML dieses `<div>`s, indem wir das `innerHTML`-Feld neu setzen.


Super, nun hast du schon ein paar Dinge auf deiner Seite mit JavaScript dynamisch veräandert. 

Bitte denke daran, dass das Verwenden von `.innerHTML` als eine Art "Holzfäller-Methode" angesehen wird. JavaScript bietet hierfür bereits eine elegantere Möglichkeit, die aber oft viel zu umständlich ist. Bitte schaue dir diese trotzdem kurz an: https://www.w3schools.com/js/js_htmldom_nodes.asp