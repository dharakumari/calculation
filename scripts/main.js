function openTab(tabId) {
    var contentDivs = document.querySelectorAll('.content');
    var tabButtons = document.querySelectorAll('.tab');

    contentDivs.forEach(function (div) {
        div.classList.add('hidden');
    });

    tabButtons.forEach(function (tabButton) {
        tabButton.classList.remove('active');
    });

    document.getElementById(tabId).classList.remove('hidden');
    document.querySelector('.tab[data-tab="' + tabId + '"]').classList.add('active');
}
function validateFeetInput(input) {
    // Remove any non-numeric characters
    let value = input.value.replace(/[^0-9]/g, '');

    // Update the input value with the cleaned value
    input.value = value;
  }

  function validateInchInput(input) {
    // Remove any non-numeric characters
    let value = input.value.replace(/[^0-9]/g, '');
    value = Math.min(value, 11); // Limit the value to 11

    // Update the input value with the cleaned value
    input.value = value;
  }


