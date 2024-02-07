

const NavBar = () => {
    return (
      <div className="flex items-center justify-between  bg-gray-800 p-4" >
        <h1 className="text-lg font-bold">Chat App</h1>
        <button 
            className=" bg-slate-950 py-1 px-3 font-medium rounded-sm hover:bg-slate-900"
        >
            Logout
        </button>
      </div>
    );
  };
  
  export default NavBar;