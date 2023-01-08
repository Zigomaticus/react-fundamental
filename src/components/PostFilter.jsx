import React from "react";
// Components
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/MySelect/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorting for"
        option={[
          { value: "title", name: "For name" },
          { value: "body", name: "For discription" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
