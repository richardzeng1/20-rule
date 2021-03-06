import React from "react";
import ImageDisplay from "./image_display";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {},
            //seconds: 1200 // Amount of time to count down
            seconds: 5,
            locked_state: false
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
    render() {
        return (
            <div>
                {this.displayImage()}
                m: {this.state.time.m} s: {this.state.time.s}
            </div>
        );
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
        if (this.timer == 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds
        });

        // Check if we're at zero.
        if (seconds == 0) {
            this.state.seconds = 5;
            console.log(this.state.locked_state);
            this.state.locked_state = !this.state.locked_state;
        }
    }
    displayImage() {
        if (this.state.locked_state) {
            return <h1>Locked</h1>;
        } else {
            return <h1>Unlocked</h1>;
        }
    }
}

export default Timer;
