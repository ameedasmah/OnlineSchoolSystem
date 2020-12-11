// import React,{useState} from 'react'
// const Quiz = ()=>{

      
//       var dataSet = [
//         {
//           question: "What is 8 x 1?",
//           answers: [
//             "1",
//             "8",
//             "16",
//             "9"
//           ],
//           correct: 1
//         },
//         {
//           question: "Who is Steve Jobs?",
//               answers: [
//                 "CEO of Microsoft",
//                 "Barber in NY",
//                 "Movie Star",
//                 "CEO of Apple"
//               ],
//               correct: 3
//         },
//          {
//               question: "Metallica is a ____ band",
//               answers: [
//                 "Blues",
//                 "Hard-Rock",
//                 "Jazz",
//                 "Metal"
//               ],
//               correct: 3
//             },
//             {
//               question: "IS is a ____",
//               answers: [
//                 "Word",
//                 "Band",
//                 "Terror Group",
//                 "Brand"
//               ],
//               correct: 2
//             },
//             {
//               question: "Who was Einstein",
//               answers: [
//                 "A Scientist",
//                 "A Dentist",
//                 "A Serial Killer",
//                 "None of the above"
//               ],
//               correct: 0
//             },
//             {
//               question: "JavaScript can be used in ____ development",
//               answers: [
//                 "Back-End",
//                 "Front-End",
//                 "ReactJS",
//                 "All of the Above"
//               ],
//               correct: 3
//             },
//             {
//               question: "Hitler was a",
//               answers: [
//                 "Mass Murderer",
//                 "Dictator",
//                 "Jew",
//                 "None of the above",
//                 "All of the above"
//               ],
//               correct: 4
//             },
//             {
//               question: "Korn is a",
//               answers: [
//                 "Nu-Metal band",
//                 "Religion",
//                 "Singer"
//               ],
//               correct: 0
//             },
//             {
//               question: "Windows computers are",
//               answers: [
//                 "Horrible",
//                 "Great",
//                 "Cheap",
//                 "Invented by Bill Gates"
//               ],
//               correct: 3
//             },
//             {
//               question: "The BigBan stands in",
//               answers: [
//                 "Egypt",
//                 "London",
//                 "Amsterdam",
//                 "NewYork"
//               ],
//               correct: 1
//             },
//       ];
      
//       const [current,setCurrent] = useState(0);
//       // eslint-disable-next-line no-unused-vars
//       const [dataSet1,setDataSet] = useState(dataSet);
//       const [correct,setCorrect] = useState(0);
//       const [incorrect,setIncorrect] = useState(0); 
   
         
//      // end constructor
    
//     const handleClick = (choice)=> {
//       // console.log('cc',choice)
//       // console.log('cb',dataSet)
//       // console.log('current',current)


//       if (choice === dataSet[current].correct) {
//         setCorrect(correct + 1)
//         console.log('tosecorrect',correct)
//       } else {
//         setIncorrect(incorrect + 1)
//       }
      
//       if (current === 9) {
//         // eslint-disable-next-line no-const-assign
//         setCurrent(current= 0)
//         // eslint-disable-next-line no-const-assign
//         setIncorrect(incorrect= 0)
//         // eslint-disable-next-line no-const-assign
//         setCorrect(correct=0)
//       } else {
//         setCurrent(current + 1) 
//       }
//     }
  
    
//       return (

//         <div style={{marginLeft:"14rem",marginTop:"3rem"}}>
//           <ScoreArea correct={correct} incorrect={incorrect} />
//           <QuizArea handleClick={handleClick} dataSet={dataSet1[current]} />
//         </div>
//       ) 
//     }

//   const Question=(props)=> {
//     var style = {
//       color: "red",
//     }
//     return (
//       <h1 style={style}>{props.dataSet.question}</h1>
//     )
//   }
  
//   const Answer=(props)=> {
//     var style = {
//       width: "100%",
//       height: 50,
//       color: "blue"
//     }
    
//     // console.log('answer',props)
//     return(
//       <div>
//         <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
//       </div>
//     )
//   }
  
//   const AnswerList=(props) =>{
//     var answers = []
//     for (let i = 0; i < props.dataSet.answers.length; i++) {
//       answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
//     }
//     // console.log('answerLIST',answers)
//     return(
//       <div>
//         {answers}
//       </div>
//     )
//   }
  
//   const QuizArea=(props) =>{
//     var style = {
//       width: "25%",
//       display: "block",
//       textAlign: "center",
//       boxSizing: "border-box",
//       float: "left",
//       padding: "0 2em"
//     }
//     return(
//       <div style={style}>
//         <Question dataSet={props.dataSet} />
//         <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
//       </div>
//     )
//   }
  
//   const TotalCorrect=(props) =>{
//       var style = {
//       display: "inline-block",
//       padding: "1em",
//       background: "#eee",
//       margin: "0 1em 0 0"
//     }
//     return(
//       <h2 style={style}>Correct: {props.correct}</h2>
//     )
//   }
  
//   function TotalIncorrect(props) {
//     var style = {
//       display: "inline-block",    
//       padding: "1em",
//       background: "#eee",
//       margin: "0 0 0 1em"
//     }
//     return(
//       <h2 style={style}>Incorrect: {props.incorrect}</h2>
//     )
//   }
  
//   function ScoreArea(props) {
//     var style = {
//       width: "100%",
//       display: "block",
//       textAlign: "left",
//       float: "left",
//       padding: "2em"
//     }
//     return(
//       <div style={style} >
//         <TotalCorrect correct={props.correct} />
//         <TotalIncorrect incorrect={props.incorrect} />
//       </div>
//     )
//   }


//   export default Quiz