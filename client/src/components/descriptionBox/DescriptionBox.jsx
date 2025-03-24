import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor est molestiae adipisci officia rem magnam cum corrupti alias ratione dicta nemo, eveniet eius, laudantium, doloremque quibusdam sunt quaerat. Deleniti, voluptatem!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque temporibus minima neque ullam nihil modi, labore maxime perspiciatis enim ea nobis itaque voluptatum explicabo asperiores quibusdam officiis ipsam iure quasi.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
