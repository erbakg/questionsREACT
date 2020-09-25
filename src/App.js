import React, { useEffect, useState } from 'react';
import Question from './components/Question';
import {connect} from 'react-redux'
import {fetchByQuestion} from './actions'
import {bindActionCreators} from 'redux'

function App(props) {
  useEffect(() => {
    go()
  }, [])

  const go = async () => {
    await props.fetchByQuestion()
    // let resp = await fetch('https://cors-anywhere.herokuapp.com/http://bekmyrza1-001-site1.itempurl.com/api/ServiceQuize')
    // let unswer = await resp.json()
    // console.log(unswer);
    // setData(unswer)
  } //аписали на редаксе url и index в reducers

  return (
    <div>
      <Question data={props.questions} />
    </div>
  );
}

function mapDispatchToProps(dispatch){
return bindActionCreators({fetchByQuestion}, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
