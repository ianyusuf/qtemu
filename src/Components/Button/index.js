import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function ContainedButtons(props) {
    const { color, classes, children } = props;
    return (
      <div>
        <Button variant="contained" color={color}  size="large" className={classes.button}>
            {children}
        </Button>
      </div>
    );
}

ContainedButtons.defaultProps = {
    color:"primary"
}

ContainedButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);