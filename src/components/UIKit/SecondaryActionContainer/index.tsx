import {StyledSecondaryActionDiv} from "./style";
import {FC, memo} from "react";

export const SecondaryActionContainer: FC = memo(({children}) => {
    return(
        <StyledSecondaryActionDiv>
            {children}
        </StyledSecondaryActionDiv>
    )
})
