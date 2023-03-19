import { createContext, useContext, useEffect, useState } from "react";
import Category1 from "../images/cooking.png";
import Category2 from "../images/MeatFish.png";
import SubCat1 from "../images/basmati.jpg";
import SubCat2 from "../images/rice.jpg";
import SubCat3 from "../images/flour.jpg";
import SubCat4 from "../images/lentil.jpg";
import SubCat5 from "../images/chicken.webp";
import SubCat6 from "../images/beef.webp";
import SubCat7 from "../images/mutton.webp";
import basmatiRice1 from "../images/basmatiRice1.jpg";
import rice1 from "../images/rice1.jpg";
import atta1 from "../images/atta1.jpg";
import lentil1 from "../images/lentil1.jpg";
import chicken1 from "../images/chicken1.png";
import beef1 from "../images/beef1.png";
import mutton1 from "../images/mutton1.jpg";
import mutton300 from "../images/mutton300.jpg";
import basmatiRice300 from "../images/basmatiRice300.jpg";
import rice300 from "../images/rice300.jpg";
import atta300 from "../images/atta300.jpg";
import CateBanner from "../images/cat-banner.webp";

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [Toggle, setToggle] = useState(false);
  const [ToggleCategory, setToggleCategory] = useState(false);
  const [ItemCategory, setItemCategory] = useState([]);
  const [ProductsFromCategory, setProductsFromCategory] = useState([]);
  const [CatImage, setCatImage] = useState();
  const [SubCatImage, setSubCatImage] = useState();

  const product = [
    {
      id: 0,
      img: basmatiRice1,
      img1: basmatiRice300,
      title: "basmatiRice1",
    },
    {
      id: 1,
      img: rice1,
      img1: rice300,
      title: "basmatiRice1",
    },
    {
      id: 2,
      img: atta1,
      img1: atta300,
      title: "basmatiRice1",
    },
    {
      id: 3,
      img: mutton1,
      im1: mutton300,
      title: "basmatiRice1",
    },
    {
      id: 4,
      img: mutton1,
      img1: mutton300,
      title: "basmatiRice1",
    },
    {
      id: 5,
      img: basmatiRice1,
      img1: basmatiRice300,
      title: "basmatiRice1",
    },
    {
      id: 6,
      img: rice1,
      img1: rice300,
      title: "basmatiRice1",
    },
    {
      id: 7,
      img: atta1,
      img1: atta300,
      title: "basmatiRice1",
    },
    {
      id: 8,
      img: mutton1,
      im1: mutton300,
      title: "basmatiRice1",
    },
    {
      id: 9,
      img: mutton1,
      img1: mutton300,
      title: "basmatiRice1",
    },
  ]

  const cate1 = [
    {
      banner: CateBanner,
      category: {
        id: 0,
        banner: CateBanner,
        category: "Cooking",
        img: Category1,
        sub_cat: [
          {
            cat: "Basmati Rice",
            img: SubCat1,
            product: [
              {
                id: 0,
                img: basmatiRice1,
                img1: basmatiRice300,
                title: "basmatiRice1",
              },
              {
                id: 1,
                img: rice1,
                img1: rice300,
                title: "basmatiRice1",
              },
              {
                id: 2,
                img: atta1,
                img1: atta300,
                title: "basmatiRice1",
              },
              {
                id: 3,
                img: mutton1,
                im1: mutton300,
                title: "basmatiRice1",
              },
              {
                id: 4,
                img: mutton1,
                img1: mutton300,
                title: "basmatiRice1",
              },
            ],
          },
          {
            cat: "Rice",
            img: SubCat2,
            product: [
              {
                img: rice1,
                title: "rice1",
              },
              {
                img: rice1,
                title: "rice1",
              },
              {
                img: rice1,
                title: "rice1",
              },
              {
                img: rice1,
                title: "rice1",
              },
            ],
          },
          {
            cat: "Flour",
            img: SubCat3,
            product: [
              {
                img: atta1,
                title: "rice1",
              },
              {
                img: atta1,
                title: "rice1",
              },
              {
                img: atta1,
                title: "rice1",
              },
              {
                img: atta1,
                title: "rice1",
              },
            ],
          },
          {
            cat: "Lentil",
            img: SubCat4,
            product: [
              {
                img: lentil1,
                title: "rice1",
              },
              {
                img: lentil1,
                title: "rice1",
              },
              {
                img: lentil1,
                title: "rice1",
              },
              {
                img: lentil1,
                title: "rice1",
              },
            ],
          },
        ],
      }
    }
  ]

  const categories = [
    {
      id: 0,
      banner: CateBanner,
      category: "Cooking",
      img: Category1,
      sub_cat: [
        {
          cat: "Basmati Rice",
          img: SubCat1,
          product: [
            {
              id: 0,
              img: basmatiRice1,
              img1: basmatiRice300,
              title: "basmatiRice1",
            },
            {
              id: 1,
              img: rice1,
              img1: rice300,
              title: "basmatiRice1",
            },
            {
              id: 2,
              img: atta1,
              img1: atta300,
              title: "basmatiRice1",
            },
            {
              id: 3,
              img: mutton1,
              im1: mutton300,
              title: "basmatiRice1",
            },
            {
              id: 4,
              img: mutton1,
              img1: mutton300,
              title: "basmatiRice1",
            },
          ],
        },
        {
          cat: "Rice",
          img: SubCat2,
          product: [
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Flour",
          img: SubCat3,
          product: [
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Lentil",
          img: SubCat4,
          product: [
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      banner: CateBanner,
      category: "Meat & Fish",
      img: Category2,
      sub_cat: [
        {
          cat: "Chicken",
          img: SubCat5,
          product: [
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Beef",
          img: SubCat6,
          product: [
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Mutton",
          img: SubCat7,
          product: [
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      banner: CateBanner,
      category: "Cooking",
      img: Category1,
      sub_cat: [
        {
          cat: "Basmati Rice",
          img: SubCat1,
          product: [
            {
              img: basmatiRice1,
              title: "rice1",
            },
            {
              img: basmatiRice1,
              title: "rice1",
            },
            {
              img: basmatiRice1,
              title: "rice1",
            },
            {
              img: basmatiRice1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Rice",
          img: SubCat2,
          product: [
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Flour",
          img: SubCat3,
          product: [
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Lentil",
          img: SubCat4,
          product: [
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      banner: CateBanner,
      category: "Meat & Fish",
      img: Category2,
      sub_cat: [
        {
          cat: "Chicken",
          img: SubCat5,
          product: [
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Beef",
          img: SubCat6,
          product: [
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Mutton",
          img: SubCat7,
          product: [
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      banner: CateBanner,
      category: "Cooking",
      img: Category1,
      sub_cat: [
        {
          cat: "Basmati Rice",
          img: SubCat1,
          product: [
            {
              img: basmatiRice1,
              title: "rice1",
            },
            {
              img: basmatiRice1,
              title: "rice1",
            },
            {
              img: basmatiRice1,
              title: "rice1",
            },
            {
              img: basmatiRice1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Rice",
          img: SubCat2,
          product: [
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Flour",
          img: SubCat3,
          product: [
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Lentil",
          img: SubCat4,
          product: [
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      banner: CateBanner,
      category: "Meat & Fish",
      img: Category2,
      sub_cat: [
        {
          cat: "Chicken",
          img: SubCat5,
          product: [
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Beef",
          img: SubCat6,
          product: [
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Mutton",
          img: SubCat7,
          product: [
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      banner: CateBanner,
      category: "Cooking",
      img: Category1,
      sub_cat: [
        {
          cat: "Basmati Rice",
          img: SubCat1,
          product: [
            {
              img: basmatiRice1,
              title: "rice1",
            },
            {
              img: basmatiRice1,
              title: "rice1",
            },
            {
              img: basmatiRice1,
              title: "rice1",
            },
            {
              img: basmatiRice1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Rice",
          img: SubCat2,
          product: [
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
            {
              img: rice1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Flour",
          img: SubCat3,
          product: [
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
            {
              img: atta1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Lentil",
          img: SubCat4,
          product: [
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
            {
              img: lentil1,
              title: "rice1",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      banner: CateBanner,
      category: "Meat & Fish",
      img: Category2,
      sub_cat: [
        {
          cat: "Chicken",
          img: SubCat5,
          product: [
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
            {
              img: chicken1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Beef",
          img: SubCat6,
          product: [
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
            {
              img: beef1,
              title: "rice1",
            },
          ],
        },
        {
          cat: "Mutton",
          img: SubCat7,
          product: [
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
            {
              img: mutton1,
              title: "rice1",
            },
          ],
        },
      ],
    },
  ];

  const toggleNav = () => {
    if (Toggle === true) {
      setToggle(false);
    }else{
      setToggle(true);
    }
  };

  useEffect(() => {
    // console.log(Toggle)
    // console.log(ToggleCategory)
  }, [Toggle, ToggleCategory])
  

  const toggleCat = () => {
    if (ToggleCategory === true) {
      setToggleCategory(false);
    }else{
      setToggleCategory(true);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        ItemCategory,
        setItemCategory,
        categories,
        ProductsFromCategory,
        setProductsFromCategory,
        Toggle,
        setToggle,
        toggleNav,
        ToggleCategory,
        setToggleCategory,
        toggleCat,
        product, 
        CatImage, 
        setCatImage, 
        SubCatImage, 
        setSubCatImage
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
