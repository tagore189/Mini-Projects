document.addEventListener('DOMContentLoaded', loadStorageItems);
document.getElementById('addButton').addEventListener('click', () => {
  const key = document.getElementById('keyInput').value.trim();
  const value = document.getElementById('valueInput').value.trim();
  if (key && value) {
    localStorage.setItem(key, value);
    document.getElementById('keyInput').value = '';
    document.getElementById('valueInput').value = '';
    loadStorageItems();
  } else {
    alert('Please enter both key and value.');
  }
});
document.getElementById('clearButton').addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all local storage?')) {
    localStorage.clear();
    loadStorageItems();
  }
});
function loadStorageItems() {
  const storageList = document.getElementById('storageList');
  storageList.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const itemDiv = document.createElement('div');
    itemDiv.className = 'storage-item';
    itemDiv.innerHTML = `
      <div>
        <strong>${key}</strong>: ${value}
      </div>
      <button onclick="deleteItem('${key}')">
        Delete
      </button>
    `;
    storageList.appendChild(itemDiv);
  }
}
function deleteItem(key) {
  if (confirm(`Are you sure you want to delete "${key}"?`)) {
    localStorage.removeItem(key);
    loadStorageItems();
  }
}