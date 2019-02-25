import {ListItem} from 'spectacle'
import styled from 'styled-components'

const BListItem = styled(ListItem)`
  font-size: 40px;

  &:before {
    display: inline-block;
    content: '•';
    color: #3bcebe;
    width: 30px;
  }
`
export default BListItem
