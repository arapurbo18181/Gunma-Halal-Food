import { createContext, useContext, useState } from "react";
import Category1 from "../images/cooking.png"
import Category2 from "../images/MeatFish.png"
import SubCat1 from "../images/basmati.jpg"
import SubCat2 from "../images/rice.jpg"
import SubCat3 from "../images/flour.jpg"
import SubCat4 from "../images/lentil.jpg"
import SubCat5 from "../images/chicken.webp"
import SubCat6 from "../images/beef.webp"
import SubCat7 from "../images/mutton.webp"

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext)

export const CategoryProvider = ({children}) => {

    const [ItemCategory, setItemCategory] = useState([]);

    const categories = [
        {
            category: "cooking",
            img: Category1,
            sub_cat:[
                {
                    cat: "Basmati Rice",
                    img: SubCat1
                },
                {
                    cat: "Rice",
                    img: SubCat2
                },
                {
                    cat: "Flour",
                    img: SubCat3
                },
                {
                    cat: "Lentil",
                    img: SubCat4
                },
            ]
        },
        {
            category: "Meat & Fish",
            img: Category2,
            sub_cat: [
                {
                    cat: "Chicken",
                    img: SubCat5
                },
                {
                    cat: "Beef",
                    img: SubCat6
                },
                {
                    cat: "Mutton",
                    img: SubCat7
                }
            ]
        },
        {
            category: "cooking",
            img: Category1,
            sub_cat:[
                {
                    cat: "Basmati Rice"
                },
                {
                    cat: "Rice"
                },
                {
                    cat: "Flour"
                },
                {
                    cat: "Lentil"
                },
            ]
        },
        {
            category: "Meat & Fish",
            img: Category2,
            sub_cat: [
                {
                    cat: "Chicken"
                },
                {
                    cat: "Beef"
                },
                {
                    cat: "Mutton"
                }
            ]
        },
        {
            category: "cooking",
            img: Category1,
            sub_cat:[
                {
                    cat: "Basmati Rice"
                },
                {
                    cat: "Rice"
                },
                {
                    cat: "Flour"
                },
                {
                    cat: "Lentil"
                },
            ]
        },
        {
            category: "Meat & Fish",
            img: Category2,
            sub_cat: [
                {
                    cat: "Chicken"
                },
                {
                    cat: "Beef"
                },
                {
                    cat: "Mutton"
                }
            ]
        },
    ]

    return(
        <CategoryContext.Provider value={{ItemCategory, setItemCategory, categories}}>
            {children}
        </CategoryContext.Provider>
    )
}