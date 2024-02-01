import "./RoomsTable.scss";
import Icons from "../IconHolder/IconHolder";
import RoomItemMobile from "../RoomItemMobile/RoomItemMobile";
import RoomItemTabletPlus from "../RoomItemTabletPlus/RoomItemTabletPlus";

function RoomsTable({responsive}) {

    // console.log("is tablet?: "+ responsive.isTablet)

    return (
    <section className="rooms-table-section">
      <aside className="filter-section">
        <button className="filter">
          <img
            src={Icons().FilterEmptyIcon}
            alt="FilterIcon"
            className="filter__icon"
          />
          <p className="filter__label">Filters</p>
        </button>
      </aside>

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
          <button className="sort-label rating-label">
            <p className="sort-label__p">Rating</p>
            <img
              src={Icons().SortIcon}
              alt="SortIcon"
              className="sort-label__sort-icon"
            />
          </button>
          <button className="sort-label completion-label">
            <p className="sort-label__p">Completion</p>
            <img
              src={Icons().SortIcon}
              alt="SortIcon"
              className="sort-label__sort-icon"
            />
          </button>
        </section>
        <ul className="table-list">
          {responsive.isTablet ? <RoomItemTabletPlus /> : <RoomItemMobile />}
          
        </ul>
      </section>
    </section>
  ); 
}

export default RoomsTable;
