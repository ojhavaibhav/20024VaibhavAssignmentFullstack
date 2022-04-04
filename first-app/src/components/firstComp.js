import FirstChildComp from "./firstChild"

function FirstComp () {
    // var obj = { name:"vaibhav", color:"red"}
    return(
        <>
        <p>This is my First component.</p>
        <FirstChildComp name="vaibhav" color="red"/> 
        </>

    )
}
export default FirstComp