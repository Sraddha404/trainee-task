import React from 'react'

function Details(){
return(
    <>
    <div>
        <label htmlFor="id" className='block text-sm font-medium leading-6 text-gray-900'>
            BranchID
        </label>
        <input type="text" 
        name='BranchId'
        />

<label htmlFor="id" className='block text-sm font-medium leading-6 text-gray-900'>
            BranchName
        </label>
        <select 
        id="text" 
        name='BranchName'
        >
          <option>
            Select
        </option>
        <option>
            ABC
        </option>
        <option>
            EFG
        </option>
            </select>
    </div>
    <div>
    <label htmlFor="id" className='block text-sm font-medium leading-6 text-gray-900'>
            ProductID
        </label>
        <input type="text" 
        name='ProductId'
        />

<label htmlFor="id" className='block text-sm font-medium leading-6 text-gray-900'>
            ProductName
        </label>
        <select 
        id="text" 
        name='ProductName'
        >
          <option>
            Select
        </option>
        <option>
            ABCD
        </option>
        <option>
            EFGH
        </option>
            </select>
    </div>
    <div>
    <label htmlFor="id" className='block text-sm font-medium leading-6 text-gray-900'>
            PacketWeight
        </label>
        <input type="number" 
        name='Packetweight'
        />
    
    <label htmlFor="id" className='block text-sm font-medium leading-6 text-gray-900'>
            DeviationRemarks
        </label>
        <input type="text" 
        name='Remarks'
        />
    </div>
    <div>
        <button type='submit'> Submit</button>
    </div>
    </>
)
}
export default Details;