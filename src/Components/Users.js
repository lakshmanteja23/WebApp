import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users () {
 const [searchParams, setSearchParams] = useSearchParams()
 const showActiveUsers = searchParams.get('filter') === 'active'
    return (
        <>
    <div>
        <h1>User 1</h1> 
        <h1>User 2</h1>
        <h1>User 3</h1>
        <div>
            <button onClick={() => setSearchParams({filter : 'active'})}>Active Users</button>
            <button onClick={() => setSearchParams()}>Remove Users</button>

        </div>
        {showActiveUsers?
        <div>Showing Active Users</div>:
        <div>Showing All Users</div>} 
    </div>
    <Outlet/>
    </>
  )
}

export default Users 

