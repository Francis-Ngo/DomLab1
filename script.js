document.addEventListener('DOMContentLoaded', function () {
    const textParagraph = document.getElementById('text');
    const changeTextButton = document.getElementById('changeTextButton');
    const textInput = document.getElementById('textInput');
  
    changeTextButton.addEventListener('click', function () {
      textParagraph.textContent = 'New text after button click.';
    });
  
    textInput.addEventListener('input', function () {
      textParagraph.textContent = textInput.value;
    });
  });