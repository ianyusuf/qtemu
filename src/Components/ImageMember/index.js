import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const ImageMember = (props) => {
    const memberImage = {
        memberImage: props.memberImage
    }

    return (
        <img
            {...props}
            src={ memberImage }
            className="Members-image"
        />
    )
}

ImageMember.propTypes = {
    memberImage: PropTypes.string.isRequired
}

export default ImageMember