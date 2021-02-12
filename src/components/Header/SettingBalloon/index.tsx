import {Ref, forwardRef} from "react";
import {StyledWrapDiv} from "./style";

const SettingBalloon = forwardRef<HTMLDivElement>(({}, ref: Ref<HTMLDivElement>) => {
    return (
        <StyledWrapDiv ref={ref}>
            Setting
        </StyledWrapDiv>
    )
})

export default SettingBalloon
