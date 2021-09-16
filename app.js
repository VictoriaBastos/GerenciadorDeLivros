const books = require('./database.js');

const inputTerminal = require('readline-sync');
const question = inputTerminal.question

console.log('´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`');
console.log('                            Gerenciador de Livros                           ');
console.log('´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`');


books.sort(( a, b ) => a.pages - b.pages)

let searchBook = question('Voce gostaria de buscar livros por categoria? (S/N)').toLocaleUpperCase()
if(searchBook === 'S'){
    const booksByGenre = question('Por favor, escolha uma das categorias disponiveis:\n- Biografias \n- Educacao \n- Ficcao \n- Autoconhecimento.\n\t').toLocaleLowerCase() 
    const booksSelectedByGenre = books.filter((books) => books.genre === booksByGenre )
    if(booksSelectedByGenre == false ){
        console.log(`A categoria ${booksByGenre} não está listada.`)
        searchBook = 'N'
    }else{ 
    console.log(`Confira abaixo os livros da categoria ${booksByGenre}!`)
    console.table(booksSelectedByGenre)
    }
}

const searchBooksWeLove = question('\nVoce gostaria de conferir a lista de livros recomendados? (S/N)').toLocaleUpperCase()
if( searchBooksWeLove === 'S'){
    const booksWeLove = books.filter((books) => books.booksWeLove === true)
    console.log('\Confira abaixo os livros recomendados!')
    console.table(booksWeLove)
}

const searchMyWishList = question('\nVoce gostaria de conferir os livros da Wish List? (S/N)').toLocaleUpperCase()
if(searchMyWishList === 'S'){
    const booksWishList = books.filter((books) => books.finished === false)
    console.log('\Confira abaixo os livros da Wish List!')
    console.table(booksWishList)
}

if(searchBook != 'S' && searchBooksWeLove != 'S' && searchMyWishList != 'S'){
    console.log('\nEsses sao todos os livros listados:')
    console.table(books)
}
console.log('\n´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`');
console.log('                              Victoria Bastos                                 ');
console.log('                                {reprograma}                                  ');
console.log('´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`´`');
