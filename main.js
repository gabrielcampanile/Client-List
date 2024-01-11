document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const clientName = document.getElementById('clientName').value;

    if (clientName) {
      const li = document.createElement('li');
      li.textContent = clientName;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        li.remove();
      });

      li.appendChild(deleteButton);
      document.getElementById('clientList').appendChild(li);

      document.getElementById('clientName').value = '';
    }
  });