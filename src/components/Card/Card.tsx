import React from "react";

import Typography from "../Typography";

import { CardProps } from "./Card.type";
// Evita import cíclico de defaults
import "./Card.scss";

export const Card = ({
  media,
  Title,
  SubTitle,
  children,
  variant = "primary",
}: CardProps) => {
  return (
    <div data-component="card-starsystem" className={`card--${variant}`}>
      {media && <img alt="aaa" src={media} />}
      {Title && (
        <Typography variant="h3" className="title">
          {Title}
        </Typography>
      )}

      {SubTitle && (
        <Typography variant="h5" fontWeight="regular">
          {SubTitle}
        </Typography>
      )}

      {children && <div className="children"> {children} </div>}
    </div>
  );
};

Card.displayName = "Card";
