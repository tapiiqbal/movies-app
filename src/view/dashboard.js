const logoutButton = document.querySelector("#logout");
const CACHE_KEY = "username";
const username = localStorage.getItem(CACHE_KEY);

function notify() {
    swal({
        title: "Are you sure?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        closeOnConfirm: false
    }, function() {
        swal("Logout!", "success");
        localStorage.removeItem(CACHE_KEY, username);
        location.href = "index.html";
    });
}

if (logoutButton) {
    logoutButton.addEventListener("click", function(event) {
        notify();
    });
}