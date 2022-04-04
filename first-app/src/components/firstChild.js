function FirstChildComp(props) {
    const shoot = (a) => {
        alert("what a shot!!" + a)
    }
    return (

        <>
            <p>This is my First child whose name is {props.name} component {props.color}hello.</p>
            <button onClick={() => {shoot("vaibhav")}}>shot!!</button>
        </>

    )
}
export default FirstChildComp