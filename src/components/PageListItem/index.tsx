import {Page} from "../../types/Page";
import {StyledDiv, StyledP, StyledSpan} from "./style";

type Props = {
    page: Page
}

const PageListItem = (props: Props) => {
    const {page} = props
    return (
        <StyledDiv>
            <StyledSpan>{page.title}</StyledSpan>
            <StyledP>{page.url}</StyledP>
        </StyledDiv>
    )
}

export default PageListItem
