import {Page} from "../../types/Page";
import {StyledButton, StyledTextDiv, StyledSecondaryActionDiv, StyledDiv, StyledP, StyledSpan} from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt"

type Props = {
    page: Page
}

const PageListItem = (props: Props) => {
    const {page} = props
    return (
        <StyledDiv>
            <StyledTextDiv>
                <StyledSpan>{page.title}</StyledSpan>
                <StyledP>{page.url}</StyledP>
            </StyledTextDiv>
            <StyledSecondaryActionDiv>
                <StyledButton>
                    <FontAwesomeIcon icon={faTrashAlt} fixedWidth />
                </StyledButton>
            </StyledSecondaryActionDiv>
        </StyledDiv>
    )
}

export default PageListItem
