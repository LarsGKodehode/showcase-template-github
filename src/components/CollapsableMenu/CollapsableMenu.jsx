import {
  useState
} from 'react'

/**
 * This is a collapsable menu
 */
function CollapsableMenu(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen((oldState) => !oldState)}
      >
        {props.title}
      </button>

      <nav>
        {
          isOpen &&
          props.children
        }
      </nav>
    </div>
  )
}

export default CollapsableMenu