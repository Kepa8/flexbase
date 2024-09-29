const books = [
    {
      isbn: "1617293563",
      egilea: "Raoul-Gabriel Urma",
      data: "Nov 15, 2018",
      izenburua: "Modern Java in Action: Lambdas, streams, functional and reactive programming",
      filename: "8508261-M.jpg"
    },
    {
      isbn: "9781617291302",
      egilea: "Benjamin Muschko",
      data: "Mar 09, 2014",
      izenburua: "Gradle in Action",
      filename: "8514400-M.jpg"
    },
    {
      isbn: "1883601126",
      egilea: "Matt Welsh",
      data: "1995",
      izenburua: "The Linux bible",
      filename: "6764181-M.jpg"
    },
    {
      isbn: "9781617293290",
      egilea: "Dmitry Jemerov",
      data: "Feb 19, 2017",
      izenburua: "Kotlin in Action",
      filename: "8507716-M.jpg"
    }
  ];
  
  let currentIndex = 0;
  //let currentISBN = document.querySelector('#isbn').value 

// Función para mostrar un libro basado en el índice actual
function displayBook(index) {
    const book = books[index];
    document.getElementById('izenburua').value = book.izenburua;
    document.getElementById('egilea').value = book.egilea;
    document.getElementById('isbn').value = book.isbn;
    document.getElementById('data').value = book.data;
    document.getElementById('book-cover').src = `https://covers.openlibrary.org/b/id/${book.filename}`;
    document.getElementById('liburuKopuru').innerText = `${index + 1}/${books.length}`;
}

function BilatuISBN(isbn){
    const filteredBooks = books.filter(b => b.isbn === isbn);
    if (filteredBooks.length > 0) {
        currentIndex = books.findIndex(b => b.isbn === isbn);
        displayBook(books.indexOf(filteredBooks[0]));
    } else {
        alert("Liburu hau ez da aurkitu: " + isbn);
    }
}
// Función para avanzar al siguiente libro
function nextBook() {
    if (currentIndex < books.length - 1) {
        currentIndex++;
    } else {
        currentIndex = books.length -1;  // Volver al primer libro si se llega al final
    }
    displayBook(currentIndex);
}

// Función para retroceder al libro anterior
function previousBook() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = 0;  // Ir al último libro si se llega al inicio
    }
    displayBook(currentIndex);
}

function Bilatu() {
    BilatuISBN(currentISBN);
}
// Mostrar el primer libro cuando cargue la página
window.onload = function() {
    displayBook(currentIndex);
};
  
  
  