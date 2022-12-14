import React from "react";
import FixedButton from "../components/FixedButton";
import Search from "./Search";
import BookLists from "../components/BookLists";
class Home extends React.Component {

    render() {
        const {  currentlyReading, wantToRead, read } = this.props.lists
        const {  updateLists } = this.props
        return (
            <div className="relative">
                <p className="text-white bg-green-700 font-semibold py-3 text-3xl">MyReads</p>
                <div>
                    <BookLists title={"Currently Reading"} list={currentlyReading} updateLists={updateLists} />
                    <BookLists title={"Want To Read"} list={wantToRead} updateLists={updateLists} />
                    <BookLists title={"Read"} list={read} updateLists={updateLists} />
                </div>


                <FixedButton />
            </div>
        )
    }
}

export default Home;