
import React from 'react';

const Message = () => {
  
  const owner= false

  return (
    <div className={`flex items-center m-2 ${owner ? 'justify-end' : ''}`}>
        { owner==false && 
          <img
            className="w-8 h-8 rounded-full object-cover mr-2"
            src="https://imgs.search.brave.com/dpOj04NwkTglmPvZx-ND_LdfZ23ljnKXVsdtdb2lBoc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtZ2ly/bC1maWVsZF8xNDQ2/MjctMTAyNTYuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
            alt="Friend"
          />
        }
        <div 
            className={`p-3 rounded-lg ${owner ? 'bg-white text-black' : ' bg-gray-700 text-white' }`}
            style={{ maxWidth: '70%' }}
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus totam quidem explicabo perferendis doloribus asperiores, molestiae nam porro laboriosam. Voluptate repellendus et consectetur repudiandae eaque voluptatibus vitae cum sunt illo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab tempora fugiat sapiente alias praesentium perferendis modi repellat eaque, harum saepe cumque asperiores blanditiis! Porro minima sint ab accusamus neque dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto iste iure, est necessitatibus eveniet, illum cum consequatur quod distinctio laudantium optio magni blanditiis vitae dolorem laboriosam possimus architecto! Pariatur, laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat exercitationem porro eos assumenda quas vel odio impedit aspernatur fugit accusamus sequi, laborum reiciendis, commodi voluptatum ipsam asperiores earum omnis nostrum!
          <div className={`text-xs ${owner ? 'text-right' : 'text-left'}`}>15:00</div>
        </div>
        { owner && 
          <img
          className="w-8 h-8 rounded-full object-cover ml-2"
          src="https://imgs.search.brave.com/dpOj04NwkTglmPvZx-ND_LdfZ23ljnKXVsdtdb2lBoc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtZ2ly/bC1maWVsZF8xNDQ2/MjctMTAyNTYuanBn/P3NpemU9NjI2JmV4/dD1qcGc"
          alt="Friend"
          />
        }
    </div>
  );
};

export default Message;