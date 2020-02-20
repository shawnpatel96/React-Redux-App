import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from "../actions/actions"


const Fact = props =>{
  console.log('from List Fact Function', props)
  return(
    <div>
      <h1>THE ULTIMATE(kidding)SPECIES(dogs are better)</h1>
      <button onClick={props.fetchData}>Click here to become a Dog person</button>
    
      {props.isFetchingData && (
        <h1>FETCHING CAT FACTS</h1>
      )}
      {props.fact && !props.isFetchingData && <h2>{props.fact.text}</h2>}
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