import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import dayjs from 'dayjs'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  day: {
    color: '#000',
    backgroundColor: '#ddd',
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  today: {
    color: '#000',
    backgroundColor: '#fff',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}))

const DayMarker = ({ name }) => {
  const classes = useStyles()
  const dayOfWeek = dayjs().format('dddd')
  const isToday = dayOfWeek === name

  if (isToday) {
    return (
      <Avatar className={classes.today}>
        <Typography variant="h4">{dayjs().format('D')}</Typography>
      </Avatar>
    )
  }

  return <Avatar className={classes.day}>{name.charAt(0)}</Avatar>
}

export default DayMarker
