---
title: "Linter"
linkTitle: "Linter"
weight: 1
date: 2023-05-12
description: >
    Hier wird erklärt was Linter sind und wie man diese benutzt.
---

## Linter
Ein Linter analysiert den Quellcode auf der Grundlage vordefinierter Regeln, Konventionen und Best Practices. Er prüft den Code auf häufige Fehler wie fehlende Semikolons, undefinierte Variablen, nicht verwendete Importe, ungültige Syntax und andere potenzielle Probleme. Darüber hinaus kann ein Linter auch den Code-Stil überprüfen, um sicherzustellen, dass er den vereinbarten Standards im Projekt entspricht.
Der Hauptzweck eines Linters besteht darin, Entwicklern dabei zu helfen, qualitativ hochwertigen Code zu schreiben, der gut strukturiert, fehlerfrei und leicht wartbar ist.

### ESLint
ESLint ist ein äusserst beliebtes und leistungsstarkes statisches Code-Analysetool für JavaScript- und TypeScript-Projekte.

#### ESLint konfigurieren
Man kann eigene Regeln erstellen oder bereits vorhandene Regeln anpassen, um den Anforderungen Ihres Projekts gerecht zu werden.
Die Konfiguration erfolgt über eine `.eslintrc`-Datei, in der man die Regeln, Erweiterungen und spezifischen Projekteinstellungen festlegen kann.

Hier einige Beispiele wie man dies tun kann:

**Anpassen bestehender Regel**:

In der `.eslintrc`-Datei kann man die Einstellungen für eine spezifische Regel ändern. Wenn man die maximale Zeilenlänge auf 100 Zeichen festlegen, geht die wie folgt.
```json
{
  "rules": {
    "max-len": ["error", { "code": 100 }]
  }
}
```

**Hinzufügen neuer Regel**:

Man kann Regeln hinzufügen oder entfernen, indem man die `rules`-Eigenschaft anpassen. Angenommen, man möchten die Regel "no-console" aktivieren, um den Einsatz von console.log zu verhindern.
```json
{
  "rules": {
    "no-console": "error"
  }
}
```

Weitere Informationen finden Sie in der ESLint-Dokumentation unter https://eslint.org/docs/user-guide/configuring.

#### ESLint ausführen
ESLint kan man über die Konsole ausführen dazu muss man folgende Schritte tun:

1. In der Konsole zum Wurzelverzeichnis des Projekts navigieren.
2. Den Befehl `eslint` gefolgt von den Datei- oder Verzeichnisnamen ausführen, die man überprüfen möchten.
```shell
eslint src/index.js
```
3. ESLint überprüft nun die angegebenen Dateien oder Verzeichnisse anhand der definierten Regeln und gibt mögliche Fehler oder Warnungen in der Konsole aus.

ESLint kann man mit zusätzlichen Optionen und Flags verwenden, die wichtigste Flag ist  `--fix`. Man kann es verwenden, um automatische Code-Fixes für bestimmte Probleme durchzuführen.
```shell
eslint --fix src/index.js
```

Vielfach ist ESLint bereits als Script im `packages.json` hinterlegt und kann dann so mit dem Befehl `npm run <scriptname>` aufgerufen werden.

#### ESLint als beim Speichern
**Im VS-Code**:

Man öffnet die VS Code-Einstellungen, indem man "Datei" (File) in der Menüleiste wählen und dann "Einstellungen" (Preferences) auswählen. Oder man verwendet den Shortcut "Strg + ," für Windows/Linux oder "Cmd + ," für macOS.

Man sucht nach `Save Actions` in den Einstellungen und wählt "In settings.json bearbeiten" (Edit in settings.json).

In der `settings.json`-Datei fügt man den folgenden Code hinzu:
```json
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

Nun noch die Datei speichern und VS-Code wird automatisch den Code formatieren und Lint-Fixes anwenden, wenn man eine Datei speichert.


**Im IntelliJ**:

Man öffnet die VS Code-Einstellungen, indem man den Shortcut "Strg + Alt + S" für Windows/Linux oder "Cmd + ," für macOS verwendet.

Man navigiert zu `Languages & Frameworks` -> `[Code-Language z.B. JavaScript]` -> `Code Quality Tools` -> `ESLint` nun wählt man die `Automatic ESLint configuration` und `Run eslint --fix on save` Option an.

### Prettier
Prettier ist ein beliebtes Codeformatierungstool, das dazu dient, den Code in einem einheitlichen und konsistenten Stil zu formatieren. Im Gegensatz zu einem Linter wie ESLint, der sich auf Code-Stilregeln konzentriert, konzentriert sich Prettier ausschliesslich auf die Formatierung des Codes.

Prettier unterstützt eine Vielzahl von Programmiersprachen, einschliesslich JavaScript, TypeScript, HTML, CSS, JSON etc.
Es bietet eine Reihe von Formatierungsregeln, die auf bewährten Praktiken basieren, um den Code lesbarer und einheitlicher zu gestalten.
Prettier kann den gesamten Code automatisch formatieren, einschliesslich Einrückungen, Zeilenumbrüchen, Leerzeichen, Klammern und anderen Formatierungsaspekten.

#### Prettier konfigurieren
Prettier benötigt normalerweise keine umfangreiche Konfiguration, da es über standardmässige Formatierungsregeln verfügt. Man kann jedoch bestimmte Einstellungen in einer .`prettierrc`-Datei festlegen, um das Verhalten anzupassen.

Hier ist ein Beispiel wie man dies tun kann:

Wenn man die Anzahl der Leerzeichen festlegen will, die für einen Tab verwendet werden sollen kann dies wie folgt getan werden.
```json
{
  "tabWidth": 2
}
```

Weitere Informationen zu den verfügbaren Optionen und deren Werten finden man in der Prettier-Dokumentation unter https://prettier.io/docs/en/configuration.html.

#### Prettier ausführen
Das Prettier Plugin kann man wie folgt ausführe.
* **IntelliJ**: Alt-Shift-Cmd-P auf macOS oder Alt-Shift-Ctrl-P auf Windows und Linux.

* **VSCode**: CMD + Shift + P auf macOS und CTRL + Shift + P auf Windows und Linux.

