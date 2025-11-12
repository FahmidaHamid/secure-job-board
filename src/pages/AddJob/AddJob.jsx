import React, { useEffect, useState } from "react";
import { useAuth } from "../../provider/AuthProvider";
import hero from "../../assets/libre-clip-art-sMufYKZ1JTw-unsplash.png";
import Swal from "sweetalert2";
const AddJob = () => {
  const { currentUser } = useAuth();

  // The Regex pattern for non-negative salary (allows optional '$' and decimals)
  const nonNegativeSalaryRegex = /^\s*(\$?\s*[0-9]+(\.[0-9]+)?|\.[0-9]+)\s*$/;
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    postedBy: currentUser.displayName,
    expectedSalary: "",
    lastDateToApply: "",
    coverImage: "",
    "remote/not": "",
    summary: "",
    category: "",
    emailOfPostedBy: currentUser.email,
  });

  useEffect(() => {
    try {
      fetch("http://localhost:3000/all-categories")
        .then((res) => res.json())
        .then((data) => {
          setCategories(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // A single handler for all inputs (text, number, date, radio)
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // For a single state object, we just update the relevant field dynamically
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? value : value, // Simplified as 'value' works for all these types
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default browser page reload

    // The data is all collected in the 'formData' state object
    if (!nonNegativeSalaryRegex.test(formData.expectedSalary)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `Salary cannot be negative`,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const lastApplyDate = new Date(formData.lastDateToApply);
    const today = new Date();
    lastApplyDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const isBeforeToday = lastApplyDate < today;

    if (isBeforeToday) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `The last date to apply must be a future date`,
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    console.log("Submitting data to database:", formData);
    try {
      const response = await fetch("http://localhost:3000/all-jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // throw new Error("Network Response Was Not Okay");
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Something went wrong: The network response was not okay.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      const result = await response.json();
      console.log("Success:", result);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Excellent! A new job has been posted",
        showConfirmButton: false,
        timer: 1500,
      });

      setFormData({
        title: "",
        expectedSalary: "",
        lastDateToApply: "",
        "remote/not": "",
        coverImage: "",
        summary: "",
        category: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };
  // Common Tailwind classes for standard inputs/textareas
  const inputClasses =
    "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";
  // Common Tailwind classes for labels
  const labelClasses = "block text-sm font-medium text-gray-700";

  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
        opacity: 0.7,
        display: "flex",
        flexDirection: "column",
      }}
      className="hero bg-base-100 h-[90vh] w-screen p-10"
    >
      <div className="text-center lg:text-left p-5">
        <h1 className="text-6xl font-bold title-text">Post A Job</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl ">
        <div className="card-body flex flex-col justify-self-center">
          <form onSubmit={handleSubmit}>
            <div className="text-xl flex flex-1 flex-row m-3 p-3 gap-x-1">
              <label htmlFor="title" className={labelClasses}>
                Job Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={inputClasses}
                required
              />
            </div>
            <div className="text-xl flex flex-1 flex-row m-3 p-3 gap-x-1">
              <label htmlFor="summary" className={labelClasses}>
                Job Description:
              </label>
              <textarea
                id="summary"
                name="summary" // Important: Name matches the state key
                value={formData.summary}
                onChange={handleInputChange}
                rows={5} // Optional: Sets the visible height
                placeholder="Provide a brief description of the role..."
                className={inputClasses}
                required
              />
            </div>
            <div className="text-xl flex flex-1 flex-row m-3 p-3 gap-x-1">
              <label htmlFor="category" className={labelClasses}>
                Pick a category:
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={inputClasses}
                required
              >
                <option value="">-- Select an Option --</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat.super_category}>
                    {cat.super_category}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-xl flex flex-1 flex-row m-3 p-3 gap-x-1">
              <label htmlFor="postedBy" className={labelClasses}>
                Posted By
              </label>
              <input
                type="text"
                id="postedBy"
                name="postedBy"
                value={formData.postedBy}
                onChange={handleInputChange}
                className={inputClasses}
                defaultValue={currentUser.displayName}
                required
              />
            </div>
            <div className="text-xl flex flex-1 flex-row m-3 p-3 gap-x-1">
              <label htmlFor="expectedSalary" className={labelClasses}>
                Expected Annual Salary ($):
              </label>
              <input
                type="number"
                id="expectedalary"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleInputChange}
                required
                className={inputClasses}
              />
            </div>

            <div className="text-xl flex flex-1 flex-row m-3 p-3 gap-x-1">
              <label htmlFor="lastDateToApply" className={labelClasses}>
                Last Date to Apply:
              </label>
              <input
                type="date"
                id="lastDateToApply"
                name="lastDateToApply"
                value={formData.lastDateToApply}
                onChange={handleInputChange}
                required
                className={inputClasses}
              />
            </div>

            <fieldset className="text-xl flex flex-1 flex-row m-3 p-3 gap-x-1">
              <legend htmlFor="remote/not" className={labelClasses}>
                Job Type:
              </legend>
              <label>
                <input
                  type="radio"
                  name="remote/not"
                  value="remote"
                  checked={formData["remote/not"] === "remote"}
                  onChange={handleInputChange}
                  required
                />
                Remote
              </label>
              <label>
                <input
                  type="radio"
                  name="remote/not"
                  value="not-remote"
                  checked={formData["remote/not"] === "not-remote"}
                  onChange={handleInputChange}
                />
                Not Remote
              </label>
            </fieldset>

            <button type="submit">Submit the Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
