import React, { useMemo } from 'react'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'
import {useSelector} from 'react-redux'

const ContactList = () => {
    const {contactList, keyword} = useSelector((state) => state);

    const filterList = useMemo(() => {
        return keyword !== "" ? contactList.filter((item) => item.name.includes(keyword)) : contactList;
    }, [keyword, contactList]);
  return (
    <div>
        <SearchBox/>
        <div>
           {filterList.map((item, idx) => (<ContactItem item={item} key={idx}/>))}
        </div>
    </div>
  )
}

export default ContactList