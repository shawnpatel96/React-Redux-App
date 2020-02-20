import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from "../actions/actions"
import styled from "styled-components"


const Button = styled.button`
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;`


const Card =styled.div`
height:25%;
width:25%;
margin-left:37.5%;
-webkit-box-shadow: 5px 5px 15px 5px #000000; 
box-shadow: 5px 5px 15px 5px #000000;
margin-top:3%;


`
const Text = styled.h1`
font-family: "Courier New", Courier, monospace;
font-size: 25px;
letter-spacing: 2px;
word-spacing: 2px;
color: #000000;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
color:white;
`





const Fact = props =>{
  console.log('from List Fact Function', props)
  return(
    <div>
    
      
      <Button onClick={props.fetchData}>Click here to become a Dog person</Button>
      
    
      {props.isFetchingData && (
        <h1></h1>  // you can add a loading image or what ever here but API loads so fast it looks trippy
      )}
  
        <Card>
        {props.fact && !props.isFetchingData && <Text>{props.fact.text}</Text>}
        </Card>
      
    </div>
  )
};

const mapStateToProps = state=>{
  return {
    isFetchingData: state.isFetchingData,
    fact:state.fact,
    error:state.error
  }
}

export default connect( mapStateToProps, {fetchData})(Fact)














