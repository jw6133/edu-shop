import { Container, createStyles, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { ProductThumbnail } from "../components/ProductThumbnail";
import { cartItemsVar } from "../cache";
import cuid from "cuid";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(7),
    },
  })
);

const products = [...Array(10)].map(() => ({
  name: "고구마",
  price: 1000,
  imgUrl:
    "https://i.namu.wiki/i/9av_QFbUYY-0ehSj1q7UB6CDyQm54ele3wzy0vmUQaACwsKl7PKoZ6ivDViqdmNwcv0D0HPT0TPdxDk4n7RXZA.webp",
}));

export default function Products() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={6} md={4} key={index}>
            <ProductThumbnail
              onClick={() => {
                const allCartItems = cartItemsVar();
                cartItemsVar([
                    ...allCartItems,
                    {
                      id: cuid(),
                      product: { ...product, id: cuid() },  // Product의 price는 string 타입
                      amount: 1,
                    },
                  ]);
              }}
              name={product.name}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
