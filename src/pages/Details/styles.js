import Styled from 'styled-components/native'
import Colors from '../../statics/colors'

export const Info = Styled.View`
  flex: 1;
  flexDirection: row;
  margin: 8px;
`

export const Description = Styled.Text`
  background: ${Colors.WHITE};
  color: ${Colors.PRIMARY};
  opacity: 0.9;
  borderRadius: 6;
  fontSize: 18px;
  textAlign: center;
  padding: 16px;
  marginBottom: 16px;
`
