---
title: "JavaScript: Konsole"
type: docs
linkTitle: "Konsole"
weight: 2
date: 2022-04-19
description: >
  Konsole des Browsers benutzen.
---

## Eine Nachricht loggen

In Java hast du Text mit `System.out.println(...)`, in C# mit `Console.WriteLine(...)` und in Python vielleicht mit `print(...)` geloggt. Genau das gibt es auch in JavaScript.

In einer HTML-Datei kannst du folgendes hinzufügen:

```html
<script>
  ...

  console.log('hello world');
</script>
```

Um diese Meldung sehen zu können, musst du die Konsole des Browsers öffnen. Dies kannst du machen, indem du die Entwickler-Tools des Browsers öffnest (z.B. mit der [F12]-Taste). Anschliessend navigierst du zum "Konsole"-Tab. Nun solltest du die geloggte Nachricht entdecken können:

![console](../images/console.png)

## Code direkt im Browser ausführen

Du kannst Code direkt in der Konsole des Browsers ausführen lassen. Klicke hierfür in das Eingabefeld unterhalt deiner geloggten Nachricht. Dort kannst du dann folgendes reinkopieren:

```javascript
for (let i = 0; i < 10; i++){
    console.log(i);
}
```

Nun sollten in deiner Konsole die Zahen 0 - 9 geloggt worden sein. Den Code solltest du bereits seit deiner Einführung in Java verstehen. Das einzig neue hier ist, dass du hier die Nummer-Variable mit `let` deklariert hast.

Du hast gesehen, wie einfach du Code auf der Website mit Hilfe der Konsole ausführen kannst. Die Konsole ist ein sehr mächtiges Tool, das die Entwicklung mit JavaScript extrem vereinfachen kann. Bevor du Code in der IDE (also deiner Entwicklungsumgebung) eingibst, kannst du vorher in der Konsole ausprobieren, ob dein Code zum gewünschten Resultat führt. 