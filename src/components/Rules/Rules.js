import React from "react";
import Navigation from "../Navigation/Navigation";
import maskot from "../../styles/img/maskot.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Rules = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Navigation />
      <header className="newsfeed">
        <Link to="/" className="newsfeed__logo-box">
          <img src={maskot} alt="Logo" className="newsfeed__logo" />
        </Link>
      </header>
      <section className="rules">
        <h1 className="heading-secondary">Rules & Regulation</h1>
        <div className="rule">
          <h1 className="heading-tertiary">Sign up & Login </h1>
          <div>
            The player can use his/her Gmail account or Facebook account to join
          </div>
          <div>Simply tap the top navigation</div>
          <div>Select login</div>
          <div>Select google / Facebook</div>
        </div>

        <div className="rule">
          <h1 className="heading-tertiary">Completing the tasks</h1>
          <div>
            There are numerous tasks in 3 categories, players can choose from
            any category to do the tasks
          </div>
          <div>
            The player can not view the second task before finishing &
            submitting the first task
          </div>
          <div>
            After the player’s submission of a task, it will go into the
            taskfeed as a post for other players to see. Others will see his
            videos & if they like the content of the post they will give an
            upvote
          </div>
          <div>
            When a post gets 10 upvotes, the post will be considered as verified
            & the player’s next task will be unlocked
          </div>
        </div>

        <div className="rule">
          <h1 className="heading-tertiary">Crossing levels</h1>
          <div>
            The player can use his/her Gmail account or Facebook account to join
          </div>
          <div>
            The player will start as a <span> Commoner</span>
          </div>
          <div>
            If the player completes all the tasks in commoner level, he/she will
            be promoted to <span> Fascinating</span> Level
          </div>
          <div>
            By repeating the same process he/she will be promoted to{" "}
            <span> Exceptional & Legend</span>
          </div>
        </div>

        <div className="rule">
          <h1 className="heading-tertiary">Leaderboard</h1>
          <div>
            To gain a place in the leaderboard, players have to earn points by
            completing tasks
          </div>
          <div>
            If the player reaches the top of the leaderboard in a certain
            season, he/ she will be rewarded with prizes/ certificates / other
            gifts
          </div>
        </div>

        <div className="rule">
          <h1 className="heading-tertiary">
            Hate content & Irrelevant content
          </h1>
          <div>
            If any hate content / irrelevant content is seen on taskfeed, the
            player is requested to report that content to captain earth team
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rules;
