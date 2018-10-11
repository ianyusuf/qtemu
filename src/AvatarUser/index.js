import React from 'react'
import './index.css'

const AvatarUser = (props) => (
    <img
      {...props}
      src="img/user.jpg"
      className="Image-user"
    />
)

export default AvatarUser