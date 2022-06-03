const ctx = document.getElementById("chart").getContext("2d");

const chart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["ชั่วคราว", "ประจำ"],
    datasets: [
      {
        label: "Employee Items",
        data: [50, 25],
        backgroundColor: ["#202020", "#575757"],
      },
    ],
  },
});
