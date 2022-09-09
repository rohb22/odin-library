let myLibrary = [];
const container = document.querySelector('main');
const modal = document.querySelector('.modalcontainer');

modal.addEventListener('click', function(e) {
    if (e.target == this) {
        modal.style.display = 'none';
    } 
})



function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    if (pages == '') {
        this.pages = 'N/A'
    }
    else {
        this.pages = pages;
    }
    this.read = read

    this.isRead = function () {
        if (this.read) {
            return 'Read'
        }
        else {
            return 'Not Read Yet'
        }
    }

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead()}`
    }


}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBook();
}

function displayBook() {
    container.innerHTML = '';
    myLibrary.forEach(book => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = myLibrary.indexOf(book);

        let displayTitle = document.createElement('div');
        let displayAuthor = document.createElement('div');
        let displayPages = document.createElement('div');

        let displayRead = document.createElement('div');
        displayRead.addEventListener('click', updateRead);
        if (book.read) {
            displayRead.className = "readbtn";
        }else {
            displayRead.className = 'notreadbtn';
        }

        let removeOption = document.createElement('div');
        removeOption.classList.add('removebtn');
        removeOption.addEventListener('click', removeCard);
        

        displayTitle.innerHTML = `"${book.title}"`;
        displayAuthor.innerHTML = book.author;
        displayPages.innerHTML = `Pages: ${book.pages}`
        displayRead.innerHTML = book.isRead();
        removeOption.innerHTML = 'Remove';

        card.append(displayTitle, displayAuthor, displayPages, displayPages, displayRead, removeOption)
        container.appendChild(card);
    })
}

const showmodal = document.querySelector('.showmodal');
showmodal.addEventListener('click', () => {
    modal.style.display = 'block';
})

const newbook = document.querySelector('.newbook');
newbook.addEventListener('click', () => {

    const inputTitle = document.querySelector('#title');
    const inputAuthor = document.querySelector('#author');
    var inputPages = document.querySelector('#pages');
    const inputRead = document.querySelector('#read');
    if (inputTitle.value.length > 0) {

        addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);

        modal.style.display = 'none';
        inputTitle.value = '';
        inputAuthor.value = '';
        inputPages.value = '';
        inputRead.checked = false;
    }
})

function updateRead() {
    const parentCard = this.parentElement;
    const bookIndex = parentCard.dataset.index;
    
    myLibrary[bookIndex].read = !myLibrary[bookIndex].read;

    displayBook();
}

function removeCard() {
    const parentCard = this.parentElement;
    const bookIndex = parentCard.dataset.index;
    myLibrary.splice(bookIndex, 1);

    displayBook()
}

