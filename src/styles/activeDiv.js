import { makeStyles} from "@mui/styles";

const activeDiv =  makeStyles(theme => ({
    visible: {
        opacity: 1,
        transform: 'translateY(0)',
        transition: 'opacity 700ms ease, transform 700ms ease-in-out',
      },
      nonVisible: {
        opacity: 0,
        transform: 'translateY(60px)',
        transition: 'opacity 700ms ease, transform 700ms ease ease-in-out',
      },
}))

export default activeDiv