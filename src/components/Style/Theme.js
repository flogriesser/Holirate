import { createTheme } from "@material-ui/core/styles";


export default createTheme({
    root: {
        flexGrow: 1,
    },
    palette: {
        primary: {
            main: '#66bb6a',
            contrastText: '#fff',
        },
        secondary: { main: "#F1B929" }, // This is just green.A700 as hex.
    },
    overrides: {
        MuiButton: {
            root: {
                backgroundColor: 'primary',
                text: {
                    borderRadius: 3,
                    border: 0,
                    color: 'white',
                },
            }
        },
    }
});