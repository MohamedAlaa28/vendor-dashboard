export const doughnutOptions = {
  elements: {
    arc: {
      weight: 0.5,
      borderWidth: 0,
    },
  },
  cutout: 45,
  responsive: true,
};
export const doughnutData = {
  labels: ["Event 1", "Event 2", "Event 3", "Event 4"],
  datasets: [
    {
      label: "My First Dataset ",
      data: [60, 30, 10],
      backgroundColor: ["#3D897A", "#F3D030", "#EE6363"],

      hoverOffset: 4,
    },
  ],
};