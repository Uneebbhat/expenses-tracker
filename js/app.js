function fetchData() {
  const amount = document.querySelector(".amount");
  const days = document.querySelector(".days");

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const amountBody = document.querySelector(".days");
      data.forEach((item) => {
        const day = document.createElement("p");
        day.innerHTML += `
                <p class="para">${item.day}</p>
            `;
        amountBody.appendChild(day);
      });
    });

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const chartBody = document.querySelector(".chart");
      data.forEach((item) => {
        const charts = document.createElement("p");
        charts.innerHTML += `
                <p class="chart">${item.amount}</p>
            `;
        chartBody.appendChild(charts);
      });
    });

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const sum = data.reduce((acc, item) => acc + item.amount, 0);
      console.log(sum);
      const totalAmountBody = document.querySelector(".total__amount");
      const total = document.createElement("p");
      total.innerHTML += `
                <h2 class="chart">${sum}</h2>
            `;
      totalAmountBody.appendChild(total);
    });
}

fetchData();
