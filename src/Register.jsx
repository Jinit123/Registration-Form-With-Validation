import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    password: "",
    university: "",
    education: "B.Tech",
    gender: "",
    technology: [],
    phone: "",
  });

  const [showText, setShowText] = useState(false);
  const [count, setCount] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (count == 0) {
      navigate('/login');
    }
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount((prev) => prev - 1)
      }, 1000);
      return () => clearTimeout(timer);
    }
  })

  const changeForm = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormData((prev) => ({
          ...prev,
          technology: [...prev.technology, value],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          technology: prev.technology.filter((tech) => tech !== value),
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      console.log(`${name} : ${value}`);
    }

    setShowText(false);
  };

  const handleSubmit = (e) => {

    e.preventDefault();


    const existingUser = localStorage.getItem(formData.phone);
    setShowText(true);


    if (existingUser) {
      // alert("User already registred");
      setError("User Already Exists! Please try again with different phone number.");
      setShowText(false);
    } else {
      localStorage.setItem(formData.phone, JSON.stringify(formData));
      alert("Registration successful!");
      setCount(10);
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(`FirstName: ${formData.fname}`);
    console.log(`LastName: ${formData.lname}`);
    console.log(`University: ${formData.university}`);
    console.log(`Education: ${formData.education}`);
    console.log(`Gender: ${formData.gender}`);
    console.log(`Technology: ${formData.technology}`);
    console.log(`Phone: ${formData.phone}`);
    setShowText(true);
  };

  const { fname, lname, password, university, education, gender, technology, phone } = formData;

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="drop-shadow-lg bg-white pb-15 w-100 rounded-lg p-5">
        <h1 className="text-center text-3xl font-medium mb-10 mt-5 text-gray-500">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>

          <div className="grid md:grid-cols-2 md:gap-6">

            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="fname" value={fname} onChange={changeForm} required autoComplete="off"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
              <label className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="lname" value={lname} onChange={changeForm} required autoComplete="off"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
              <label className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
          </div>


          <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="password" value={password} onChange={changeForm} required autoComplete="off"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
            <label className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="university" value={university} onChange={changeForm} required autoComplete="off"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
            <label className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">University Name</label>
          </div>

          <div className="relative z-0 w-full mb-5 group text-gray-500">
            <label className="text-sm font-medium block mb-1">Education:</label>
            <select name="education" value={education} onChange={changeForm} className="text-sm w-full">
              <option value="B.Tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="Diploma">Diploma</option>
            </select>
          </div>

          <div className="relative z-0 w-full mb-5 group text-gray-500">
            <label className="text-sm font-medium block mb-1">Gender:</label>
            <div className="flex items-center space-x-4">
              <label><input type="radio" name="gender" value="Male" onChange={changeForm} /> Male</label>
              <label><input type="radio" name="gender" value="Female" onChange={changeForm} /> Female</label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group text-gray-500">
            <label className="text-sm font-medium block mb-1">Technology Used?</label>
            <div className="grid grid-cols-3 gap-1 mt-2">
              {["HTML", "React JS", "Tailwind CSS", "Java Script", "JQuery", "Bootstrap", "Docker", "Python", "Go", "AI/ML", "Java", "SpringBoot"].map((tech) => (
                <label key={tech}>
                  <input type="checkbox" name="checkbox" value={tech} onChange={changeForm} /> {tech}
                </label>
              ))}
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group text-gray-500">
            <input type="tel" name="phone" value={phone} onChange={changeForm} pattern="[0-9]{10}" maxLength="10" required autoComplete="off"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
            <label className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5" onClick={handleSubmit}>Submit</button>
        </form>
        {error && (
          <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
        )}

      </div>
      {showText && (
        <div className="bg-white drop-shadow-lg rounded-lg p-5 m-5">
          <h1 className="text-center text-3xl font-medium mb-10 mt-5 text-gray-500">Data Received</h1>
          <table className="w-full text-left text-gray-800">
            <tbody>
              <tr><td className="font-medium px-2 py-1">FirstName:</td><td className="px-2 py-1">{fname}</td></tr>
              <tr><td className="font-medium px-2 py-1">LastName:</td><td className="px-2 py-1">{lname}</td></tr>
              <tr><td className="font-medium px-2 py-1">University:</td><td className="px-2 py-1">{university}</td></tr>
              <tr><td className="font-medium px-2 py-1">Education:</td><td className="px-2 py-1">{education}</td></tr>
              <tr><td className="font-medium px-2 py-1">Gender:</td><td className="px-2 py-1">{gender}</td></tr>
              <tr>
                <td className="font-medium px-2 py-1">Technology Used:</td>
                <td className="px-2 py-1">{technology.join(", ")}</td>
              </tr>
              <tr>
                <td className="font-medium px-2 py-1">Phone:</td>
                <td className="px-2 py-1">{phone}</td>
              </tr>
              <tr>
                <td className="mt-2 text-sm text-gray-600 text-center">Redirecting <span className="font-medium">{count}</span> seconds.....</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Register;