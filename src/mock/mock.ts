import {Tab} from "../types";

const mockPages: Tab[] = new Array(10).fill(1).map((v, i) => (
    {
        id: i,
        index: i,
        title: `Hoge${i}`,
        url: `https://hoge.com/${i}`
    }
))

export default mockPages

