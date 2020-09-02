import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { required_likes } from "../../utils/utils";
import { useEffect } from "react";

const SingleTask = ({
  task,
  data: { answers },
  user: { credentials },
  close,
}) => {
  const [pending, setPending] = useState(false);
  const [verified, setVerified] = useState(false);

  const res = answers.filter(
    (ans) => ans.taskRef === task.ref && ans.userName === credentials?.userName
  )[0];
  // console.log(res);
  useEffect(() => {
    if (res) {
      if (res.likeCount >= required_likes) {
        setVerified(true);
      } else {
        setPending(true);
      }
    }
    // eslint-disable-next-line
  }, []);

  const renderButton = pending ? (
    <span className=" ">PENDING</span>
  ) : verified ? (
    <span className=" ">COMPLETE OTHER CATEGORY TO GO TO NEXT LEVEL</span>
  ) : (
    <Link className="" onClick={close} to={`task/${task.ref}`}>
      Play
    </Link>
  );

  return (
    <div>
      <h1>
        {task.title} - {task.points}
      </h1>
      {renderButton}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
    user: state.user,
  };
};

export default connect(mapStateToProps)(SingleTask);
