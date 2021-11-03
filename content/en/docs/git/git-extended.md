---
title: "Git Erweitert"
linkTitle: "Git Erweitert"
weight: 2
---

Nachdem du die Basics von git gelernt hast, ist es Zeit dich weiter zu vertiefen.

## Inhalt

* [Stash](#Stash)
* [Cherry Pick](#CherryPick)
* [Tag](#Tag)
* [Alias](#Alias)

## Stash
#### Was ist stash?
Mit git stash ist es möglich Änderungen zwischenzuspeichern und diese später abzurufen.
Nach dem stashen kannst du an anderen Dateien arbeiten bis du die zwischengespeicherten Daten problemlos wieder abrufen kannst.

#### Wie funktioniert stash?
Um Dateien zu stashen wird der folgende Befehl verwendet:

```bash
git stash
```
Um Dateien im Anschluss abzurufen wird der folgende Befehl verwendet:
```bash
git stash pop
```
Mit ```git stash pop``` werden alle änderungen des stashes gelöscht und der ursprünglichen Datei hinzugefügt.

Die Alternative dazu ist:
```bash
git stash apply
```
Mit ```git stash apply``` werden die änderungen ebenfalls übernommen,
der Unterschied zu ```git stash pop``` liegt darin das stash apply die Dateien nicht aus dem Stash löscht,
dies kann nützlich sein, wenn dieselbe Änderung mehreren Branches hinzugefügt werden soll.


## Squash
#### Was ist Squash
squash in Git meint mehrere Commits zu vereinen.
Squash wird meistens benutzt, wenn Branches gemerged werden.
AN dieser Stelle ist es jedoch wichtig zu erwähnen das es keinen ```git squash``` Befehl gibt.


#### Wie funktioniert squash?
Es gibt verschiedene Wege um Commits zu squashen.
Zum Beispiel gibt es die Methode des manuellen squashens, dazu wird das Interactive rebase feature von Git genutzt.
Um die Interactive Rebase session zu starten wird der folgende Befehl verwendet:
```bash
git rebase -i HEAD~3
```
Danach öffnet sich ein Editor der die letzten n Commits anzeigt, n wird durch die Zahl nach dem "~" definiert.
Um jetzt die Commits zu squashen muss das pick zu beginn der zeile mit squash ersetzt werden.
Jetzt werden alle Commits mit dem squash Schlüsselwort an den obersten Commit hinzugefügt.


#####Wieso sollte man Squashen:
Angenommen du beendest die Arbeit an einem Featurebranch und willst diese in den Main branch mergen,
jedoch enthält der Featurebranch viele Commits die nicht zwingend im Mainbranch aufgeführt werden sollen,
in diesem Fall eignet sich das squashen, um diese Commits zusammenzufassen.



## Merge/Pull Requests
###Was ist der Unterschied zwischen einer Merge Request und einer Pull Request?
Beide Begriffe meinen dasselbe, werden jedoch mit einer anderen Plattform assoziiert.
Der Begriff Merge Request wird im Zusammenhang mit GitLab verwendet.
Im Zusammenhang mit GitHub wird jedoch der Begriff Pull Request verwendet.
Der Einfachheit wird im folgenden Text nur von Pull Request gesprochen.

### Was ist eine Pull Request bzw. eine Merge Request?
In ihrer einfachsten Form sind Pull-Requests eine Funktion für Entwickler
die andere Teammitglieder darüber informiert, dass ein Feature fertiggestellt wurde.
Dies lässt alle Beteiligten wissen, dass der Code bereit für eine überprüfung ist und danach in Hauptzweig eingeführt werden kann.

###Wie kann eine Pull Request gesendet werden (IntelliJ)
Um eine Pull Request direkt aus Intelij zu senden, muss zuerst sichergestellt werden das man selber berechtigt ist eine Pull Request zu stellen.
Sind diese Berechtigungen vorhanden, kann die Pull Request in wenigen Schritten gesendet werden.
Oben Links in IntelliJ befindet sich einen Button der mit Pull Request beschriftet ist.
Danach öffnet sich ein Fenster in dem ausgewählt werden kann, welchen der lokalen Branches in das Ziel Repo gemerged werden soll.
Danach muss nach noch einen Titel festgelegt werden. Es besteht ebenfalls die Möglichkeit eine Beschreibung hinzuzufügen, dies ist jedoch nur optional.
Im Anschluss besteht die Möglichkeit einen Reviewer hinzuzufügen.
Jetzt kann die Pull Request gesendet werden.

## Cherry Pick
### Was ist Cherry-Pick ?
git cherry-pick ist ein Befehl welcher es ermöglicht beliebige Git-Commits per Referenz
anzusprechen und diese an den momentanen Arbeitskopf (HEAD) anzuheften.
git cherry-pick kann sehr nützlich für das rückgängig Machen von Änderungen sein. 

Zum Beispiel: Ein Commit ist aus Versehen im falschen Branch. Nun kannst du zum korrekten
Branch wechselt und brauchst git cherry-pick um den Commit am richtigen Ort zu befestigen.

### Wie funktioniert Cherry-Pick ?
Um Cherry Pick anzuwenden gibt man folgenden Befehl ein:
```
git cherry-pick <commit-hash>
```
Der <commit-hash> muss natürlich noch mit dem korrekten Hash des Commits ersetzt werden, welchen 
man verschieben will. Anschliessend wird der Commit an den Branch angeheftet, auf dem man sich gerade 
befindet. Darum Achtung!: Immer zuerst kontrollieren ob man derzeit auch wirklich auf dem korrekten
Branch ist. 

## Tag
### Was sind Tags ?
Tags sind Referenzen, welche an einen bestimmten Punkt der History
zeigen. Tagging wird üblicherweise benutzt um wichtige Ereignisse wie z.B.
das Release einer Applikation festzuhalten. Ein Tag ist etwas ähnliches
wie ein Branch, nur das ein Tag sich nicht verändert. Anders als ein Branch,
kann ein Tag nach dem Erstellen keine weiteren Commits
beinhalten.

### Wie funktionieren Tags ?
Um ein Tag zu erstellen wird folgender Befehl benötigt: 
```
git tag <tagname>
 ```
Wobei der <tagname> auch wieder durch den gewünschten String ersetzt werden muss. 
Will man zusätzlich zum Tag eine Beschriftung hinzufügen, macht man das mit:
```
git tag <tagname> -a
 ```
Damit wird ein annotated tag erstellt.

Auch wichtig anzumerken: Wenn du normal auf den Branch pushst, werden die Tags
nicht standardmässig mitgepusht. Dazu brauchst du dann:
```
git push origin --tags
 ```
Willst du nur ein einzelnes Tag pushen, brauche: 
```
git push origin <tag>
 ```

## Alias
### Was sind Aliasse ?
Ein Git-Alias ist zu vergleichen mit einem Shortcut. Aliasse werden z.b.
auch beim Arbeiten mit der Bash-Konsole eingesetzt. Aliase werden gebraucht um kürzere Befehle
zu realisieren. Sie ermöglichen effizienteres Programmieren. 

Nehmen wir zum Beispiel den git-checkout Befehl. 
Dieser Befehl wird häufig verwendet und muss immer wieder neu eingetippt werden. Mit den Git-Aliassen
jedoch kann man git-checkout z.B. in git.co verwandeln. Dies spart enorme Schreibarbeit über längere Zeit
und verliert dennoch nicht an Wirksamkeit.

### Wie funktionieren Aliasse?
Um Aliasse festzulegen, müssen wir diese in der gitconfig-Datei definieren. Dort erstellen wir das
Stichwort [alias]. Danach könnte das etwa so aussehen:
```
[alias]
    st = status
    ci = commit -v
 ```
Die Aliasse können beliebig definiert werden, Ziel davon soll nur sein, die Schreibarbeit zu
minimieren und das eigene Programmieren praktischer zu machen.
