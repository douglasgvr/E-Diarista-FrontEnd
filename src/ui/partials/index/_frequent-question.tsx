import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import {
  AccondionStyled,
  SectionContainer,
  SectionSubTitle,
  SectionTitle,
  Wave,
} from "./_frequent-question.syled";
import { useState } from "react";

const questionList = [
  {
    question: "Duvida 1",
    answer:
      "lorem ipsum dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
  },
  {
    question: "Duvida 2",
    answer:
      "lorem ipsum dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
  },
  {
    question: "Duvida 3",
    answer:
      "lorem ipsum dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
  },
  {
    question: "Duvida 4",
    answer:
      "lorem ipsum dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet dolor sit amet",
  },
];

const FrequestQuestion = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  function isOpen(accordionIndex: number): boolean {
    return activeAccordion === accordionIndex;
  }

  function changeOpenAccordion(accordionIndex: number): void {
    if (isOpen(accordionIndex)) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionIndex);
    }
  }

  function getIcon(accordionIndex: number): string {
    return isOpen(accordionIndex) ? "twf-minus" : "twf-plus";
  }
  return (
    <SectionContainer>
      <Wave src={"/img/home/waves.svg"} />
      <Container>
        <SectionTitle>Ainda está com dúvidas ?</SectionTitle>
        <SectionSubTitle>Veja abaixo as perguntas frequentes</SectionSubTitle>

        {questionList.map((item, index) => (
          <AccondionStyled
            key={index}
            expanded={isOpen(index + 1)}
            onChange={() => changeOpenAccordion(index + 1)}
          >
            <AccordionSummary expandIcon={<i className={getIcon(index + 1)} />}>
              <Typography color={"primary"}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </AccondionStyled>
        ))}
      </Container>
    </SectionContainer>
  );
};

export default FrequestQuestion;
