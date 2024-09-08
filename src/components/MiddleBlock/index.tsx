import React, { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import {
  MiddleBlockSection,
  Content,
  ContentWrapper,
  StyledInput,
  ErrorMessage,
} from "./styles";

import { message } from "antd";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrors((prev) => ({ ...prev, name: "" }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const validateInputs = () => {
    let isValid = true;
    let newErrors = { name: "", email: "", phone: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Valid email is required";
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phone.trim() || !phoneRegex.test(phone)) {
      newErrors.phone = "Valid 10-digit phone number is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
      setName("");
      setEmail("");
      setPhone("");
    } else {
      message.error("Please fill out all fields correctly.");
    }
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>

              <>
                <StyledInput
                  type="text"
                  placeholder={t("Enter your name")}
                  value={name}
                  onChange={handleNameChange}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

                <StyledInput
                  type="email"
                  placeholder={t("Enter your email")}
                  value={email}
                  onChange={handleEmailChange}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

                <StyledInput
                  type="tel"
                  placeholder={t("Enter your phone number")}
                  value={phone}
                  onChange={handlePhoneChange}
                  className={errors.phone ? "input-error" : ""}
                />
                {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

                <Button name="submit" onClick={handleSubmit}>
                  {t(button)}
                </Button>
              </>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
