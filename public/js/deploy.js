var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.head.appendChild(script);

function submitData(formData, inputData){
    var formInfo = {data: formData, extra: inputData}
    var saveData = $.ajax({
        contentType: 'application/json',
        type: 'POST',
        url: "/sendData",
        data: JSON.stringify(formInfo),
        inputs: JSON.stringify(inputData),
        dataType: "json",
        success: function(resultData) {
            console.log(resultData); 
            alert("Save Complete") },
        error: function(data){
            if(data.statusText!="OK") {
                alert('error: '+data.responseText);
            }
            else {
                alert (data.responseText);
                redirectUrl();
            }
        }
  });
 
}

function redirectUrl ( ) {
    var redirct = $(document.activeElement).attr('id') ;
    var url = window.location.href;
    var title = $('title').text();
    if(redirct!=null){
        var regEx = new RegExp(title, "i");
        url = url.replace(regEx,redirct);
        window.location.href = url;
    }
}

var form = document.getElementsByTagName("form")[0];
if(form) {
form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    console.log(form.elements.length);
    var navigateValue = $(document.activeElement).attr('id');
    var page=$('title').text();
    var jsonObj={};
    for(var i=0; i<form.elements.length; i++){
        if(form.elements[i].name)
        jsonObj["\""+form.elements[i].name+"\""] = form.elements[i].value
    }
    var inputData = {page: page, target: navigateValue}
    submitData(jsonObj,inputData);
});
}
else {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.addEventListener("click", function(){ 
            redirectUrl();
            return false; },false);
    });

}




