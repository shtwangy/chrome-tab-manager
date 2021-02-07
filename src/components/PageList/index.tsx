import {Page} from "../../types";
import {StyledDiv} from "./style"
import {PageListItem} from "../index";

type Props = {
    pages: Page[]
}

const PageList = (props: Props) => {
    const {pages} = props
    return (
        <StyledDiv>
            {pages.length > 0 && (
                pages.map((page) => (
                    <PageListItem page={page} />
                ))
            )}
        </StyledDiv>
    )
}

export default PageList
