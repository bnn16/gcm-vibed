import { Box, render } from 'ink';
import BigText from 'ink-big-text';

const AsciiApp = () => {
  return <Box flexDirection='row'>
    <BigText text="gcm" colors={["#28a745", "#f85149"]}/>

    <BigText text="-" colors={["#f85149", "#f85149"]}/>

    <BigText text="vibed" colors={["#28a745", "#f85149"]}/>
  </Box>
};

render(<AsciiApp />);
