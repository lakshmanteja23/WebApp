import React from 'react'
import { useParams } from 'react-router-dom'
export default function UserDetails() {
    const param = useParams()
    const userid = param.userid
    return (
    <div>UserDetails {userid}</div>
  )
}
