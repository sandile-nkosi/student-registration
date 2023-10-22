const bursaryElement = document.getElementById("bursary");
const bursaryUploadElement = document.getElementById("bursaryDocs");

bursaryElement.addEventListener('change', ()=>{
  if(bursaryElement.checked){
    bursaryUploadElement.classList.remove("hidden")
  }else {
    bursaryUploadElement.classList.add("hidden")
  }
});
