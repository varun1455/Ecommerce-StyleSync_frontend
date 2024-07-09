import Footer from "../../footer/Footer"
import Navbar from "../navbar/Navbar"
import { UserProfile } from "../user/components/UserProfile"

function ProfilePage(){


return (

    <>
    
    <Navbar>
    <h1 className="text-4xl p-4 mb-2 font-bold text-blue-900">My Profile</h1>
        <UserProfile></UserProfile>
        <Footer></Footer>
    </Navbar>
    
    </>
)

}

export default ProfilePage