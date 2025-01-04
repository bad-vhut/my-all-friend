document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('list');
  
    // Define a mapping of items to names and URLs
    const itemMapping = [
      { name: 'Home', url: 'page1.html' },
      { name: 'Rifat', url: '/tst/rifat.html' },
      { name: 'Saidul', url: '/tst/saidal.html' },
      { name: 'Masum', url: 'https://example.com/products' },
      { name: 'Sijan', url: 'https://example.com/contact' },
      { name: 'Rakib', url: 'https://example.com/careers' },
      { name: 'Riyad', url: '/tst/riyad.html' },
      { name: 'sajib', url: 'https://example.com/faq' },
      { name: 'Shuvo', url: 'https://example.com/faq' },
      { name: 'Sijan', url: 'https://example.com/faq' },
    ];
  
    // Generate the list dynamically
    itemMapping.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = item.name; // Set the name as the text content
  
      // Add a click event listener for redirection
      listItem.addEventListener('click', () => {
        highlightItem(listItem); // Highlight the clicked item
        setTimeout(() => {
          // Redirect to the URL associated with this item
          window.location.href = item.url;
        }, 100); // Add a delay for the highlight effect
      });
  
      // Append the list item to the list
      list.appendChild(listItem);
    });
  });
  
  // Function to highlight the selected item
  function highlightItem(selectedItem) {
    const items = document.querySelectorAll('#list li');
    items.forEach((item) => item.classList.remove('selected')); // Remove highlight from all items
    selectedItem.classList.add('selected'); // Add highlight to the selected item
  }
  