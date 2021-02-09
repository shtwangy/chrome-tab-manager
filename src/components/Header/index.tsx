import {StyledHeader, StyledH3, StyledButton, StyledSecondaryActionDiv} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";

const Header = () => {
    return (
        <StyledHeader>
            <StyledH3>Tab Manager</StyledH3>
            <StyledSecondaryActionDiv>
                <StyledButton>
                    <FontAwesomeIcon icon={faCog} fixedWidth />
                </StyledButton>
            </StyledSecondaryActionDiv>
        </StyledHeader>
    )
}

export default Header
