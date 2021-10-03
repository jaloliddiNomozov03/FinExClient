import React, { useContext } from "react";
import { Tag } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import { TagsContext } from "../../components/Contexts/TagsContext";
import { Link, useHistory } from "react-router-dom";

const TagsComponent = () => {
  const history = useHistory();
  console.log(history);
  const { tags, setTags, urlTags } = useContext(TagsContext);
  const handleClose = (removedTag) => {
    const sortedTags = tags.filter((tag) => tag !== removedTag);
    setTags(sortedTags);
  };
  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        <Link to={urlTags.get(tag)}>{tag}</Link>
      </Tag>
    );
    return (
      <span key={tag} style={{ display: "inline-block" }}>
        {tagElem}
      </span>
    );
  };
  const tagChild = [...tags]
    .sort()
    .filter((tag, index) => tag !== tags[index + 1])
    .map(forMap);
  return (
    <div style={{ marginBottom: 16, position: "absolute", bottom: "3px", zIndex: "3" }}>
      <TweenOneGroup
        enter={{
          scale: 0.8,
          opacity: 0,
          type: "from",
          duration: 100,
          onComplete: (e) => {
            e.target.style = "";
          },
        }}
        leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
        appear={false}
      >
        {tagChild}
      </TweenOneGroup>
    </div>
  );
};
export default TagsComponent;
