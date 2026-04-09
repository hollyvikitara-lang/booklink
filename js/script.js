let books = 
    JSON.parse(localStorage.getItem("books")) || [
    {
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        store: "Marondera Bookstore"
    },
    {
        title: "Half of a Yellow Sun",
        author: "Chimamanda Ngozi Adichie",
        store: "Readers Corner"
    },
    {
        title: "The River and the Source",
        author: "Margaret Ogola",
        store: "Book World"
    },
    {
        title: "Nervous Conditions",
        author: "Tsitsi Dangarembga",
        store: "Zimbabwe Books Hub"
    }
];
function saveBooks(){
    localStorage.setItem("books",JSON.stringify(books));
}

function searchBook() {
    const input = document.getElementById("searchInput").value.toLowerCase();

    const results = books.filter(book =>
        book.title.toLowerCase().includes(input) ||
        book.author.toLowerCase().includes(input) ||
        book.store.toLowerCase().includes(input)
    );
document.getElementById("resultsHeading").textContent = "Search Results";
    displayResults(results);
}

function displayResults(results) {
    const resultsDiv = document.getElementById("results");

    if (results.length > 0) {
resultsDiv.innerHTML = results.map((book, index) => `
    <div class="book">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Store:</strong> ${book.store}</p>
        <button onclick="deleteBook(${index})">Delete</button>
    </div>
`).join("");

    } else {
        resultsDiv.innerHTML = "<p>No results found</p>";
    }
}

function addBook() {
    const title = document.getElementById("titleInput").value.trim();
    const author = document.getElementById("authorInput").value.trim();
    const store = document.getElementById("storeInput").value.trim();

    if (title === "" || author === "" || store === "") {
        alert("Please fill in all fields");
        return;
    }

    const newBook = {
        title: title,
        author: author,
        store: store
    };

    books.push(newBook);
    saveBooks();
    displayResults(books);

    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("storeInput").value = "";

    alert("Book added successfully");
}

document.getElementById("resultsHeading").textContent = "Available Books";
displayResults(books);




