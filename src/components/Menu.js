import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  paper: {
    background: 'rgba(255, 255, 255, 0.9)',
  },
}))

const MenuItem = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper}>
        <Box
          alignItems="center"
          display="flex"
          justifyContent="center"
          minHeight="4em"
          p="0.5em"
        >
          <Typography align="center" variant="h5">
            {children}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  )
}

const Menu = () => {
  return (
    <Box color="#fff" p="2em">
      <Typography color="inherit" gutterBottom variant="h4">
        Menu
      </Typography>

      <Grid container spacing={2}>
        <MenuItem>Beef & Bean Enchiladas</MenuItem>
        <MenuItem>Chicken Bacon Ranch Pasta</MenuItem>
        <MenuItem>Hamburgers</MenuItem>
        <MenuItem>Meatloaf</MenuItem>
        <MenuItem>Red Baron Pizza</MenuItem>
        <MenuItem>Southwestern Cassarole</MenuItem>
        <MenuItem>Soylent</MenuItem>
      </Grid>
    </Box>
  )
}

export default Menu
