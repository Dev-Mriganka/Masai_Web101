// fill in javascript code here
document.querySelector("form").addEventListener("submit", myFunc)

function myFunc(event) {
    event.preventDefault();
    
    let name = document.querySelector("#name").value;
    let ei = document.querySelector("#employeeID").value;
    let dept = document.querySelector("#department").value;
    let exp = document.querySelector("#exp").value;
    let email = document.querySelector("#email").value;
    let mbl = document.querySelector("#mbl").value;
    console.log(name, ei, dept, exp, email, mbl);
    
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = name;
    let td2 = document.createElement("td");
    td2.innerText = ei;
    let td3 = document.createElement("td");
    td3.innerText = dept;
    let td4 = document.createElement("td");
    td4.innerText = exp;
    let td5 = document.createElement("td");
    td5.innerText = email;
    let td6 = document.createElement("td");
    td6.innerText = mbl;
    let td7 = document.createElement("td");
    exp = +(exp)
    if (exp <= 1) {
        td7.innerText = "Fresher";
    }else if (exp > 1 && exp <= 5) {
        td7.innerText = "Junior";
    } else {
        td7.innerText = "Senior";
    }
    let td8 = document.createElement("td");
    td8.innerText = "DELETE"
    td8.style.backgroundColor = 'red';
    td8.style.color = 'white';
    td8.addEventListener("click", deleteIt)

    function deleteIt(event) {
        event.target.parentNode.remove()
    }

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.querySelector("tbody").appendChild(tr);
    // let filter = document.createElement("form");
    // let select = document.createElement("select");
    // let option1 = document.createElement("option");
    // option1.setAttribute("value", "Frontend")
    // option.innerText = "Frontend"
    // let option2 = document.createElement("option");
    // option2.setAttribute("value", "Backend")
    // option2.innerText = "Backend"
    // let option3 = document.createElement("option");
    // option3.setAttribute("value", "Operations")
    // option3.innerText = "Operations"
    // let option4 = document.createElement("option");
    // option4.setAttribute("value", "HR")
    // let option5 = document.createElement("option");
    // option5.setAttribute("value", "IA")
    
    // select.append(option1, option2, option3, option4, option5)
    // filter.append(select)
    // document.querySelector("div").appendChild(filter);
}
