import React from "react";
import styled from "styled-components";
import {  useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductDetails from "./ProductDetails";
import colors from "../../utils/colors";

const CardContainer = styled.div`
  width: 100%;
  height:100%;

  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.3); /* Increased shadow */
  transition: transform 0.2s;
  cursor: pointer;
  background-color: ${colors.background};
  border-radius: 32px;
  
  border-bottom:#ff9000;
  border:2px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  
  &:hover {
    transform: scale(1.03);
  }

  @media (max-width<= 768px) {
    height:50%; /* On screens with a width of 768px or smaller, set each card to 50% width for smaller screens */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 32px;
`;

const Title = styled.h3`
  // font-size: 1.5rem;
  font-weight:600;
  text-align: center;
  border-radius:24px;
  color: ${colors.heading}; /* Blue title color */
`;

const Description = styled.p`
  // margin: 12px 0;
  // text-align: center;
  // height: 120px;
  // color: #666;
`;

const Button = styled.button`
  display: block;
  margin: 8px; /* Add margins to all sides with 8 pixels */
  margin-bottom:0px;
  transition: background-color 0.8s, transform 0.5s, color 0.5s;
  background-color: #ff9000; /* Inherit the background color from the parent */
  color: #ffffff; /* Text color */
  padding: 8px 0; /* Adjust    to fill available space */
  border: 2px solid #ff9000; /* Add a thin border of light grey color */
  border-radius: 7px;
  width: 100%; /* Make the button almost fill the available space */
  cursor: pointer;
  &:hover {
    //transform: scale(1.03);
    background-color: #ffffff; /* Lighter blue on hover */
    color: #ff9000;
    border: 2px solid #ff9000;
  }
`



const ProductCard = ({ product,setSelectedPage }) => {
  const params = useParams()
  const { id } = params;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`${product.name}`);
    setSelectedPage(<ProductDetails name={product.name} size={product.size} image={product.image}/>);

  };

  // useEffect(() => {
  //   if (id != null) {
  //     console.log(id)
  //     setSelectedPage(<ProductDetails name={product.name} size={product.size} image={product.image}/>);
  //   }
  // }, [id]);
  
  return (
    <CardContainer>
      <CardImage src={product.image} alt={product.name} />
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Button onClick={handleShowDetails}>Show Details</Button>

    </CardContainer>
  );
};

export default ProductCard;
