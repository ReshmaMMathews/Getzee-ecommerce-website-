var updateBtns = document.getElementsByClassName('update-cart')

for (i=0; i<updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'action:', action)

        /* checking user status on click */
        console.log('USER:', user)
        if (user === 'AnonymousUser'){
            console.log('User is not logged in')
        }else{
            console.log('User is logged in, sending the data.....')
        }
    })
}

