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
            <h1 className='title'>Dibuja aca</h1>
            <div className="container">
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
            </div>
            <div className="buttomsContainer">
                <buttom onClick={handleClick} >Save Drawing</buttom>
                <buttom onClick={clear} >Clear</buttom>
                <buttom onClick={undo} >Undo</buttom>
            </div>
        </>
    )
}

export default Index