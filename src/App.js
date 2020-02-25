import React from 'react';
import './App.css';
import Split from './composition/Split';
import Tooltip from './composition/TooltipClass';
import TheDate from './composition/TheDate';
import Counter from './composition/Counter'

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)
  
  function App() {
    return (
      <main className='App'>
        <TheDate />
        <Counter />
        <Split className='left' flexBasis='2'>
          This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
          {/* make another tooltip directly inside the App */}
          <Tooltip message='one more tooltip message'>
            Necessitatibus?
          </Tooltip>
        </Split>
        <Split className='right'>
          This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
        </Split>
      </main>
    )
  }

export default App;
