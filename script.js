function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false

    this.isRead = function () {
        if (this.read) {
            return 'readed'
        }
        else {
            return 'not read yet'
        }
    }

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`
    }


} 