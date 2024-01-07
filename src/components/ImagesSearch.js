import React, {useState} from 'react'
import "../App.css"


function ImagesSearch( {searchText} ) {
 const [text, setText] = useState('')

 const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
 }

  return (
    <div className='container'>
        <form onSubmit={onSubmit} className='form-0'>
            <div className='div-2'>
                <input onChange={e => setText(e.target.value)}
                type="text" placeholder="Search..." className='input-0'/>
                <button type="submit" className='btn'>
                    Search
                </button>
            </div>
        </form>
    </div>
  )
}

export default ImagesSearch;