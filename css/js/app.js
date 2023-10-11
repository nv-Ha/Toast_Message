function toast({
    title = '',
    message = '',
    type = 'error',
    duration = 3000
}) {
    const main = document.getElementById('toast')
    if(main){
        const toast = document.createElement('div');
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            error: 'fa-solid fa-circle-exclamation',
        }

        const autoRemove = setTimeout(function(){
            main.removeChild(toast)  
        },duration + 1000)

        toast.onclick = function(e){
            if(e.target.closest(".toast__close")){
                main.removeChild(toast)
                clearTimeout(autoRemove)
            }
        }

        const delay =(duration/1000).toFixed(2)
        const icon = icons[type]
        toast.style.animation = ` smoothLeft 1s ease, delayNone 1s ${delay}s forwards`
        toast.classList.add('toast', `toast--${type}`)
        toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
    
                <div class="toast__content">
                   <div class="toast__tittle">${title}</div>
                   <div class="toast__text">${message}</div>
                </div>
    
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            `;
            main.appendChild(toast);

    }
}

function show_Success(){
    toast({
        title: 'Success',
        message: 'The easiest way to get icons on your website',
        type: 'success',
        duration: 3000
    })
}

function show_Info(){
    toast({
        title: 'Info',
        message: 'The easiest way to get icons on your website',
        type: 'info',
        duration: 3000
    })
}

function show_error(){
    toast({
    title: 'Error',
    message: 'The easiest way to get icons on your website',
    type: 'error',
    duration: 3000
})
}