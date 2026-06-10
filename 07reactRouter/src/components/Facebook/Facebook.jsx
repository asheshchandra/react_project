import React, { useEffect, useState } from 'react'

function Facebook() {
    const [data, setData] = useState({});

    useEffect(() => {
        // ফেসবুকের রিয়েল API সরাসরি কাজ করে না, তাই আমরা ডামি ডাটা সেট করছি
        const dummyData = {
            friends: "4,500",
            avatar_url: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" // একটি ডামি প্রোফাইল পিকচার
        };
        
        setData(dummyData);
    }, [])

  return (
    
    <div className="w-full max-w-screen-xl mx-auto bg-blue-600 text-white p-4 text-3xl flex items-center justify-between rounded my-4">
        
        <img src={data.avatar_url} alt="Facebook Picture" width={120} className="rounded-full" />
        <div>Facebook friends: {data.friends}</div>
    </div>
  )
}

export default Facebook;