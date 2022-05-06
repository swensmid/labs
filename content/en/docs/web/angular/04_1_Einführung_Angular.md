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

## Aufgabe 1
Folgender Code ist gegeben:
```typescript
class Fahrrad{
  name?: string;
  url?: string;
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fahrrad',
  templateUrl: './fahrrad.component.html',
  styleUrls: ['./fahrrad.component.scss']
})
export class FahrradComponent implements OnInit {

  fahrrad: Fahrrad;
  liebslingsFahrraeder:any = [];
  constructor(protected httpClient: HttpClient) {
    this.fahrrad = new Fahrrad();
    this.fahrrad.name = "Specialized Diverge Pro Carbon";
    this.fahrrad.url = "https://assets.specialized.com/i/specialized/96220-10_DIVERGE-PRO-CARBON-ETAP-REDWD-SMK-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto"
   }

  ngOnInit(): void {
  }

  nameDesFahrrads(){
    alert(this.fahrrad.name);
  }

  bildLiebslingsFahrrad(){
    this.liebslingsFahrraeder = [];
    let url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDNGfS6NUdgwXOwKu9xlZPJFm84ylG6J4g&cx=005124428384360536924:rstfldysumw&q=" + this.fahrrad.name + "&searchType=image&safe=high";
    this.httpClient.get(url).subscribe((response:any) =>{
      for (var i = 0; i < 4; i++) {
        var item = response.items[i];
        item.image.height =  200 / item.image.width * item.image.height;
        item.image.width = 200;
        this.liebslingsFahrraeder.push(item);
      }
    });
  }
}
```
Folgendes muss angezeigt werden, wenn die Seite geladen wurde:

<img src="../assets/images/04_01_First_Page.PNG" alt="Components Description" style="width:20%"/>
- "Wie heisst mein Fahrrad?" ist mit der Funktion "nameDesFahrrads()" verknüpft.
- "Mein Liebslingsfahrrad suchen" ist mit der Funktion "bildLiebslingsFahrrad()" verknüpft.
- Für die Anzeige der Lieblingsfahrräder muss ein `*ngFor` gebraucht werden.
- Tipp: Die Weite und Höhe der Bilder kann direkt mit einem Propertybinding gemacht werden.

Folgende Seite wird nach dem Klick auf "Mein Lieblingsfahrrad suchen" angezeigt:


<img src="../assets/images/04_01_Second_Page.PNG" alt="Components Description" style="width:40%"/>
