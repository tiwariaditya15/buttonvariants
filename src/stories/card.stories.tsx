import { action } from "@storybook/addon-actions";
import { Card } from "../components/Card";

export default {
  title: "Card",
  component: Card,
};

export const FirstCard = () => (
  <Card>
    <h1>Travis Scott</h1>
  </Card>
);
export const SecondCard = () => (
  <Card>
    <h1>Lil Uzi Vert</h1>
  </Card>
);
