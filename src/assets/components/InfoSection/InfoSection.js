import "./InfoSection.scss";
import TeamworkIcon from "../../icons/group_fill.svg";
import ThinkingIcon from "../../icons/brain_line.svg";
import CelebrateIcon from "../../icons/celebrate_line.svg";
import MagicIcon from "../../icons/magic_hat_line.svg";

function InfoSection() {
    return (
        <>
            <section className="info">
                <h2 className="info__header">WHY PLAY ESCAPE ROOMS?</h2>
                <section className="info__child-container">
                    <div className="why-play">
                        <div className="why-play__image-container">
                            <img
                                src={TeamworkIcon}
                                alt="TeamworkIcon"
                                className="why-play__image"
                            />
                        </div>
                        <h3 className="why-play__header">
                            Team Building and Collaboration
                        </h3>
                        <p className="why-play__p">
                            Engage your team in an immersive escape room
                            experience, fostering collaboration and
                            communication as you work together to solve
                            challenges and strengthen bonds.
                        </p>
                    </div>
                    <div className="why-play">
                        <div className="why-play__image-container">
                            <img
                                src={MagicIcon}
                                alt=""
                                className="why-play__image"
                            />
                        </div>
                        <h3 className="why-play__header">
                            Entertainment and Adventure
                        </h3>
                        <p className="why-play__p">
                            Dive into a thrilling adventure where you and your
                            companions become the heroes, solving puzzles and
                            uncovering clues in an immersive escape room
                            setting.
                        </p>
                    </div>
                </section>
                <section className="info__child-container">
                    <div className="why-play">
                        <div className="why-play__image-container">
                            <img
                                src={ThinkingIcon}
                                alt=""
                                className="why-play__image"
                            />
                        </div>
                        <h3 className="why-play__header">
                            Problem Solving and Critical Thinking
                        </h3>
                        <p className="why-play__p">
                            Exercise your intellect in an escape room, where
                            creative problem-solving and critical thinking are
                            key to unraveling mysteries and finding innovative
                            solutions.
                        </p>
                    </div>
                    <div className="why-play">
                        <div className="why-play__image-container">
                            <img
                                src={CelebrateIcon}
                                alt=""
                                className="why-play__image"
                            />
                        </div>
                        <h3 className="why-play__header">
                            Celebrations and Special Occasions
                        </h3>
                        <p className="why-play__p">
                            Elevate special moments by celebrating birthdays,
                            anniversaries, or team successes in an escape room,
                            creating unique memories through shared
                            accomplishment and excitement.
                        </p>
                    </div>
                </section>
            </section>
        </>
    );
}

export default InfoSection;
