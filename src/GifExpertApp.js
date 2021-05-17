import { useState } from "react";
import { AddCategory } from "./components/AddCategory";



const GifExpertApp = () => {
    
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     // it creates a new State, that's why if you put just the string it will convert it into a string
    //     setCategories([ 'Naruto', ...categories]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />


            <ol>
                { categories.map((category) => <li key={category}>{category}</li>) }
            </ol>


        </>
    )
}

export default GifExpertApp;