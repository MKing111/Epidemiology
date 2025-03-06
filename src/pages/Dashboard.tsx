import { Placeholder, Detections } from "../components"
import { Footer } from "../components"
import { RP, GI, BCID, ME } from '../data/constants'


const Home = () => {
  return (
    <div>
      <div className="card-container">
        <Detections panels={RP} color='#5CCBE6'/>
        <Detections panels={GI} color='#BED32C'/>
        <Detections panels={BCID} color='#B5282E'/>
        <Detections panels={ME} color='#F3B54E'/>
        <Placeholder/>
        <Placeholder/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home