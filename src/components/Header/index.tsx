import {StyledHeader, StyledH1, StyledButton, StyledSecondaryActionDiv} from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";

const Header = () => {
    return (
        <StyledHeader>
            <StyledH1>Tab Manager</StyledH1>
            <StyledSecondaryActionDiv>
                <StyledButton>
                    <FontAwesomeIcon icon={faCog} fixedWidth />
                </StyledButton>
            </StyledSecondaryActionDiv>
        </StyledHeader>
    )
}

export default Header
