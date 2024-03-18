import { useEffect, useState } from 'react';
import Item1 from '../img/Item1.jpg'
import Item2 from '../img/Item2.jpg'
import Item3 from '../img/Item3.jpg'

export const CarruselItems = () => {
    const imagenes = [Item1, Item2, Item3];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(imagenes[1]);

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImage(selectedIndex, imagenes);
        }, 3000)

        return () => clearInterval(interval);
    })
    const selectNewImage = (index: number, imagenes: string[], next = true) => {
        const condition = next ? selectedIndex < imagenes.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : imagenes.length - 1
        setSelectedImage(imagenes[nextIndex]);
        setSelectedIndex(nextIndex);
    }

    const previous = () => {
        selectNewImage(selectedIndex, imagenes, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, imagenes)
    }
    return (
        <>
            <div className="carousel w-full">
                <div className="carousel-item w-full">
                    <img src={selectedImage} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button onClick={previous} className="btn btn-circle btn-outline btn-sm">{'<'}</button>
                        <button onClick={next} className="btn btn-circle btn-outline btn-sm">{'>'}</button>
                    </div>
                </div>
            </div>
        </>
    )
}