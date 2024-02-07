const UserCard = () => {
    return (
        <div 
            className="flex items-center p-4 card-continer hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out cursor-pointer"
        >
            <img
                className="w-10 h-10 rounded-full object-cover mr-4"
                src="https://imgs.search.brave.com/7xt98e5zW1jzCnGur1KHat81WHdBQU8Uuljf3wu6820/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk5/MzQyMjc1L3Bob3Rv/LzIwMDMtcG9ydHJh/aXQtb2Ytc2hhaHJ1/a2gta2hhbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VTM3/UFpCRm9UMnZkMjZr/bUwxcldjWFJpOVRZ/a3c2TWxORFFCejUt/UmFlST0"
                alt="srk-img"
            />
            <div>
                <h2 className="text-lg font-semibold">Sahrukh Khan</h2>
                <p className="text-gray-600 text-white">Hello...</p>
            </div>
        </div>
    )
}
export default UserCard