const yearSelector = document.getElementById("yearSelector");
const year1Element = document.getElementById("year1");
const year2Element = document.getElementById("year2");
const year3Element = document.getElementById("year3");
const year4Element = document.getElementById("year4");

yearSelector.addEventListener("change", ()=> {
  if (yearSelector.value === "year1") {
    year1Element.classList.remove("hidden");
    year2Element.classList.add("hidden");
    year3Element.classList.add("hidden");
    year4Element.classList.add("hidden");
  } else if (yearSelector.value === "year2") {
    year1Element.classList.add("hidden");
    year2Element.classList.remove("hidden");
    year3Element.classList.add("hidden");
    year4Element.classList.add("hidden");
  } else if (yearSelector.value === "year3") {
    year1Element.classList.add("hidden");
    year2Element.classList.add("hidden");
    year3Element.classList.remove("hidden");
    year4Element.classList.add("hidden");
  } else if (yearSelector.value === "year4") {
    year1Element.classList.add("hidden");
    year2Element.classList.add("hidden");
    year3Element.classList.add("hidden");
    year4Element.classList.remove("hidden");
  }
});
