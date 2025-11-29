let data=JSON.parse(localStorage.getItem("vehicles")) || [];
function addVehicle(){
    let model= document.getElementById("model").value;
    let type=document.getElementById("type").value;
    let duty=document.getElementById("duty").value;
    let driver=document.getElementById("driver").value;
    if(!model || !type || !duty ||!driver){
        document.getElementById("error").innerText="All fields required";
        return;
    }
    let obj={id:Date.now(), model, type,
        availabilty:duty, driver

    };
    data.push(obj); 
    localStorage.setItem("vehicles", JSON.stringify(data));
    document.getElementById("error").innerText="";
    clearForm();
    display(data);
}

function clearForm(){
    document.getElementById("model").value="";
    document.getElementById("type").value="";
    document.getElementById("duty").value="";
    document.getElementById("driver").value="";
}

function display(arr){
    let container= document.getElementById("cards");
    container.innerHTML="";
   arr.forEach((el)=>{
    let card=document.getElementById("div");
    card.className="card";
    card.innerHTML=`<h3>${el.model}</h3>
    <p>Type:${el.type}</p>
    <p>Driver:${el.driver}</p>
    <p>
        Status:<span class="${el.availabilty==="Available"? "green":"red"}"> ${el.availabilty}</span>
    </p>
    <button onclick="updateDriver(${el.id})"> Update Driver</button>
    <button onclick="toggleStatus(${el.id})"> Change Availability</button>
    <button onclick="deletevehicle(${el.id})">Delete</button>`;
    container.appendChild(card);
});
}
function updateDriver(id){
    let newDriver=promt("Enter new driver name:");
    if(newDriver){
        data=data.map((el)=>{
            if(el.id===id) el.driver=newDriver;
            return el;

        });
        localStorage.setItem("vehicles", JSON.stringify(data));
        display(data);
    }
}

function toggleStatus(id){
    data=data.map((el)=>{
if(el.id===id){
    el.availabilty=el.availabilty==="Available"? "Unavailabe": "Available";
}
return el;
    });
}