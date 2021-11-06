let items = [
  "banana",
  "strawberry",
  "apple",
  "2 apples",
  "fun fruit",
  "dragon fruit",
];

let filter = null;
let selectedValue = null;

const submitSearch = () => {
  const autoComplete = document.getElementById("auto-complete");
  autoComplete.innerHTML = `<div><p>Search submited for ${selectedValue}</p></div>`;
};

window.onload = function () {
  const input = document.querySelector("input");
  const options = document.getElementById("options");
  const optionsList = document.getElementById("options-list");

  const updateListOfItems = (filter) => {
    const filteredItems = items.filter((item) =>
      item.toLowerCase().startsWith(filter.toLowerCase())
    );
    if (filteredItems.length > 0) {
      let listOfItems = "";
      filteredItems.forEach((item) => {
        listOfItems += `<li class="options-item"><p class="option-text">${item}</p></li>`;
      });
      optionsList.innerHTML = listOfItems;
    } else {
      optionsList.innerHTML = `<li class="options-no-item"><p class="option-text">No options found...</p></li>`;
    }
  };

  const filterItemsList = (val) => {
    filter = val;
    if (filter.length > 0) {
      options.style.visibility = "visible";
    } else {
      options.style.visibility = "hidden";
      optionsList.innerHTML = ''
    }
    updateListOfItems(filter);
  };

  optionsList.addEventListener("click", (e) => {
    selectedValue = e.target.innerHTML;
    selectedValue = selectedValue.replace(`<p class="option-text">`, "");
    selectedValue = selectedValue.replace("</p>", "");
    input.value = selectedValue;
    options.style.visibility = "hidden";
  });

  input.addEventListener("input", (e) => {
    filterItemsList(e.target.value);
  });
};
