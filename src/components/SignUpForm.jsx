import axios from "axios";
import { useEffect, useState } from "react";
import { validateEmail, validateName } from "../utils/validation";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ErrorText = styled.p`
  color: red;
`;

const initialForm = {
  nickname: "",
  email: "",
};
const initialErrors = {
  nickname: false,
  email: false,
};
const errorMessages = {
  nickname: "Name alanı en az 4 karakter olmalı.",
  email: "Geçerli bir email giriniz.",
};

export default function SignUpForm({ changeUser }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);

  const { push } = useHistory();

  useEffect(() => {
    if (validateName(formData.nickname)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        changeUser(response.data);
        setFormData(initialForm);
        push("/welcome");
      })
      .catch((err) => console.warn(err));
  };

  const handleChange = (event) => {
    let { value, name, checked, type } = event.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });

    if (name === "nickname") {
      if (validateName(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nickname">Name: </label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
        />
        <ErrorText>{errors.nickname && errorMessages.nickname} </ErrorText>
      </div>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <ErrorText>{errors.email && errorMessages.email} </ErrorText>
      </div>
      <button disabled={!isValid} type="submit">
        Sign Up
      </button>
    </form>
  );
}
