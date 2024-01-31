import "./RoomsTable.scss";
import Icons from "../IconHolder/IconHolder";

function RoomsTable() {
  return (
    <section className="rooms-table-section">
      <section className="filter-section">
        <button className="filter">
          <img
            src={Icons().FilterEmptyIcon}
            alt="FilterIcon"
            className="filter__icon"
          />
          <p className="filter__label">Filters</p>
        </button>
      </section>

      <section className="table-section">
        <section className="table-header">
          <button className="sort-label fav-label">
            <img
              src={Icons().HeartEmptyIcon}
              alt="Favourite Icon"
              className="sort-label__fav-icon"
            />
          </button>
          <button className="sort-label">
            <p className="sort-label__p">Name</p>
            <img
              src={Icons().SortIcon}
              alt="SortIcon"
              className="sort-label__sort-icon"
            />
          </button>
          <button className="sort-label">
            <p className="sort-label__p">Theme</p>
            <img
              src={Icons().SortIcon}
              alt="SortIcon"
              className="sort-label__sort-icon"
            />
          </button>
          <button className="sort-label">
            <p className="sort-label__p">Rating</p>
            <img
              src={Icons().SortIcon}
              alt="SortIcon"
              className="sort-label__sort-icon"
            />
          </button>
          <button className="sort-label">
            <p className="sort-label__p">Completion</p>
            <img
              src={Icons().SortIcon}
              alt="SortIcon"
              className="sort-label__sort-icon"
            />
          </button>
        </section>
        <ul className="table-list">
          <li className="table-item">
            <section className="item-container-top">
                <div className="item-container-top__left">
                    <button className="fav-button">
                        <img src={Icons().HeartEmptyIcon} alt="favourites icon" className="fav-button__fav-icon" />
                    </button>
                    <p className="item-name">Room Name</p>
                </div>
                <div className="item-container-top__right">
                    <img src={Icons().StarEmptyIcon} alt="star icon" className="star-rating" />
                    <img src={Icons().StarEmptyIcon} alt="star icon" className="star-rating" />
                    <img src={Icons().StarEmptyIcon} alt="star icon" className="star-rating" />
                    <img src={Icons().StarEmptyIcon} alt="star icon" className="star-rating" />
                    <img src={Icons().StarEmptyIcon} alt="star icon" className="star-rating" />
                </div>
            </section>
            <section className="item-container-middle">
                <p className="item-container-middle__theme">Ancient Egypt</p>
                <p className="item-container-middle__difficulty">Intermediate</p>
                <p className="item-container-middle__completion-rate">78%</p>
            </section>
            <section className="item-container-bottom">
                <img src="" alt="thumbnail" className="item-container-bottom__thumbnail" />
                <p className="item-container-bottom__description">Description</p>
            </section>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default RoomsTable;
