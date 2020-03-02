/**
 * Counter Time Set
 */
import React, { Component } from "react";

export default class CountDownTimer extends Component {
   constructor(props) {
      super(props);
      this.state = { time: {}, seconds: props.time ? props.time : props.time };
      this.timer = 0;
      this.counter = this.counter.bind(this);
   }
   
   secondsToTime(secs) {
      let hours = Math.floor(secs / (60 * 60));

      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);

      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);

      let obj = {
         h: hours,
         m: minutes,
         s: seconds
      };
      return obj;
   }

   componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
      this.startTimer();
   }

   startTimer() {
      if (this.timer === 0) {
         this.timer = setInterval(this.counter, 1000);
      }
   }

   componentWillUnmount() {
      clearInterval(this.timer);
   }

   counter() {
      let seconds = this.state.seconds - 1;
      this.setState({
         time: this.secondsToTime(seconds),
         seconds: seconds
      });
      if (seconds === 0) {
         clearInterval(this.timer);
      }
   }

   render() {
      const { h, m, s } = this.state.time;
      return (
   
            <ul className="countdown">
               <li><span className="hours">{h}</span>
                     <p className="hours_ref smalltxt">Hrs</p>
               </li>
               <li><span className="minutes">{m}</span>
                     <p className="minutes_ref smalltxt">Min</p>
               </li>
               <li><span className="seconds">{s < 10 ? `0${s}` : s}</span>
                     <p className="seconds_ref smalltxt">Sec</p>
               </li>
            </ul>
      );
   }
}
