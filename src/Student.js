import React from 'react';



class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    }
  }

  render() {
    const grades = this.props.student.grades;
    const numbers = grades.map(Number);

    let sum;  let average = 0;
    if(numbers.length > 0){
      sum = numbers.reduce(function(a,b) {
        return a + b;
      })
      average = sum/numbers.length;
    }

    return (
      <div className='mainContainer'>
        <div className='studentContainer'>
            <img src={`${this.props.student.pic}`} alt=""/>
            <div className='studentInfo'>
                <h2>{this.props.student.firstName} {this.props.student.lastName}</h2>
                <p>Email: {this.props.student.email}</p>
                <p>Company: {this.props.student.company}</p>
                <p>Skill: {this.props.student.skill}</p>
                <p>Average: {average}% </p>
            </div>
        </div>
      </div>
    )
  }
}

export default Student