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
                    <button className="sort-label">
                        <img src={Icons().HeartEmpty} alt="Favourite Icon" className="sort-label__image" />
                    </button>
                </section>
                <ul className="table-list">
                    <li className="table-item">list item</li>
                </ul>
            </section>
        </section>
    );
}

export default RoomsTable;