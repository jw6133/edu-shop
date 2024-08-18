import { Container, createStyles, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        paddingTop : theme.spacing(7)
      },
    })
  );
  
const products = [...Array(10)].map(()=>({
        name: '고구마',
        price : 1000,
        imgUrl:"https://i.namu.wiki/i/9av_QFbUYY-0ehSj1q7UB6CDyQm54ele3wzy0vmUQaACwsKl7PKoZ6ivDViqdmNwcv0D0HPT0TPdxDk4n7RXZA.webp"
    }));

export default function Products(){
    const classes = useStyles();
    return(
        <>
        <Container className={classes.root}>
            <Grid container justify="center" spacing={2}>
                {products.map(({name,price,imgUrl}) => (
                <Grid item xs={6} md={4}>
                    <Paper style={{height :200}}>
                        <img style={{width:"100%", height:"100%"}} src={imgUrl} alt="product img"/>
                        {name}{price}</Paper>
                </Grid>
                ))}
            </Grid>
        </Container>
        </>
    )
}