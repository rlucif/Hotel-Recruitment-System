const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
/*Job-Seeker/Provider*/
/*function job(){
  var selectvalue= $('input[name=Jobs]:checked','#job').val();
  if (selectvalue=="Job-Seeker"){
    window.open("apply_s.html");
    return true;
  }
  else if (selectvalue=="Job-Provider"){
    window.open("apply_p.html");
    return true;
  }
  return false;
};*/

function jobs2(){
  var rd1=document.getElementById("job1");
  var rd2=document.getElementById("job2");

  if (rd1.checked==true)
    window.open("apply_seeker.html");
  else if (rd2.checked==true)
    window.open("apply_provider.html");
  else
    alert("Nothing selected");
}