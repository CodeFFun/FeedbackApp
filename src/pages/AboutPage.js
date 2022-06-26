import Card from "../components/Shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div>
            <h1>About this project</h1>
            <p>This is a react app to feedback for a product or service</p>
            <p>Version 1.0.0</p>

            <p><Link to="/"> Back to home</Link></p>
        </div>
    </Card>
  )
}

export default AboutPage
