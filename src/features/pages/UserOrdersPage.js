import Footer from "../../footer/Footer";
import Navbar from "../navbar/Navbar";
import { UserOrders } from "../user/components/UserOrders";

function UserOrdersPage(){


    return (

        <>
            <Navbar>
                <h1 className="text-4xl p-4 font-bold text-blue-900">My Orders</h1>
                <UserOrders></UserOrders>
                <Footer></Footer>
            </Navbar>
        
        </>
    )


}


export default UserOrdersPage;