import React from "react";
import styled from "styled-components";
import Container from "../Container";

const Contact = () => {
  return (
    <StyledSection className="contact" id="contact">
      <Container>
        <h1>Contact</h1>
        <form name="contact" method="post" action="/contact">
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="John Doe" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="eric@example.com" />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="8"
            cols="50"
            placeholder="Send message..."
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  .container {
    padding: 100px 0;
    h1 {
      color: whitesmoke;
      padding: 0 0 30px 0;
    }
    form {
      display: flex;
      flex-direction: column;
      label {
        color: whitesmoke;
      }
      input {
        background: #25262a;
        border: none;
        height: 34px;
        padding: 0 0 0 4px;
        margin: 8px 0;
        color: whitesmoke;
        &:focus {
          outline: 1px solid rgb(102, 102, 255);
        }
        &:last-child {
          &:hover {
            cursor: pointer;
          }
        }
      }
      textarea {
        margin: 8px 0;
        background: #25262a;
        padding: 2px 0 4px 4px;
        border: none;
        color: whitesmoke;
        &:focus {
          outline: 1px solid rgb(102, 102, 255);
        }
      }
    }
  }
`;

export default Contact;
