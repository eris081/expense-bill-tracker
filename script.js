let expenses = [];
let bills = [];

function addExpense() {

    let name = document.getElementById("expenseName").value;
    let amount = Number(document.getElementById("expenseAmount").value);
    let category = document.getElementById("expenseCategory").value;

    if (name === "" || amount <= 0 || category === "") {
        alert("Please enter all expense details");
        return;
    }

    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "";

    displayExpenses();
}


function displayExpenses() {

    let list = document.getElementById("expenseList");
    let search = document.getElementById("searchExpense").value.toLowerCase();
    let filter = document.getElementById("filterCategory").value;

    list.innerHTML = "";

    let total = 0;

    expenses.forEach((expense, index) => {

        if (!expense.name.toLowerCase().includes(search)) {
            return;
        }

        if (filter !== "All" && expense.category !== filter) {
            return;
        }

        total += expense.amount;

        list.innerHTML += `
            <div class="expense-item">
                <b>${expense.name}</b><br>
                Category: ${expense.category}<br>
                Amount: ₹${expense.amount}
                <br>
                <button class="delete-btn"
                onclick="deleteExpense(${index})">
                Delete
                </button>
            </div>
        `;
    });

    document.getElementById("totalExpense").innerText = total;
}


function deleteExpense(index) {

    expenses.splice(index, 1);

    displayExpenses();
}


function addBill() {

    let name = document.getElementById("billName").value;
    let amount = Number(document.getElementById("billAmount").value);
    let date = document.getElementById("billDate").value;
    let status = document.getElementById("billStatus").value;
    let payment = document.getElementById("paymentDetails").value;

    if (name === "" || amount <= 0 || date === "") {
        alert("Please enter all bill details");
        return;
    }

    bills.push({
        name: name,
        amount: amount,
        date: date,
        status: status,
        payment: payment
    });

    document.getElementById("billName").value = "";
    document.getElementById("billAmount").value = "";
    document.getElementById("billDate").value = "";
    document.getElementById("paymentDetails").value = "";

    displayBills();
}


function displayBills() {

    let list = document.getElementById("billList");

    list.innerHTML = "";

    let pending = 0;

    bills.forEach((bill) => {

        if (bill.status === "Pending") {
            pending += bill.amount;
        }

        let statusClass =
            bill.status === "Paid" ? "paid" : "pending";

        list.innerHTML += `
            <div class="bill-item">
                <b>${bill.name}</b><br>
                Amount: ₹${bill.amount}<br>
                Due Date: ${bill.date}<br>
                Payment: ${bill.payment}<br>

                <span class="${statusClass}">
                    Status: ${bill.status}
                </span>
            </div>
        `;
    });

    document.getElementById("pendingAmount").innerText = pending;
}