// Sticky Navbar
window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// Desinations Modal Windows

var forestBtn = document.querySelector(".forestBtn");
var forestModal = document.querySelector(".forestModal");

var desertBtn = document.querySelector(".desertBtn");
var desertModal = document.querySelector(".desertModal");

var mountainsBtn = document.querySelector(".mountainsBtn");
var mountainsModal = document.querySelector(".mountainsModal");

forestBtn.onclick = function () {
  forestModal.style.display = "block";
  desertModal.style.display = "none";
  mountainsModal.style.display = "none";
};

desertBtn.onclick = function () {
  desertModal.style.display = "block";
  forestModal.style.display = "none";
  mountainsModal.style.display = "none";
};

mountainsBtn.onclick = function () {
  mountainsModal.style.display = "block";
  forestModal.style.display = "none";
  desertModal.style.display = "none";
};

const modalClosing = document.querySelectorAll(".destinationsModalClosing");
for (i = 0; i < modalClosing.length; i++) {
  modalClosing[i].onclick = function () {
    forestModal.style.display = "none";
    desertModal.style.display = "none";
    mountainsModal.style.display = "none";
  };
}

// Pricing Modal Window

var pricingModal = document.getElementById("pricingModal");
const pricingBtn = document.querySelectorAll(".myBtn");

for (i = 0; i < pricingBtn.length; i++) {
  pricingBtn[i].onclick = function () {
    pricingModal.style.display = "block";
  };
}

var pricingModalClose = document.querySelector(".pricingModalClose");

pricingModalClose.onclick = function () {
  pricingModal.style.display = "none";
};

const pricingMultiStepForm = document.querySelector("[data-multi-step]");
const pricingFormSteps = [
  ...pricingMultiStepForm.querySelectorAll("[data-step]"),
];
let displayedPricingStep = pricingFormSteps.findIndex((step) => {
  return step.classList.contains("active");
});
if (0 > displayedPricingStep) {
  displayedPricingStep = 0;
  pricingStepsDisplay();
}

pricingMultiStepForm.addEventListener("click", (e) => {
  let incrementor;
  if (e.target.matches("[data-next]")) {
    incrementor = 1;
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1;
  }

  if (incrementor == null) return;

  const pricingInputs = [
    ...pricingFormSteps[displayedPricingStep].querySelectorAll("input"),
  ];

  const pricingValidation = pricingInputs.every((input) =>
    input.reportValidity()
  );

  if (pricingValidation) {
    displayedPricingStep += incrementor;
    pricingStepsDisplay();
  }
});

function pricingStepsDisplay() {
  pricingFormSteps.forEach((step, index) => {
    step.classList.toggle("active", index === displayedPricingStep);
  });
}

function destinationGenerator() {
  switch (document.getElementById("modalDestinations").value) {
    case "Azrou Cedar Forest":
    case "Oum el-Rbia River":
    case "Maâmora Forest":
      return `Forest - ${document.getElementById("modalDestinations").value}`;
      break;

    case "Merzouga":
    case "Zagoura Desert Tour":
    case "Dakhla":
      return `Desert - ${document.getElementById("modalDestinations").value}`;
      break;

    case "The Gorge of Tislit":
    case "Jebel Toubkal":
    case "Rif Mountains":
      return `Mountains - ${
        document.getElementById("modalDestinations").value
      }`;
      break;

    default:
      return "";
      break;
  }
}

function priceGenerator(plan) {
  switch (plan.value) {
    case "Basic":
      return "950 MAD";
      break;

    case "Standard":
      return "1500 MAD";
      break;

    case "Premium":
      return "4000 MAD";
      break;

    default:
      return "";
      break;
  }
}

// Modal Form's Information Step

var PesonalInformation = [];
infoCollection = document.querySelector("#infoCollector");
infoCollection.addEventListener("click", function () {
  PesonalInformation.push({
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    mailAdress: document.querySelector("#mail").value,
    phoneNumber: document.querySelector("#phoneNumber").value,
    destination: destinationGenerator(),
    plan: document.getElementById("plan").value,
    price: priceGenerator(plan),
  });

  if (typeof div == "undefined") {
    // Form's Final Step Content Fill in Using DOM

    div = document.createElement("div");
    div.classList.add("textDiv");

    // Full Name Paragraph

    nameP = document.createElement("p");
    nameSpan1 = document.createElement("span");
    nameSpan1.classList.add("confirmationLabel");
    nameSpan1.textContent = "Full Name : ";
    nameP.appendChild(nameSpan1);
    nameSpan2 = document.createElement("span");
    nameSpan2.classList.add("formInformation");
    nameSpan2.innerText =
      PesonalInformation[0].firstName + " " + PesonalInformation[0].lastName;
    nameP.appendChild(nameSpan2);
    div.appendChild(nameP);

    // Mail Adress

    mailP = document.createElement("p");
    mailSpan1 = document.createElement("span");
    mailSpan1.classList.add("confirmationLabel");
    mailSpan1.textContent = "Mail Adress : ";
    mailP.appendChild(mailSpan1);
    mailSpan2 = document.createElement("span");
    mailSpan2.classList.add("formInformation");
    mailSpan2.innerText = PesonalInformation[0].mailAdress;
    mailP.appendChild(mailSpan2);
    div.appendChild(mailP);

    // Phone Number

    phoneP = document.createElement("p");
    phoneSpan1 = document.createElement("span");
    phoneSpan1.classList.add("confirmationLabel");
    phoneSpan1.textContent = "Phone Number : ";
    phoneP.appendChild(phoneSpan1);
    phoneSpan2 = document.createElement("span");
    phoneSpan2.classList.add("formInformation");
    phoneSpan2.innerText = PesonalInformation[0].phoneNumber;
    phoneP.appendChild(phoneSpan2);
    div.appendChild(phoneP);

    // Destination

    destinationP = document.createElement("p");
    destinationSpan1 = document.createElement("span");
    destinationSpan1.classList.add("confirmationLabel");
    destinationSpan1.textContent = "Destination : ";
    destinationP.appendChild(destinationSpan1);
    destinationSpan2 = document.createElement("span");
    destinationSpan2.classList.add("formInformation");
    destinationSpan2.innerText = PesonalInformation[0].destination;
    destinationP.appendChild(destinationSpan2);
    div.appendChild(destinationP);

    // Plan

    planP = document.createElement("p");
    planSpan1 = document.createElement("span");
    planSpan1.classList.add("confirmationLabel");
    planSpan1.textContent = "Plan : ";
    planP.appendChild(planSpan1);
    planSpan2 = document.createElement("span");
    planSpan2.classList.add("formInformation");
    planSpan2.innerText = PesonalInformation[0].plan;
    planP.appendChild(planSpan2);
    div.appendChild(planP);

    // Price

    priceP = document.createElement("p");
    priceSpan1 = document.createElement("span");
    priceSpan1.classList.add("confirmationLabel");
    priceSpan1.textContent = "Price : ";
    priceP.appendChild(priceSpan1);
    priceSpan2 = document.createElement("span");
    priceSpan2.classList.add("formInformation");
    priceSpan2.innerText = PesonalInformation[0].price;
    priceP.appendChild(priceSpan2);
    div.appendChild(priceP);

    document.querySelector("#step3").appendChild(div);
  } else {
    PesonalInformation[0].firstName =
      document.querySelector("#firstName").value;
    PesonalInformation[0].lastName = document.querySelector("#lastName").value;
    PesonalInformation[0].mailAdress = document.querySelector("#mail").value;
    PesonalInformation[0].phoneNumber =
      document.querySelector("#phoneNumber").value;
    PesonalInformation[0].destination = destinationGenerator();
    PesonalInformation[0].plan = document.getElementById("plan").value;
    PesonalInformation[0].price = priceGenerator(plan);

    nameSpan2.innerText =
      PesonalInformation[0].firstName + " " + PesonalInformation[0].lastName;
    mailSpan2.innerText = PesonalInformation[0].mailAdress;
    phoneSpan2.innerText = PesonalInformation[0].phoneNumber;
    destinationSpan2.innerText = PesonalInformation[0].destination;
    planSpan2.innerText = PesonalInformation[0].plan;
    priceSpan2.innerText = PesonalInformation[0].price;
  }
});

//Form Submition + Modal Closing

function formSubmition() {
  errorMsg = "Error(s) :\n";

  phoneNumberRegEx = /0([ \-_/]*)(\d[ \-_/]*){9}/;
  if (!PesonalInformation[0].phoneNumber.match(phoneNumberRegEx)) {
    errorMsg +=
      "- Please Enter A Valid Phone Number ('0X XX XX XX XX').\n";
  } else if (PesonalInformation[0].phoneNumber.length !== 10){
    errorMsg += "- Please Enter A Valid Phone Number (10 Characters Are Allowed).\n"
  }

  if (PesonalInformation[0].destination == "") {
    errorMsg += "- Please Select A Destination.\n";
  }

  if (PesonalInformation[0].plan == "") {
    errorMsg += "- Please Select A Plan.\n";
  }

  if (errorMsg !== "Error(s) :\n") {
    alert(errorMsg);
  } else {
    // Data Storage as a JSON Object

    const dataStorage = [];
    JsonPersonalInfo = JSON.stringify(PesonalInformation[0]);
    dataStorage.push(JsonPersonalInfo);

    alert("Your Booking Has Been Stored Successfully !");
    modalInfoClearance();

    pricingModal.style.display = "none";

    PesonalInformation[0].firstName = "";
    PesonalInformation[0].lastName = "";
    PesonalInformation[0].mailAdress = "";
    PesonalInformation[0].phoneNumber = "";
    PesonalInformation[0].destination = destinationGenerator();
    PesonalInformation[0].plan = "";
    PesonalInformation[0].price = priceGenerator(plan);
  }
}

// Form's Final Step Display

function infoDisplay() {
  formFinalStepDisplay = document.getElementById("step3");
  if (
    document.querySelector("#firstName").value !== "" &&
    document.querySelector("#lastName").value !== "" &&
    document.querySelector("#mail").value !== "" &&
    document.querySelector("#phoneNumber").value !== ""
  ) {
    formFinalStepDisplay.style.display = null;
    formFinalStepDisplay.style.display = "flex";
  }
}

function infoHide() {
  formFinalStepDisplay.style.display = null;
  formFinalStepDisplay.style.display = "none";
}

// Clearing Data From Inputs After Creating JSON Object

function modalInfoClearance() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#mail").value = "";
  document.querySelector("#phoneNumber").value = "";
  document.getElementById("modalDestinations").value = "";
  document.getElementById("plan").value = "";
  priceGenerator(plan);

  nameSpan2.innerText = "";
  mailSpan2.innerText = "";
  phoneSpan2.innerText = "";
  destinationSpan2.innerText = "";
  planSpan2.innerText = "";
  priceSpan2.innerText = "";
}
