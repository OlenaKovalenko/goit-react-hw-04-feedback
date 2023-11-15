import { StatisicsContainer, StatisicsText } from "./Statistics.styled"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatisicsContainer>
            <StatisicsText>Good: {good}</StatisicsText>
            <StatisicsText>Neutral: {neutral}</StatisicsText>
            <StatisicsText>Bad: {bad}</StatisicsText>
            <StatisicsText>Total: {total}</StatisicsText>
            <StatisicsText>Positive feedback: {positivePercentage}%</StatisicsText>
            
        </StatisicsContainer>
    )
}