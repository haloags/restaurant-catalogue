import styled from 'styled-components';
 
const Image = styled.img`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  object-fit: cover;
  object-position: center;
`;
 
export default Image;