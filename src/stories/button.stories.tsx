import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../components/Button";
export default {
  title: "Button",
  component: Button,
};

export const Primary = () => (
  <Button onClick={action("clicked")} variant="primary">
    Primary
  </Button>
);
export const Secondary = () => (
  <Button onClick={action("clicked")} variant="secondary">
    Secondary
  </Button>
);
