import { withStyles, } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";


export const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 20,
        width: '80%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
    },
    bar: {
        borderRadius: 5,
        backgroundColor: "primary"
    }
}))(LinearProgress);