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



