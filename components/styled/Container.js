import styled from 'styled-components';
 
const Container = styled.div`
  padding: 1rem;
  max-width: ${(props) => props.maxWidth || '100%'};
  margin: ${(props) => props.margin || '0 auto'};
`;
 
export default Container;