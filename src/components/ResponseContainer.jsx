import React from 'react'

export default function ResponseContainer({ response }) {
    return (
        <div>
            <h5>Response Body</h5>
            <div className="response-container">
                <p>{JSON.stringify(response)}</p>
            </div>
        </div>
    )
}
