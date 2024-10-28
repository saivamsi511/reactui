import { useState } from "react"
import { Link } from "react-router-dom"

export function NotFound(){
    return (
        <div>
        <h1>404Not Found</h1>
        <Link path="/login">Login</Link>
        </div>
    )
}