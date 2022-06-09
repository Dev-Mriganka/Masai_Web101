document.querySelector("form").addEventListener("submit", myDSA);
let temp = JSON.parse(localStorage.getItem('quesArr'));
let quesArr = (temp||[]);
displayTable(quesArr)

function myDSA(event) {
    event.preventDefault();
    let links= document.querySelector("#link").value
    let titles = document.querySelector("#title").value
    let diff = document.querySelector("#difficulty").value
    links = links.trim()
    titles = titles.trim()

    let flag = false;
    quesArr.filter(el => {
        if (el.quesLinks == links) {
            flag = true;
            return;
        }
    })
    if (flag) {
            alert("Link already Exists!");
            document.querySelector("#link").value = "";
            return
    }
    
    if (titles == "" || links == "" || diff == "") {
            alert("Fill All The Required Data!");
            return;
        }
    let quesObj = {
        quesTitles: titles,
        quesLinks: links,
        quesDiff: diff,
    };

    // console.log(quesObj);
    quesArr.push(quesObj);

    displayTable(quesArr)
    localStorage.setItem("quesArr", JSON.stringify(quesArr))
}

function displayTable(quesArr) {
    document.querySelector("tbody").innerText=""
    quesArr.forEach(function (el) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = el.quesTitles
        let td2 = document.createElement("td");
        td2.innerText = el.quesLinks
        let td3 = document.createElement("td");
        td3.innerText = el.quesDiff
        let td4 = document.createElement("td");
        if (el.quesDiff == "Easy") {
            td4.innerText = "No";
        }else{
            td4.innerText = "Yes";
        }
        tr.append(td1, td2, td3, td4)
        document.querySelector("tbody").appendChild(tr)
    })
}
