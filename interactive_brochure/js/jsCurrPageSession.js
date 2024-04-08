// READ PAGE WINDOW PROPERTIES

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var monthlySalary = 25000;
var monthlyExpenses = 14000;
var misfortuneDamage = 10000;
var yearJumpEarnings = [];
var plantedMisfortune = [];
var damagesMisfortune = [];
var runChartDisplay = 0;

console.log("Throwing in displayChart " + monthlySalary);

runningDisplayCanvas1 = displayChart(
  windowWidth,
  monthlySalary,
  monthlyExpenses,
  yearJumpEarnings,
  plantedMisfortune,
  damagesMisfortune
);
setTimeout(function () {
  console.log("displayChart READY");
  runChartDisplay = 1;
}, 3000);

function updateWindowWidth() {
  windowWidth = window.innerWidth;
}

function updateWindowHeight() {
  windowHeight = window.innerHeight;
  console.log("Window height: " + windowHeight);
}

updateWindowWidth();
updateWindowHeight();

window.addEventListener("resize", updateWindowWidth);
window.addEventListener("resize", updateWindowHeight);

// SPLASH SCREEN PROPERTIES

document.getElementsByClassName("part1")[0].style.paddingTop =
  windowHeight * (0.22).toString() + "px";

// NAVBAR PROPERTIES

function updateNavbarTitleDisplay() {
  if (windowWidth < 698) {
    document.getElementsByClassName("part2NavbarTitle")[0].innerHTML = ``;
  } else if (windowWidth < 992) {
    document.getElementsByClassName("part2NavbarTitle")[0].innerHTML = `<span
    style="font-size: 100%"
    >Team Patrick</span
  >`;
  } else {
    document.getElementsByClassName(
      "part2NavbarTitle"
    )[0].innerHTML = `<span style="font-size: 250%">Dragon Stone</span><br /><span
    style="font-size: 100%"
    >Team Patrick</span
  >`;
  }
}

updateNavbarTitleDisplay();
window.addEventListener("resize", updateNavbarTitleDisplay);

var enableDragonSpinAnimation = 0;

document
  .getElementsByClassName("part2NavbarBrandTable")[0]
  .addEventListener("mouseover", function () {
    if (enableDragonSpinAnimation == 0) {
      enableDragonSpinAnimation = 1;
    } else {
      return;
    }
    document
      .getElementsByClassName("part2NavbarLogo")[0]
      .classList.add("rotate");
    setTimeout(function () {
      document
        .getElementsByClassName("part2NavbarLogo")[0]
        .classList.remove("rotate");
      enableDragonSpinAnimation = 0;
    }, 2000);
  });

// READ TIME AND GREET

function readTimeAndGreet() {
  var imageLinks = [
    "theMind.png",
    "aCloudMoney.png",
    "aDiningTable1.png",
    "anOwlFlying1.png",
  ];

  var currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour < 6) {
    console.log("12:00 AM to 6:00 AM");
    return [
      imageLinks[0],
      "Wow!?! You really woke up EARLY! Well why wait? hahaha!",
      "You must be really looking forward to have an insurance that suits your needs.",
    ];
  } else if (currentHour >= 6 && currentHour < 11) {
    console.log("6:00 AM to 11:00 AM");
    return [
      imageLinks[1],
      "Good Morning! Ready for better you?",
      "Of course you do, and so am I. Now what pleasure I can help you with our products.",
    ];
  } else if (currentHour >= 11 && currentHour < 14) {
    console.log("11:00 AM to 2:00 PM");
    return [
      imageLinks[2],
      "I hope you took your lunch.",
      "Taking and upholding an insurance policy is no candy land, but having one taste life, like candy.",
    ];
  } else if (currentHour >= 14 && currentHour < 17) {
    console.log("2:00 PM to 5:00 PM");
    return [
      imageLinks[1],
      "Good Afternoon!",
      "Take your time. No need to rush. Being financially careful is what matters.",
    ];
  } else if (currentHour >= 17 && currentHour < 22) {
    console.log("5:00 PM to 10:00 PM");
    return [
      imageLinks[2],
      "Done with your duties?",
      "If so, then WELL DONE! A clear mind is a big leap forward to make wise decision for a better future.",
    ];
  } else {
    console.log("10:00 PM to 11:59 PM");
    return [
      imageLinks[3],
      "Oh look a night owl!",
      "Hoo-hoo-hoo-who's looking forward to get their insurance to financially fly high? IT'S YOU! hahaha!",
    ];
  }
}

var timeOutcome = readTimeAndGreet();

document.getElementById("part2GreetingPic").src =
  "styles/images/" + timeOutcome[0];

document.getElementById("part2MajorGreetings").textContent = timeOutcome[1];
document.getElementById("part2SubGreetings").textContent = timeOutcome[2];

// CLICKABLE LINKS

document.getElementById("part3ClickLink1").onclick = function () {
  window.location.href =
    "https://investment.fwd.com.ph/fund/peso-global-good-esg-fund";
};

document.getElementById("part3ClickLink2").onclick = function () {
  window.location.href =
    "https://www.fwd.com.ph/news-press/press/2021/fwd-life-insurances-tech-innovation-recognized-in-local-and-global-awards/";
};

// INTERACTIVE GRAPH

// Function to log canvas size and chart rendering

function displayChart(
  windowWidth,
  monthlyEarning,
  monthlyExpenses,
  yearJumpEarnings,
  plantedMisfortune,
  damagesMisfortune
) {
  let chart;

  console.log("Running in displayChart " + monthlyEarning);
  var xValues = [];
  var xValWorkingAge = [];
  var yrInterval = 0;
  var limit14000Days1 = 0;
  var limit14000Days2 = 0;
  if (windowWidth < 420) {
    xValues = [0, 15, 30, 45, 60, 75, 90, 105, 120];
    yrInterval = 15;
    limit14000Days1 = 1;
    limit14000Days2 = 5;
  } else if (windowWidth < 760) {
    xValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
    yrInterval = 10;
    limit14000Days1 = 2;
    limit14000Days2 = 7;
  } else {
    xValues = [
      0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
      95, 100, 105, 110, 115, 120,
    ];
    yrInterval = 5;
    limit14000Days1 = 4;
    limit14000Days2 = 14;
  }

  var currentSavings = 0;

  if (!Array.isArray(plantedMisfortune)) {
    plantedMisfortune = []; // Initialize array if it's not already an array
    damagesMisfortune = [];
  }

  for (i = 0; i < xValues.length; i++) {
    if (i > limit14000Days1 && i < limit14000Days2) {
      currentSavings +=
        (monthlyEarning - monthlyExpenses) * 12 * yrInterval * 0.001;
      if (plantedMisfortune.includes(i)) {
        currentSavings -= damagesMisfortune[plantedMisfortune.indexOf(i)];
      }
      yearJumpEarnings.push(currentSavings);
    } else {
      if (!Array.isArray(yearJumpEarnings)) {
        yearJumpEarnings = []; // Initialize array if it's not already an array
      }
      if (currentSavings - monthlyExpenses * 12 * yrInterval * 0.001 > 0) {
        currentSavings =
          currentSavings - monthlyExpenses * 12 * yrInterval * 0.001;
        yearJumpEarnings.push(currentSavings);
      } else {
        yearJumpEarnings.push(0);
      }
    }
    if (xValues[i] > 18 && xValues[i] < 65) {
      xValWorkingAge.push(1);
    } else {
      xValWorkingAge.push(0);
    }
    // xValues[i] = xValues[i] + "yrs";
  }

  console.log("Total Savings: " + currentSavings);
  console.log("list of yearJumpEarnings: " + yearJumpEarnings);

  var yearDifferentJumpEarnings = [
    yearJumpEarnings,
    yearJumpEarnings,
    yearJumpEarnings,
  ];

  chart = new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          label: "Client1",
          data: yearJumpEarnings,
          borderColor: "red",
          backgroundColor: "red",
          fill: false,
          pointRadius: 2,
          borderWidth: 2,
        },
        {
          label: "Client2",
          data: yearJumpEarnings,
          borderColor: "greenyellow",
          backgroundColor: "greenyellow",
          fill: false,
          pointRadius: 3,
          borderWidth: 3,
        },
        {
          label: "Client3",
          data: yearJumpEarnings,
          borderColor: "#E8791F",
          backgroundColor: "#E8791F",
          fill: false,
          pointRadius: 4,
          borderWidth: 4,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 120,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              suggestedMin: 0,
              suggestedMax: 3000,
              callback: function (value) {
                if (value > 999) {
                  return "₱" + value / 1000 + "M";
                } else {
                  return "₱" + value + "k";
                }
              },
            },
          },
        ],
      },

      legend: {
        display: true,
        position: "top",
      },
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: function (tooltipItems, data) {
            if (tooltipItems.length > 0) {
              var dataIndex = tooltipItems[0].index;
              if (data.labels[dataIndex] > 17 && data.labels[dataIndex] < 66) {
                return "Working Age: " + data.labels[dataIndex] + "yrs old";
              } else {
                return "Non-Working Age: " + data.labels[dataIndex] + "yrs old";
              }
            }
            return "";
          },
          label: function (tooltipItem) {
            var outputSavings;
            if (tooltipItem.yLabel > 1000) {
              outputSavings = tooltipItem.yLabel / 1000 + "M";
              return "Current Savings: ₱" + outputSavings;
            } else {
              return "Current Savings: ₱" + tooltipItem.yLabel;
            }
          },
          footer: function () {
            return "CLICK HERE to add Misfortune";
          },
        },
      },

      onClick: function (event, elements) {
        if (elements.length > 0) {
          var index = elements[0]._index;
          var datasetIndex = elements[0]._datasetIndex;
          var value = chart.data.datasets[datasetIndex].data[index];
          clickedNode(index, yearJumpEarnings);
        }
      },
    },
  });

  function clickedNode(chosenNode, yearJumpEarnings) {
    var updatedYearJumpEarnings = [];
    var constantNegativeEffect = misfortuneDamage * 12 * 0.001;
    var continuationNegEffects = 0;
    plantedMisfortune.push(chosenNode);
    for (var i = 0; i < yearJumpEarnings.length; i++) {
      if (plantedMisfortune.includes(i)) {
        continuationNegEffects += constantNegativeEffect;
      }
      updatedYearJumpEarnings.push(
        yearJumpEarnings[i] - continuationNegEffects
      );
    }
    chart.data.datasets.forEach(function (dataset) {
      dataset.data = updatedYearJumpEarnings;
    });

    yearJumpEarnings = updatedYearJumpEarnings;
    chart.update();
  }

  console.log("displayChart RUN ENDED");
}
