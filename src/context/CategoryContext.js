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
import basmatiRice1 from "../images/basmatiRice1.jpg"
import rice1 from "../images/rice1.jpg"
import atta1 from "../images/atta1.jpg"
import lentil1 from "../images/lentil1.jpg"
import chicken1 from "../images/chicken1.png"
import beef1 from "../images/beef1.png"
import mutton1 from "../images/mutton1.jpg"

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext)

export const CategoryProvider = ({children}) => {

    const [ItemCategory, setItemCategory] = useState([]);
    const [ProductsFromCategory, setProductsFromCategory] = useState([]);

    const categories = [
        {
            category: "cooking",
            img: Category1,
            sub_cat:[
                {
                    cat: "Basmati Rice",
                    img: SubCat1,
                    product: [
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                    ]
                },
                {
                    cat: "Rice",
                    img: SubCat2,
                    product: [
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                    ]
                },
                {
                    cat: "Flour",
                    img: SubCat3,
                    product: [
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                    ]
                },
                {
                    cat: "Lentil",
                    img: SubCat4,
                    product: [
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                    ]
                },
            ]
        },
        {
            category: "Meat & Fish",
            img: Category2,
            sub_cat: [
                {
                    cat: "Chicken",
                    img: SubCat5,
                    product: [
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                    ]
                },
                {
                    cat: "Beef",
                    img: SubCat6,
                    product: [
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                    ]
                },
                {
                    cat: "Mutton",
                    img: SubCat7,
                    product: [
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                    ]
                }
            ]
        },
        {
            category: "cooking",
            img: Category1,
            sub_cat:[
                {
                    cat: "Basmati Rice",
                    img: SubCat1,
                    product: [
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                    ]
                },
                {
                    cat: "Rice",
                    img: SubCat2,
                    product: [
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                    ]
                },
                {
                    cat: "Flour",
                    img: SubCat3,
                    product: [
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                    ]
                },
                {
                    cat: "Lentil",
                    img: SubCat4,
                    product: [
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                    ]
                },
            ]
        },
        {
            category: "Meat & Fish",
            img: Category2,
            sub_cat: [
                {
                    cat: "Chicken",
                    img: SubCat5,
                    product: [
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                    ]
                },
                {
                    cat: "Beef",
                    img: SubCat6,
                    product: [
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                    ]
                },
                {
                    cat: "Mutton",
                    img: SubCat7,
                    product: [
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                    ]
                }
            ]
        },
        {
            category: "cooking",
            img: Category1,
            sub_cat:[
                {
                    cat: "Basmati Rice",
                    img: SubCat1,
                    product: [
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                    ]
                },
                {
                    cat: "Rice",
                    img: SubCat2,
                    product: [
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                    ]
                },
                {
                    cat: "Flour",
                    img: SubCat3,
                    product: [
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                    ]
                },
                {
                    cat: "Lentil",
                    img: SubCat4,
                    product: [
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                    ]
                },
            ]
        },
        {
            category: "Meat & Fish",
            img: Category2,
            sub_cat: [
                {
                    cat: "Chicken",
                    img: SubCat5,
                    product: [
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                    ]
                },
                {
                    cat: "Beef",
                    img: SubCat6,
                    product: [
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                    ]
                },
                {
                    cat: "Mutton",
                    img: SubCat7,
                    product: [
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                    ]
                }
            ]
        },
        {
            category: "cooking",
            img: Category1,
            sub_cat:[
                {
                    cat: "Basmati Rice",
                    img: SubCat1,
                    product: [
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                        {
                            img: basmatiRice1
                        },
                    ]
                },
                {
                    cat: "Rice",
                    img: SubCat2,
                    product: [
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                        {
                            img: rice1
                        },
                    ]
                },
                {
                    cat: "Flour",
                    img: SubCat3,
                    product: [
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                        {
                            img: atta1
                        },
                    ]
                },
                {
                    cat: "Lentil",
                    img: SubCat4,
                    product: [
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                        {
                            img: lentil1
                        },
                    ]
                },
            ]
        },
        {
            category: "Meat & Fish",
            img: Category2,
            sub_cat: [
                {
                    cat: "Chicken",
                    img: SubCat5,
                    product: [
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                        {
                            img: chicken1
                        },
                    ]
                },
                {
                    cat: "Beef",
                    img: SubCat6,
                    product: [
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                        {
                            img: beef1
                        },
                    ]
                },
                {
                    cat: "Mutton",
                    img: SubCat7,
                    product: [
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                        {
                            img: mutton1
                        },
                    ]
                }
            ]
        },
    ]

    return(
        <CategoryContext.Provider value={{ItemCategory, setItemCategory, categories, ProductsFromCategory, setProductsFromCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}