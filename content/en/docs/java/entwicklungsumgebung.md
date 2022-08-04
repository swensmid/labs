---
title: "Entwicklungsumgebung einrichten"
linkTitle: "Entwicklungsumgebung einrichten"
weight: 1
description: >
  Modul #O4 - Entwicklungsumgebung
---

#### Ziele
* Ich habe die Ersteinrichtung des Laptops vollständig durchgeführt
* Ich bin im Besitz von permanenten Admin-Rechten
* Ich weiss, wo ich Hard- und Software bestellen kann
* Ich habe die notwendigen Programme heruntergeladen und installiert
* Ich weiss, wie ich von Zuhause aus auf das SBB-Netzwerk zugreifen kann: Citrix Gateway
* Ich verstehe was ein Proxy ist und wie ich ihn einstellen muss

---

{{% sbb %}}
### Adminrechte überprüfen / bestellen
Damit du auf deinem SBB-Laptop Programme installieren kannst, muss dein angemeldeter Benutzer über Adminrechte verfügen.
Über den folgenden Link kannst du dein Inventar anzeigen lassen und überprüfen, ob dein Benutzer bereits Adminrechte besitzt: https://sbb.service-now.com/sbb?id=show_inventory
Wenn die Liste deines Inventars den Eintrag "Local admin right" enthält, dann besitzt du bereits Adminrechte und musst nichts weiter unternehmen.

Falls du keine Adminrechte besitzt, müssen diese im Service-Portal bestellt werden. Es ist wichtig zu wissen, dass es zwei Arten von Adminrechten gibt: Temporäre und permanente Adminrechte.
Temporäre Adminrechte erhältst du nach ca. 10 Minuten und daher eignen sich diese für die rasche Installation von Software. Diese Rechte verfallen jedoch nach 24h.
Permanente Adminrechte sind endlos gültig, du erhältst sie aber nicht sofort, die Bestellung muss zuerst freigegeben werden.
Die Bestellung von temporären und permanenten Adminrechten sollte separat erfolgen, da die gesamte Bestellung sonst auf die Freigabe der permanenten Adminrechte warten muss.
Bei der Bestellung musst du die K-Nummer deines SBB-Laptops angeben, die Bestellung in den Einkaufswagen legen und anschliessend die Bestellung abschliessen.
[temporäre Adminrechte bestellen](https://sbb.service-now.com/sbb?id=sc_cat_item&sys_id=a24284474f621240846c119f0310c72f&sysparm_category=be320a324f92e740846c119f0310c7fc&catalog_id=-1)  
[permanente Adminrechte bestellen](https://sbb.service-now.com/sbb?id=sc_cat_item&sys_id=0f8ffb364f621240846c119f0310c72a&sysparm_category=be320a324f92e740846c119f0310c7fc&catalog_id=-1)
Nach der Bestellung muss eine Weile gewartet werden, bis die Bestellung abgeschlossen ist, dies dauert rund 10 Minuten. Nach einem Neustart des Gerätes sollten die Adminrechte aktiv sein.

Die Bestellung von Hardware oder lizenzierter Software ist über das [Service-Now](https://sbb.service-now.com/sbb?id=sc_home) möglich.


{{% /sbb %}}

---

### Programme und Tools

Die folgenden Programme sollten heruntergeladen und installiert werden, sie werden für die Grundausbildung verwendet.

| Anwendung                    | Link                                                                                                                                           | Zweck                                                                                         |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| JetBrains Toolbox (optional) | [https://www.jetbrains.com/toolbox/app/](https://www.jetbrains.com/toolbox/app/)                                                               | Management für Entwicklungsumgebungen                                                         |
| IntelliJ IDEA                | Durch die JetBrains Toolbox oder direkt unter [https://www.jetbrains.com/de-de/idea/download/](https://www.jetbrains.com/de-de/idea/download/) | Entwicklungsumgebung {{% sbb %}}, beim Starten den Lizenzserver eintragen: http://intellij-license.sbb.ch {{% /sbb %}} |
| Notepad++                    | [https://notepad-plus-plus.org/downloads/](https://notepad-plus-plus.org/downloads/)                                                           | Erweiterter Texteditor mit vielen nützlichen Funktionen                                       |
| Google Chrome                | [https://www.google.com/intl/de/chrome/](https://www.google.com/intl/de/chrome/)                                                               | Web-Browser von Google mit sehr guten Entwickler-Funktionen                                   |
| GIT                          | [https://git-scm.com/download/win](https://git-scm.com/download/win)                                                                           | Zugriff auf das Versionsverwaltungssystem GIT                                                 |
| Apache Maven                 | [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)                                                                 | Build Management Tool von Apache, beim Herunterladen das Binary auswählen (nicht die Source)  |
| JDK                          | [https://www.oracle.com/java/technologies/javase-jdk14-downloads.html](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html)   | Java Development Kit zur Herstellung von Java-Anwendungen                                     |
| Postman                      | [https://www.postman.com/downloads/](https://www.postman.com/downloads/)                                                                       | Anwendung zum Absetzen von Requests an REST-Schnittstellen                                    |

---

{{% sbb %}}
### Citrix Gateway

Auf deinem SBB-Laptop befindet sich eine Anwendung mit dem Namen Citrix Gateway. Diese Anwendung erlaubt dir eine Verbindung zum SBB Intranet.
Wenn du also von Zuhause aus oder in der Berufsschule auf das SBB Intranet zugreifen willst, dann brauchst du diese Anwendung.
Wenn die Anwendung gestartet wird, wirst du automatisch mit dem SBB-Netz verbunden. In der Taskleiste erscheint das folgende Symbol
![](../entwicklungsumgebung/1563099228.png)

Durch einen Klick auf das Icon siehst du den Verbindungsstatus
![](../entwicklungsumgebung/1563099230.png)

Innerhalb eines SBB-Gebäudes mit Verbindung zu einem LAN oder WLAN der SBB brauchst du diese Anwendung nicht.
Falls keine Verbindung zu irgendeiner Webseite oder einer Anwendung im SBB-Intranet besteht prüfe immer zuerst, ob der Citrix Gateway aktiv ist und ob du dort eine Verbindung hast.

{{% /sbb %}}
---
{{% sbb %}}
### Firewall / Sicherheit

Dein Betriebssystem verfügt mit dem Windows-Betriebssystem über eine eigene Firewall. Du bist persönlich für deren Konfiguration verantwortlich.
Gleichzeitig verfügt das SBB-Netzwerk selbstverständlich über entsprechende Schutzmechanismen, darunter auch diverse Firewalls.
Im Intranet der SBB ist der Besuch von diversen Webseiten eingeschränkt. Dein Browser informiert dich sofort, wenn du auf eine nicht zugelassene Seite navigierst.

Lies den folgenden Artikel im Intranet betreffend Weisungen über Datensicherheit und Datenschutz: [https://sbb.sharepoint.com/sites/intranet_servicessupport/SitePages/datensicherheit-und-datenschutz.aspx](https://sbb.sharepoint.com/sites/intranet_servicessupport/SitePages/datensicherheit-und-datenschutz.aspx)

{{% /sbb %}}
---

{{% sbb %}}
### Proxy

Ein Proxy ist eine Kommunikationsstelle in einem Netzwerk. Je nachdem, in welchem Netzwerk du dich befindest ist die Konfiguration eines Proxys unumgänglich.
Für die Nutzung von Services wie beispielsweise GIT sollten generell die folgenden Angaben für den Proxy verwendet werden:

Typ: HTTP<br>
Hostname: zscaler.sbb.ch<br>
Port: 10465<br>
Kein Proxy für: localhost<br>
Proxy Authentifizierung: Personalnummer und Passwort

Diese Einstellungen können in Applikationen wie IntelliJ oder Postman hinterlegt werden.

#### DEV-Proxy

Um bessere Verbindungen zu ermöglichen, gibt es noch den DEV-Proxy der Werkzeugunterstützung (WZU).
Das Tutorial zum Einrichten gibt es hier: [Entwickler-Proxy](https://confluence.sbb.ch/x/lQL8Nw)

{{% /sbb %}}