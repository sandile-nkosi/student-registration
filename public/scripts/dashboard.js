const studentOverlayElement = document.getElementById('edit-overlay');
const backdropElement = document.getElementById('backdrop');

const editStudentBtnElement = document.getElementById('editStudentBtn');
const cancelEditBtnElement = document.getElementById('cancelEdit');


function openStudentEdit(){
  studentOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';

};

function closeStudentEdit(){
  studentOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
}

editStudentBtn.addEventListener('click', openStudentEdit);
cancelEditBtnElement.addEventListener('click', closeStudentEdit);
backdropElement.addEventListener('click', closeStudentEdit);