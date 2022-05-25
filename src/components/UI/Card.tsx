import { CardProps } from "../../utils";
import "./Card.css";
/**
 * A generic card component
 *
 * @param {CardProps} props
 * @return {*}  {JSX.Element}
 */
const Card = (props: CardProps): JSX.Element => {
  const { children, className } = props;
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
