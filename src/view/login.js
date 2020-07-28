const apiToken = "5e7d0a96ebb185659f3b32eea432df33";
const baseUrl = "https://api.themoviedb.org/3";
const CACHE_KEY = "username";

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#buttonSave");


const setCache = (username) => {
    localStorage.setItem(CACHE_KEY, username);
}
const notify = (message) => {
    swal({
        title: message.title,
        type: message.type
    });
}

const validateForm = () => {
    $("#form").validate({
        rules: {
            username: {
                required: true
            },
            password: {
                required: true
            }
        }
    });
}

const getRequestToken = async(loginData) => {
    try {
        /* request token*/
        const responseToken = await fetch(`${baseUrl}/authentication/token/new?` + new URLSearchParams({
            api_key: apiToken
        }));
        const resultReqToken = await responseToken.json();
        // console.log(resultReqToken);

        const resultLogin = {
            username: loginData.username,
            password: loginData.password,
            request_token: resultReqToken.request_token
        };

        /* authentication*/
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(resultLogin)
        }

        // console.log(resultLogin);

        const responseAuth = await fetch(`${baseUrl}/authentication/token/validate_with_login?` + $.param({ api_key: apiToken }), options);
        const resultAuth = await responseAuth.json();
        // console.log(resultAuth);

        if (resultAuth.success) {
            let message = {
                title: "Login Succeced!",
                type: "success"
            };
            notify(message);
            setCache(resultLogin.username);
            setTimeout(() => {
                window.location.replace("dashboard.html");
            }, 3000)
        } else {
            let message = {
                title: resultAuth.status_message,
            };
            notify(message);

        }
    } catch (error) {
        showResponseMessage();
    }
}
if (buttonSubmit) {
    buttonSubmit.addEventListener("click", function(event) {
        let loginData = {
            username: inputUsername.value,
            password: inputPassword.value
        };
        if (inputUsername.value === "" || inputPassword.value === "") {
            validateForm();
        } else {
            event.preventDefault();
            getRequestToken(loginData);
        }
    });
}

const showResponseMessage = (msg = "Check your internet connection") => {
    let message = {
        title: msg
    }
};