import {forwardRef, Ref} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {StyledButton} from "./style";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type Props = {
    icon: IconProp
    onClick: () => void
}

const IconButton = forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
    const {icon, onClick} = props
    return (
        <StyledButton ref={ref} onClick={onClick}>
            <FontAwesomeIcon icon={icon} fixedWidth />
        </StyledButton>
    )
})

export default IconButton
