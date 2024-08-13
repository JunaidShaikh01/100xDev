import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { Fetchstate } from "./Recoil/Recoil";

export default function ListPage() {
  // const [fetch] = useResetRecoilState(Fetchstate);
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/users");
      setUserDetails(response.data);
    };
    fetch();
  }, []);

  const updateHandler = (id) => {
    navigate(`/Form/${id}`);
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/deleteUser/user/${id}`);
    } catch (error) {}
  };
  return (
    <div className="bg-orange-300 w-screen h-screen ">
      <div className="header w-screen h-[20vh] flex items-center justify-end px-4">
        <button
          onClick={() => navigate("/Form")}
          className="bg-white rounded-lg shadow-xl px-4 py-2"
        >
          Add New
        </button>
      </div>
      <div className="dataSection h-[80vh] w-screen">
        {userDetails &&
          userDetails.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center p-4 border-b-2 border-gray-300"
            >
              <li>{user.department}</li>
              <li>{user.name}</li>
              <li>{user.dateOfJoining}</li>
              <li>{user.Hobbies}</li>
              <li>{user.adress}</li>
              <li>{user.genders}</li>
              <div>
                <button onClick={() => updateHandler(user.id)}>Update</button>
                <button onClick={() => deleteHandler(user.id)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
