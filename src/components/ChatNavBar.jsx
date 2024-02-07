import { Video, Phone, MoreHorizontal } from 'lucide-react';



const ChatNavBar = () => {
    return (
        <div className=" bg-gray-700 text-white p-4">
            <div className=' flex justify-between'>
                <h1 className='text-lg font-bold'>userName</h1>
                <div className='flex justify-around gap-3 cursor-pointer'>
                    <Video/>
                    <Phone/>
                    <MoreHorizontal/>
                </div>
            </div>
        </div>
    )
}
export default ChatNavBar