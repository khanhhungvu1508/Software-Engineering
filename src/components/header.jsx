import "./style.css";
import 'font-awesome/css/font-awesome.min.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
// import { IconName } from "react-icons/bs";
const Header = () => {
    return (
        <div id="header">
            <Button id="home-symbol">
                <FontAwesomeIcon icon={faHome} size="2x" />
            </Button>

            <div id="content-back">
                Back to home
            </div>
            
        </div>
    );
};
export default Header