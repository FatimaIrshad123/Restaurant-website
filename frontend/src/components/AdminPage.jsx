import AdminLoginNavbar from "./AdminLoginNavbar"
import Admin from "./AdminNavbar"

export default function AdminPage(){

    if(localStorage.getItem('token')){
        return <div><AdminLoginNavbar /></div>
    }
    return (
        <div><Admin /></div>
    )
}