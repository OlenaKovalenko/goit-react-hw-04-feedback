import { TitleSection } from "./Section.styled";

export const Section = ({ title, children }) => {
    return (
        <section>
            <TitleSection>{title}</TitleSection>
            {children}
        </section>
    )
};