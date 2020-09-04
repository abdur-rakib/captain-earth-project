import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase/util";
import Spinner from "../../utils/Spinner";
import SingleReportPost from "./SingleReportPost";
import { Link } from "react-router-dom";

const ReportPage = () => {
  const [reportedPost, setReportedPost] = useState(null);
  useEffect(() => {
    db.collection("reported").onSnapshot((querySnapshot) => {
      let posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      setReportedPost(posts);
    });
  }, []);
  const renderPosts = reportedPost ? (
    reportedPost.map((post) => <SingleReportPost key={post.id} post={post} />)
  ) : (
    <Spinner />
  );
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>All Reportd Posts</h1>
        <Link to="/">
          <h1>Back to home</h1>
        </Link>
      </div>
      {renderPosts}
    </div>
  );
};

export default ReportPage;
