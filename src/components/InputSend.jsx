import { SendHorizonal, Paperclip } from "lucide-react"


const InputSend = () => {
    return(
        <div className=" sticky mt-20">
            <input 
                type="text"  
                className="w-full h-200 p-4 rounded-sm absolute bottom-0"
                placeholder="Message"
            />
            <div 
                className="absolute bottom-2 right-16 p-2"
            >
                <label htmlFor="file" className="cursor-pointer"><Paperclip/></label>
                <input id="file" type="file" className="hidden" />
            </div>
            <div 
                className="absolute bottom-2 right-5 cursor-pointer text-white rounded-3xl bg-gray-800 p-2"
            >
                <SendHorizonal />
            </div>
        </div>
    )
}
export default InputSend