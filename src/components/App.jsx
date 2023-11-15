import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { GlobalStyle } from "./GlobalStyle";
import { Notification } from "./Notification/Notification";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    setGood(prevState => prevState + 1);
    setNeutral(prevState => prevState + 1);
    setBad(prevState => prevState + 1);


  // const onLeaveFeedback = (option) => {
  //   setGood(prevState => prevState + 1);
  // }

    const countTotalFeedback = () => {
      return good + neutral + bad;

    };
    
    const countPositiveFeedbackPercentage = () => {
      const total = countTotalFeedback();
      const percentage = good ? (100 * good / total) : 0;
      return Math.round(percentage);
    }
      
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={[good, neutral, bad]} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />) : (<Notification message="There is no feedback" />)}
        </Section>

        <GlobalStyle />
      </>
    )
  
  }
