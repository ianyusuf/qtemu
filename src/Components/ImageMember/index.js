import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const ImageMember = ({ memberImg, ...props }) => {

    return (
        <img
            {...props}
            src={ memberImg }
        />
    )
}

ImageMember.propTypes = {
    memberImage: PropTypes.string.isRequired
}

export default ImageMember