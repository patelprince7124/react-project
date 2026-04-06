import '../assets/css/logoRow.css'
import natural from "../assets/images/natural.png"
import iconic from "../assets/images/iconic.png"
import retro from "../assets/images/retro.png"
import refresh from "../assets/images/refresh.png"
import hunter from "../assets/images/hunter.png"

function LogoRow() {
    return (
        <section className="logo-section container-fluid d-flex align-items-center justify-content-center">

            <div className="row text-center w-100 position-relative">
                <div className="col d-flex justify-content-center gap-5 " >

                    <img src={natural} className="logo-img" />
                    <img src={iconic} className="logo-img" />
                    <img src={retro} className="logo-img" />
                    <img src={refresh} className="logo-img" />
                    <img src={hunter} className="logo-img" />

                </div>
            </div>

        </section>
    )
}
export default LogoRow
