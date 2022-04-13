import React from 'react'

function Logout({clearCart}){
    alert("Ready to Logout")
    localStorage.clear('token')
    window.location="/bona-fide-user-webapp/"
    return (
        <></>
    )
}
export default Logout;