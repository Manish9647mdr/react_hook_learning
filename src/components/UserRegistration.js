import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    gender: yup.string().required("Gender is required"),
    email: yup
      .string()
      .email("This must be a valid email.")
      .required("Email is required"),
    contactNumber: yup.string().required("Contact number is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .oneOf([yup.ref("password"), "Your password does not match"]),
  })
  .required();

const UserRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const gender_option = [
    { text: "Male", value: "male" },
    { text: "Female", value: "female" },
    { text: "Other", value: "other" },
  ];

  const onSubmit = (values) => console.log(values);

  return (
    <div className="container-sm justify-content-center align-items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center">User Registration Form</h3>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            className="form-control my-2"
            {...register("firstName", {
              required: true,
            })}
          />
          {errors.firstName && (
            <span className="text-danger">{errors.firstName.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            className="form-control my-2"
            {...register("lastName", {
              required: true,
            })}
          />
          {errors.lastName && (
            <span className="text-danger">{errors.lastName.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            className="form-control my-2"
            id="gender"
            {...register("gender", {
              required: true,
            })}
          >
            <option value="">Select Gender</option>
            {gender_option.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          {errors.gender && (
            <span className="text-danger">{errors.gender.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="form-control my-2"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <span className="text-danger">This feild is required</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="number"
            className="form-control my-2"
            {...register("contactNumber", {
              required: true,
            })}
          />
          {errors.contactNumber && (
            <span className="text-danger">{errors.contactNumber.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="form-control my-2"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            className="form-control my-2"
            {...register("confirmPassword", {
              required: true,
            })}
          />
          {errors.confirmPassword && (
            <span className="text-danger">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-primary mt-3">
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
