import classNames from "classnames";
import styles from "./HeaderStyle.module.scss"
import { ReactComponent as Logo} from '../../../../pictures/Logo.svg';
function Header() {
    const cx= classNames.bind(styles);
    return ( 
    <Logo></Logo>
    );
}

export {Header};