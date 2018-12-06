var deleteBtn = document.getElementsByClassName('deleteBtn');
var deleteBtns = document.querySelectorAll('.deleteBtn');

deleteBtns.forEach((button) => {
    button.addEventListener('click', () => {
        const getId = button.getAttribute('data-id')
        const getRev = button.getAttribute('data-rev')
        console.log(getId +'/'+getRev)
        if(confirm('Are you sure to delete ?')){
            location.href = "/user/deleteOne?getId="+getId+"&getRev="+getRev
        }
    })
})
