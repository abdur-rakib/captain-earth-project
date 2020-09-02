import React from "react";
import { connect } from "react-redux";
import { categories } from "../../data/random";
import SingleTask from "./SingleTask";

const SingleCategoryTasks = ({ category, data, close }) => {
  const tasks = data.tasks?.filter(
    (task) => task.user_category === category.ref
  );
  //   console.log(tasks);

  const renderTasks = tasks?.map((task) => (
    <SingleTask key={task.ref} close={close} task={task} />
  ));

  return (
    <div>
      <h1>{categories[category.ref].title}</h1>
      {renderTasks}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(SingleCategoryTasks);
