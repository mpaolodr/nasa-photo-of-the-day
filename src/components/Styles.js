import styled from "styled-components";

//STYLES FOR CARD CONTAINER
export const CardStyle = styled.div`
  width: 500px;
  height: 550px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  color: white;
  position: relative;
`;

//STYLES FOR THE DIV THAT'S GOING TO BE HIDDEN
export const Hide = styled.div`
  position: absolute;
  top: 600px;
  width: 100%;
  transition: position 2.4s ease-in;
`;

//STYLES FOR IMAGECONTAINER COMPONENT
export const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
`;

//STYLES FOR DESCRIPTION COMPONENT
export const DescContainer = styled.div`
  margin: 0 5%;
`;

export const Text = styled.h2`
  ${props => (props.type === "title" ? `font-size: 2rem` : `font-size: 1.5rem`)}
`;

export const Desc = styled.p`
  font-size: 0.8rem;
`;

//STYLES FOR DATE CHANGE COMPONENT
export const DateChange = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InputField = styled.input`
  font-size: 1.4rem;
  border-radius: 10px;
  padding: 5px;
  grid-column: 1 / 2;
`;

export const Button = styled.button`
  border-radius: 10px;
  margin-left: 10px;
  height: 35px;
  font-size: 1.3rem;
  grid-column: 2 / 3;
`;
