import React, {useEffect, useState} from 'react'
import './SearchFeature.css';
import {useCombobox} from 'downshift'
import {Input} from 'antd'

function SearchFeature() {
    const [inputItems, setInputItems] = useState([])
    const [products, setProducts] = useState([])
    const [setSingleProduct] = useState("")

    const {
        isOpen,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox ({
            items: inputItems,
            onInputValueChange: ({inputValue}) => {
                setInputItems(
                    products.filter((item) =>
                        item.name.toLowerCase().startsWith(inputValue.toLowerCase())
                    )
                )
            },
        })

    return (
        <div className="Search">
            <div {...getComboboxProps()}>
                <Input
                    {...getInputProps()}
                    placeholder="Search items"
                    enterButton="Enter"
                    size="large"  
                />
            </div>
            <ul {...getMenuProps()}>
                {isOpen &&
                    inputItems.map((item, index) => (
                    <span
                        key={item.id}
                        {...getItemProps({item,index})}
                        onclick={() => setSingleProduct(item.name)}
                    >
                        <li
                            style={highlightedIndex === index ? {background: "#ede"} : {}}
                        >
                            <h4>{item.name}</h4>
                        </li>
                    </span>
                ))}
            </ul>
        </div>
    )
}

export default SearchFeature