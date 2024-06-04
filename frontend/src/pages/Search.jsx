import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import Card from './category/card'

const Search = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const queryParams = params.get('query')
        if (queryParams) {
            setQuery(queryParams)
        }
    }, [])

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true)
            try {
                const response = await axios.get('http://localhost:3500/api/search', {
                    params: { q: query }
                })
                setResults(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        if (query) {
            fetchItems()
        }
    }, [query])

    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>
                Search
            </h1>
            <div className='bg-gray-100 p-4 flex items-center rounded md:max-w-3xl relative mx-auto'>
                <IoIosSearch className='w-5 h-5 mr-2 text-neutral-500' />
                <input
                    className='outline-none bg-gray-100 w-full placeholder:text-[#1b2629]'
                    name="query"
                    type='search'
                    id="Search"
                    placeholder='Search'
                    value={query}
                    onChange={handleInputChange}
                    required
                />
            </div>
            {loading ? (
                <p className='text-center text-2xl mt-4'>Loading...</p>
            ) : (
                <div>
                    {results.length > 0 ? (
                    <ul className='flex flex-wrap gap-6 justify-center'>
                            {results.map((item) => (
                                <Card key={item._id} item={item}/>
                            ))}
                        </ul>
                    ) : (
                        <p className='text-center text-2xl mt-4'>No results found</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default Search
