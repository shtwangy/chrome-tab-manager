import {StyledSecondaryActionDiv} from "./style";
import {FC, memo} from "react";

export const SecondaryActionContainer: FC = memo(({children}) => {
    console.log('render secondary action')
    return(
        <StyledSecondaryActionDiv>
            {children}
        </StyledSecondaryActionDiv>
    )
})
