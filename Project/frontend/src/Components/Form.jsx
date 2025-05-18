import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { Fetchstate } from "./Recoil/Recoil";
import axios from "axios";

export default function Form() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [gender, setGender] = useState("Male");
  const [address, setAddress] = useState("");
  // const [fetch, setFetch] = useResetRecoilState(Fetchstate);

  const { id } = useParams();
  const userId = id;

  const onChangeValue = (event) => {
    setGender(event.target.value);
    console.log(event.target.value);
  };

  const handleHobbyChange = (event) => {
    const selectedHobby = event.target.value;
    setHobbies((prevHobbies) => {
      if (prevHobbies.includes(selectedHobby)) {
        return prevHobbies.filter((hobby) => hobby !== selectedHobby);
      } else {
        return [...prevHobbies, selectedHobby];
      }
    });
  };
  const concatHobbies = hobbies.join(" , ");
  console.log("contacting", concatHobbies);

  const redirect = useNavigate();

  const saveClickHandler = async () => {
    try {
      await axios.post("http://localhost:3000/register", {
        name: name,
        department: department,
        dateOfJoining: dateOfJoining, 
        Hobbies: concatHobbies, 
        genders: gender,
        adress: address,
      });
    } catch (error) {
      console.error("Error saving data: ", error);
    }
    redirect("/ListPage");
    // setFetch(!fetch);
  };

  const updateClickHandler = async () => {
    try {
      await axios.put(`http://localhost:3000/userInfo/user/${userId}`, {
        name: name,
        department: department,
        dateOfJoining: dateOfJoining,
        Hobbies: concatHobbies,
        genders: gender,
        adress: address,
      });
      redirect("/ListPage");
    } catch (error) {
      console.error("Error updating data: ", error);
    }
  };
  return (
    <div className="bg-orange-300 w-screen h-screen flex items-center  justify-evenly">
      <div>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Department:</label>
          <select
            name="Select Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="epartmnet 1">Departmnet 1</option>
            <option value="Department 2">Department 2</option>
            <option value="Departmnet 3">Departmnet 3</option>
            <option value="Departmnet 4">Departmnet 4</option>
          </select>
        </div>
        <div>
          <label>Date of joining: </label>
          <input
            type="date"
            value={dateOfJoining}
            name="dateOfJoining"
            onChange={(e) => setDateOfJoining(e.target.value)}
          />
        </div>
        <div className="flex">
          <h1>Hobbies: </h1>
          <div className="flex flex-col">
            <p>Selected Hobbies</p>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                required
                value="Reading"
                onChange={handleHobbyChange}
                checked={hobbies.includes("Reading")}
              />
              Reading:
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Playing"
                onChange={handleHobbyChange}
                checked={hobbies.includes("Playing")}
              />
              Playing :
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Swiming"
                onChange={handleHobbyChange}
                checked={hobbies.includes("Swiming")}
              />
              Swiming:
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="Singing"
                onChange={handleHobbyChange}
                checked={hobbies.includes("Singing")}
              />
              Singing:
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <lable>Address</lable>
          <textarea
            name="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>
        <div onChange={onChangeValue}>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={gender === "Male"}
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={gender === "Female"}
          />{" "}
          Female
        </div>
        <div className="buttons flex gap-2">
          <button
            className="bg-white py-1 px-4 rounded-lg shadow-lg"
            onClick={updateClickHandler}
          >
            Update{" "}
          </button>
          <button
            className="bg-white py-1 px-4 rounded-lg shadow-lg"
            onClick={saveClickHandler}
          >
            save{" "}
          </button>
          <button
            className="bg-white py-1 px-4 rounded-lg shadow-lg"
            onClick={() => redirect("/ListPage")}
          >
            Back{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
