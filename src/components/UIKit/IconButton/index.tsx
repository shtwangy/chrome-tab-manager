import {forwardRef, Ref, memo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {StyledButton} from "./style";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type Props = {
    id: string
    icon: IconProp
    onClick: () => void
}

const IconButton = memo(forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
    // const [wobble, setWobble] = useState(false)
    const {icon, onClick, id} = props

    const onClickButton = () => {
        onClick()
        // setWobble(true)
        // setTimeout(() => setWobble(false), 20000);
    }
    console.log(`render IconButton ${id}`);
    return (
        <StyledButton
            ref={ref}
            onClick={onClickButton}
            // className={wobble ? 'wob' : ''}
        >
            <FontAwesomeIcon icon={icon} fixedWidth />
        </StyledButton>
    )
}))

export default IconButton
