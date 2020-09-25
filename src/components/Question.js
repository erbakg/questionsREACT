import React, { useState, useEffect} from 'react';
import {connect} from 'react-redux'

function Question(props) {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    const [oneQuestion, setOneQuestion]= useState([])
    const [length, setLength] = useState([])

    let arr = []
    const qstn=() => {
       data &&
        data.map(el=>{
            arr.push(el)
        })
        setOneQuestion(arr)
    }
    useEffect(()=>{
        go()
        qstn()
    }, [])

    const go = async()=>{
        setData(props.questions[0])
        console.log(data);
    }
    return (
        <div>
        {count< oneQuestion.length && 
            <p id={oneQuestion[count].id}>{oneQuestion[count].question}</p> ||
            <p>СПАСИБО ЗА ОТВЕТЫ</p>
        }
        <button onClick={()=> setCount(count+1)}>Da</button>
        <button onClick={()=> setCount(count+1)}>Net</button>
        <button onClick={()=> setCount(0)}>Ok</button>
        </div>
    )
}
function mapStateToProps({questions}){
    return{questions}
}
export default connect(mapStateToProps)(Question)