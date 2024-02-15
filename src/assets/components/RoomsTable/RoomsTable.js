import "./RoomsTable.scss";
import Icons from "../IconHolder/IconHolder";
import RoomItemMobile from "../RoomItemMobile/RoomItemMobile";
import RoomItemTabletPlus from "../RoomItemTabletPlus/RoomItemTabletPlus";
import { useState, useEffect } from "react";
import axios from "axios";
import { allRoomsEndpoint } from "../../utils/api-utils";

function RoomsTable({ responsive, setSelectedRoom }) {
  const [allRooms, setAllRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(allRoomsEndpoint());
        setAllRooms(response.data);
        setSortedRooms(response.data); //Make sure sorted Rooms has something in it to start

        const randomIndex = Math.floor(Math.random() * response.data.length);
        const randomRoom = response.data[randomIndex];
        setSelectedRoom(randomRoom);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function sortHandler(sortCriterion){
    let sorted;
    if (sortCriterion === 'name'){
        sorted = [...sortedRooms].sort((a,b) => a.name.localeCompare(b.name))
    }
    else if (sortCriterion === 'theme'){
        sorted = [...sortedRooms].sort((a,b) => a.theme.localeCompare(b.theme))
    }
    else if (sortCriterion === 'rating'){
        sorted = [...sortedRooms].sort((a,b) => a.overall_rating < b.overall_rating ? 1 : -1)
    }
    else if (sortCriterion === 'difficulty'){
        sorted = [...sortedRooms].sort((a,b) => a.difficulty.localeCompare(b.difficulty))
    }    
    
    setSortedRooms(sorted)
  }

  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
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
              <button onClick={()=>sortHandler("name")} className="sort-label sort-name">
                <p className="sort-label__p">Name</p>
                <img
                  src={Icons().SortIcon}
                  alt="SortIcon"
                  className="sort-label__sort-icon"
                />
              </button>
              <button onClick={()=>sortHandler("theme")} className="sort-label">
                <p className="sort-label__p">Theme</p>
                <img
                  src={Icons().SortIcon}
                  alt="SortIcon"
                  className="sort-label__sort-icon"
                />
              </button>
              <button onClick={()=>sortHandler("rating")} className="sort-label rating-label">
                <p className="sort-label__p">Rating</p>
                <img
                  src={Icons().SortIcon}
                  alt="SortIcon"
                  className="sort-label__sort-icon"
                />
              </button>
              <button onClick={()=>sortHandler("name")} className="sort-label completion-label">
                <p className="sort-label__p">Difficulty</p>
                <img
                  src={Icons().SortIcon}
                  alt="SortIcon"
                  className="sort-label__sort-icon"
                />
              </button>
            </section>
            <ul className="table-list">
              {sortedRooms && sortedRooms
              .map((room) =>
                responsive.isTablet ? (
                  <RoomItemTabletPlus
                    key={room.id}
                    room={room}
                    setSelectedRoom={setSelectedRoom}
                  />
                ) : (
                  <RoomItemMobile
                    key={room.id}
                    room={room}
                    setSelectedRoom={setSelectedRoom}
                  />
                )
              )}
            </ul>
          </section>
        </section>
      )}
    </>
  );
}

export default RoomsTable;
