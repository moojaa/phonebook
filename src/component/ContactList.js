import React, { useEffect, useState } from 'react'
import SeacrhBox from './SeacrhBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const {contactList, searchIndex} = useSelector((state)=>state)
    let [filterList,setFilterList] = useState([])
    useEffect(()=>{
        if(searchIndex!==""){
            let list = contactList.filter((item)=>item.name.includes(searchIndex))
            setFilterList(list)
        } else{
            setFilterList(contactList)
        }
    },[searchIndex,contactList])
    return (
        <div>
            <SeacrhBox />
            {filterList.map(item=><ContactItem item={item} />)}
        </div>
    )
}

export default ContactList