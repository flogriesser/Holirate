import { withStyles, } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";


export const EndLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        width: '100%',
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