
export default function Modal(props: any) {
    return (
        props.isOpen ?
            <div>
                <div className="modal">
                    {props.children}
                </div>
                <div className="bg" onClick={e => props.close(e)}
                />
            </div> : null
    )
}