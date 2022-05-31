const stName = document.getElementById("name");
const stId = document.getElementById("id");
const stDept = document.getElementById("dept");
const stCgpa = document.getElementById("cgpa");
const btn = document.getElementById("btn");


btn.addEventListener("click", function (p) {
  p.preventDefault();

  if (stName.value == '') {
    alert("Enter Student Name")
  }
  else if (stId.value == '') {
    alert("Enter Student Id")
  }
  else if (stDept.value == '') {
    alert("Enter Student Department")
  }
  else if (stCgpa.value == '') {
    alert("Enter Student Cgpa")
  }
  else {
    const tbody = document.getElementById("tbody");
    const tr = document.createElement("tr");
    // for name
    const td = document.createElement("td");
    td.innerHTML = stName.value;
    tr.appendChild(td);

    // for id 
    const td1 = document.createElement("td");
    td1.innerHTML = stId.value;
    tr.appendChild(td1);
    // for id 
    const td2 = document.createElement("td");
    td2.innerHTML = stDept.value;
    tr.appendChild(td2);
    // for cgpa 
    const td3 = document.createElement("td");
    td3.innerHTML = stCgpa.value;
    tr.appendChild(td3);

    tbody.appendChild(tr)
  }
})