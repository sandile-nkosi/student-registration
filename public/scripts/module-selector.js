const yearSelectorElement = document.getElementById('year');

async function updateModules() {
  // const moduleId = yearSelectorElement.dataset.moduleid;
  // const response = await fetch(`/student/registration/${moduleId}`);
  // const responseData = await response.json();

  // console.log(responseData);

  if (yearSelectorElement.value == "0") {  
    alert('first year')
  } else if (yearSelectorElement.value == "1") {
    alert('second year')
  } else if (yearSelectorElement.value == "2") {
      alert('thid year')
  } else {
    alert('fourth year')
  }
}

yearSelectorElement.addEventListener('change', updateModules);