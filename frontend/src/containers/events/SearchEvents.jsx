import React from 'react';


const SearchEvents = (props) => {
    return (
        <div className="event-content">
            <div className="search flex center ">
                <form className="flex main-center ui form column" onSubmit={props.onSubmit} >
                    <div className="field" >
                        <input
                            type="text"
                            placeholder="Search events..."
                            name="search"
                            onChange={props.handleChange}
                            value={props.value}
                            required />
                    </div>
                    <button className="btn" >Search</button>
                </form>
            </div>
        </div>
    )
}
export default SearchEvents