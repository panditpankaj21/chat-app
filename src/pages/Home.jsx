import ChatMessages from "../components/ChatMessages"
import ChatNavBar from "../components/ChatNavBar"
import InputSend from "../components/InputSend"
import NavBar from "../components/NavBar"
import UserCard from "../components/UserCard"

const Home = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="bg-gray-700 text-white w-1/4 ">
                {/* <h1 className="text-2xl font-bold mb-4">Chat App</h1> */}
                <NavBar/>
                {/* Add your sidebar content here */}
                <ul>
                    <li className=""><UserCard/></li>
                    <li className="mb-2"><UserCard/></li>
                    <li className="mb-2"><UserCard/></li>
                    <li className="mb-2"><UserCard/></li>
                    <li className="mb-2"><UserCard/></li>
                {/* Add more chat items as needed */}
                </ul>
            </div>

            <div className="flex-1 bg-gray-900 overflow-y-scroll">
                <div className="flex flex-col justify-around">
                    <div className="fixed top-0 left-1/4 right-0">
                        <ChatNavBar/>
                    </div>
                    <div className="mt-16">
                        <ChatMessages/>
                    </div>
                    <div>
                        <InputSend/>
                    </div>
                </div>
                
            </div>
        </div>

    )
}
export default Home