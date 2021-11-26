import React, { useState } from 'react'

export default function RequestBodyContainer({ handleBodyInputChange, bodyText }) {

    return (
        <div className="my-4">
            <h5>Request Body</h5>
            <div className="form-group">
                <textarea className="form-control" rows="20" value={bodyText} onChange={handleBodyInputChange}></textarea>
            </div>

        </div>
    )
}
