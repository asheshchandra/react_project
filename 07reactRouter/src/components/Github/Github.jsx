import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/asheshchandra")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="w-full max-w-screen-xl mx-auto text-center bg-gray-500 text-white p-4 text-3xl flex-grow">
      Github followers: {data.followers}
      <img className="text-center" src={data.avatar_url} alt="Git Picture" width={250} />
    </div>
  );
}

export default Github

export const githubInfoLoader=async() => {
  const response = await fetch('https://api.github.com/users/asheshchandra')
  return response.json()
}
