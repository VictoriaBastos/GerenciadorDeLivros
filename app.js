// npm init
// npm install readline-sync

//  Importando books do módulo database.js
const books = require('./database.js');

// Importando readline-sync para receber inputs no terminal
const inputTerminal = require('readline-sync');
const question = inputTerminal.question

// SISTEMA GERENCIADOR DE LIVROS

console.log('Bem vindo ao gerenciador de livros');

const searchBook = inputTerminal.question('Você gostaria de buscar livros por categoria? (S/N)').toLocaleUpperCase()
if(searchBook == 'S'){
    const booksByGenre = inputTerminal.question('Por favor, escolha uma das categorias disponíveis: biographies, education, fiction, mental health.').toLocaleLowerCase()
    const booksSelectedByGenre = books.filter((books) => books.genre === booksByGenre )
    console.table(booksSelectedByGenre)
}else{
    const searchBooksWeLove = question('Você gostaria de conferir a lista de livros recomendados? (S/N)').toLocaleUpperCase()
    if( searchBooksWeLove === 'S'){
        const booksWeLove = books.filter((books) => books.booksWeLove === true)
        console.table(booksWeLove)
    }else{
    console.log('Esses são todos os livros listados:')
    console.table(books)
    }
}