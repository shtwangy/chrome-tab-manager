import {Page} from "../types";

const mockPages: Page[] = new Array(10).fill(1).map((v, i) => (
    {
        id: i,
        title: `Hoge${i}`,
        url: `https://hoge.com/${i}`
    }
))

export default mockPages

