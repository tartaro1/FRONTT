document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectCat = Array.from(document.querySelectorAll('.filter-checkbox:checked'))
            .map(cb => cb.dataset.category);

        document.querySelectorAll('.product-card').forEach(card => {
            if (selectCat.length === 0 || selectCat.includes(card.dataset.category)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Lógica de dropdowns
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const dropdownContent = toggle.nextElementSibling;
        dropdownContent.classList.toggle('hidden');
        const icon = toggle.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});

// Lógica de búsqueda
const searchInput = document.getElementById('searchInput');
const productSection = document.getElementById('productSection');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    productCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});