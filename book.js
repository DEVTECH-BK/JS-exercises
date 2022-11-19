class Book
{
    constructor(title, author, description, pages, currentPage, read){    
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;

        this.currentPage = undefined;
        this.read = false;
    }

    readBook(page){
        if(page < 1 || page > this.pages){
            return 0;
        }
        else if(page >= 1 && page < this.pages){
            this.currentPage = page;
            return 1;
        }
        else{
            this.currentPage = page;
            this.read = true;
            return 1;
        }
    }
}

// All useful variables
let allBooks = [];
let containerTag = document.querySelector(".container");
let newArticle = document.createElement("article");
let titleBook = document.createElement("h1");
let authorName = document.createElement("h3");
let contentBook = document.createElement("p");

// Displaying Books
let myBook = new Book("Programming", "Baraka Karhgaomba", "With the divotion of spreading his knowlegde Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo itaque voluptatum quod soluta laboriosam ipsa delectus quas autem? Voluptate, a? Porro iusto, dolor nihil libero sit animi harum rem.", 259);
console.log(myBook);

let hisBook = new Book("Becoming a great leader", "Marcial POPO", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo itaque voluptatum quod soluta laboriosam ipsa delectus quas autem? Voluptate, a? Porro iusto, dolor nihil libero sit animi harum rem.", 80);
console.log(hisBook);

let herBook = new Book("Becoming intelligent", "Ariane Lopez", "Life style is poping Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo itaque voluptatum quod soluta laboriosam ipsa delectus quas autem? Voluptate, a? Porro iusto, dolor nihil libero sit animi harum rem. Pariatur quo itaque voluptatum quod soluta laboriosam ipsa delectus quas autem? Voluptate, a? Porro iusto, dolor nihil libero sit animi harum rem.", 50);
console.log(herBook);

let thierBook = new Book("Business and management", "Heritier", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo itaque voluptatum quod soluta laboriosam ipsa delectus quas autem? Voluptate, a? Porro iusto, dolor nihil libero sit animi harum rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo itaque voluptatum quod soluta laboriosam ipsa delectus quas autem? Voluptate, a? Porro iusto, dolor nihil libero sit animi harum rem.", 200);

// Execution
allBooks.push(myBook, hisBook, herBook, thierBook);

for (let i = 0; i < allBooks.length; i++) {
    titleBook.textContent = allBooks[i].title;
    authorName.textContent = allBooks[i].author;
    contentBook.textContent = allBooks[i].description;

    newArticle.appendChild(titleBook);
    newArticle.appendChild(authorName);
    newArticle.appendChild(contentBook);

    newArticle.setAttribute("id", "article");
    containerTag.appendChild(newArticle);
}





// Events execution
// blackBot.addEventListener('click', () => {
//     bodyTag.classList.remove('boby-blue', 'body-maroon');
//     bodyTag.classList.add('boby-black');
// })
// bleuBot.addEventListener('click', () => {
//     bodyTag.classList.remove('body-black', 'boby-maroon');
//     bodyTag.classList.add('boby-blue');
// })
// maroonBot.addEventListener('click', () => {
//     bodyTag.classList.remove('boby-black');
//     bodyTag.classList.remove('body-blue');
//     bodyTag.classList.add('boby-maroon');
// })
