import React, { useState } from 'react';

export default function AddressBarContainer({ handleAddressInputChange, handleMethodChange, sendApiRequest, address, method }) {

    return (
        <div>
            <div className="form-inline ">
                <select name="method" id="method" className="form-control m-1" onChange={ handleMethodChange } value={method} >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
                <input className="form-control m-1 w-75" onChange={ handleAddressInputChange } value={address} />
                <button className="btn btn-primary m-1" onClick={ sendApiRequest }>Send</button>
            </div>
        </div>
    )
}
