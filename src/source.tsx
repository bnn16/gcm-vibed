import { Box, render, useInput, useStdout } from "ink";
import BigText from "ink-big-text";

const AsciiApp = () => {
    useInput((input, key) => {
        if (key.ctrl && input === "c") {
            process.exit(0);
        }
    });

    const stdout = useStdout();

    stdout.write("\x1b[?1049h");

    return (
        <Box
            borderStyle="round"
            flexDirection="column"
            height="100vh"
            width="100vw"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
                gap={1}
            >
                <BigText text="gcm" colors={["#28a745", "#f85149"]} />
                <BigText text="vibed" colors={["#28a745", "#f85149"]} />
            </Box>
        </Box>
    );
};

console.clear();

const app = render(<AsciiApp />);

await app.waitUntilExit().then(() => {
    console.log("App exited");
});
