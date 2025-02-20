import React from 'react'

const Alert = () => {
    return (
        <div class="alert alert-danger" role="alert" style={{marginTop: "7vh"}}>
            You are viewing static data because the API is encountering a CORS error in production mode
        </div>
    )
}

export default Alert