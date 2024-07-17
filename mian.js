import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@8/src/sweetalert2.js'
import 'https://unpkg.com/axios@1.6.7/dist/axios.min.js'
function submit() {
    console.log('sdsd')
    var email = document.getElementById('email').value
    var username = document.getElementById('name').value
    var url = `https://script.google.com/macros/s/AKfycbyydRY6lJEW6f9s115UjdN9eVqYKIjELfKaxF9YGiPm5E3jiiC-KtmdXpCMaAFGKHTe3g/exec?email=${email}&name=${username}`

    Swal.close()

    Swal.fire({
        title: 'Loading',
        backdrop: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        showDenyButton: false,
        showCancelButton: false,
        icon: null
    })
    axios.get(url).then(response => {
        if (response.data.scusses == true) {
            Swal.fire({
                title: "success",
                text: "You have been subscribed",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "error",
                text: "the email is invalid",
                icon: "error"
            });

        }
    })
}

document.getElementById('submit').onclick = submit;