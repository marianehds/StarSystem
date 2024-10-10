import React from "react";

import { CardProps } from "./Card.type";
import Typography from "../Typography";
import "./Card.scss";

export const Card = ({ media, Title, SubTitle, children }: CardProps) => {
  return (
    <div data-component="card-starsystem">
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
