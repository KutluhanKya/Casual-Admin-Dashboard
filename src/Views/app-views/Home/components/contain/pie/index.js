import React, { useState, useRef } from "react";
import { MdRemoveCircle } from "@react-icons/all-files/md/MdRemoveCircle";
import { MdAddCircle } from "@react-icons/all-files/md/MdAddCircle";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { useEffect } from "react";
import axios from "axios";
import { animateScroll as scroll } from "react-scroll";

import "./index.scss";

const Pies = () => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const popUpRef = useRef(null);
  const handleClick = () => {
    setShowForm(true);

    scroll.scrollTo(popUpRef.current.offsetTop, {
      duration: 500,
      delay: 50,
      smooth: true,
    });
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    age: "",
    dob: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    setShowForm(false);
    event.preventDefault();
    console.log("Adding new user with data", formData);
    setPosts([
      {
        id: Math.max(...posts.map((x) => x.id)) + 1,
        ...formData,
      },
      ...posts,
    ]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      age: "",
      dob: "",
    });
  };

  useEffect(() => {
    axios
      .get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      .then((res) => {
        setPosts(res.data.slice(0, 10));
      });
  }, []);

  const handleRemoveAnimated = (id) => {
    const updatedPosts = posts.filter((x) => x.id !== id);
    const removedRow = document.getElementById(`row-${id}`);
    if (removedRow) {
      removedRow.classList.add("remove-animation");
      setTimeout(() => {
        removedRow.classList.remove("remove-animation");
        setPosts(updatedPosts);
      }, 500);
    }
  };

  return (
    <div className="bg">
      <table>
        <thead className="head">
          <tr className="title1">
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody className="body">
          {posts.map((x) => {
            return (
              <tr key={x.id} id={`row-${x.id}`} className="row">
                <td className="data">{x.id}</td>
                <td className="data">{x.firstName}</td>
                <td className="data">{x.lastName}</td>
                <td className="data">{x.email}</td>
                <td className="data">{x.contactNumber}</td>
                <td className="data">{x.age}</td>
                <td className="data">{x.dob}</td>

                <td className="data">
                  <button>
                    <MdRemoveCircle
                      onClick={() => handleRemoveAnimated(x.id)}
                      size={30}
                      className="button"
                    />
                  </button>

                  <button className="edit">
                    <FaEdit size={30} />
                  </button>
                  <button onClick={() => handleClick()} className="add">
                    <MdAddCircle size={30} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="bg2">
        {showForm && (
          <form
            className={` ${!showForm ? " " : "form "}   `}
            ref={popUpRef}
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl text-white">ADD EMPLOYEE</h1>
            <div className="forms">
              <input
                className="m-5 rounded-full p-2 text-xl"
                type="number"
                name="id"
                placeholder="ID"
                value={formData.id}
                onChange={handleInputChange}
              />

              <input
                className="m-5 rounded-full p-2 text-xl"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <input
                className="m-5 rounded-full p-2 text-xl"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="forms">
              {" "}
              <input
                className="m-5 rounded-full p-2 text-xl"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                className="m-5 rounded-full p-2 text-xl"
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
              <input
                className="m-5 rounded-full p-2 text-xl"
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
              />
              <input
                className="m-5 rounded-full p-2 text-xl"
                type="date"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="text-green-500 hover:text-green-900 transition-colors delay-0  "
              >
                <MdAddCircle size={50} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Pies;
