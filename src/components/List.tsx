import withFormattedView from "../hocs/withFormattedView";
import Article from "./Article";
import Video from "./Video";

import checkPopular from "../utils/checkPopular";

function List(props: { list: AllContent[] }) {

    const { list } = props;

    const HighlightedVideo = withFormattedView(checkPopular)(Video);
    const HighlightedArticle = withFormattedView(checkPopular)(Article);

    return (
        <ul className="list-content">
            {list.map((item, indx) => (
                <li className="content-elem" key={indx}>
                    {(() => {
                        switch (item.type) {
                            case 'video':
                                return <HighlightedVideo {...item} />;
                            case 'article':
                                return <HighlightedArticle {...item} />;
                            default:
                                return null;
                        }
                    })()}
                </li>
            ))}
        </ul>
    );
}

export default List;