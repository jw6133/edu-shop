import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CSSObject, styled } from "@mui/material/styles";
import {
  Info,
  InfoEyebrow,
  InfoSlotStyles,
  InfoTitle,
} from "../mui-treasury/info-basic";

// Define the type for the props
interface ProductThumbnailProps {
  name: string;
  price: number;
  imgUrl: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const useStyles = (): CSSObject & Partial<InfoSlotStyles> => {
  return {
    eyebrow: {
      color: "rgba(255, 255, 255, 0.92)",
      fontFamily: '"Spartan", san-serif',
      lineHeight: 1.4,
      fontSize: "1.0625rem",
      letterSpacing: "1px",
      textTransform: "initial",
      marginBottom: 0,
    },
    title: {
      color: "#fff",
      fontSize: "1.25rem",
      fontWeight: "bold" as const,
      lineHeight: 1.2,
    },
  };
};

const StyledCard = styled(Card)({
  borderRadius: "1rem",
  boxShadow: "none",
  position: "relative",
  minWidth: 200,
  minHeight: 360,
  cursor: "pointer",
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "64%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
  },
});

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundPosition: "top",
});

const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 2),
  position: "absolute",
  zIndex: 2,
  bottom: 0,
  width: "100%",
}));

// Use the defined props type in the component
export const ProductThumbnail = React.memo(function GalaxyCard({
  name,
  price,
  imgUrl,
  onClick, // onClick를 props로 받아서 사용
}: ProductThumbnailProps) {
  return (
    <StyledCard onClick={onClick}> {/* 올바르게 onClick 사용 */}
      <StyledCardMedia image={imgUrl} />
      <Content>
        <Info useStyles={useStyles}>
          <InfoEyebrow>{name}</InfoEyebrow>
          <InfoTitle>{price}</InfoTitle>
        </Info>
      </Content>
    </StyledCard>
  );
});
