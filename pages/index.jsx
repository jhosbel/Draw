import CanvasDraw from 'react-canvas-draw'
import { useRef } from 'react'

const Index = () => {

    const firstCanvas = useRef(null)
    const secondCanvas = useRef(null)

    const handleClick = () => {
        const data = firstCanvas.current.getSaveData()
        secondCanvas.current.loadSaveData(data)
        console.log(data)
    }

    const clear = () => {
        firstCanvas.current.clear()
    }

    const undo = () => {
        firstCanvas.current.undo()
    }

    return (
        <>
            <h1>Hello World</h1>
            <buttom onClick={handleClick} >Save Drawing</buttom>
            <buttom onClick={clear} >Clear</buttom>
            <buttom onClick={undo} >Undo</buttom>
            <CanvasDraw
             brushRadius={1}
             hideGrid={false}
             catenaryColor="red"
             style={{border: '1px solid #000'}}
             ref={firstCanvas}
             />
            
             <CanvasDraw
             ref={secondCanvas}
             hideGrid={true}
             disabled={true}
             />
        </>
    )
}

export default Index