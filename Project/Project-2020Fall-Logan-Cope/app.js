// Add DOMContentLoaded event listeners
document.addEventListener('DOMContentLoaded', bindButtonsPost);

/* This function binds a POST request to post a name and email*/
function bindButtonsPost(){
    document.getElementById('postForm').addEventListener('click', function(event){
        let req = new XMLHttpRequest();
        let userData = {email:null, name:null};
        userData.email = document.getElementById('userEmail').value;
        userData.name = document.getElementById('name').value;
        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load',function(){
            if(req.status >= 200 && req.status < 400){
                let nameData = JSON.parse(req.responseText);
                document.getElementById('nameOutput').textContent = nameData.json.name;
                document.getElementById('emailOutput').textContent = nameData.json.email;
            } else {
                console.log("Error in network request: " + req.statusText);
            }});
        req.send(JSON.stringify(userData));
        event.preventDefault();
    });
}
