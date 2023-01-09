// Libraries
import {
  Link,
  Outlet
} from 'react-router-dom'

// CSS
import styles from './layout.module.css'

// Components
import CollapsableMenu from '../components/CollapsableMenu/CollapsableMenu'

function LandingPage() {
  return (
    <>
      <h1>Landing Page</h1>


      <CollapsableMenu title='Nav Menu'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </CollapsableMenu>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default LandingPage