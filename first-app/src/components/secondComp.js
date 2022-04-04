import SecondChildComp from "./secondChild"
import ThirdChildComp from "./thirdChild"

function SecondComp() {
    return(
        <>
        <p>This is my Second component.</p>
        <SecondChildComp/>
        <ThirdChildComp/>
        </>
    )
}

export default SecondComp