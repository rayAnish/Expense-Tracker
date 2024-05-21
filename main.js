document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category-section');
    const amountInput = document.getElementById('amount-input');
    const dateInput = document.getElementById('date-input');
    const addButton = document.getElementById('add-btn');
    const expenseTableBody = document.getElementById('expences-table-body');
    const totalAmountElement = document.getElementById('total-amount');

    let totalAmount = 0;

    addButton.addEventListener('click', function () {
        const category = categorySelect.value;
        const amount = parseFloat(amountInput.value);
        const date = dateInput.value;

        if (!category || !amount || !date) {
            alert('Please fill in all fields');
            return;
        }

        totalAmount += amount;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${category}</td>
            <td>${amount}</td>
            <td>${date}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        expenseTableBody.appendChild(newRow);

        totalAmountElement.textContent = totalAmount.toFixed(2);

        amountInput.value = '';
        dateInput.value = '';

        // Delete expense event listener
        newRow.querySelector('.delete-btn').addEventListener('click', function () {
            totalAmount -= amount;
            totalAmountElement.textContent = totalAmount.toFixed(2);
            newRow.remove();
        });
    });
});
