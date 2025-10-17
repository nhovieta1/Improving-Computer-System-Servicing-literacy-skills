<!DOCTYPE html>
<html>
<head>
  <title>Home Page</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <button onclick="goToNewPage()">Click Me</button>

  <script>
    function goToNewPage() {
      window.open("newpage.html", "_blank"); 
      // "_blank" opens the new page in a new tab
    }
  </script>
</body>
</html>