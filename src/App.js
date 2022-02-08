import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
//components
import Top from './components/Pages/Top'
import MoveHeader from './components/Parts/Header/MoveHeader'
import SearchHeader from './components/Parts/Header/SearchHeader'

const WrapeprGrid = styled(Grid)`
  margin: 0;
  padding: 0;
  width: 100%;
`

function App() {
  return (
    <WrapeprGrid>
      <MoveHeader />
      <SearchHeader />
      <Top />
    </WrapeprGrid>
  );
}

export default App
