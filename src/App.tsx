import { useFloating } from '@floating-ui/react';

function App() {
  const { refs, floatingStyles } = useFloating();

  console.log(floatingStyles);

  return (
    <>
      <p style={{ margin: '100px' }} ref={refs.setReference}>reference</p>
      <div ref={refs.setFloating} style={floatingStyles}>target test</div>
    </>
  )
}

export default App
