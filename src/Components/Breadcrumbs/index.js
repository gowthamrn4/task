import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

class BreadcrumbsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    Material-UI
            </Link>
                <Link color="inherit" href="/getting-started/installation/" >
                    Core
            </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
        );
    }
}

export default BreadcrumbsComponent;
