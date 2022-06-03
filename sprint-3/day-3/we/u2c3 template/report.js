// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", myFunc)

function myFunc(event) {
    event.preventDefault();

    let avatar = document.querySelector("#image").value
    let name = document.querySelector("#name").value
    let batch = document.querySelector("#batch").value
    let dsa = document.querySelector("#dsa").value
    let csbt = document.querySelector("#cs").value
    let coding = document.querySelector("#coding").value

    // console.log(avatar,name,batch,dsa,csbt,coding)
    
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var img = document.createElement("img");
    img.setAttribute("src",avatar)
    td1.append(img);
    
    var td2 = document.createElement("td");
    td2.innerText = name;

    var td3 = document.createElement("td");
    td3.innerText = batch;

    var td4 = document.createElement("td");
    td4.innerText = dsa;

    var td5 = document.createElement("td");
    td5.innerText = csbt;

    var td6 = document.createElement("td");
    td6.innerText = coding;

    var td7 = document.createElement("td");
    let temp = Number(dsa) + Number(csbt) + Number(coding);
    let percentage = (temp / 30) * 100;
    td7.innerText = percentage;

    var td8 = document.createElement("td");
    if (percentage > 50){
        td8.innerText = "Regular"
        td8.style.backgroundColor = "green"
    } else {
        td8.innerText = "Async"
        td8.style.backgroundColor = "red"
        td8.style.color = "white"
    }
    
    var td9 = document.createElement("td");
    td9.innerText = "DELETE";
    td9.style.backgroundColor = "red"
    td9.style.color = "white"
    td9.addEventListener("click", deleteIt)
    function deleteIt(event) {
        var x = event.target.parentNode
        
        x.remove();
    }
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9)
    document.querySelector("tbody").append(tr)
}