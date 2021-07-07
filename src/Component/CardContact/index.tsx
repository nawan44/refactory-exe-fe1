import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { CardContent, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AddCircle } from "@material-ui/icons";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CallIcon from "@material-ui/icons/Call";
import BuildIcon from "@material-ui/icons/Build";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    backgroundColor: "#DBDBDB",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function CardContact() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <AccountCircleIcon
              style={{
                fontSize: "80px",
                width: "50%",
                height: "50px",
                float: "left",
                textAlign: "right",
              }}
            />
            <span
              style={{
                margin: "0  0 0 10px",
                color: "#6D6B6B",
                width: "40%",
                paddingTop: "15px",
                textAlign: "left",
                height: "50px",
                float: "left",
              }}
            >
              Ahmad
            </span>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ padding: "10px 10px", textAlign: "left" }}
          >
            <AccountBalanceIcon style={{ fontSize: "16px" }} />
            <span
              style={{
                margin: "0  0 0 10px",
                color: "#6D6B6B",
                fontSize: "12px",
              }}
            >
              Refactory
            </span>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ padding: "10px 10px", textAlign: "left" }}
          >
            <CallIcon style={{ fontSize: "16px" }} />
            <span
              style={{
                margin: "0  0 0 10px",
                color: "#6D6B6B",
                fontSize: "12px",
              }}
            >
              081111
            </span>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ padding: "10px 10px", textAlign: "left" }}
          >
            <BuildIcon style={{ fontSize: "16px" }} />
            <span
              style={{
                margin: "0  0 0 10px",
                color: "#6D6B6B",
                fontSize: "12px",
              }}
            >
              Engineer
            </span>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ padding: "10px 10px", textAlign: "left" }}
          >
            <MailOutlineIcon style={{ fontSize: "16px" }} />
            <span
              style={{
                margin: "0  0 0 10px",
                color: "#6D6B6B",
                fontSize: "12px",
              }}
            >
              hahaha@gmial.com
            </span>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default CardContact;
