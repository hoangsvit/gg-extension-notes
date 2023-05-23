document.addEventListener('DOMContentLoaded', function() {
    var noteTextarea = document.getElementById('noteContent');
  
    // Load note from storage
    chrome.storage.sync.get('quickNote', function(data) {
      if (data.quickNote) {
        noteTextarea.value = data.quickNote;
      }
    });
  
    // Save note to storage
    noteTextarea.addEventListener('input', function() {
      var noteContent = noteTextarea.value;
      chrome.storage.sync.set({ 'quickNote': noteContent });
    });
  });
  