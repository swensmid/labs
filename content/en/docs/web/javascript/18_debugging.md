---
title: "Debugging"
type: docs
linkTitle: "Debugging"
weight: 18
date: 2023-03-31
description: >
    Modul #F4 - JavaScript - Debuggen ist in jeder Programmiersprache wichtig und die IDE hat dazu viele nützliche Tools, welche hier angeschaut werden.
---

## Ziele
* Du weisst, wie du in VSCode JavaScript Code debuggen kannst
* Du weisst, wie du in IntelliJ JavaScript Code debuggen kannst

## Wieso ist debuggen wichtig?
zu erkennen und zu korrigieren sind. Es gibt eine Vielzahl von Gründen, warum JavaScript-Anwendungen Fehler enthalten können, wie zum Beispiel unerwartete Nutzereingaben, Netzwerkprobleme, inkonsistente Daten oder eine fehlerhafte Logik innerhalb des Codes. Das Debuggen kann dazu beitragen, diese Fehler zu identifizieren und zu beseitigen.

Ein weiterer wichtiger Grund, warum Debuggen in JavaScript wichtig ist, ist, dass JavaScript eine dynamisch typisierte Sprache ist. Das bedeutet, dass Typfehler während der Laufzeit auftreten können, wenn eine Variable unbeabsichtigt einen anderen Datentyp zugewiesen bekommt, als erwartet. Typfehler können schwer zu finden sein, da sie nicht immer sofort zu offensichtlichen Fehlern führen und zu unerwartetem Verhalten führen können.

### Ist es nun schlau zum debuggen `console.log()` zu verwenden?
 Die Antwort ist Ja und Nein.

Es ist zwar eine der gängigsten Methoden die verwendet wird, da es sehr schnell und einfach ist. Jedoch beeinträchtigen zu viele davon die Leistung des Codes, was dann zum Problem wird wenn man sie beim Git push, vergisst herauszunehmen und sie auf Umgebungen landen könnten. Falls solche auf eine Umgebung gelangen können sie auch zu Sicherheitsproblemen führen.

Somit ist es besser mit Tools von VSCode oder IntelliJ zu debuggen.

## Debuggen in VSCode
Damit man in VSCode debuggen kann, muss man zuerst ein `launch.json` erstellen. Dies geht am besten in dem man rechts in der Menüleiste auf das vierte Icon klickt:
![VS Code zeigt nun, wo man das launch.json erstellt](../images/debugging-create-launch-json.png "launch.json erstellen in VS Code")

Man muss natürlich auch den Debugger aussuchen, den man verwenden möchte:
![VS Code zeigt nun, welchen Debugger man möchte](../images/debugging-debugger.png "Debugger auswählen in VS Code")

Nun muss man den Code im `launch.json` mit dem folgenden ersetzen:
```json
{
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Launch Program",
        "skipFiles": ["<node_internals>/**"],
        "program": "${file}",
        "cwd": "${workspaceFolder}"
      }
    ]
}
```

Nun kann man den Debugger mittels F5 starten.

Damit dieser jedoch etwas bringt, muss man auch Breakpoints setzen.
Dafür kann man links neben der Zeilenzahl mittels Links-Klick einen normalen Breakpoint setzen oder mit Rechts-Klick die Optionen ansehen:
![VS Code zeigt nun, die Breakpoint Optionen](../images/debugging-options-vscode.png "Breakpoint Optionen VS Code")

Die Optionen zeigen folgende drei Breakpoints:
* Breakpoints: Breakpoints sind die am häufigsten verwendeten. Sie ermöglichen es, den Programmfluss an einer bestimmten Zeile zu unterbrechen und den Code schrittweise zu debuggen.
* Logpoints: Logpoints ermöglichen es, während des Debuggings eine Nachricht in der Konsole auszugeben, ohne den Programmfluss zu unterbrechen.
* Conditional Breakpoints: Conditional Breakpoints ermöglichen es, einen Breakpoint zu setzen, der nur unter bestimmten Bedingungen ausgelöst wird.

Wenn man einen Logpoint oder Conditional Breakpoint setzt kannt man im Dropdown noch zwei weitere auswählen.
![VS Code zeigt nun, die Conditional Breakpoint Optionen](../images/debugging-breakpoint-options-vscode.png "Conditional Breakpoint Optionen VS Code")
* Exception Breakpoints: Exception Breakpoints ermöglichen es, den Programmfluss an der Stelle zu unterbrechen, an der eine Ausnahme (Exception) auftritt.
* Hit count breakpoint: Hit count Breakpoints ermöglichen es, eine Pause im Code an einer bestimmten Stelle einlegt, wenn eine bestimmte Bedingung erfüllt ist. Der "Hit count" bezieht sich dabei auf die Anzahl der Male, die dieser Breakpoint erreicht wurde.

Wenn man im Debugmodus ist kann man links ein Panel sehen mit drei Unterteilungen:
* Watch: Die "Watch"-Funktion ermöglicht es, die Werte von Variablen, Objekten und Ausdrücken in Echtzeit zu überwachen. Man kann Variablen hinzufügen, um ihre Werte zu verfolgen und sie zu überprüfen, während man durch den Code gehen. Dies ist besonders nützlich, wenn man einen Fehler vermuten und den Wert einer bestimmten Variable überprüfen möchten.
* Call Stack: Die "Call Stack"-Funktion zeigt die Aufrufliste ser Codezeilen an. Man kann sehen, welche Funktionen aufgerufen wurden und in welcher Reihenfolge. Dies ist hilfreich, um zu verstehen, wie der Code funktioniert und wo Fehler auftreten können. Man kann auch zurückgehen und zu einem bestimmten Punkt in der Liste springen, um den Code von diesem Punkt aus zu überprüfen.
* Variables: Die "Variables"-Funktion zeigt eine Liste der Variablen an, die im aktuellen Kontext verfügbar sind. Man kann den Wert jeder Variable überprüfen und sie ändern, um zu sehen, wie sich der Code verhält. Diese Funktion ist besonders nützlich, wenn man eine Variable suchen und ihren Wert überprüfen müssen, um einen Fehler zu finden.

Die Debugging Actions sind wichtig zum während des Debuggen zu navigieren. Die Icons auf dem folgenden Bild werden darunter von links nach rechts erklärt:
![VS Code zeigt nun, die Debugging Actions](../images/debugging-actions.png "Debugging Actions VS Code")

Fortsetzen/Pause (F5):
Fortsetzen: Setzt die normale Programm- oder Skriptausführung fort (bis zum nächsten Breakpoint).
Pause: Ermöglicht die Inspektion des Codes, der gerade ausgeführt wird, und das Debuggen Zeile für Zeile.

Schritt über (F10): 
Führt die nächste Methode als einzelnen Befehl aus, ohne ihre Bestandteile zu inspizieren oder zu folgen.

Schritt in (F11):
Betritt die nächste Methode, um ihre Ausführung Zeile für Zeile zu verfolgen.

Schritt zurück (⇧F11):
Wenn Sie sich innerhalb einer Methode oder Unterprozedur befinden, kehren Sie zum früheren Ausführungskontext zurück, indem Sie die verbleibenden Zeilen der aktuellen Methode als einzelnen Befehl ausführen.

Neu starten (⇧⌘F5):
Beendet die aktuelle Programmausführung und startet das Debuggen erneut mit der aktuellen Ausführungskonfiguration.

Stoppen (⇧F5):
Beendet die aktuelle Programmausführung.

## Debuggen in VSCode mit LiveServer

## Debuggen in IntelliJ

