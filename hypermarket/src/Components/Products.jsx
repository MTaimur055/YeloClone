import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import PlayIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {
  InputLabel,
  Select,
  FormControl,
  InputBase,
  fade,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { SearchIcon } from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { AddIcon } from "@material-ui/icons/Add";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: "Category (4)",
    icons: [<AddIcon />],
    description: [
      <TextField
        id="outlined-basic"
        label="Most Popular"
        variant="outlined"
        disabled
      />,
      <TextField
        id="outlined-basic"
        label="Chef Special"
        variant="outlined"
        disabled
      />,
      <TextField
        id="outlined-basic"
        label="Shakes"
        variant="outlined"
        disabled
      />,
      <TextField
        id="outlined-basic"
        label="Extras"
        variant="outlined"
        disabled
      />,
    ],
  },
  {
    title: "Product (3)",
    icons: [<AddIcon />, <SearchIcon />],
    description: [
      <TextField
        id="outlined-basic"
        label="Chicken Dynamite Burger"
        variant="outlined"
        disabled
      />,
      <TextField
        id="outlined-basic"
        label="Chicken Belly Burger"
        variant="outlined"
        disabled
      />,
      <TextField
        id="outlined-basic"
        label="Calorie Bomb"
        variant="outlined"
        disabled
      />,
    ],
  },
  {
    title: "Product Details",
    icons: [],
    description: [
      <img
        src={require("./burger.jpg")}
        style={{ height: "55px", width: "55px", float: "left" }}
      />,
      "Cheese Belly Burger $ 8.00 Pimento Cheese, pork belly, and no nonsense",
      "Inventory",
      "Long Description",
      "Variants/Add-ons",
      "No Variant Add-ons added ",
      "Add",
    ],
  },
];

export default function Products() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Products
          </Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              HyperMarket
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="age"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="">Shangrila</MenuItem>
              <MenuItem value="">Pizzeria</MenuItem>
              <MenuItem value="">Mozza</MenuItem>
              <MenuItem value="">Broadway</MenuItem>
              <MenuItem value="">S-treats</MenuItem>
              <MenuItem value="">Pizza by the Bay</MenuItem>
              <MenuItem value="">FoodYork</MenuItem>
              <MenuItem value="">Chocolate Cafe</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="p"
          variant="h6"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          Learn more on how to set up a catalog <PlayIcon />
        </Typography>
        <Typography
          variant="h5"
          align="right"
          color="textSecondary"
          component="p"
        >
          <Button
            variant="contained"
            color="primary"
            style={{ paddingRight: "1px" }}
          >
            Import/Export
          </Button>
          <Button variant="contained" color="primary">
            Layout
          </Button>
          <Button variant="contained" color="primary">
            Clear All
          </Button>
        </Typography>
        <Typography
          variant="h5"
          align="right"
          color="textSecondary"
          component="p"
        >
          Show Items
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">All</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="age"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="">Disabled Only</MenuItem>
              <MenuItem value="">Enabled Only</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              English
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="age"
            >
              <MenuItem value="">English</MenuItem>
            </Select>
          </FormControl>
        </Typography>
      </Container>

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "left" }}
                  subheaderTypographyProps={{
                    align: "left",
                  }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
