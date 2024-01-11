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
  terms: false,
};

const initialErrors = {
  nickname: false,
  email: false,
  terms: false,
};

const errorMessages = {
  nickname: "Name alanı en az 4 karakter olmalı.",
  email: "Geçerli bir email giriniz.",
  terms: "Şartları kabul ederek kayıt işlemini tamamlayabilirsiniz.",
};

export default function SignUpForm({ changeUser }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);

  const { push } = useHistory();

  useEffect(() => {
    if (
      validateName(formData.nickname) &&
      validateEmail(formData.email) &&
      formData.terms
    ) {
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

    if (name === "terms") {
      if (value) {
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
          data-test-id="name-input"
          value={formData.nickname}
          onChange={handleChange}
        />

        {errors.nickname && (
          <ErrorText data-test-id="error">{errorMessages.nickname}</ErrorText>
        )}
      </div>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          id="email"
          name="email"
          data-test-id="email-input"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <ErrorText data-test-id="error">{errorMessages.email}</ErrorText>
        )}
      </div>
      <div>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          data-test-id="terms-checkbox"
          checked={formData.terms}
          onChange={handleChange}
        />
        <label htmlFor="terms">
          {" "}
          WitFlix kullanım şartlarını ve gizlilik kurallarını kabul ediyorum.
        </label>

        {errors.terms && (
          <ErrorText data-test-id="error">{errorMessages.terms}</ErrorText>
        )}
      </div>
      <button disabled={!isValid} data-test-id="signup-button" type="submit">
        Sign Up
      </button>
    </form>
  );
}
