<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Products List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      border: 1px solid black;
      padding: 20px;
      max-width: 800px;
      margin: 20px auto;
      text-align: center;
    }
    h2 {
      margin-bottom: 20px;
    }
    .products {
      display: flex;
      justify-content: space-around;
      gap: 20px;
    }
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 15px;
      width: 200px;
      box-shadow: 0px 2px 6px rgba(0,0,0,0.1);
    }
    .card h3 {
      font-weight: bold;
    }
    .card p {
      margin: 8px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Products List</h2>
    <div class="products">
      <div class="card">
        <h3>Wireless Mouse</h3>
        <p>Price: $25.99</p>
        <p>Status: In Stock</p>
      </div>
      <div class="card">
        <h3>Keyboard</h3>
        <p>Price: $45.5</p>
        <p>Status: Out of Stock</p>
      </div>
      <div class="card">
        <h3>Monitor</h3>
        <p>Price: $199.99</p>
        <p>Status: In Stock</p>
      </div>
    </div>
  </div>
</body>
</html>