import React from 'react'
import ReactDom from 'react-dom'
import Card from './Card'
import Button from './Button'
import "./ErrorModal.css"

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) => {
    return (
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDom.createPortal(
                <ModalOverlay onConfirm={props.onConfirm}
                    title={props.title}
                    message={props.message}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}

export default ErrorModal