import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function BookDetails() {
    const id = useParams()
    const [book, setBook] = useState()

    useEffect(() => {
        fetch(`https://openlibrary.org/works/${id.id}.json`)
            .then(res => res.json())
            .then(data => setBook(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {book &&
                <div className="flex flex-wrap justify-center py-12 px-12">
                    <div className="md:w-1/4">
                        <img className="w-44 h-60 shadow-lg" src={"https://covers.openlibrary.org/b/id/" + book.covers[0] + "-M.jpg"} />
                    </div>
                    <div className="text-start md:w-3/4">
                        <p className="font-semibold text-4xl">{book.title}</p>
                        <p className="text-md text-gray-600"></p>
                        <div className="flex my-6 align-middle">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mt-1 w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            <p className="ml-2">{book.first_publish_date}</p>
                        </div>
                        <p>{book.description}</p>
                    </div>
                </div>}
        </>
    )
}
export default BookDetails