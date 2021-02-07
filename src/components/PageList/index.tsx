import {Page} from "../../types";
import {StyledDiv} from "./style"
import {PageListItem} from "../index";
import {Dispatch, SetStateAction} from "react";

type Props = {
    pages: Page[]
    setPages: Dispatch<SetStateAction<Page[]>>
}

const PageList = (props: Props) => {
    const {pages, setPages} = props
    return (
        <StyledDiv>
            {pages.length > 0 && (
                pages.map((page) => (
                    <PageListItem
                        key={page.id}
                        page={page}
                        setPages={setPages}
                    />
                ))
            )}
        </StyledDiv>
    )
}

export default PageList
