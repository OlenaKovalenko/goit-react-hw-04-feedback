import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { GlobalStyle } from "./GlobalStyle";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [data, setData] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = data;

  const onLeaveFeedback = option => {
    setData(prevState =>({...prevState, [option]: prevState[option] + 1}));
  }

  const total = good + neutral + bad;
  const positivePercentage = good ? Math.round(100 * good / total) : 0;

  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(data)} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {total ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />) : (<Notification message="There is no feedback" />)}
        </Section>

        <GlobalStyle />
      </>
    )
  
  }
