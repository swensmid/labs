---
title: "Einführung Angular"
type: docs
linkTitle: "Einführung Angular"
weight: 3
date: 2022-03-14
description: >
    Angular ist ein Framework um SPA’s (Single Page Applications) mittels HTML und JavaScript zu erstellen und besteht aus verschiedenen core und optionalen JavaScript Bibliotheken
---


## Architektur
Angular wird für Frontend-Applikationen verwendet. Oft wird ein Backend via HTTP(s) angebunden.
![Angular](/images/angular/angular_einführung.png)  
![Angular](/images/angular/architektur.png)  

## Angular Data Bindings
### Interpolation
- Anhand von diesem One-Way Binding kann man Properties des Components im Template anzeigen.\
Wenn sich das Property im Component ändert, wird das Template aktualisiert, um die neuen Änderungen anzuzeigen.


### Property Binding
- Anhand von Property Bindings können wir einen Wert unseres Components auf eine Eigenschaft eines Elements binden.\
Wenn sich also der bestimme Wert im Component verändern sollte, wird dies im Template aktualisiert.


### Event Binding
- Event Binding ist definiert als das Aktualisieren/Senden des Werts/der Information einer bestimmten Variablen vom Template zum Component.\
Zum Beispiel das Klicken eines Buttons.


### Two-Way-Binding
- Two-Way-Binding ist eine Kombination aus Property- und Eventbinding. Daten werden kontinuierlich synchronisiert: vom Template zum Component und vom Component zum Template.\
Dies bedeutet also, dass Änderungen, die an den Daten des Components vorgenommen wurden, werden mit dem Template synchronisiert und sofort aktualisiert.\
Umgekehrt funktioniert es auf dieselbe Weise, daher auch der Name "Two-Way-Binding".

![Databinding](/images/angular/component-of-Data-Binding.png) 
