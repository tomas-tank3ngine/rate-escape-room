import './RoomsTable.scss'
import Icons from '../IconHolder/IconHolder';

function RoomsTable(){
    return(
        <section className="rooms-table-section">
            <section className="filter-section">
                <button className="filter">
                    <img src={Icons().FilterEmptyIcon} alt="FilterIcon" className="filter__icon" />
                    <p className="filter__label">Filters</p>
                </button>
            </section>

            <section className="table-section">
                <section className="table-header">
                    <button className="sort-label fav-label">
                        <img src={Icons().HeartEmptyIcon} alt="Favourite Icon" className="sort-label__fav-icon" />
                    </button>
                    <button className="sort-label">
                        <p className="sort-label__p">Name</p>
                        <img src={Icons().SortIcon} alt="SortIcon" className="sort-label__sort-icon" />
                    </button>
                    <button className="sort-label">
                        <p className="sort-label__p">Theme</p>
                        <img src={Icons().SortIcon} alt="SortIcon" className="sort-label__sort-icon" />
                    </button>
                    <button className="sort-label">
                        <p className="sort-label__p">Rating</p>
                        <img src={Icons().SortIcon} alt="SortIcon" className="sort-label__sort-icon" />
                    </button>
                    <button className="sort-label">
                        <p className="sort-label__p">Difficulty</p>
                        <img src={Icons().SortIcon} alt="SortIcon" className="sort-label__sort-icon" />
                    </button>
                </section>
                <ul className="table-list">
                    <li className="table-item">
                        
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default RoomsTable;