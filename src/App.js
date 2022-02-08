import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
//components
import Top from './components/Pages/Top'
import MoveHeader from './components/Parts/MoveHeader'

const WrapeprGrid = styled(Grid)`
  margin: 0;
  padding: 0;
  width: 100%;
`

function App() {
  return (
    <WrapeprGrid>
      <MoveHeader />
      <Top />
    </WrapeprGrid>
  );
}

export default App
