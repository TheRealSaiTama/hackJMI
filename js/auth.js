function login(e){
    // e.preventDefault();
    // const a = new FormData(e.target);
    // const formDataObj = {};
    // a.forEach((value, key) => (formDataObj[key] = value));
    // const data = JSON.stringify(formDataObj);
    // console.log(data)
    // fetch("http://localhost:8080/auth/login", {
    //     method: 'POST',
    //     mode: 'cors',
    //     headers:[
    //         ['Content-Type', 'application/json']
    //     ],
    //     body: data
    // }).then(res=> res.json()).then(data=>{
    //     if (data['status'] == "success"){
    //         window.location.href("#");
    //     }
    //     else{
    //         document.getElementById('error').innerHTML = data['error'];
    //     }
    // }).catch(err=>{
    //     console.log(err)
    // });
    window.location.href = '/dashboard/index.html'
}

function signup(e){
    // e.preventDefault();
    // const a = new FormData(e.target);
    // const formDataObj = {};
    // a.forEach((value, key) => (formDataObj[key] = value));
    // const data = JSON.stringify(formDataObj);
    // console.log(data)
    // fetch("http://localhost:8080/auth/signup", {
    //     method: 'POST',
    //     mode: 'cors',
    //     headers:[
    //         ['Content-Type', 'application/json']
    //     ],
    //     body: data
    // }).then(res=> res.json()).then(data=>{
    //     if (data['status'] == "success"){
    //         window.location.href("login.html");
    //     }
    //     else{
    //         document.getElementById('error').innerHTML = data['error'];
    //     }
    // }).catch(err=>{
    //     console.log(err)
    // });
    // window.location.href('/auth.html')
}
