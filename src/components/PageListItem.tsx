import {Page} from "../types/Page";

type Props = {
    page: Page
}

const PageListItem = (props: Props) => {
    const {page} = props
    return (
        <div>
            <h3>{page.title}</h3>
            <p>{page.url}</p>
        </div>
    )
}

export default PageListItem
