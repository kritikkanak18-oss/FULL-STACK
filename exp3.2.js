<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Library Management</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      border: 1px solid black;
      padding: 20px;
      max-width: 600px;
      margin: 20px auto;
    }
    h2 {
      margin-bottom: 15px;
    }
    input {
      padding: 8px;
      margin: 5px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 8px 12px;
      margin-left: 5px;
      border: 1px solid #888;
      border-radius: 4px;
      background: #f2f2f2;
      cursor: pointer;
    }
    button:hover {
      background: #e0e0e0;
    }
    .book-list {
      margin-top: 15px;
    }
    .book {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fafafa;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 10px;
      margin: 5px 0;
    }
    .book-title {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Library Management</h2>
    
    <!-- Search Bar -->
    <input type="text" id="searchInput" placeholder="Search by title or author" onkeyup="searchBooks()">
    <br>

    <!-- Add Book -->
    <input type="text" id="bookTitle" placeholder="New book title">
    <input type="text" id="bookAuthor" placeholder="New book author">
    <button onclick="addBook()">Add Book</button>
    
    <!-- Book List -->
    <div class="book-list" id="bookList">
      <div class="book">
        <span><span class="book-title">1984</span> by George Orwell</span>
        <button onclick="removeBook(this)">Remove</button>
      </div>
      <div class="book">
        <span><span class="book-title">The Great Gatsby</span> by F. Scott Fitzgerald</span>
        <button onclick="removeBook(this)">Remove</button>
      </div>
      <div class="book">
        <span><span class="book-title">To Kill a Mockingbird</span> by Harper Lee</span>
        <button onclick="removeBook(this)">Remove</button>
      </div>
    </div>
  </div>

  <script>
    function searchBooks() {
      let input = document.getElementById("searchInput").value.toLowerCase();
      let books = document.querySelectorAll("#bookList .book");
      
      books.forEach(book => {
        let text = book.innerText.toLowerCase();
        book.style.display = text.includes(input) ? "" : "none";
      });
    }

    function addBook() {
      let title = document.getElementById("bookTitle").value.trim();
      let author = document.getElementById("bookAuthor").value.trim();

      if (title && author) {
        let bookList = document.getElementById("bookList");

        let newBook = document.createElement("div");
        newBook.className = "book";
        newBook.innerHTML = `
          <span><span class="book-title">${title}</span> by ${author}</span>
          <button onclick="removeBook(this)">Remove</button>
        `;
        bookList.appendChild(newBook);

        // Clear input fields
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
      } else {
        alert("Please enter both title and author!");
      }
    }

    function removeBook(button) {
      button.parentElement.remove();
    }
  </script>
</body>
</html>