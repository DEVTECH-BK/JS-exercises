/*

document.
    getElementById(idName)          : permet de récupérer un élément HTML grâce à son id
    getElementsByTagName(TagName)   : résupère les éléments dont le nom est indiqué en parathèses (table)
    getElementsByName(Name)         : récupère les éléments grâce à leur attribut "name" (input) retourne un tableau
    querySelector(TagName)          : récupère un élément grâce à son attribut "class" comme en CSS
    queryselectorAll(tageName)      : retourne un tableau d'éléments récupérés à partir une class.
    createElement(elementName)      : crée un élément (balise) dans une page HTML

innerHTML    : affiche le contenu se trouvant entre deux balises
value        : afficher la valeur d'un input

# Some functions and propreties
setAttribute("attribute", "value")  : ajoute un attribut à une balise HTML
classList.add(v1, v2, ...)          : ajoute une classe à une balise
classList.remove(v1,...)            : supprime la classe d'une balise
appendChild(element)                : insère une balise à l'intérieur d'une autre
addEventListener('event', function) : ajout un évènement à un élément DOM

*/

class BankAccount {
    constructor (clientName, balance){
        this.clientName = clientName;
        this.balance = balance;
    }
    checkBalance(){
        console.log("You have " + this.balance + " in your account");
    }
    diposit(amount){
        this.balance += amount;
        this.checkBalance();
    }
    withDraw(amount){
        if(amount > this.balance){
            console.log("Your don't have enough money");
        }
        else{
            this.balance -= amount;
            this.checkBalance();
        }
    }
    invoice(){
        console.log("Manufacture");
        console.log("Name " + this.clientName);
        console.log("Balance " + this.balance);
    }
}

let firstClient = new BankAccount("Baraka", 5000);
firstClient.diposit(200);
firstClient.invoice();

let secondClient = new BankAccount("Alain", 4500);
secondClient.diposit(50000);
secondClient.invoice();