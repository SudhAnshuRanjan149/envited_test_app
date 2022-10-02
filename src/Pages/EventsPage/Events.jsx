import React from "react";

// CSS
import "./Events.css";

// ICONS
import { FaRegCalendarAlt, FaAngleRight } from "react-icons/fa";
import { BiLocationPlus } from "react-icons/bi";

const eventDataFromAPI = {
  event_name: "Birthday Bash",
  hosted_by: "Elysia",
  from: "18 August 6:00PM",
  to: "to 19 August 1:00PM UTC +10",
  location: "Street Name",
  location_detail: "Suburb, State, Postcode",
};

const Events = () => {
  return (
    <div className="events-container">
      <div className="events-container_laptop">
        <div className="events_image"></div>

        <div>
          <div className="event_name">{eventDataFromAPI.event_name}</div>
          <div className="hosted_by">
            <div> {`Hosted by `}</div>
            <div className="hosted_by_name">{eventDataFromAPI.hosted_by}</div>
          </div>

          <div className="event_detail_container">
            <div className="event_detail">
              <div className="event_detail_start">
                <div className="event_icon_1 icon">
                  <FaRegCalendarAlt />
                </div>
                <div className="event_text">
                  <div className="event_text_head">{eventDataFromAPI.from}</div>
                  <div className="event_text_label">{eventDataFromAPI.to}</div>
                </div>
              </div>

              <div className="event_icon_2">
                <FaAngleRight />
              </div>
            </div>

            <div className="event_detail">
              <div className="event_detail_start">
                <div className="event_icon_1 icon">
                  <BiLocationPlus />
                </div>
                <div className="event_text">
                  <div className="event_text_head">
                    {eventDataFromAPI.location}
                  </div>
                  <div className="event_text_label">
                    {eventDataFromAPI.location_detail}
                  </div>
                </div>
              </div>

              <div className="event_icon_2">
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
