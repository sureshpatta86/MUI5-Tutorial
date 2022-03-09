import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1" gutterBottom>h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3" component='h1'>h3 Heading</Typography>
      <Typography variant="h4"  gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, eos
        odio, voluptatem at ad labore quam veritatis aliquam laudantium,
        possimus maiores earum. Molestiae iure tempora saepe, voluptatem
        delectus sed debitis.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        similique iure distinctio, voluptatibus veritatis dolore id, vel sint
        saepe a architecto hic! Perferendis maxime officiis perspiciatis est,
        autem esse ipsam.
      </Typography>
    </div>
  );
};
