document
  .getElementById("discover-something")
  .addEventListener("click", function () {
    window.location.href = "./main.html";
  });


document
  .getElementById("fix-mobile-btn")
  .addEventListener("click", function () {
    alert("OK!");

    let taskMinus = getInnerTextByID("task-assigned-minius") - 1;
    setInnerTextByIDandValue("task-assigned-minius", taskMinus);
    let taskPlus = getInnerTextByID("task-plus") + 1;
    setInnerTextByIDandValue("task-plus", taskPlus);

    let formattedTime = getCurrentTime();

    let add = document.getElementById("activity-history");
    const d = document.createElement("div");
    d.classList.add(
      "bg-[#F4F7FF]",
      "text-gray-600",
      "mt-3",
      "rounded-lg",
      "p-4"
    );
    d.innerText = `You have completed the task Fix Mobile Button Issue ${formattedTime}`;
    add.appendChild(d);

    this.disabled = true;
  });
document.getElementById("add-dark-mode").addEventListener("click", function () {
  alert("OK!");

  let taskMinus = getInnerTextByID("task-assigned-minius") - 1;
  setInnerTextByIDandValue("task-assigned-minius", taskMinus);
  let taskPlus = getInnerTextByID("task-plus") + 1;
  setInnerTextByIDandValue("task-plus", taskPlus);

  let formattedTime = getCurrentTime();

  let add = document.getElementById("activity-history");
  const d = document.createElement("div");
  d.classList.add("bg-[#F4F7FF]", "text-gray-600", "mt-3", "rounded-lg", "p-4");
  d.innerText = `You have completed the task Add Dark Mode ${formattedTime}`;
  add.appendChild(d);

  this.disabled = true;
});
document
  .getElementById("optimize-home-btn")
  .addEventListener("click", function () {
    alert("OK!");

    let taskMinus = getInnerTextByID("task-assigned-minius") - 1;
    setInnerTextByIDandValue("task-assigned-minius", taskMinus);
    let taskPlus = getInnerTextByID("task-plus") + 1;
    setInnerTextByIDandValue("task-plus", taskPlus);

    let formattedTime = getCurrentTime();

    let add = document.getElementById("activity-history");
    const d = document.createElement("div");
    d.classList.add(
      "bg-[#F4F7FF]",
      "text-gray-600",
      "mt-3",
      "rounded-lg",
      "p-4"
    );
    d.innerText = `You have completed the task Optimize  Home page  ${formattedTime}`;
    add.appendChild(d);

    this.disabled = true;
  });
document.getElementById("Add-new-emoji").addEventListener("click", function () {
  alert("OK!");

  let taskMinus = getInnerTextByID("task-assigned-minius") - 1;
  setInnerTextByIDandValue("task-assigned-minius", taskMinus);
  let taskPlus = getInnerTextByID("task-plus") + 1;
  setInnerTextByIDandValue("task-plus", taskPlus);

  let formattedTime = getCurrentTime();

  let add = document.getElementById("activity-history");
  const d = document.createElement("div");
  d.classList.add("bg-[#F4F7FF]", "text-gray-600", "mt-3", "rounded-lg", "p-4");
  d.innerText = `You have completed the task Add new emoji ${formattedTime}`;
  add.appendChild(d);

  this.disabled = true;
});
document
  .getElementById("Integrate-OpenAI-API")
  .addEventListener("click", function () {
    alert("OK!");

    let taskMinus = getInnerTextByID("task-assigned-minius") - 1;
    setInnerTextByIDandValue("task-assigned-minius", taskMinus);
    let taskPlus = getInnerTextByID("task-plus") + 1;
    setInnerTextByIDandValue("task-plus", taskPlus);

    let formattedTime = getCurrentTime();

    let add = document.getElementById("activity-history");
    const d = document.createElement("div");
    d.classList.add(
      "bg-[#F4F7FF]",
      "text-gray-600",
      "mt-3",
      "rounded-lg",
      "p-4"
    );
    d.innerText = `You have completed the task Integrate OpenAI APIi ${formattedTime}`;
    add.appendChild(d);

    this.disabled = true;
  });
document
  .getElementById("Improve-Job-searching")
  .addEventListener("click", function () {
    alert("OK!");

    let taskMinus = getInnerTextByID("task-assigned-minius") - 1;
    setInnerTextByIDandValue("task-assigned-minius", taskMinus);
    let taskPlus = getInnerTextByID("task-plus") + 1;
    setInnerTextByIDandValue("task-plus", taskPlus);

    let formattedTime = getCurrentTime();

    let add = document.getElementById("activity-history");
    const d = document.createElement("div");
    d.classList.add(
      "bg-[#F4F7FF]",
      "text-gray-600",
      "mt-3",
      "rounded-lg",
      "p-4"
    );
    d.innerText = `You have completed the task Improve Job searching ${formattedTime}`;
    add.appendChild(d);

    this.disabled = true;
  });

/* Remoive History */
const activity = document
  .getElementById("Clear-history")
  .addEventListener("click", function () {
    alert("Want to clear History??");
    document.getElementById("activity-history").innerHTML = "";
  });
