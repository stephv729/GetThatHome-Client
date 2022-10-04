import { typography } from '../styles';
import { boxShadow } from '../styles/utils';
import styled from '@emotion/styled';

const StyledCard = styled.div`
  height: 17.13rem;
  width: 17.5rem;
  background-color: white;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  ${boxShadow[1]};
`;
const StyledCardImage = styled.img``;

const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
`;

const StyledCardTitle = styled.h2`
  ${typography.headline[6]}
`;

const StyledCardDesc = styled.p`
  ${typography.subtitle[2]}
`;

function SignUpCard({ title, desc, Image }) {
  return (
    <StyledCard>
      <StyledCardImage src={Image} alt='Illustration' draggable={false} />
      <StyledCardInfo>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardDesc>{desc}</StyledCardDesc>
      </StyledCardInfo>
    </StyledCard>
  );
}

export default SignUpCard;
