import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    standalone: true,
})
export class AdminComponent {
   generateHTML() {
    // Récupérer le texte du textarea
    var inputText = document.getElementById("inputText")?.nodeValue;

    // Échapper les caractères HTML spéciaux
    var escapedText = this.escapeHTML(inputText as string);

    // Appliquer les styles (ex. strong, em, ul)
    var styledText = this.applyStyles(escapedText);

    // Afficher le résultat dans la div de sortie
    document.getElementById("output")!.innerHTML = styledText;
  }

  // Fonction pour échapper les caractères HTML spéciaux
   escapeHTML(text: string) {
    var escapedText = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return escapedText;
  }

  // Fonction pour appliquer les styles
   applyStyles(text: string) {
    // Exemple : rendre le texte en gras
    var styledText = "<strong>" + text + "</strong>";
    return styledText;
  }
}
