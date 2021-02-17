import {forwardRef, Ref, memo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {StyledButton} from "./style";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type Props = {
    id: string
    icon: IconProp
    onClick: () => void
}

const IconButton = memo(forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
    const {icon, onClick, id} = props
    console.log(`render IconButton ${id}`);
    return (
        <StyledButton ref={ref} onClick={onClick}>
            <FontAwesomeIcon icon={icon} fixedWidth />
        </StyledButton>
    )
}))

export default IconButton
