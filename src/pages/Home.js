import React from "react";
import FixedButton from "../components/FixedButton";
import Search from "./Search";
import BookLists from "../components/BookLists";
class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showSearch: false,
        }
    }

    toggleSearch = () => {
        this.setState({showSearch: !this.state.showSearch})
    }
    render () {
        const {showSearch} = this.state
        const {found, currentlyReading, wantToRead, read} = this.props.lists
        const {updateFoundArray, updateLists} = this.props
        return (
            <div className="relative">
                { 
                !showSearch && 
                <div>
                    <p className="text-white bg-green-700 font-semibold py-3 text-3xl">MyReads</p>
                    <BookLists title={"Currently Reading"} list={currentlyReading} updateLists={updateLists} />
                    <BookLists title={"Want To Read"} list={wantToRead} updateLists={updateLists} />
                    <BookLists title={"Read"} list={read} updateLists={updateLists} />
                </div>
                }

                {
                    showSearch && <Search 
                                        found={found} 
                                        updateLists={updateLists} 
                                        toggleSearch={this.toggleSearch}
                                        updateFoundArray={updateFoundArray}
                                    />
                }

  
                <FixedButton toggleSearch={this.toggleSearch} />
            </div>
        )
    }
}

export default Home;