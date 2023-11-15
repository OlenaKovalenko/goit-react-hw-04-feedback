import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { GlobalStyle } from "./GlobalStyle";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;

  };
    
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = good ? (100 * good / total) : 0;
    return Math.round(percentage);
    }
  

    render() {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage();
  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>

        <Section title="Statistics">
          {total ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />) : (<Notification message="There is no feedback" />)}
        </Section>

        <GlobalStyle />
      </>
    )
  }
}
