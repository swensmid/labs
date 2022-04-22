---
title: "JavaScript: Einführung"
type: docs
linkTitle: "Intro"
weight: 1
date: 2022-04-19
description: >
  Nun sagst du dem Browser, was er machen soll!
---

Jetzt wird es Zeit, dass du auch Programm-Logik auf deiner Website einbauen kannst. Dafür lernst du gleich die Programmiersprache JavaScript kennen, die von praktisch allen bekannten Browsern unterstützt wird.

Damit du eine Übersicht über die Programmiersprache bekommst, kannst du z.B. [dieses Video](https://www.youtube.com/watch?v=DHjqpvDnNGE) schauen, ohne dass du den ersten Satz verstehen musst.

## Motivation für JavaScript
Manchmal muss der Browser eine für die Website spezifische Funktion ausführen, um zum Beispiel ein Video zu starten, deine Eingaben zu prüfen usw.

Wir beginnen ganz klein: Mit einem Button, der beim Klick eine MessageBox anzeigt.

```html
<button onclick="onClickMeClick()" type="button">Klick mich</button>

<script>
    function onClickMeClick() {
        alert('Klick mich nicht an!!');
    }
</script>
```

Versuche zuerst, dieses Beispiel ohne Erläuterung zu verstehen.

Zuerst hast du im HTML einen Button erstellt mit dem Text "Klick mich". 

Weiter unten siehts du ein `<script>`-Element. Dort drin ist eine Funktion namens `onClickMeClick()` definiert. Die Funktion ruft `alert(message: string)` auf. Diese `alert`-Funktion öffnet eine MessageBox mit der übergebenen Nachricht.

Wie du siehst, wird die selbst definierte Funktion beim Klick auf den Button aufgerufen. Dies passiert, weil du diesen Aufruf im `onclick`-Attribut des `<button>`s definiert hast. Beachte in diesem Beispiel, dass nicht die Funktion sondern deren Aufruf drin steht. Im Prinzip wird beim Button-Klick der Wert des `onclick`-Attributs ausgeführt. Theoretisch könntest du auch direkt `onclick="alert('Klick mich nicht an!!')"` schreiben.