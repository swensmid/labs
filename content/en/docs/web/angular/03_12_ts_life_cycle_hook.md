---
title: "Angular Life Cycle Hook"
type: docs
weight: 3
date: 2023-05-05
description: >

---

Lifecycle-Hooks ermöglichen es Entwicklern, Code zu spezifischen Zeitpunkten im Lebenszyklus einer Komponente auszuführen und somit die Komponente zu initialisieren, auf Änderungen zu reagieren und Aufräumarbeiten durchzuführen.

* ngOnChanges: Dieser Hook wird aufgerufen, wenn einer oder mehrere Input-Properties einer Komponente sich ändern. Hier können Sie auf die Änderungen reagieren und entsprechende Aktionen ausführen.

* ngOnInit: Dieser Hook wird einmalig aufgerufen, nachdem Angular die Input-Properties initialisiert hat und bevor die Komponente gerendert wird. Hier können Sie Initialisierungslogik ausführen, Daten abrufen oder Abhängigkeiten initialisieren.

* ngDoCheck: Dieser Hook wird bei jedem Angular-Change-Detection-Durchlauf aufgerufen. Hier können Sie benutzerdefinierte Änderungsüberprüfungen durchführen, um auf Änderungen zu reagieren, die Angular nicht automatisch erkennt.

* ngAfterContentInit: Dieser Hook wird aufgerufen, nachdem der eingebettete Inhalt (Content) in der Komponente initialisiert wurde. Hier können Sie auf den eingebetteten Inhalt zugreifen und damit interagieren.

* ngAfterContentChecked: Dieser Hook wird nach jedem Angular-Change-Detection-Durchlauf aufgerufen, nachdem der eingebettete Inhalt überprüft wurde. Hier können Sie Aktionen ausführen, die nach der Überprüfung des eingebetteten Inhalts erforderlich sind.

* ngAfterViewInit: Dieser Hook wird aufgerufen, nachdem die View (DOM) der Komponente initialisiert wurde. Hier können Sie auf die gerenderte View zugreifen und damit interagieren.

* ngAfterViewChecked: Dieser Hook wird nach jedem Angular-Change-Detection-Durchlauf aufgerufen, nachdem die View überprüft wurde. Hier können Sie Aktionen ausführen, die nach der Überprüfung der View erforderlich sind.

* ngOnDestroy: Dieser Hook wird aufgerufen, bevor eine Komponente zerstört wird. Hier können Sie bereinigende Aktionen durchführen, Abonnements beenden oder Ressourcen freigeben.

